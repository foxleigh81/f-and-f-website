const MARQUEE_ITEMS = [
  "Programme delivery",
  "Delivery assurance",
  "Project rescue",
  "Vendor delivery",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__amp" aria-hidden="true">
        &amp;
      </div>
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="eyebrow hero__eyebrow">Surrey · IT Project Delivery</p>

        <h1 className="hero__title">
          We deliver the projects
          <br />
          others <em>can&rsquo;t</em> &mdash; or won&rsquo;t.
        </h1>

        <p className="hero__lede">
          Foxleigh &amp; Foxleigh is a consultancy built around a single,
          unglamorous promise: complex technology programmes that actually land.
          We lead, rescue and assure delivery for organisations who need it done
          properly.
        </p>

        <div className="hero__actions">
          <a className="btn" href="#services">
            See how we help
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {/* Two identical groups; each is wide enough to fill the viewport,
              so the -50% loop is always seamless with no empty gap. */}
          {Array.from({ length: 2 }).map((_, copy) => (
            <div className="hero__marquee-group" key={copy}>
              {Array.from({ length: 3 }).flatMap((_, rep) =>
                MARQUEE_ITEMS.map((item, idx) => (
                  <span className="hero__marquee-item" key={`${rep}-${idx}`}>
                    {item}
                    <i>&amp;</i>
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
