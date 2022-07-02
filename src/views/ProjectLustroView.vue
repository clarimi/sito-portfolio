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

            <section class="project-section">
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

            <section class="project-section section-lunga">
                <div class="project-section-text">
                    <h2>First Step</h2>

                </div>
                <div class="project-mockup-container">
                    <img id="caricamento" src="./../assets/caricamento.png" />
                    <img id="home" class="alto-80" src="./../assets/home.png" />
                    <img id="profilo" src="./../assets/profilo.png" />
                </div>
            </section>

            <section class="project-section section-media">
                <div class="project-section-text">
                    <h2>First Step</h2>
                    <p>You will find walkthrough screens that explain the main features of the app.
                        Then complete input fields with your personal data to find out your natal chart.</p>
                </div>
                <div class="project-mockup-container">
                    <img id="aggiungi-amici" class="basso-80" src="./../assets/aggiungi-amici.png" />
                    <img id="profilo-amico-uno" src="./../assets/profilo-amico-1.png" />
                    <img id="profilo-amico-due" class="alto-80" src="./../assets/profilo-amico-2.png" />
                </div>
            </section>

            <section class="project-section section-media">
                <div class="project-section-text">
                    <h2>First Step</h2>
                    <p>You will find walkthrough screens that explain the main features of the app.
                        Then complete input fields with your personal data to find out your natal chart.</p>
                </div>
                <div class="project-mockup-container">
                    <img id="scopri-segni" class="basso-80" src="./../assets/scopri-segni.png" />
                    <img id="scopri-pianeti" src="./../assets/scopri-pianeti.png" />
                    <img id="scopri-case" class="alto-80" src="./../assets/scopri-case.png" />
                </div>
            </section>
            <div class="project-footer">
                <section class="project-section section-media">
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
                    <h2>Thank you for watching!</h2>
                    <p>You can find this project on <strong>Behance</strong></p>
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
