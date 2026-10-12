import React, { useEffect, useMemo, useRef } from 'react';

// A draggable sphere of tags rendered with CSS 3D transforms, so text stays crisp
const SkillSphere: React.FC<{ tags: string[] }> = ({ tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Even spread of points on a unit sphere (Fibonacci lattice)
  const points = useMemo(
    () =>
      tags.map((_, i) => {
        const y = 1 - (i / (tags.length - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = i * Math.PI * (3 - Math.sqrt(5));
        return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
      }),
    [tags]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    let rotX = 0.3;
    let rotY = 0;
    let velX = 0;
    let velY = reduced ? 0 : 0.004;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame = 0;

    const render = () => {
      const radius = container.clientWidth * 0.4;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      points.forEach((p, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const depth = (z2 + 1) / 2;
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y1 * radius}px, 0) scale(${0.6 + depth * 0.6})`;
        el.style.opacity = String(0.2 + depth * 0.8);
        el.style.zIndex = String(Math.round(depth * 100));
      });
    };

    const tick = () => {
      if (!dragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.95;
        // Ease back to a gentle idle spin after a drag
        velY += ((reduced ? 0 : 0.004) - velY) * 0.02;
      }
      render();
      frame = requestAnimationFrame(tick);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      container.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      velY = (e.clientX - lastX) * 0.005;
      velX = -(e.clientY - lastY) * 0.005;
      rotY += velY;
      rotX += velX;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => {
      dragging = false;
    };

    container.addEventListener('pointerdown', onDown);
    container.addEventListener('pointermove', onMove);
    container.addEventListener('pointerup', onUp);
    container.addEventListener('pointercancel', onUp);
    tick();
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('pointerdown', onDown);
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerup', onUp);
      container.removeEventListener('pointercancel', onUp);
    };
  }, [points]);

  return (
    <div className="sphere" ref={containerRef} aria-label="Skills">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className="sphere__tag"
          ref={el => {
            itemRefs.current[i] = el;
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default SkillSphere;
