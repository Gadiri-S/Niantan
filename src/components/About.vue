<template>
  <div class="hero-container">

    <div class="text">
<h1><span class="y">N</span>OS <span class="y">V</span>ALEURS</h1>

</div>
    <div class="container">
  
  <div class="value">
    <span><i class="far fa-check-circle"></i> Intégrité</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quod aperiam officiis impedit dignissimos voluptatem, voluptate ipsum voluptas sequi qui fuga suscipit, eos earum temporibus nihil ipsam? Odio, placeat numquam!</p>
  </div>
    <div class="value">
    <span> <i class="far fa-check-circle"></i> Ponctualité</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quod aperiam officiis impedit dignissimos voluptatem, voluptate ipsum voluptas sequi qui fuga suscipit, eos earum temporibus nihil ipsam? Odio, placeat numquam!</p>

  </div>
    <div class="value">
    <span> <i class="far fa-check-circle"></i> Profesionnalisme</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quod aperiam officiis impedit dignissimos voluptatem, voluptate ipsum voluptas sequi qui fuga suscipit, eos earum temporibus nihil ipsam? Odio, placeat numquam!</p>

  </div>
 




</div>

  </div>
</template>

<script>



export default {
  name: "Hero",
  components: {
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
    flex-wrap: wrap;
}

//linear-gradient(rgba(10, 0, 156, 0.274),rgba(10, 0, 156, 0.274)),
.hero-container {
   background: #000000;


 color: white;
 min-height: 100vh;
}

.text {
    text-align: center;
    width: 100%;




    h1,.y {
              font-size:45px;
            margin-bottom: 25px;
            text-transform: uppercase;

            }

            
    .y {
              font-size:45px;
            margin-bottom: 25px;
            text-transform: uppercase;
            color:rgb(255, 208, 0);

            }

         

      

    
}

           .value{
            span{
                font-size: 25px;
                margin: 10px 0;
                font-weight: 600;
                            color:rgb(255, 208, 0);

            }

            p{
                line-height: 30px;
            }
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 350px;
            margin: 15px;
            border-radius: 15px;
    background: rgb(43, 43, 43);
           }







@media (max-width:900px) {


 
 

}

@media (max-width:700px) {


 .hero-container {
background: #000000;


}
}
@media (max-width:600px) {

}


</style>