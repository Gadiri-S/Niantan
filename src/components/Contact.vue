<template>
  <div class="container">

    <div class="header">
        <h1><span class="y">C</span>ONTACT</h1>
    </div>


    <form action="">
        <input type="text" placeholder="Prenom*" required>
        <input type="text" placeholder="Nom de famille*" required> 
        <input type="mail" placeholder="Email*" required>
        <input type="tel" placeholder="Telephone*" required>
        <input type="text" placeholder="Nom de la société*" required>
        <textarea name="" id="" cols="30" rows="10" placeholder="Votre message*" required></textarea>
        <button>Envoyer</button>
    </form>
    
    <div class="infos">

          <div class="info">
<i class="fas fa-mobile-alt"></i>
  <span>+33 7 78 64 49 27 </span>
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

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.382407658975!2d2.411002513585662!3d48.85091788134698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6727e19d6e61b%3A0x5d3218b5f9fdc607!2s45%20Bd%20Davout%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1667895568309!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    padding:2%;
    min-height: 100vh;
  background: #000000;
color: white;
            word-break:normal;

}

.header{
    padding: 20px 0;
}
  h1{
              font-size:45px;
              color:white;
            }

.infos{

display: flex;
flex-direction: column;
align-items: center;

.info{

    display: flex;
    font-size:25px;
color: white;
    font-weight: 700;
    padding: 25px 0;

    i{
        margin: 0 10px;
        color:rgb(255, 208, 0);
    }


}
}
button{
    background: transparent;
    border: 1px solid white;
    color: white;
    margin: 10px 0;
            transition: .4s ease-in-out;


    &:hover{
        background:rgb(255, 208, 0);
        border: 1px solid transparent;
        transition: .4s ease-in-out;
        color: black;
    }
}


iframe{
    width: 100%;
}

form{
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 25px auto;
    background: rgb(43, 43, 43);
    padding: 20px;
    border-radius: 15px;
    
    input,textarea{
        border-radius: 5px;
        border: none;
box-shadow: rgba(20, 20, 20, 0.24) 0px 3px 8px;    font-size:20px;
    padding: 6px 6px 6px 10px;
    margin: 5px 0;

    }
}

.y{
                color:rgb(255, 208, 0);

}

              @media (max-width:800px) {
                form{
                    width: 80%;
                }

                span{
                    font-size: 18px;
                }
              }
</style>