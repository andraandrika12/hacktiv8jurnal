import './assets/stylesheets/style.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

const firebaseConfig = {
    apiKey: "AIzaSyC2GrUqI5IvCo9nivW5ybdW8dZ4jGVtMUc",
    authDomain: "chat-project-app-d36e8.firebaseapp.com",
    projectId: "chat-project-app-d36e8",
    storageBucket: "chat-project-app-d36e8.appspot.com",
    messagingSenderId: "110500150063",
    appId: "1:110500150063:web:90afa5d18a5dabd695ffda",
    measurementId: "G-4LF6BS524W"
};

firebase.initializeApp(firebaseConfig)

app.mount('#app')
