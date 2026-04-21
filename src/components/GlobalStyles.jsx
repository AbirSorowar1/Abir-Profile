export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; font-size: 16px; }

      :root {
        --bg:        #060608;
        --bg1:       #0c0c10;
        --bg2:       #111118;
        --surface:   #14141c;
        --surface2:  #1a1a24;
        --border:    rgba(255,255,255,0.06);
        --border2:   rgba(255,255,255,0.1);
        --gold:      #d4a84b;
        --gold2:     #f0cc80;
        --gold3:     #a07828;
        --cream:     #f0ead8;
        --text:      #e8e4d8;
        --muted:     #6e6b62;
        --muted2:    #9a9590;
        --blue:      #4a8fff;
        --green:     #3ecf8e;
        --rose:      #e05a6e;
        --r: 212; --g: 168; --b: 75;
      }

      body {
        background: var(--bg);
        color: var(--text);
        font-family: 'Outfit', sans-serif;
        overflow-x: hidden;
        cursor: none;
      }

      ::selection { background: rgba(212,168,75,0.25); color: var(--cream); }
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-track { background: var(--bg); }
      ::-webkit-scrollbar-thumb { background: linear-gradient(var(--gold3), var(--gold)); }

      /* ─ Keyframes ─ */
      @keyframes fadeUp       { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeDown     { from { opacity:0; transform:translateY(-30px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeIn       { from { opacity:0; } to { opacity:1; } }
      @keyframes scaleIn      { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
      @keyframes slideLeft    { from { transform:scaleX(0); transform-origin:left; } to { transform:scaleX(1); transform-origin:left; } }
      @keyframes spinSlow     { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
      @keyframes spinCCW      { from { transform:rotate(0deg); } to { transform:rotate(-360deg); } }
      @keyframes float        { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
      @keyframes floatX       { 0%,100%{transform:translateX(0)} 50%{transform:translateX(10px)} }
      @keyframes pulse        { 0%,100%{opacity:1} 50%{opacity:0.3} }
      @keyframes pulseBig     { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.8);opacity:0} }
      @keyframes marquee      { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes shimmer      { 0%{background-position:-200% center} 100%{background-position:200% center} }
      @keyframes gradientShift{ 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      @keyframes borderGlow   { 0%,100%{box-shadow:0 0 0 1px rgba(212,168,75,0.2)} 50%{box-shadow:0 0 30px rgba(212,168,75,0.15),0 0 0 1px rgba(212,168,75,0.5)} }
      @keyframes textFlicker  { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.7} 94%{opacity:1} }
      @keyframes countUp      { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes revealRight  { from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 0% 0 0)} }
      @keyframes particleDrift{ 0%{transform:translateY(0) translateX(0) scale(1);opacity:0.6} 33%{transform:translateY(-30px) translateX(15px) scale(1.2);opacity:1} 66%{transform:translateY(-15px) translateX(-10px) scale(0.9);opacity:0.8} 100%{transform:translateY(-50px) translateX(5px) scale(0.6);opacity:0} }
      @keyframes waveY        { 0%,100%{d:path("M0,30 Q25,0 50,30 Q75,60 100,30")} 50%{d:path("M0,30 Q25,60 50,30 Q75,0 100,30")} }
      @keyframes typewriter   { from{width:0} to{width:100%} }
      @keyframes blink        { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes magneticHover{ to{transform:translateY(-3px) scale(1.01)} }

      /* ─ Utility classes ─ */
      .gold-text {
        background: linear-gradient(135deg, var(--gold3) 0%, var(--gold) 40%, var(--gold2) 60%, var(--gold) 100%);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 5s linear infinite;
      }
      .section-label {
        display: inline-flex; align-items: center; gap: 10px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
        color: var(--gold); margin-bottom: 16px;
      }
      .section-label::before {
        content: ''; display: inline-block;
        width: 24px; height: 1px;
        background: linear-gradient(to right, var(--gold), transparent);
      }
      .section-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.4rem, 5.5vw, 4.5rem);
        font-weight: 700; line-height: 1.05;
        letter-spacing: -0.02em; color: var(--text);
      }
      .divider {
        width: 48px; height: 1px;
        background: linear-gradient(90deg, var(--gold), rgba(212,168,75,0));
        margin: 20px 0 40px;
      }
      .card-hover {
        transition: transform 0.5s cubic-bezier(.22,1,.36,1), border-color 0.4s, box-shadow 0.5s;
      }
      .card-hover:hover {
        transform: translateY(-8px);
        border-color: rgba(212,168,75,0.35) !important;
        box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,168,75,0.15);
      }
      .btn-gold {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 13px 32px;
        background: linear-gradient(135deg, var(--gold3), var(--gold), var(--gold2));
        background-size: 200% auto;
        color: #08080a; font-family: 'Outfit', sans-serif;
        font-weight: 600; font-size: 13px; letter-spacing: 0.08em;
        border: none; border-radius: 6px; text-decoration: none;
        cursor: none; position: relative; overflow: hidden;
        transition: background-position 0.4s, transform 0.2s;
      }
      .btn-gold:hover { background-position: right center; transform: translateY(-2px); }
      .btn-gold::after {
        content: ''; position: absolute; inset: 0;
        background: rgba(255,255,255,0.15);
        transform: translateX(-100%) skewX(-15deg);
        transition: transform 0.5s;
      }
      .btn-gold:hover::after { transform: translateX(200%) skewX(-15deg); }
      .btn-ghost {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 12px 30px;
        background: transparent; color: var(--gold);
        font-family: 'Outfit', sans-serif; font-weight: 500;
        font-size: 13px; letter-spacing: 0.06em;
        border: 1px solid rgba(212,168,75,0.3); border-radius: 6px;
        text-decoration: none; cursor: none;
        transition: background 0.3s, border-color 0.3s, transform 0.2s;
      }
      .btn-ghost:hover { background: rgba(212,168,75,0.08); border-color: var(--gold); transform: translateY(-2px); }

      /* ─ Grid noise bg ─ */
      .noise-bg {
        position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: 0.4;
        background-image:
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0);
        background-size: 28px 28px;
      }
      /* ─ Glow orbs ─ */
      .orb {
        position: absolute; border-radius: 50%;
        filter: blur(80px); pointer-events: none;
      }

      /* ─ Section wrapper ─ */
      .section-wrap {
        padding: 120px 24px; max-width: 1280px; margin: 0 auto;
        position: relative;
      }

      /* ─ Animate on scroll ─ */
      .aos { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1); }
      .aos.visible { opacity: 1; transform: translateY(0); }

      @media (max-width: 768px) {
        .section-wrap { padding: 80px 20px; }
        .section-title { font-size: 2.2rem; }
      }
    `}</style>
  );
}