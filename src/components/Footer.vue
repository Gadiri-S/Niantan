<template>
  <div class="footer">

<div class="company">
    <div class="logo">
        <img src="../assets/logo.png" class="logo-footer" alt="logo">
    </div>
    <div class="presentation">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo, veritatis beatae cupiditate minus adipisci!</p>
    </div>

</div>

<div class="links">
    <span class="title">Liens</span>
    <ul>
      <li>Nos Services</li>

     <li>A propos de Niantan Demolition</li>
     <li  @click="nav(reviews[0].id)">Devis</li>
    <li  @click="nav(contact[0].id)">Contact</li>
    </ul>
</div>
  <div class="address">
<span class="title">Nous joindre</span>
          <div class="info">
<i class="fas fa-mobile-alt"></i>
  <span><a href="tel:+33659288570"> +33 6 59 28 85 70</a></span>
  </div>
       <div class="info">
                   <i class="far fa-clock"></i>
  <span>Lundi à Samedi : 7h - 19h</span>
  </div>


   <div class="info">
  <i class="fas fa-envelope"></i>
  <span>Niantandemolition@gmail.com</span>
  </div>
     <div class="info">
<i class="fas fa-map-marker-alt"></i>
  <span>45 bis Boulevard Davout, 75020 Paris</span>
  </div>
        <div class="info">
<i class="fas fa-subway"></i>  <span>Stations Porte de Montreuil ou Porte de Vincennes</span>
  </div>
        
    </div>


  </div>
</template>

<script>
export default {
name:'Footer',
    data(){
      return {
         contact:[
   {
id: 'contact'}],
     faq:[
   {
id: 'faq'}],
   reviews:[
   {
id: 'reviews'}]
  
      }
    },
    methods:{
       nav(id) {

const position = document.getElementById(id).offsetTop;
  // smooth scroll
 window.scrollTo({ top: position, behavior: "smooth" });  
}
    }
}
</script>

<style lang='scss' scoped>

.footer{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2%;
    background: black;
    color: white;;
        text-align: left;

    
}

.company{
    width: 25%;

    .logo{
        display: flex;
        align-items: center;
    .logo-footer{
        height: 50px;
        width: auto;
    }
    span{

              transition: .3s ease-in-out;

    }}
     


    .presentation {
        p {
            font-size: 17px;
                    margin: 25px 0;

        }
    }
}

.links {

    
    

    li{
        list-style: none;
        font-size: 18px;
        margin: 15px 0;
        cursor: pointer;
            transition: .3s ease-in-out;


                      &:hover{
    color: rgb(255, 208, 0);
    cursor: pointer;
    transition: .3s ease-in-out;
}

    }
}

.title{
        font-size: 20px;
        font-weight: bold;
              transition: .3s ease-in-out;


                      &:hover{
    color: rgb(255, 208, 0);
    cursor: pointer;
    transition: .3s ease-in-out;
}
}


.newsletter{
    display: flex;
    flex-direction: column;
       span{
        font-size: 20px;
    }
    p{
        font-size: 17px;
        margin: 15px 0;
    }

    input,button{
        font-size:18px;
        border-radius: 25px;
        padding: 10px;
        background: transparent;
        color: white;
        border: 1px solid white;
        margin: 15px 0;
    }
}

.info{
            margin: 15px 0;
            font-size: 18px;
            transition: .4s ease-in-out;
            cursor: pointer;

            &:hover{
                color:rgb(255, 208, 0);
                            transition: .4s ease-in-out;

            }

                i{
                    margin: 0 5px;
                }
}
@media (max-width:1000px) {

    .footer{
            flex-direction: column;
            align-items: center;
}
    .company{
        width: 100%;
        margin: 25px 0;
    }
    .links,.address{
        width: 100%;
     margin: 25px 0;} 
}

</style>