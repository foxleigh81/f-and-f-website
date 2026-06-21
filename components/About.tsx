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
            The company
          </Reveal>
          <Reveal as="h2" className="about__title" delay={60}>
            Trusted on the projects that matter.
          </Reveal>
          <Reveal as="p" delay={120}>
            No pyramid of junior consultants learning on your budget. The people
            who scope the work are the people who do it.
          </Reveal>

          <Reveal as="ul" className="about__points" delay={160}>
            <li>Independent &amp; privately owned</li>
            <li>Senior practitioners only</li>
            <li>Sector-agnostic delivery expertise</li>
            <li>Cyber Essentials Accredited</li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
