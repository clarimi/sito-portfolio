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

    <div class="container">
      <div class="panel" id="first-panel">
        <div class="panel-content">
          <img id="hero-logo" src="./../assets/title.svg" />
          <span id="hero-scroll-text">Scroll to projects</span>
        </div>
      </div>
      <section class="panel" id="second-panel">
        <div class="panel-content">
          <div class="skill-list-container">
            <h1>HardSkills and Software</h1>
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
      </section>
      <section class="panel" id="third-panel">
        <div class="panel-content">
          Pannello 3
        </div>
      </section>
      <section class="panel" id="fourth-panel">
        <div class="panel-content">
          Pannello 4
        </div>
      </section>
      <section class="panel" id="fifth-panel">
        <div class="panel-content">
          FEMO QUALCOSSA ASSIEME
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

    let scrollTween = gsap.to(".panel:not(:last-child):not(:nth-child(3))", {
      xPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=4000",
        markers: true,
        scrub: true,
        pin: true,
        id: "animazione-panel"
      }
    });

    gsap.to(".panel:nth-child(3)", {
      xPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".container",
        start: (n) => { console.log(n); return 4000; },
        end: (n) => { console.log(n); return 6000; },
        markers: true,
        scrub: true,
        pin: true,
        id: "animazione-panel"
      }
    });

    const liItems = 4;

    for (var i = 0; i < liItems; i++) {

      gsap.from(`#second-panel ol > li:nth-child(${i + 1})`, {
        x: 800 + (500 * i),
        scrollTrigger: {
          trigger: "#first-panel",
          containerAnimation: scrollTween,
          start: "right right",
          end: "center 20%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reset",
          id: "voce-1",
        }
      });
    }
  }
}



</script>