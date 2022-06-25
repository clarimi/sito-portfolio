import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap, Linear } from 'gsap';


const mouseFollow = document.getElementById('pointer');

document.addEventListener('mousemove', (e) => {
    gsap.to('#pointer', {
        left: e.clientX - 15,
        top: e.clientY - 15,
        delay: 0.10,
        duration: 0.05
    });
});

gsap.to('#pointer', {
    rotate: 360,
    duration: 3,
    repeat: -1,
    ease: Linear.easeNone
})

const app = createApp(App)

app.use(router)

app.mount('#app')
