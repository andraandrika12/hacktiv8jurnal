<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
// import firebaseConfig from '../main.js';
// import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

// firebaseConfig

// const providerTwitter = new TwitterAuthProvider();
// const auth = getAuth();

export default {
    components:
        { RouterLink },

    props: {
        msg: String
    },

    data() {
        return {
            formLogin: {
                email: "",
                password: "",
                isSignedIn: false,
            }
        };
    },

    methods: {
        ...mapActions(useAppStore, ['loginPage']),

        handleSignInTwitter() {
            signInWithPopup(auth, providerTwitter)
                .then((result) => {
                    this.user = result.user.displayName;
                    this.isSignedIn = true;
                }).catch((error) => {
                    console.log(error);
                });
        },
    }
}
</script>
<template>
    <section style="height: 100vh" class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="signin-content">
                <div class="signin-image">
                    <figure>
                        <img src="../assets/images/signin-image.jpg" alt="sing up image" />
                    </figure>
                    <RouterLink to="/register" class="signup-image-link">Create an account</RouterLink>
                </div>

                <div class="signin-form">
                    <h2 class="form-title">Sign in</h2>
                    <form @submit.prevent="loginPage(formLogin)" class="login-form" id="login-form">
                        <div class="form-group">
                            <label for="email"><span class="zmdi zmdi-email" aria-hidden="true"></span></label>
                            <input v-model="formLogin.email" type="text" name="email" id="email" placeholder="Your Email" />
                        </div>
                        <div class="form-group">
                            <label for="password"><i class="zmdi zmdi-lock"></i></label>
                            <input v-model="formLogin.password" type="password" name="password" id="password"
                                placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                            <label for="remember-me" class="label-agree-term"><span></span>Remember
                                me</label>
                        </div>
                        <div class="form-group form-button">
                            <button type="submit" class="form-submit">login</button>
                        </div>
                        <a>Or Sign With</a>
                        <div id="TwitterSignIn" v-if="!isSignedIn">
                            <h3>Twitter Signin</h3>
                            <button @click="handleSignInTwitter">login</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
