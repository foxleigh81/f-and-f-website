import Reveal from "./Reveal";

const services = [
  {
    no: "01",
    title: "Programme & project delivery",
    body: "End-to-end ownership of complex technology programmes — from mobilisation and planning through to a controlled, evidenced go-live. We carry the accountability, not just the advice.",
  },
  {
    no: "02",
    title: "Delivery assurance & rescue",
    body: "An honest, fast read on a programme that's drifting. We diagnose what's really going wrong, stabilise it, and put a credible recovery plan in motion — then see it through.",
  },
  {
    no: "03",
    title: "Sourcing & vendor management",
    body: "Holding suppliers to account against outcomes. We manage the contracts, the integration and the difficult conversations so your delivery isn't hostage to a third party.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">
            What we do
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={60}>
            A consultancy that does the hard part: the delivery.
          </Reveal>
          <Reveal as="p" className="section-head__lede" delay={120}>
            Strategy decks are easy. Getting a complex programme over the line,
            with the politics, the legacy systems and the immovable deadline, is
            the part most people avoid. It&rsquo;s the only part we do.
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              className="service-card"
              delay={(i % 3) * 90}
            >
              <span className="service-card__no">{s.no}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
