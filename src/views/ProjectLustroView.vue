<script setup>
import { gsap, Power0 } from 'gsap';
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

        <div class="project-page">
            <section class="project-hero">
                <div class="project-title-container">
                    <img id="project-logo" src="./../assets/logo-nobg.png" />
                    <img id="project-title" src="./../assets/lustro-titolo.png" />

                    <p class="project-intro">Lustro is an astrology mobile app that allows you to discover all the
                        planets of the solar system, real time insights based on their movement. <br /><br />
                        This app allows you to find out your natal chart: the positions of the planets in the houses at
                        the time of your birth and their meaning.</p>
                </div>
                <img id="app-mockup" src="./../assets/app-mockup.png" />
                <img id="full-moon" src="./../assets/full-moon.png" />
            </section>

            <section class="project-section" id="section-1">
                <div class="project-section-text">
                    <h2>First Step</h2>
                    <p>You will find walkthrough screens that explain the main features of the app.
                        Then complete input fields with your personal data to find out your natal chart.</p>
                </div>
                <div class="project-mockup-container">
                    <img id="splash" class="alto-80" src="./../assets/splash.png" />
                    <img id="dati" src="./../assets/dati.png" />
                </div>
            </section>

            <section class="project-section section-lunga" id="section-2">
                <div class="project-section-text">
                    <h2>Calculating
                        <br />the natal chart
                    </h2>

                </div>
                <div class="project-mockup-container">
                    <img id="caricamento" src="./../assets/caricamento.png" />
                    <img id="home" class="alto-80" src="./../assets/home.png" />
                    <img id="profilo" src="./../assets/profilo.png" />
                </div>
            </section>

            <section class="project-section section-media" id="section-3">
                <div class="project-section-text">
                    <h2>Add friends</h2>
                    <p>Add yours friends and see your astrological compatibility</p>
                </div>
                <div class="project-mockup-container">
                    <img id="aggiungi-amici" class="basso-80" src="./../assets/aggiungi-amici.png" />
                    <img id="profilo-amico-uno" src="./../assets/profilo-amico-1.png" />
                    <img id="profilo-amico-due" class="alto-80" src="./../assets/profilo-amico-2.png" />
                </div>
            </section>

            <section class="project-section section-media" id="section-4">
                <div class="project-section-text">
                    <h2>Discover section</h2>
                    <p>Discover the characteristics of the zodiac signs, planets and astrological houses.</p>
                </div>
                <div class="project-mockup-container">
                    <img id="scopri-segni" class="basso-80" src="./../assets/scopri-segni.png" />
                    <img id="scopri-pianeti" src="./../assets/scopri-pianeti.png" />
                    <img id="scopri-case" class="alto-80" src="./../assets/scopri-case.png" />
                </div>
            </section>
            <div class="project-footer">
                <section class="project-section section-media" id="section-5">
                    <div class="project-section-text">
                        <h2>Light theme</h2>
                        <p>From your profile settings you can switch to light theme whenever you want to.</p>
                    </div>
                    <div class="project-mockup-container">
                        <img id="scopri-segni-light" src="./../assets/scopri-segni-light.png" />
                        <img id="app-light" src="./../assets/app-light.png" />

                    </div>
                </section>
                <div class="thank-you">
                    <img id="thank-you-img" src="./../assets/thank-you.svg" />
                    <p>You can find this project on <strong>Behance</strong></p>
                    <img id="project-logo-footer" src="./../assets/logo-nobg.png" />

                </div>
            </div>
        </div>

    </main>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
<script>
gsap.registerPlugin(ScrollTrigger);

export default {
    mounted() {

        const tl = gsap.timeline();
        tl.from("#project-title", {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: 0.5,
            ease: Power0.easeOut
        });

        tl.from("#app-mockup", {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: Power0.easeOut
        }, "<+=50%");

        tl.from(".project-intro", {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: Power0.easeOut
        }, "<+=50%");

        const durataAnimaMockup = 1;
        const startAnimaMockup = "top 40%";

        gsap.from("#splash, #dati", {
            opacity: 0,
            y: 20,
            duration: durataAnimaMockup,
            scrollTrigger: {
                trigger: "#section-1",
                start: startAnimaMockup,
                //markers: true,
            }
        });

        gsap.from("#caricamento, #home, #profilo", {
            opacity: 0,
            y: 20,
            duration: durataAnimaMockup,
            scrollTrigger: {
                trigger: "#section-2",
                start: startAnimaMockup,
                //markers: true,
            }
        });

        gsap.from("#section-3 img", {
            opacity: 0,
            y: 20,
            duration: durataAnimaMockup,
            scrollTrigger: {
                trigger: "#section-3",
                start: startAnimaMockup,
                // markers: true,
            }
        });

        gsap.from("#section-4 img", {
            opacity: 0,
            y: 20,
            duration: durataAnimaMockup,
            scrollTrigger: {
                trigger: "#section-4",
                start: startAnimaMockup,
                //markers: true,
            }
        });

        gsap.from("#section-5 img", {
            opacity: 0,
            y: 20,
            duration: durataAnimaMockup,
            scrollTrigger: {
                trigger: "#section-5",
                start: startAnimaMockup,
                // markers: true,
            }
        });

    }
}
</script>