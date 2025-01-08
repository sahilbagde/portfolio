export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sahil</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Experienced Java Full Stack Developer with over one year of expertise in developing and maintaining robust
applications using   <br />Java, Spring boot, SQL and ReactJS. Proven ability in backend development API creation, and
front-end integration to deliver effective software solutions
           
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/new001.png" alt="Hero Section" />
      </div>
    </section>
  );
}
