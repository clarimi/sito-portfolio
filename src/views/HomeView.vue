<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import { gsap, Power0 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
</script>

<template>
  <main>
    <div id="preloader">
      <div class="logo-loader">
        <img src="./../assets/logo-loader.svg" />
        <div id="loading-bar">
          <div id="loading-bar-interna"></div>
        </div>
      </div>
    </div>
    <header>
      <router-link :to="'/'" id="site-logo">
        <img src="./../assets/c_logo.svg" />
      </router-link>
      <div class="social-links">
        <a href="https://www.behance.net/claricemirandola1" class="link-behance"><span>Behance</span></a>
        <a href="https://www.linkedin.com/in/claricemirandola/" class="link-linkedin"><span>LinkedIn</span></a>
        <a @click="vaiInFondo"><span>Contact</span></a>
      </div>
    </header>
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
            <h1 class="few-words">A few words <span class="about-me bodoni-italic">about me</span></h1>
            <p class="presentation-paragraph">Hi I’m Clarice e mo ti becchi sto pezzo di paragrafo di minchiate about
              me, consectetur adipiscing elit
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
      <section class="panel panel-falso" id="pannello-falso-1">
        <div class="panel-content">
          Pannello falso
        </div>
      </section>
      <section class="panel panel-falso" id="pannello-falso-2">
        <div class="panel-content">
          Pannello falso
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
                  <p class="marketing-list"><span class="social-mm">Social media marketing</span> ∙ <span
                      class="blockchain">Blockchain and
                      NFT</span> ∙ <span class="content-c">Content creation</span> ∙ <span
                      class="adv">Advertising</span> ∙ <span class="google-a">Google Analytics</span></p>
                </li>
                <li>
                  <h2>Digital Design</h2>
                  <p><span class="art-d">Art Direction</span> ∙ <span class="ux-ui">UX and UI</span></p>
                </li>
                <li>
                  <h2>Visual Design</h2>
                  <p><span class="illustration">Illustration</span> ∙ <span class="motion">Motion Graphic</span> ∙ <span
                      class="editing">Editing and Video making</span> ∙
                    <span class="sound">Sound design</span>
                  </p>
                </li>
                <li>
                  <h2>Creative Developer</h2>
                  <p><span class="html">Html</span> ∙ <span class="js">Javascript</span> ∙ <span class="css">CSS</span>
                    ∙ <span class="wp">Wordpress</span> ∙
                    <span class="gatsby">Gatsby</span> ∙ <span class="react">React.js</span> ∙ <span
                      class="vue">Vue.js</span>
                  </p>
                </li>
              </ol>
              <ol class="software-list">
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/illustrator.png" />Illustrator
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/photoshop.png" />Photoshop
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/after.png" />After effects
                  </div>
                </li>
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/lightroom.png" />Lightroom
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/premiere.png" />Premiere Pro
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/indesign.png" />InDesign
                  </div>
                </li>
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/figma.png" />Figma
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/xd.png" />Adobe XD
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/protopie.png" />Protopie
                  </div>
                </li>
                <li>
                  <div class="software">
                    <img src="./../assets/icone-software/logic.png" />Logic Pro
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/github.png" />GitHub
                  </div>
                  <div class="software">
                    <img src="./../assets/icone-software/vsc.png" />Visual Studio Code
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="panel panel-falso" id="pannello-falso-progetti">
        <div class="panel-content">
          Pannello falzo
        </div>
      </section>

      <section class="panel" id="projects-panel">
        <div class="panel-content">
          <h1> <span class="project-1">Projects</span> <span class="project-2">Projects</span> <span
              class="project-3">Projects</span></h1>
          <div class="projects-list">
            <div class="project">
              <img src="./../assets/immagini-progetti/progetto-veroneser.png" />
              <h3 class="project-title">The Veroneser</h3>
              <div class="project-tags">
                <div>Master`s Degree Thesis</div>
                <div>Art Direction</div>
                <div>2022</div>
              </div>

            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3 class="project-title">Astrology App</h3>
              <div class="project-tags">
                <div>UI | UX Design</div>
                <div>Prototype</div>
                <div>2021 / 2022</div>
              </div>
              <router-link :to="'/progetto/lustro'" class="button-project-lustro">Vai al progetto</router-link>
            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/fondazione-negri.png" />
              <h3 class="project-title">Fondazione Negri Website</h3>
              <div class="project-tags">
                <div>Web Design</div>
                <div>2020 / 2021</div>

              </div>
            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3 class="project-title">Alte Repeto - Inonda</h3>
              <div class="project-tags">
                <div>Bachelor Degree Thesis</div>
                <div>Interior Design</div>
                <div>2018 / 2019</div>
              </div>
            </div>
            <div class="project">
              <img src="./../assets/immagini-progetti/lustro.png" />
              <h3 class="project-title">Progetto Vuoto</h3>
              <div class="project-tags">
                <div>Categoria</div>
                <div>Categoria</div>
                <div>Anno / Anno</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="panel" id="design-cit-panel">
        <div class="panel-content">
          <h1 class="wont-save"><span class="bodoni">Design</span> won’t save the world
            but makes it look good, <span class="bodoni">maybe</span></h1>
          <p class="cit-paragraph">My biggest belief is / achievement for the future is.... purus sit amet luctus
            venenatis, lectus magna
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

function animaPreloader() {

  var tl = gsap.timeline();
  tl.to("#loading-bar-interna", { width: Math.random() * 40, duration: 0.4, ease: Power0.easeInOut });
  tl.to("#loading-bar-interna", { width: Math.random() * 40 + 40, duration: 0.2, delay: Math.random() * 0.5, ease: Power0.easeInOut });
  tl.to("#loading-bar-interna", { width: Math.random() * 40 + 80, duration: 0.3, delay: Math.random() * 0.5, ease: Power0.easeInOut });
  tl.to("#loading-bar-interna", { width: 140, duration: 0.2, delay: Math.random() * 0.5, ease: Power0.easeInOut });
  tl.to("#preloader", { opacity: 0, duration: 0.8, onComplete: () => { gsap.set("#preloader", { display: "none" }) }, ease: Power0.easeInOut });
  tl.from("#hero-logo", { x: 30, opacity: 0, duration: 0.4, delay: 0.2, ease: Power0.easeOut });
  tl.from("header, #hero-scroll-text", { opacity: 0, duration: 0.2, delay: 0.2, ease: Power0.easeOut });
};


function vaiInFondo() {
  window.scrollTo(12000, 130000);
};

export default {
  scrollTween: null,
  mounted() {

    let self = this;
    animaPreloader();

    this.scrollTween = gsap.to(".panel:not(:last-child)", {
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


    const liItems = 4;

    // Animazione dell'elenco delle skills
    for (var i = 0; i < liItems; i++) {
      gsap.from(`#skill-panel ol.skill-list > li:nth-child(${i + 1})`, {
        x: 800 + (400 * i),
        scrollTrigger: {
          trigger: "#descrizione-panel",
          containerAnimation: this.scrollTween,
          start: "right 90%",
          end: "center 18%",
          scrub: true,
          //markers: true,
          toggleActions: "play none revert reset",
          id: "skill-1",
        }
      });
    }

    // Animazione dell'elenco dei software
    for (var i = 0; i < 4; i++) {
      gsap.from(`#skill-panel ol.software-list > li:nth-child(${i + 1})`, {
        x: 600 + (200 * i),
        scrollTrigger: {
          trigger: "#pannello-falso-2",
          containerAnimation: this.scrollTween,
          start: "right 60%",
          end: "right 52%",
          scrub: true,
          // markers: true,
          toggleActions: "play none revert reset",
          id: "sw-1",
        }
      });
    }

    // Animazione che fa passare dall'elenco delle skill a quella dei software
    gsap.to(".skill-software-list", {
      x: -1500,
      scrollTrigger: {
        trigger: "#pannello-falso-2",
        containerAnimation: this.scrollTween,
        start: "right 70%",
        end: "right 58%",
        scrub: true,
        // markers: true,
        toggleActions: "play none revert reset",
        id: "sw-1",
      }
    });

    // Animazione per rallentare la lista dei software 
    gsap.from(".software-list", {
      x: -400,
      scrollTrigger: {
        trigger: "#pannello-falso-2",
        containerAnimation: this.scrollTween,
        start: "right 67%",
        end: "right 55%",
        scrub: true,
        // markers: true,
        toggleActions: "play none revert reset",
        id: "sw-1",
      }
    });


    gsap.to(".projects-list", {
      x: -1600,
      scrollTrigger: {
        trigger: "#pannello-falso-progetti",
        containerAnimation: this.scrollTween,
        start: "right 35%",
        end: "right 2%",
        scrub: true,
        // markers: true,
        toggleActions: "play none revert reset",
        id: "progetti",
      }
    });


    setTimeout(function () {
      self.scrollTween.scrollTrigger.refresh();
    }, 10);
  },

  unmounted() {
    ScrollTrigger.refresh();
  }
}



</script>