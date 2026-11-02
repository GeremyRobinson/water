"use client";

import { useEffect, useRef } from "react";

// Light moving through water, drawn on the GPU. Falls back to the CSS gradient behind it.
const frag = `
precision mediump float;
uniform vec2 res;
uniform float t;
void main(){
  vec2 uv = gl_FragCoord.xy / res.xy;
  float aspect = res.x / res.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 4.2 - 250.0;
  vec2 i = p;
  float c = 1.0;
  float inten = 0.0065;
  for (int n = 0; n < 5; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  float light = pow(abs(c), 7.0);
  vec3 deep = vec3(0.004, 0.055, 0.13);
  vec3 shallow = vec3(0.02, 0.27, 0.48);
  vec3 base = mix(deep, shallow, smoothstep(0.0, 1.0, uv.y));
  float fade = smoothstep(0.05, 0.95, uv.y);
  vec3 col = base + vec3(0.45, 0.75, 0.95) * light * (0.18 + 0.5 * fade);
  gl_FragColor = vec4(col, 1.0);
}`;

const vert = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

export function Caustics() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "res");
    const uT = gl.getUniformLocation(prog, "t");

    // Render at reduced resolution: caustics are soft, and this keeps phones cool.
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;
    const size = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * scale));
      const h = Math.max(1, Math.round(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const start = performance.now();
    const draw = (now: number) => {
      size();
      gl.uniform1f(uT, 23 + ((now - start) / 1000) * 0.32);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      canvas.dataset.ready = "1";
      if (!still && visible) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !still) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    const onResize = () => still && requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="caustics" aria-hidden="true" />;
}
