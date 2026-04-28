// Pantheon Marketing UI — JSX components
// Loaded as text/babel. All exported to window so other scripts can use them.

const Logo = ({ size = 44, withWordmark = true }) => (
  <a className="logo" href="#hero" aria-label="Pantheon Drone Solutions" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
    <img
      src="./logo-pantheon-emblem.png"
      alt="Pantheon Drone Solutions"
      style={{ height: size, width: size, objectFit: "contain", display: "block",
        filter: "drop-shadow(0 2px 10px rgba(166,205,255,0.18))" }}
    />
    {withWordmark && <span style={{ letterSpacing: "-0.02em" }}>PANTHEON</span>}
  </a>
);

const Notice = ({ children = "Q2 · BOOKING" }) => (
  <span className="notice"><span className="pulse"></span>{children}</span>
);

const Nav = ({ active = "home", onNav }) => {
  const items = [
    ["services", "Services"], ["process", "Process"],
    ["technology", "Coverage"], ["faq", "FAQ"]
  ];
  return (
    <nav id="nav">
      <div className="ni">
        <Logo />
        <div className="nl">
          {items.map(([k, label]) => (
            <a key={k} className={`na ${active === k ? "on" : ""}`} onClick={(e) => { e.preventDefault(); onNav?.(k); }}>{label}</a>
          ))}
        </div>
        <div className="nr">
          <Notice>Q2 · BOOKING</Notice>
          <button className="btn bp bsm" onClick={() => onNav?.("contact")}>Book demo</button>
        </div>
      </div>
    </nav>
  );
};

const Eyebrow = ({ children, dot = true }) => (
  <div className="lbl">
    {dot && <span className="lbl-dot"></span>}
    {children}
  </div>
);

const Hero = ({ onCta }) => (
  <section id="hero">
    <div className="hbg"></div>

    {/* LEFT — headline column */}
    <div className="hcontent">
      <div className="hcoord">
        <span><span className="dot"></span>49.247° N · 122.999° W</span>
        <span><span className="dot"></span>BURNABY · BC</span>
      </div>
      <Eyebrow>Exterior Maintenance / Reimagined</Eyebrow>
      <h1 className="hh1">
        The clean your<br/>
        building <span className="serif acc">deserves.</span>
      </h1>
      <p className="hsub">
        Drone-powered exterior cleaning for 4&ndash;28+ story buildings. <strong>Ground-controlled. 70% less water. Zero scaffolding.</strong>
      </p>
      <div className="hctas">
        <button className="btn-hero-primary" onClick={onCta}>
          Book free demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
        <button className="btn-hero-ghost">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>
          Watch 90-second demo
        </button>
      </div>
    </div>

    {/* RIGHT — full-bleed facade plate */}
    <div className="hplate" aria-hidden="true">
      <FacadePlate />
      <div className="crosshair c1"></div>
      <div className="crosshair c2"></div>
      <div className="tag t1">DRONE · ALT 38m</div>
      <div className="tag t2">SPRAY · 2.4 L/min</div>
      <div className="tag t3">PASS 03 / 07</div>
    </div>

    {/* BOTTOM ribbon spanning the fold */}
    <div className="hribbon">
      <div className="hrcell">
        <div className="k"><span className="pulse"></span>REACH</div>
        <div className="v">28<span className="u">+</span></div>
        <div className="c">Stories cleanable</div>
      </div>
      <div className="hrcell">
        <div className="k"><span className="pulse"></span>EFFICIENCY</div>
        <div className="v acc">70<span className="u">%</span></div>
        <div className="c">Less water vs traditional</div>
      </div>
      <div className="hrcell">
        <div className="k"><span className="pulse"></span>COVERAGE</div>
        <div className="v">$5<span className="u">M</span></div>
        <div className="c">Liability insured</div>
      </div>
      <div className="hrcell">
        <div className="k"><span className="pulse"></span>PACE</div>
        <div className="v">4<span className="u">hrs</span></div>
        <div className="c">Avg per 12-story facade</div>
      </div>
    </div>
  </section>
);

const FacadePlate = () => (
  <svg className="facade" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bldgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a2c44"/>
        <stop offset="100%" stopColor="#0a131e"/>
      </linearGradient>
      <linearGradient id="winGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a6cdff" stopOpacity="0.22"/>
        <stop offset="100%" stopColor="#a6cdff" stopOpacity="0.06"/>
      </linearGradient>
    </defs>
    {/* Sky tint */}
    <rect width="600" height="800" fill="url(#bldgGrad)"/>
    {/* Building silhouette — tall mid-rise */}
    <rect x="120" y="80" width="360" height="720" fill="#0d1928" stroke="rgba(207,221,232,0.10)" strokeWidth="1"/>
    {/* Window grid */}
    {Array.from({ length: 14 }).map((_, row) =>
      Array.from({ length: 6 }).map((__, col) => (
        <rect key={`${row}-${col}`}
          x={140 + col * 56} y={100 + row * 50}
          width={42} height={32}
          fill="url(#winGrad)" stroke="rgba(207,221,232,0.08)" strokeWidth="0.5"/>
      ))
    )}
    {/* Cleaning streak — drone trail */}
    <rect x={140 + 2*56} y={100} width={42} height={690} fill="rgba(166,205,255,0.10)"/>
    <rect x={140 + 2*56 - 2} y={100} width={2} height={690} fill="rgba(166,205,255,0.45)"/>
    <rect x={140 + 2*56 + 42} y={100} width={2} height={690} fill="rgba(166,205,255,0.45)"/>
    {/* Drone marker on the streak */}
    <g transform={`translate(${140 + 2*56 + 21}, 380)`}>
      <circle r="14" fill="rgba(92,240,211,0.10)" stroke="rgba(92,240,211,0.6)" strokeWidth="1"/>
      <circle r="3" fill="#5cf0d3"/>
      <line x1="-22" y1="0" x2="-14" y2="0" stroke="rgba(92,240,211,0.6)" strokeWidth="1"/>
      <line x1="14"  y1="0" x2="22" y2="0" stroke="rgba(92,240,211,0.6)" strokeWidth="1"/>
      <line x1="0" y1="-22" x2="0" y2="-14" stroke="rgba(92,240,211,0.6)" strokeWidth="1"/>
      <line x1="0" y1="14"  x2="0" y2="22" stroke="rgba(92,240,211,0.6)" strokeWidth="1"/>
    </g>
    {/* Ground line */}
    <line x1="0" y1="780" x2="600" y2="780" stroke="rgba(207,221,232,0.20)" strokeWidth="1"/>
    {/* Vertical altitude rule on the right */}
    <g stroke="rgba(207,221,232,0.20)" strokeWidth="0.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="500" y1={120 + i*55} x2="510" y2={120 + i*55}/>
      ))}
    </g>
  </svg>
);

const SectionHead = ({ eyebrow, title, sub }) => (
  <div className="sh">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="ht">{title}</h2>
    {sub && <p className="hsub2">{sub}</p>}
  </div>
);

const FeatureGrid = () => (
  <section id="why" className="pad">
    <div className="w">
      <SectionHead
        eyebrow="Why drones · Why now"
        title="The Smarter Way to Maintain High-Rise Exteriors"
        sub="For 4-28+ story commercial buildings, the data tells the story."
      />
      <div className="fgrid">
        {[
          {
            n: "01",
            t: "Ground-Level Operations",
            d: "Our pilots operate entirely from the ground. The drone does the work at height — eliminating fall risk. We've completed every project on record without a single safety incident.",
          },
          {
            n: "02",
            t: "Substantially Faster",
            d: "Scaffolding setup alone takes days. Drone deployment takes hours. Projects that take traditional crews weeks are done in days — while your building stays fully operational throughout.",
          },
          {
            n: "03",
            t: "Precision Water Use",
            d: "Micro-spray nozzles deliver biodegradable solution exactly where needed — nothing wasted. Every project includes documented water savings data for your sustainability reports.",
          },
          {
            n: "04",
            t: "Lower Total Cost",
            d: "No scaffolding rental. No extended crew insurance. No days of lost revenue from business disruption. When you account for everything traditional cleaning actually costs, Pantheon clients consistently come out ahead.",
          },
        ].map((f) => (
          <div className="fcard" key={f.n}>
            <div className="fcard-n">{f.n}</div>
            <h3 className="fcard-t">{f.t}</h3>
            <p className="fcard-d">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSteps = () => (
  <section id="process" className="pad" style={{ background: "var(--bg2)" }}>
    <div className="w">
      <SectionHead
        eyebrow="Process · 4 Steps"
        title="From Quote to Spotless in 4 Steps"
      />
      <div className="psteps">
        {[
          ["01", "Free Site Assessment", "We visit your building, assess surface type, soiling level, and access needs. A detailed quote follows within 24 hours. No obligation."],
          ["02", "Flight Plan & Permits", "Our Transport Canada-licensed pilots file all SFOC permits and program GPS flight paths. All regulatory requirements handled — you see none of the paperwork."],
          ["03", "Drone Clean Operation", "Drones deploy biodegradable solution at precise pressure. Ground crew monitors in real-time. Your building stays fully open. Operations are quiet."],
          ["04", "QC Report & Guarantee", "You receive 4K before/after footage, documented water savings, and a digital QC report. If anything's not right, we return and fix it — no caveats."],
        ].map(([n, t, d], i) => (
          <div className="pstep" key={n}>
            <div className="pstep-n">{n}</div>
            <div className="pstep-line"></div>
            <h3 className="pstep-t">{t}</h3>
            <p className="pstep-d">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Credentials = () => (
  <section id="credentials" className="pad">
    <div className="w">
      <SectionHead
        eyebrow="Credentials"
        title="Fully Licensed, Insured, and Guaranteed"
        sub="We don't ask you to take our word for it. Here are the credentials that back every project."
      />
      <div className="cgrid">
        {[
          ["Transport Canada Certified", "Our pilots hold Transport Canada RPAS certification. Every commercial operation is filed with the required SFOC permits and executed to full regulatory standard."],
          ["$5M Liability Insurance", "Full commercial liability coverage on every project. Your property, your tenants, and your operations are protected. Certificate of insurance available on request."],
          ["WCB Coverage — BC & Alberta", "Workers' Compensation Board coverage active in both BC and Alberta. Your building management carries zero liability for our operations on your property."],
          ["100% Satisfaction Guarantee", "If anything's not right, we return and fix it — no caveats, no arguments. The price on the quote is the price on the invoice. We have never charged a surprise fee."],
        ].map(([t, d]) => (
          <div className="ccard" key={t}>
            <svg className="cic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <h4 className="ccard-t">{t}</h4>
            <p className="ccard-d">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = ({ submitted, onSubmit }) => (
  <section id="contact" className="pad" style={{ background: "var(--bg-deep)" }}>
    <div className="w" style={{ maxWidth: 720 }}>
      <SectionHead
        eyebrow="Free demo · Book in 2 minutes"
        title="See Results on Your Own Building — Free"
        sub="Fill out 3 fields and we'll call you within 2 hours to book a free 20-minute drone assessment at your building. You get a written facade report and a fixed quote — on the spot, zero obligation."
      />
      {submitted ? (
        <div className="fsuc">
          <div style={{ fontSize: 40 }}>🎉</div>
          <h3 className="fcard-t" style={{ marginTop: 12 }}>You're in!</h3>
          <p className="fcard-d">A Pantheon specialist will call you within 2 hours to book your free drone flyover. Check your email for a confirmation.</p>
        </div>
      ) : (
        <form className="fflds" onSubmit={(e) => { e.preventDefault(); onSubmit?.(); }}>
          <div className="fgrp">
            <label className="flbl">Full name *</label>
            <input className="finp" placeholder="Eli Chen" defaultValue="" required />
          </div>
          <div className="fgrp">
            <label className="flbl">Building address *</label>
            <input className="finp" placeholder="123 W Hastings, Vancouver, BC" required />
          </div>
          <div className="fgrp">
            <label className="flbl">Phone *</label>
            <input className="finp" placeholder="(604) 555-0123" required />
          </div>
          <button className="btn bp blg" type="submit" style={{ width: "100%", justifyContent: "center" }}>
            Book my free demo clean — we call within 2hrs →
          </button>
          <p className="fdisc">🔒 No spam. No pressure. We call once to book, that's it. <a className="flink">Privacy Policy</a>.</p>
        </form>
      )}
    </div>
  </section>
);

const Footer = () => (
  <footer className="ft">
    <div className="w">
      <div className="ftop">
        <div className="fbrand">
          <Logo />
          <p className="fcopy">Drone-powered exterior cleaning for 4-28+ story buildings. Burnaby, BC.</p>
          <div className="fbadges">
            <span className="fbadge">Transport Canada Certified</span>
            <span className="fbadge">$5M Insured</span>
            <span className="fbadge">WCB · BC + AB</span>
          </div>
        </div>
        <div className="fcols">
          <div className="fcol">
            <div className="fcol-t">Services</div>
            <a>Window & Glass</a><a>Facade Power Wash</a><a>Underground Parkade</a>
          </div>
          <div className="fcol">
            <div className="fcol-t">Company</div>
            <a>About</a><a>Process</a><a>Technology</a>
          </div>
          <div className="fcol">
            <div className="fcol-t">Contact</div>
            <a>+1 (604) 555-0123</a><a>hello@pantheondronesolutions.com</a><a>Burnaby, BC</a>
          </div>
        </div>
      </div>
      <div className="fbot">
        <span>© 2026 Pantheon Drone Solutions Inc.</span>
        <span>Privacy · Terms · CASL</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, {
  Logo, Notice, Nav, Eyebrow, Hero, FacadePlate,
  SectionHead, FeatureGrid, ProcessSteps, Credentials, ContactForm, Footer
});
