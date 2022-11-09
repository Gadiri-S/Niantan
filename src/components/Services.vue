

<template>
  <div class="services">

<h1><span class="y">N</span>OS <span class="y">S</span>ERVICES</h1>
      <div class="card-container">
 
      <div class="card">
          <div class="img-container"> <img src="../assets/d.webp"  class="img fade" alt=""></div>
           <div class="card-text">
            <span>Démolition</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>

      </div>
     
      <div class="card">
           <div class="card-text">
            <span>Térrassement</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>
           <div class="img-container"> <img src="../assets/e.webp"  class="img fade" alt=""></div>

      </div>

     
      

      </div>


          <div class="additional-services">
            <h1><span class="y">N</span>os <span class="y">s</span>ervices <span class="y">a</span>dditionnels</h1>


            <div class="card">
          <div class="img-container"> <img src="../assets/handy.webp"  class="img fade" alt=""></div>
           <div class="card-text">
            <span>Curage</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>

      </div>
     
      <div class="card">

           <div class="card-text">
            <span>Remise aux normes</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>
                   <div class="img-container"> <img src="../assets/elec.webp"  class="img fade" alt=""></div>

      </div>
         
            <div class="card">
          <div class="img-container"> <img src="../assets/f.jpg"  class="img fade" alt=""></div>
           <div class="card-text">
            <span>Néttoyage après incendie</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>

      </div>
     
      <div class="card">

           <div class="card-text">
            <span>Raffraîchissement</span>
            <div class="underline-title"></div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quos. Alias molestias at facilis excepturi!</p>
           </div>
                   <div class="img-container"> <img src="../assets/scaf.webp"  class="img fade" alt=""></div>

      </div>

          </div>
   
  </div>
</template>

<script>
export default {

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


.services {
    color:white;
    background:rgb(34, 34, 34);
    background-position: center;
    background-size: cover;
     background-repeat: no-repeat;
            min-height: 100vh;
            padding: 3%;
word-break: break-word;
            h1{
              font-size:45px;
              color:white;
            }

}

.y{
                color:rgb(255, 208, 0);

}

.underline-title {
     width: 120px;
    height: 7px;
    background:  #ffe600;;
    margin: 5px auto 40px auto;
}
.card-container {
    display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
    height: 350px;
    width: 450px;
    object-fit: cover;
    border-radius: 15px;
}




.card {
display: flex;
  font-size: 1.2rem;
  color: white;
  padding: 25px;
}

.img-container{
  width: 50%;
}
.card-text{
  width: 50%;
  margin: 5px;
}
.card-text span{
  font-size: 40px;
}
.card-text p{
  text-align: left;
}






@media (max-width:1100px) {

.card{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.card:nth-child(even){
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container{
  width: 90%;
}
.img{
  height: 300px;
  width: 300px;
}

.card-text{
  width: 90%;
  margin: 5px;
}

}

.fade {
  opacity: 0;  
	transition: 0.3s all ease-out;  
	transform: scale(0.8);  
	box-sizing: border-box;  }
@keyframes moveright {
0% {
    transform: translateX(500px);
}
100% {
    transform: translateX(0px);
}
}



@media (max-width:700px) {

  .img{
  height: 250px;
  width: 90%;
}
 
}

@media (max-width:701px) {

}
</style>

