import Image from "next/image";
import Reveal from "./Reveal";
import logo from "@/public/foxleigh-and-co-logo-large.png";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about__inner">
        <Reveal className="about__mark">
          <Image
            src={logo}
            alt="Foxleigh & Foxleigh"
            width={260}
            height={260}
            className="about__logo"
          />
        </Reveal>

        <div className="about__copy">
          <Reveal as="p" className="eyebrow">
            The firm
          </Reveal>
          <Reveal as="h2" className="about__title" delay={60}>
            Based in Surrey. Trusted on the projects that matter.
          </Reveal>
          <Reveal as="p" delay={120}>
            Foxleigh &amp; Foxleigh was founded on a frustration shared across
            the industry: too many technology programmes are sold brilliantly
            and delivered badly. We exist to close that gap.
          </Reveal>
          <Reveal as="p" delay={160}>
            From our base in Surrey we work with organisations across the
            South&nbsp;East and beyond &mdash; financial services, public
            sector, healthcare and fast-scaling businesses &mdash; wherever a
            critical IT programme needs a steady, senior hand. We keep the firm
            deliberately small so that the people you meet are the people who do
            the work.
          </Reveal>

          <Reveal as="ul" className="about__points" delay={200}>
            <li>Independent &amp; privately owned</li>
            <li>Senior practitioners only</li>
            <li>Sector-agnostic delivery expertise</li>
            <li>Discreet, references on request</li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
