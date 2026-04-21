import { useEffect, useRef, useState } from "react";

const stats = [
  { val: 30,  suffix: '+', label: 'Projects Completed',   icon: '🚀', color: 'var(--gold)' },
  { val: 4,   suffix: '',  label: 'Years of Experience',   icon: '📅', color: 'var(--blue)' },
  { val: 2,   suffix: '',  label: 'Research Publications', icon: '📄', color: 'var(--green)' },
  { val: 5,   suffix: '+', label: 'Club Memberships',      icon: '🏛️', color: 'var(--rose)' },
  { val: 100, suffix: '+', label: 'Students Mentored',     icon: '👥', color: 'var(--gold2)' },
];

const tech = [
  'React', 'Python', 'JavaScript', 'C++', 'Node.js',
  'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy',
  'Tailwind CSS', 'Git', 'VS Code', 'Jupyter',
  'HTML5 / CSS3', 'Machine Learning', 'Deep Learning',
  'Data Visualization', 'REST APIs', 'SQL', 'Matplotlib',
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsMarquee() {
  const doubled = [...tech, ...tech];

  return (
    <>
      <style>{`
        .stats-section {
          padding: 80px 24px;
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative; overflow: hidden;
        }
        .stats-section::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,168,75,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .stats-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        .stat-item {
          padding: 32px 24px; text-align: center; position: relative;
          transition: background 0.3s;
        }
        .stat-item:not(:last-child)::after {
          content: ''; position: absolute; right: 0; top: 20%; bottom: 20%;
          width: 1px; background: var(--border);
        }
        .stat-item:hover { background: rgba(212,168,75,0.04); border-radius: 12px; }
        .stat-icon { font-size: 24px; margin-bottom: 12px; display: block; }
        .stat-val {
          font-family: 'Cormorant Garamond',serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 700; line-height: 1;
          margin-bottom: 8px; display: block;
        }
        .stat-label {
          font-family: 'JetBrains Mono',monospace;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--muted); display: block;
        }
        .marquee-wrap {
          overflow: hidden; padding: 20px 0; margin-top: 0;
          border-top: 1px solid var(--border);
          background: rgba(212,168,75,0.02);
        }
        .marquee-track {
          display: inline-flex; gap: 0; white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-item {
          display: inline-flex; align-items: center;
          font-family: 'JetBrains Mono',monospace;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted); padding: 0 32px;
        }
        .marquee-sep {
          color: rgba(212,168,75,0.4); font-size: 7px; margin-left: 32px;
        }
        @media (max-width: 800px) { .stats-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 500px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <div className="stats-section">
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-val" style={{ color: s.color }}>
                <Counter target={s.val} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <span key={i} className="marquee-item">
              {t}<span className="marquee-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}