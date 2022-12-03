<template>
  <div class="hero-container">

    <div class="text">
<h1><span class="yellow-highliner">N</span>OS <span class="yellow-highliner">V</span>ALEURS</h1>

</div>
    <div class="container">
  
  <div class="value fade">
    <span><font-awesome-icon icon="far fa-check-circle" /> Intégrité</span>
    <p>Nous avons la conviction absolue que l'intégrité, l'honnêteté et la transparence ne sont pas des valeurs négociables dans le secteur du bâtiment.</p>
  </div>
    <div class="value fade">
    <span> <font-awesome-icon icon="far fa-check-circle" /> Ponctualité</span>
    <p>Un chantier en retard représente une perte financière énorme ainsi qu'une paralysie parfois fatale de votre activité. Chez Niantan Démolition nous mettons tout en ordre pour répondre en un plus bref délai à vos exigeances. <br> Avec Niantan Démolition, fini les chantiers qui s'éternisent!</p>

  </div>
    <div class="value fade">
    <span> <font-awesome-icon icon="far fa-check-circle" /> Profesionnalisme</span>
    <p>L'utilisation d'équipement non adapté ainsi que le recours à une main d'oeuvre non qualifiée sont tout autant d'éléments qui peuvent conduire vos travaux à s'éterniser et, sur le long terme, mettre à mal vos finances. C'est pour cela que Niantan Démolition ne fait recours qu'à une main d'oeuvre qualifiée et des équipements parfaitement adaptés à vos besoins.</p>

  </div>
 




</div>

  </div>
</template>

<script>



export default {
  name: "Hero",
  components: {
  },


    data(){
        return {

        }
    },
    mounted() { 
this.fadeInElements = Array.from(document.getElementsByClassName('fade'));
document.addEventListener('scroll', this.handleScroll)
},
destroyed() { 
  document.removeEventListener('scroll', this.handleScroll)
},
    methods:{
      isElemVisible(el) {
    const rect = el.getBoundingClientRect()
    const elemTop = rect.top + 200 // buffer
    const elemBottom = rect.bottom
    return elemTop < window.innerHeight && elemBottom >= 0
},
  handleScroll() {
    for (let i = 0; i < this.fadeInElements.length; i++) {
    const elem = this.fadeInElements[i]
    if (this.isElemVisible(elem)) {
        elem.style.opacity = '1'
        elem.style.transform = 'scale(1)'
        this.fadeInElements.splice(i, 1) // Pour jouer l'animation seulement une fois
    }
    }}
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
    max-width: 2000px;
    margin: auto;
}

//linear-gradient(rgba(10, 0, 156, 0.274),rgba(10, 0, 156, 0.274)),
.hero-container {
   background: #000000;


 color: white;
}
.fade {
  opacity: 0;  
	transition: 0.3s all ease-out;  
	transform: scale(0.8);  
	box-sizing: border-box;  }
.text {
    text-align: center;
    width: 100%;




    h1{
              font-size:45px;
            padding: 25px 0;
            text-transform: uppercase;

            }

            
    .yellow-highliner{
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
                padding: 15px;
                text-align: left;
            }
            display: flex;
            flex-direction: column;
            width: 350px;
            margin: 15px;
            border-radius: 15px;
    background: rgb(43, 43, 43);
           }









@media (max-width:700px) {


 .hero-container {
background: #000000;


}
}
@media (max-width:400px) {
.text {
    text-align: center;
    width: 100%;




    h1{
              font-size:35px;
            padding: 25px 0;
            text-transform: uppercase;

            }

            
    .yellow-highliner{
              font-size:35px;
            margin-bottom: 25px;
            text-transform: uppercase;
            color:rgb(255, 208, 0);

            }

         

      

    
}

           .value{
            span{
                font-size: 20px;
                margin: 10px 0;
                font-weight: 600;
                            color:rgb(255, 208, 0);

            }

            p{
                line-height: 30px;
                padding: 15px;
                text-align: left;
            }
            display: flex;
            flex-direction: column;
            width: 300px;
            margin: 15px;
            border-radius: 15px;
    background: rgb(43, 43, 43);
           }


}


</style>