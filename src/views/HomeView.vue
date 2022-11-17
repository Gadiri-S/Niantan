<template>
  <div class="home">
    
    <Hero2 v-once />
    <Services id='services' v-once />
    <About id='about' v-once />
    <Contact id='contact'/>
    <Footer v-once />

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

<style scoped>
.home{

}
</style>