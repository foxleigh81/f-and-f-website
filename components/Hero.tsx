const MARQUEE_ITEMS = [
  "Programme delivery",
  "Delivery assurance",
  "Project rescue",
  "Vendor management",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="eyebrow hero__eyebrow">IT Project Delivery</p>

        <h1 className="hero__title">
          Delivering <em>cutting-edge</em> digital technology
          <br />
          across the public and private sector.
        </h1>

        <p className="hero__lede">
          Foxleigh &amp; Foxleigh is a consultancy built around the seamless
          delivery of digital innovations.
        </p>
        <p className="hero__lede">
          Offering a full portfolio management service; coordinating programmes,
          products, stakeholder relationships and governance.
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
