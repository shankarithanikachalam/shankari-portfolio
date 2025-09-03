import { useEffect, useRef } from "react";

export default function StarfieldCanvas({
  speed = 1,
  intensity = 1,
}: {
  speed?: number;
  intensity?: number;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const layers = 3;
    const starsPerLayer = Math.floor((w * h) / 18000);
    const stars: { x: number; y: number; size: number; z: number }[] = [];
    for (let l = 1; l <= layers; l++) {
      for (let i = 0; i < starsPerLayer; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * (l * 0.7) + 0.2,
          z: l,
        });
      }
    }

    let last = performance.now();
    function tick(now: number) {
      const dt = Math.min(33, now - last) / 16.6; // ~60fps normalized
      last = now;

      ctx.fillStyle = "#05070c";
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        s.x += 0.2 * s.z * speed * dt;
        if (s.x > w) s.x = 0;
        ctx.globalAlpha = 0.5 + Math.random() * 0.5 * intensity;
        ctx.fillStyle = "white";
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    return () => window.removeEventListener("resize", onResize);
  }, [speed, intensity]);

  return <canvas ref={ref} className="absolute inset-0 z-0" />;
}
