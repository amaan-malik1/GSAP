const Hero = () => {
  return (
    <section id="hero" className="noisy">
      <h1 className="title">
        Mojito
      </h1>
      <img
        src="/image/hero-left-leaf.png"
        alt="Leaf-left"
        className="left-leaf"
      />
      <img
        src="/image/hero-right-leaf.png"
        alt="Leaf-right"
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block ">
            <p>
              Cool. Crisp. Classic
            </p>
            <p>
              Sip the Spirit <br /> of Summer
            </p>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero