<template>
      <nav class="navbar nav2" style="background-color: white;">
  <div>
    <a class="nav-brand2" href="#">
      <img src="@/assets/ptf_banner2.png" alt="Logo" class="navbar-image">
    </a>
  </div>
</nav>


<nav class="navbar navbar1 navbar-expand-lg " >
  <div class="container-fluid">
    <a class="navbar-brand" href="/home" style="margin-left: 10px;">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/contact">Contact Us</a>
        </li>
       
      
      </ul>
     
      <div>

      <v-text-field class="srch"
        :loading="loading"
        append-inner-icon="fa-solid fa-magnifying-glass"
        density="compact"
        label="Search"
        hide-details
        single-line
        style="width: 300px; margin-right: 300px;"
        @click:append-inner="onClick"
       
      ></v-text-field></div>


      <div class="btn-group" style="margin-bottom:auto;">
  <a href="https://www.facebook.com/prathibhatheeram/" class="btn " target="_blank"><img src="@/assets/fb.png" alt="Logo" width="25" height="25"></a>
  <a href="https://www.youtube.com/channel/UCImzgB1bJGG1Uij5KNcupIw" class="btn " target="_blank"><img src="@/assets/yt3.webp" alt="Logo" width="30" height="30"></a>
  <a href="https://in.pinterest.com/foundationprathibhatheeram/" class="btn " target="_blank"><img src="@/assets/Pinterest.png" alt="Logo" width="23" height="23" ></a>
</div>
     
    </div>
    
  </div>
  
</nav>
  <router-view></router-view>
 
  <footer
    class="bg text-center d-flex flex-column">
    <img src="@/assets/ptf_banner3.png" alt="Logo" class="footerlogo">
    <div >
      
      <a href="https://www.facebook.com/prathibhatheeram/" target="_blank" class="linking"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.youtube.com/channel/UCImzgB1bJGG1Uij5KNcupIw" target="_blank" class="linking"><i class="fa-brands fa-youtube"></i></a>
      <a href="https://in.pinterest.com/foundationprathibhatheeram/" target="_blank" class="linking"><i class="fa-brands fa-pinterest"></i></a> 
      <a href="mailto:foundation.prathibhatheeram@gmail.com" target="_blank" class="linking"><i class="fa-solid fa-envelope"></i></a>
      <a href="tel:+91 99476 17322" target="_blank" class="phone"><i class="fa-solid fa-phone"></i></a>
    </div>

   
      <h5 style="padding-top: 12px;"> Prathibhatheeram Foundation</h5>
      Prathibhatheeram is an innovative educational initiative launched in the coastal stretch of the Alappuzha constituency. The project aims to bridge educational gaps and provide enhanced learning opportunities for students residing in coastal areas. By collaborating with local coastal libraries, Prathibha Theeram seeks to create a network of learning centers that cater specifically to the needs of coastal students.
    

    <divider></divider>

    <hr class="line">
    <div style="padding-bottom: 20px;"> Copyright © 2024 prathibhatheeram.org All Rights Reserved.</div>
  </footer>

</template>





<style scoped>
.navbar1{
    width: 100%;
    right: 0;
    position: sticky;
    top: 0;
    z-index: 1000;

   
    background-image: radial-gradient(circle at top right, rgb(71, 210, 249) 0%, rgb(86, 172, 233) 13%,rgb(122, 192, 245) 13%, rgb(76, 166, 234) 23%,rgb(103, 176, 232) 23%, rgb(103, 176, 232) 33%,rgb(130, 185, 231) 33%, rgb(135, 196, 245) 46%,rgb(182,233,246) 46%, rgb(182,233,246) 48%,rgb(175,217,240) 48%, rgb(175,217,240) 63%,rgb(189,223,248) 63%, rgb(189,223,248) 83%,rgb(175, 214, 241) 83%, rgb(132, 212, 244) 100%);
}    
.nav2 {
  padding: 0; 
}

.nav-brand2 {
  width: 100%;
  padding: 0;
}

.navbar-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.linking {
  text-decoration: none;
  color: inherit; 
padding: 15px;
padding-bottom: 20px;
}

.linking:hover {
  color: inherit;
}
.linking i {
  font-size: 1.5em; 
  color: rgb(123, 141, 163);
}
.phone{
  text-decoration: none;
  color: inherit; 
padding: 15px;
padding-bottom: 20px;
}

.phone i{
  font-size: 1.3em; 
  color: rgb(123, 141, 163);
}


.footerlogo{
  width: 17%; 
 margin-left: 42%;
  object-fit: cover; 
  padding-top: 20px;
  padding-bottom: 10px;
}

.bg{
  background-color: rgb(68, 89, 105);
  color: antiquewhite;
}
.line {
  border: 0;
  height: 3px;
  background: #f9f6f6;
  margin: 10px 50px; 
}
    
    
    </style>
    <script>


    export default {
      data: () => ({
        loaded: false,
        loading: false,
        
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      }),
  
      methods: {
        onClick () {
          this.loading = true
  
          setTimeout(() => {
            this.loading = false
            this.loaded = true
          }, 2000)
        },
      },
    }

</script>
  
