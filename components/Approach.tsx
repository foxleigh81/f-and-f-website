import Reveal from "./Reveal";

const principles = [
  {
    k: "Accountable, not advisory",
    v: "We take ownership of outcomes. If it's our name on the plan, it's our problem to land — no hiding behind a steering committee.",
  },
  {
    k: "Honesty over optimism",
    v: "You'll always know the real status. We'd rather have the uncomfortable conversation in week two than the catastrophic one in month six.",
  },
  {
    k: "Small, senior, hands-on",
    v: "No pyramid of junior consultants learning on your budget. The people who scope the work are the people who do it.",
  },
  {
    k: "Leave you stronger",
    v: "Every engagement is designed to make us redundant. We transfer the capability so the next programme doesn't need us.",
  },
];

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="shell approach__inner">
        <div className="approach__sticky">
          <Reveal as="p" className="eyebrow">
            How we work
          </Reveal>
          <Reveal as="h2" className="approach__title" delay={60}>
            Two foxes.
            <br />
            One standard.
          </Reveal>
          <Reveal as="p" className="approach__lede" delay={120}>
            The ampersand in our name isn&rsquo;t decoration. It&rsquo;s a
            partnership model: a senior pairing on every engagement, so there is
            always a second clear-eyed view on the work, and never a single
            point of failure.
          </Reveal>
        </div>

        <ol className="principles">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.k} className="principle" delay={i * 80}>
              <span className="principle__amp" aria-hidden="true">
                &amp;
              </span>
              <h3 className="principle__k">{p.k}</h3>
              <p className="principle__v">{p.v}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
