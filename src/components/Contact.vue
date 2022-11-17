<template>

<div class="wrapper">
  <div class="container">

    <div class="header">
        <h1><span class="y">C</span>ONTACT ET <span class="y">D</span>EVIS</h1>

        <h2>Pour toute demande d'information veuillez remplir le formulaire ci-dessous ou contactez nous directement par téléphone</h2>
    </div>


<div v-if="isFormCorrect">
<div class="success">
  <span>Votre message a bien été envoyé</span>
<span class="icon">  <font-awesome-icon  icon="far fa-check-circle" /></span>

</div>
</div>
<div v-else>
  <form ref="form" @submit.prevent="handleSubmit">
        <input type="text" placeholder="Prenom*" v-model="firstname" name='firstname'  @blur="v$.firstname.$touch" required>
          <div v-if="v$.firstname.$error" class="error">Ce champ est obligatoire.</div>
        
        <input type="text" placeholder="Nom de famille*" v-model="lastname" name='lastname'  @blur="v$.lastname.$touch" required> 
                  <div v-if="v$.lastname.$error" class="error">Ce champ est obligatoire.</div>
        
        <input type="email" placeholder="Email*" v-model="email" name='email' @blur="v$.email.$touch" required>
                  <div v-if="v$.email.$error" class="error">Veuillez entrer une adresse email valide.</div>
       
        <input type="tel" placeholder="Telephone*" v-model="tel" name='tel'  @blur="v$.tel.$touch" required>
                  <div v-if="v$.tel.$error" class="error">Veuillez entrer un numéro de téléphone valide.</div>
        
        <input type="text" placeholder="Nom de la société*" v-model="business" name='business' @blur="v$.business.$touch" required>
                  <div v-if="v$.business.$error" class="error">Ce champ est obligatoire.</div>
       
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message*" v-model="message" @blur="v$.message.$touch" required></textarea>
                  <div v-if="v$.message.$error" class="error">Ce champ est obligatoire.</div>

        <button @click="send">Envoyer</button>

    </form>
</div>
    
    
    <div class="infos">

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
<font-awesome-icon color="#FFCC00" icon="fas fa-subway" />  <span>Stations Porte de Montreuil ou Porte de Vincennes</span>
  </div>
        
    </div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.382407658975!2d2.411002513585662!3d48.85091788134698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6727e19d6e61b%3A0x5d3218b5f9fdc607!2s45%20Bd%20Davout%2C%2075020%20Paris!5e0!3m2!1sfr!2sfr!4v1667895568309!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="niantan-demolition-location"></iframe>  </div>
</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, alpha, numeric, alphaNum } from '@vuelidate/validators'
import emailjs from '@emailjs/browser';

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstname: '',
      lastname: '',
        email: '',
        tel:'',
        message:'',
        business:'',
        isFormCorrect:"",
                     submitted: false

    }
  },
  validations () {
    return {
      firstname: { required }, // Matches this.firstName
      lastname: { required }, // Matches this.lastName
        email: { required }, // Matches this.contact.email
        business: { required }, // Matches this.lastName
      message: { required }, // Matches this.lastName
      tel: { numeric }, // Matches this.lastName
            tel: { required }, // Matches this.lastName


  
    }
  },
    created() {
            setTimeout(() => this.isFormCorrect = false, 1000)
        },
   methods: {
           async send() {
                this.submitted = true;
const isFormCorrect = await this.v$.$validate();
this.isFormCorrect = isFormCorrect

/*if (isFormCorrect==true) {
emailjs.sendForm('service_qx8ql38', 'template_wlflq6g', this.$refs.form, 'iMSRNYA0xKflKPitU')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });}


    
*/


      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return console.log('error')
            }
        }
}
</script>

<style lang="scss" scoped>

.wrapper{

    background: #000000;

}
.success{
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 450px;
  border-radius: 15px;
    background: rgb(43, 43, 43);
    color: rgb(0, 255, 179);
    margin: auto;

  span{
    font-size: 25px;
    color: rgb(0, 255, 179);
        margin: 25px auto;

  }
  .icon{
     font-size: 45px;
    color: rgb(0, 255, 179);
    margin: 25px auto;
  }
}
.container{
    padding:2%;
color: white;
            word-break:normal;
   max-width: 2000px;
  margin: auto;
}
  .fa-solid{
        margin: 0 10px;
        color:rgb(255, 208, 0);
    }
.header{
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}
  h1{
              font-size:45px;
              color:white;
            }

            h2{
                font-size: 25px;
            }

.infos{

display: flex;
flex-direction: column;
align-items: center;



.info{

    display: flex;
    font-size:25px;
color: white;
    font-weight: 500;
    padding: 25px 0;

  
span{
  margin-left: 10px;
}

}
}
button{
    background: transparent;
    border: 1px solid white;
    color: white;
    margin: 10px 0;
            transition: .4s ease-in-out;
            font-size: 25px;
            border-radius: 20px;
            padding: 10px;
            cursor: pointer;


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

.error{
    color: red;
}

form{
    display: flex;
    flex-direction: column;
    width: 550px;
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
                              font-size:45px;

                

}

              @media (max-width:800px) {
                form{
                    width: 80%;
                }

                span{
                    font-size: 18px;
                }

                              .success{

  height: 300px;
  width: 90%;
  padding: 15px;

 

  }
              }


</style>