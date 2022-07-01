<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
</script>
<template>
  <main>
    <header>
      <a href="/" id="site-logo">
        <img src="./../assets/c_logo.svg" />
      </a>
      <div class="social-links">
        <a><span>Behance</span></a>
        <a><span>LinkedIn</span></a>
        <a><span>Contact</span></a>
      </div>
    </header>

    <div class="titolo-hard-skills-falso">
      <div>
        <h1>
          <span class="hard">Hard</span>
          <span class="skills">Skills&nbsp;</span>
          <span class="and">and&nbsp;</span>
          <span class="soft">&nbsp;Soft</span>
          <span class="ware">ware</span>
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="panel" id="copertina-panel">
        <div class="panel-content">
          <img id="hero-logo" src="./../assets/title.svg" />
          <span id="hero-scroll-text">Scroll to projects</span>
        </div>
      </div>
      <div class="panel" id="descrizione-panel">
        <div class="panel-content">
          <img id="person" src="./../assets/person.png" />
          <div>
            <h1>A few words <span class="bodoni-italic">about me</span></h1>
            <p>Hi I’m Clarice e mo ti becchi sto pezzo di paragrafo di minchiate about me, consectetur adipiscing elit
              ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
              enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu
              volutpat
              odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor
              orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec
              et
              odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
          </div>
        </div>
      </div>
      <section class="panel panel-falso">
        <div class="panel-content">
          Pannello falzo
        </div>
      </section>
      <section class="panel" id="skill-panel">
        <div class="panel-content">
          <div class="skill-list-container">
            <h1>
              <span class="hard">Hard</span>
              <span class="skills">Skills&nbsp;</span>
              <span class="and">and&nbsp;</span>
              <span class="soft">&nbsp;Soft</span>
              <span class="ware">ware</span>
            </h1>
            <div class="skill-software-list">
              <ol class="skill-list">
                <li>
                  <h2>Marketing</h2>
                  <p>Social media marketing ∙ Blockchain and NFT ∙ Content creation ∙ Advertising ∙ Google Analytics</p>
                </li>
                <li>
                  <h2>Digital Design</h2>
                  <p>Art Direction ∙ UX and UI</p>
                </li>
                <li>
                  <h2>Visual Design</h2>
                  <p>Illustration ∙ Motion Graphic ∙ Editing and Video making ∙ Sound design</p>
                </li>
                <li>
                  <h2>Creative Developer</h2>
                  <p>Html ∙ Javascript ∙ CSS ∙ Wordpress ∙ Gatsby ∙ React.js ∙ Vue.js</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="panel" id="software-panel">
        <div class="panel-content">
          <div class="skill-list-container">
            <h1>
              <span class="hard">Hard</span>
              <span class="skills">Skills&nbsp;</span>
              <span class="and">and&nbsp;</span>
              <span class="soft">&nbsp;Soft</span>
              <span class="ware">ware</span>
            </h1>
            <div class="skill-software-list">
              <ol class="software-list">
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                </li>
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                </li>
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                </li>
                <li style="opacity: 0; height: ">
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                </li>


              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="panel" id="projects-panel">
        <div class="panel-content">
          <h1>Projects <span class="bodoni-italic">Projects</span> Projects</h1>
          <div class="projects-list">
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3>Astrology App</h3>
              <div class="project-tags">
                <div>UI | UX design</div>
                <div>Pippo</div>
                <div>Pluto</div>
              </div>
            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3>Astrology App</h3>
              <div class="project-tags">
                <div>UI | UX design</div>
                <div>Pippo</div>
                <div>Pluto</div>
              </div>
            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3>Astrology App</h3>
              <div class="project-tags">
                <div>UI | UX design</div>
                <div>Pippo</div>
                <div>Pluto</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="panel" id="design-cit-panel">
        <div class="panel-content">
          <h1><span class="bodoni">Design</span> won’t save the world
            but makes it look good, <span class="bodoni">maybe</span></h1>
          <p>My biggest belief is / achievement for the future is.... purus sit amet luctus venenatis, lectus magna
            fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed
            egestas egestas fringilla phasellus faucibus</p>
        </div>
      </section>
      <section class="panel" id="final-panel">
        <div class="panel-content">
          <div class="contact-container">

            <div class="three-lines">
              <div class="line-one">
                <h1 class="line-one-text">
                  <span class="letsmake"> Let's make&nbsp;&nbsp;</span>
                  <span class="something">&nbsp;something&nbsp;&nbsp;</span>
                  <span class="great">&nbsp;great!</span>

                </h1>
              </div>

              <div class="line-two">
                <a href="mailto:mirandolaclarice@gmail.com" class="button-collabora">KEEP IN TOUCH</a>
                <h2>
                  <span class="mail">mirandolaclarice@gmail.com</span>
                </h2>
              </div>

              <div class="line-three">
                <h3 class="for-line-collaborations">
                  <span class="for">for&nbsp;&nbsp;</span>
                  <img id="line-divider" src="./../assets/line.svg" />

                  <span class="collaborations">&nbsp;&nbsp;collaborations.</span>
                </h3>
                <img id="star" src="./../assets/star.svg" />
              </div>
            </div>

            <div>
              <img id="contacts-img" src="./../assets/contacts.svg" />
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

gsap.registerPlugin(ScrollTrigger);

export default {

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    let scrollTween = gsap.to(".panel:not(:last-child)", {
      xPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=4000",
        //markers: true,
        scrub: true,
        pin: true,
        id: "animazione-panel"
      }
    });

    gsap.to(".dsada:nth-child(3)", {
      xPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".container",
        start: (n) => { console.log(n); return 4000; },
        end: (n) => { console.log(n); return 6000; },
        // markers: true,
        scrub: true,
        pin: true,
        id: "animazione-panel"
      }
    });

    const liItems = 4;

    for (var i = 0; i < liItems; i++) {

      gsap.from(`#skill-panel ol > li:nth-child(${i + 1})`, {
        x: 800 + (400 * i),
        scrollTrigger: {
          trigger: "#descrizione-panel",
          containerAnimation: scrollTween,
          start: "right 82%",
          end: "center 10%",
          scrub: true,
          //markers: true,
          toggleActions: "play none none reset",
          id: "skill-1",
        }
      });
    }


    for (var i = 0; i < 3; i++) {

      gsap.from(`#software-panel ol > li:nth-child(${i + 1})`, {
        x: 800 + (400 * i),
        scrollTrigger: {
          trigger: "#skill-panel",
          containerAnimation: scrollTween,
          start: "right 60%",
          end: "right center",
          scrub: true,
          //markers: true,
          toggleActions: "play none none reset",
          id: "sw-1",
        }
      });
    }

    gsap.to("#skill-panel h1", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#skill-panel",
        containerAnimation: scrollTween,
        start: "right 68%",
        end: "right 65%",
        scrub: true,
        // markers: true,
        toggleActions: "play none none reset",
        id: "title-1",
      }
    });
    gsap.set(".titolo-hard-skills-falso", { opacity: 0 });

    gsap.to(".titolo-hard-skills-falso", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#skill-panel",
        containerAnimation: scrollTween,
        start: "right 68%",
        end: "right 67%",
        scrub: true,
        // markers: true,
        toggleActions: "play none reverse reset",
        id: "title-1",
      }
    });

    gsap.to(".titolo-hard-skills-falso", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#skill-panel",
        containerAnimation: scrollTween,
        start: "right 48%",
        end: "right 45%",
        scrub: true,
        // markers: true,
        toggleActions: "play none reverse reset",
        id: "title-nascondi-1",
      }
    });
  }
}



</script>