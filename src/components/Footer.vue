<template>
<div class="container" >
  <div class="footer">

<div class="company">
    <div class="logo">
        <img src="../assets/logo2.png" class="logo-footer" alt="logo">
    </div>
    <div class="presentation">
        <p>Niantan Démolition est une société spécialisée dans les travaux de démolition et de térrassement mais dispose aussi d'une expertise dans les travaux d'aménagements. Nous opérons dans toute la région d'Ile-de-France.</p>
    </div>

</div>

<div class="links">
    <span class="title">Liens</span>
    <ul>
      <li @click="nav(services[0].id)">Nos Services</li>

     <li @click="nav(about[0].id)">A propos de Niantan Demolition</li>
     <li  @click="nav(contact[0].id)">Devis</li>
    <li  @click="nav(contact[0].id)">Contact</li>
    </ul>
</div>
  <div class="address">
<span class="title">Nous joindre</span>
          <div class="info">
<font-awesome-icon color="#FFCC00" icon="fas fa-mobile-alt" /> 
  <span><a href="tel:+33659288570"> +33 6 59 28 85 70</a></span>
  </div>
       <div class="info">
<font-awesome-icon color="#FFCC00" icon="far fa-clock" /> 
  <span>Lundi à Samedi : 7h - 19h</span>
  </div>


   <div class="info">
<font-awesome-icon color="#FFCC00" icon="fas fa-envelope" />
  <span>Niantandemolition@gmail.com</span>
  </div>
     <div class="info">
<font-awesome-icon color="#FFCC00" icon="fas fa-map-marker-alt" />
  <span>45 bis Boulevard Davout, 75020 Paris</span>
  </div>
        <div class="info">
<font-awesome-icon color="#FFCC00" icon="fas fa-subway" /> <span>Stations Porte de Montreuil ou Porte de Vincennes</span>
  </div>
        
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
     services:[
   {
id: 'services'}],
   about:[
   {
id: 'about'}]
  
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
.container{
        background: black;

}
.footer{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2%;
    color: white;;
        text-align: left;
        max-width: 2000px;
margin: auto;

    
}

.company{
    width: 25%;

    .logo{
        display: flex;
        align-items: center;
    .logo-footer{
   
    height: 25px;
    width: 53.36;
  
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

                span{
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