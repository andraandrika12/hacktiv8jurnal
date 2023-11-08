<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    components: 
    { RouterLink },

    data() {
    return {
      formRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
      }
    };
  },
  methods: {
    ...mapActions(useAppStore, ["register"])
  }
    
}
</script>

<template>
    <section style="height: 100vh" class="d-flex justify-content-center align-items-center">
        <div class="container align-baseline d-flex justify-content-center">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Register member</h2>
                    <form @submit.prevent="register(formRegister)" class="register-form" id="register-form" >
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input v-model="formRegister.username" type="text"  placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input v-model="formRegister.email" type="email"  placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input v-model="formRegister.password" type="password"  placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class=""></i></label>
                            <input v-model="formRegister.phoneNumber" type="text" placeholder="Phone Number" />
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class=""></i></label>
                            <input v-model="formRegister.address" type="text"  placeholder="Address" />
                        </div>
                        <div class="form-group form-button">
                            <button 
                              class="form-submit" type="submit">Sign Up</button>
                            </div>
                    </form>
                </div>
                <div class="signup-image">
                    <figure>
                        <img src="../assets/images/signup-image.jpg" alt="sing up image" />
                    </figure>
                    <RouterLink to="/login" class="signup-image-link">I am already member</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>