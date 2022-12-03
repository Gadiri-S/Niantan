<template>
  <div class="hero-container"> 
    <div class="container-img">
      </div>
    <Header />


    <div class="container">
     
      <div class="text">
<h1><span class="yellow-highliner">N</span>iantan <span class="yellow-highliner">D</span>emolition</h1>
<span>Terrassement et démolition</span>
<p>Niantan Démolition est une société spécialisée dans les travaux de démolition et de térrassement mais dispose aussi d'une expertise dans les travaux d'aménagements. Nous opérons dans toute la région d'Île-de-France.</p>

<div><button  @click="nav(contact[0].id)">Demander un devis</button></div>
</div>
      <div class="picture">
        <div class="picture-one">
      <img src="../assets/demolition.webp" class="big-picture" alt="Immeuble détruit par une machine spécialisée">
      

        </div>
        <div class="container-small">
          <div class="picture-two">                        <img src="../assets/excavator.webp" class="small-picture" alt="Excavator">
</div>
<div class="picture-three">
            <img src="../assets/terrassement.webp" class="small-picture" alt="Machine de térrassement travaillant sur un chantier de destruction">

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
    overflow-x: hidden;
        max-width: 2000px;
margin: auto;      

}

.hero-container {
background: black;
 background:linear-gradient(rgba(0, 0, 0, 0.847),rgba(0, 0, 0, 0.871)),url('../assets/1035.webp');
 background-size: cover;
  box-sizing: border-box;
  background-position: top;
  min-height: 700px;

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




    h1{
            font-size: 60px;
            font-weight: 600;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;

            }

            
    .yellow-highliner{
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

      p{
        font-size: 20px;
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



.big-picture{
  height: 500px;
  width: 350px;
  object-fit: cover;
  border-radius: 20px;
  padding: 10px;
}
.small-picture{
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




@media (max-width:1000px) {

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

@media (max-width:400px) {

  .text {
    text-align: center;
    width: 100%;
                animation: moveright 1s linear;




    h1{
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;

            }

            
    .yellow-highliner {
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color:rgb(255, 208, 0);

            }

            span{
              font-size: 25px;
            }

      p{
        font-size: 20px;
      }
            button{
              font-size: 20px;
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
   .big-picture{
  height: 400px;
  width: 250px;
  object-fit: cover;
  border-radius: 20px;
  padding: 10px;
}
}

</style>