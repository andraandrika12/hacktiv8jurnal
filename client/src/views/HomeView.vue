<script>
import { RouterLink } from 'vue-router';
import NavbarHome from '../components/NavbarHome.vue';

export default {
    components: 
    {  RouterLink, NavbarHome }
    
}
</script>


<template>
   <section class="bg-pattern">
    <NavbarHome />
        <div class="text-container">
            <p>Hello,</p>
            <p>"Hacktiv!"</p>
            <p>Welcome to Hacktiv8 Jurnal</p>
            <p>A place for students where you will be comfortable sharing stories, experiences, or
                about yourself.
            </p>
            <RouterLink to="/register"><button class="sign-btn shadow" >Sign Up</button></RouterLink>
            <RouterLink to="/login"><button class="login shadow" >Login</button></RouterLink> 
        </div>
        
        <img alt="model" class="model" src="../assets/images/image.png">  
    </section>
</template>