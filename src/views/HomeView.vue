<template>
  <div class="home">
    
    <Hero2/>
    <Services id='services'/>
    <About id='about'/>
    <Contact id='contact'/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Hero2 from '@/components/Hero2.vue'
import Services from '@/components/Services.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'







export default {
  name: 'HomeView',
  components: {
    Hero,Hero2,Services,Contact,Footer,About
  }
}

</script>
