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
    body: "An honest, fast read on a programme that's drifting. We diagnose what's really going on, supercharge the critical path, follow it through to launch and monitor first contact to make sure it delivers tangible results in the real world.",
  },
  {
    no: "03",
    title: "Sourcing & vendor management",
    body: "Holding suppliers to account against outcomes. We manage the contracts, the integration and the difficult conversations so you don't have to.",
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
            A consultancy that does the hard part.
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
