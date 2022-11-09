<template>
  <div class="hero-container">

    <Header/>

    <div class="front-title">
      <h1>NIANTAN DEMOLITION</h1>
      <h2>Terrassement et démolition</h2>
      </div>


  <div class="box">
        <div ><button class="box-contact" @click="nav(price[0].id)">Recevez un devis</button></div>

  </div>



 
  </div> 
</template>

<script>

import Header from '@/components/Header.vue'
export default {
    name: 'Hero',
  components: {
    Header
  },
  data(){
    return {

 services: [
   {
id: 'services'}],

    }
  },
  methods:{
    nav(id) {

const position = document.getElementById(id).offsetTop;
  // smooth scroll
 window.scrollTo({ top: position, behavior: "smooth" });  
},
  }
}
</script>

<style>
.hero-container {
    background:linear-gradient(rgba(0, 0, 0, 0.742),rgba(0, 0, 0, 0.742)),url('../assets/wallpaper.jpg') ;
   color:white;
    background-position: center;
    background-size: cover;
     background-repeat: no-repeat;
    min-height: 100vh;
    padding: 0;
    margin:0;
}

 h1{
  color: white;
  font-weight: 700;
  font-size: 80px;
padding-top: 10%;
}


h2{
    margin: 25px 0 ;
    font-size: 50px;
}


  .box{
    display: flex;
    justify-content: center;
    margin: 10vh  0 50px 0;
  }

 
  .box-contact{
        width: 200px;
        height: 60px;
            font-size: 20px;
         background: transparent;
    color: white;
    font-weight: bold;
    border: 1px solid white;
        cursor: pointer;
        transition: 0.5s;

  }


  .box-contact:hover{
       transition: 0.5s;
       background:rgb(220, 200, 20);
       color: black;
       border: none;
  }
  .anchor{
    height: 80px;
    animation: MoveUpDown 3s linear infinite;
    margin: 25px auto auto auto;
  position: relative;
  cursor: pointer;
  
  }
  @keyframes MoveUpDown {
  0%, 100% {
    bottom: 10px;
  }
  50% {
    bottom: 50px;
  }
}

@media (max-width:1000px) {
  .front-title h1{
  font-size: 70px;
padding-top: 10%;
}
}
@media (max-width:700px) {
  .front-title h1{
  font-size: 50px;
padding-top: 10%;
}
}
</style>