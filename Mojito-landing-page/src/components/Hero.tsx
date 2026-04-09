import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import leaf from "../images/leaf.png"

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {
      type: 'chars, words'
    })
    const paraSplit = new SplitText('.subtitle', {
      type: 'chars, words'
    })

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 2,
      ease: 'expo.out',
      stagger: 0.06,   //each char comes after this time
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
      .to('.right-leaf', { y: 200 }, 0)
      .to('left-leaf', { y: -200 }, 0)

  }, []);



  return (
    <section id="hero" className="noisy font-serif h-screen w-screen">
      <h1 className="title text-9xl text-center font-serif">
        Mojito
      </h1>
      <img
        src={'leaf'}
        alt="left Leaf "
        className="left-leaf "
      />
      <img
        src="/image/hero-right-leaf.png"
        alt="right Leaf"
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

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktails on our menu is a blend of premium ingredient, creative flair and timeless recipes - designed to delight your senses.
            </p>
            <a href="#cocktails">

            </a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero