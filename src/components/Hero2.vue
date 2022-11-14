<template>
  <div class="hero-container"> 
    <div class="container-img">
        <img src="../assets/1035.webp" alt="" class="background">
      </div>
    <Header/>


    <div class="container">
     
      <div class="text">
<h1><span class="y">N</span>iantan <span class="y">D</span>emolition</h1>
<span>Terrassement et démolition</span>

<div><button  @click="nav(contact[0].id)">Demander un devis</button></div>
</div>
      <div class="picture">
        <div class="pic1">
      <img src="../assets/5.webp" class="big" alt="">
      

        </div>
        <div class="container-small">
          <div class="pic2">                        <img src="../assets/brok.webp" class="small" alt="">
</div>
<div class="pic3">
            <img src="../assets/2.webp" class="small" alt="">

</div>
        </div>
     
</div>


</div>

  </div>
</template>

<script>


import Header from '@/components/Header.vue'

export default {
  name: "Hero",
  components: {
    Header
  },

  data() {
    return {
image:"",
products:"",
selected:false,
     contact: [
   {
id: 'contact'}],

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

<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2%;
}

//linear-gradient(rgba(10, 0, 156, 0.274),rgba(10, 0, 156, 0.274)),
.hero-container {
min-height: 100vh;
background: black;
 background:linear-gradient(rgba(0, 0, 0, 0.747),rgba(0, 0, 0, 0.671)),url('../assets/1035.webp');


 color: white;
 padding: 0;
 margin: 0;
}

.container-img{ 
   position: absolute;
display: none;

  z-index: -1;


}
.background{
  object-fit: cover;
    width: 100vw;
    filter: brightness(50%);


}
.text {
    text-align: left;
    width: 50%;
                animation: moveright 1s linear;




    h1,.y {
            font-size: 60px;
            font-weight: 600;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;

            }

            
    .y {
            font-size: 60px;
            font-weight: 600;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color:rgb(255, 208, 0);

            }

            span{
              font-size: 35px;
            }


            button{
              font-size: 25px;
              border: 1px solid white;
              border-radius: 25px;
              background: transparent;
              font-weight: bold;
              color: white;
              padding: 10px 25px;
              margin: 25px auto;
              font-family: 'Raleway', sans-serif;
              cursor:pointer;
                  transition: .5s ease-in-out;


              &:hover{
       background:rgb(255, 208, 0);
    border: 1px solid transparent;
    cursor: pointer;
    transition: .5s ease-in-out;
    color:  black;
}
            }

    
}

           .picture{
            display: flex;
            animation: moveleft 1s linear;
           }



.big{
  height: 500px;
  width: 350px;
  object-fit: cover;
  border-radius: 20px;
  padding: 10px;
}
.small{
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 20px;
    padding: 5px;

}

  @keyframes moveleft {

        0% {
            transform: translateX(800px);
        }
        100% {
            transform: translateX(0px);
    
        }
    }
      @keyframes moveright {

        0% {
            transform: translateX(-800px);
        }
        100% {
            transform: translateX(0px);
    
        }
    }




@media (max-width:1100px) {

.hero-container{
      background: black;

}
  .container{
    flex-direction: column;
  }
  .background{ 
    display: none;
  }
  .text {
    margin: 2% 0 0 0;
    padding: 0;
    text-align: center;
    width: 100%;

    h1 {
    font-size: 50px;
  }

  span{
    font-size: 30px;
  }
  }

 
 
 .container-small{
  display: flex;
    flex-direction: column;
 }
}

@media (max-width:700px) {
   .picture{
    flex-direction: column;
  }
   .container-small{
    flex-direction: row;
 }


}
@media (max-width:600px) {
   .picture{
    flex-direction: column;
  }
   .container-small{
    flex-direction: column;
 }
}


</style>