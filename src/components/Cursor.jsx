import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [pos, setPos]     = useState({ x: -200, y: -200 });
  const [trail, setTrail] = useState({ x: -200, y: -200 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef();
  const trailRef = useRef({ x: -200, y: -200 });
  const posRef   = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = e => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovered(!!(el && el.closest('a,button,[data-hover]')));
    };
    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      trailRef.current.x = lerp(trailRef.current.x, posRef.current.x, 0.1);
      trailRef.current.y = lerp(trailRef.current.y, posRef.current.y, 0.1);
      setTrail({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .cur-dot {
          position: fixed; pointer-events: none; z-index: 99999;
          border-radius: 50%; transform: translate(-50%,-50%);
          mix-blend-mode: difference;
        }
        .cur-dot.inner {
          width: ${clicked ? 6 : 10}px;
          height: ${clicked ? 6 : 10}px;
          background: var(--gold2);
          transition: width .15s, height .15s;
        }
        .cur-dot.outer {
          width: ${hovered ? 52 : clicked ? 20 : 36}px;
          height: ${hovered ? 52 : clicked ? 20 : 36}px;
          border: 1.5px solid ${hovered ? 'var(--gold2)' : 'rgba(212,168,75,0.5)'};
          transition: width .25s cubic-bezier(.22,1,.36,1), height .25s cubic-bezier(.22,1,.36,1), border-color .25s;
        }
        @media (max-width: 900px) { .cur-dot { display: none !important; } }
      `}</style>
      <div className="cur-dot inner" style={{ left: pos.x, top: pos.y }} />
      <div className="cur-dot outer" style={{ left: trail.x, top: trail.y }} />
    </>
  );
}