<template>
  <div>

    <!--Menu Mobile & Tablet-->
    <div class="header-mobile">

        <div class="container-first-row">

<div class="logo">
    <img src="../assets/logo.png"  class="logo" alt="">
</div>
<div class="menu-burger" @click="showMenu">
    <img src="../assets/burgerwhite.png"  class="menu-burger" alt="">
</div>
</div>
<transition name="nested">
<div v-if="show" class="nav-menu-mobile">
        <ul>
            <li @click="nav(services[0].id)">Nos Services</li>
            <li @click="nav([0].id)">A propos de Niantan Démolition</li>
            <li @click="nav(contact[0].id)">Devis</li>
            <li @click="nav(contact[0].id)">Contact</li>
        </ul>
    </div>
</transition>
</div> 

 
 <!--Menu Desktop-->

 <div class="header">

    <div class="logo">
        <img src="../assets/logo.png"  class="logo" alt="">
    </div>

    <div class="nav-menu">
        <ul>
            <li @click="nav(services[0].id)">Nos Services</li>
            <li @click="nav(rates[0].id)">A propos de Niantan Démolition</li>
            <li @click="nav(about[0].id)">Devis</li>
            <li @click="nav(contact[0].id)">Contact</li>
        </ul>
    </div>

<div>
    <button>+33 778644927</button>
</div>
 </div> 
 </div>
</template>

<script>
export default {
    data(){
        return {

                show:false,
                contact: [
   {
id: 'contact'}],
 services: [
   {
id: 'services'}],
about: [
   {
id: 'about'}],
rates: [
   {
id: 'rates'}],

        }
    },
    methods:{
        showMenu(){
    
            this.show = !this.show
        },
        nav(id) {

const position = document.getElementById(id).offsetTop;
  // smooth scroll
 window.scrollTo({ top: position, behavior: "smooth" });  
}
    }

}
</script>

<style lang="scss">

.header-mobile,.container-first-row{
    display: none;
}

.header{
    display: flex;
    justify-content: space-around;
    background:transparent;
    padding: 15px;
    color:white;
}
.nav-menu{
    display: flex;
    align-items: center;
    

    ul {
        
        display: flex;
        align-items: center;
        
        transition: all .4s ease;


    li{
        list-style-type:none;
        margin: 0 15px 0 15px;
        font-size: 20px;
        transition: all .4s ease;
        cursor:pointer;

        &:hover{
            color: rgb(255, 208, 0);
        }

    }
     
}
}
.logo{
    height: 30px;
}

 button{
        font-size: 20px;
        padding: 10px;
        border-radius: 25px;
        background:  rgb(238, 214, 0);;;
        border: none;
        color:black;
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
              cursor:pointer;   
  
              
              }
/*Responsive mobile & tablets*/ 

@media (max-width:1000px) {
    .header{
        display: none;
    }

    .header-mobile{
        display: block;

    }
    .container-first-row{
        display: flex;
        justify-content: space-around;
        padding:15px;
    }
    .menu-burger{
        height: 35px;
        cursor: pointer;
    }

    .nav-menu-mobile{

   
        ul li{
            list-style-type: none;
            font-size: 25px;
            margin: 15px 0 15px 0;
            cursor: pointer;

            &:hover{
                background: rgba(255, 255, 255, 0.274);
                transition: .5s;
            }
        }
    }

    .nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
}

</style>