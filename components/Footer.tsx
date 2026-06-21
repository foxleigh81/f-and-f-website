import Image from "next/image";
import logo from "@/public/foxleigh-and-co-logo-large.png";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <Image src={logo} alt="" width={40} height={40} />
          <span>
            Foxleigh <span className="brand__amp">&amp;</span> Foxleigh
          </span>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#services">What we do</a>
          <a href="#approach">Approach</a>
          <a href="#about">The company</a>
        </nav>

        <p className="site-footer__legal">
          &copy; {year} Foxleigh &amp; Foxleigh Ltd. Registered in England &amp;
          Wales.
        </p>
      </div>
    </footer>
  );
}
