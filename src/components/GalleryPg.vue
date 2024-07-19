<template>
 
  <div class="d-flex flex-wrap gap-5 imgcard">
    <div v-for="image in images" :key="image.url">
      <img @click="viewimage(image.url)" :src="image.url" class="image-thumbnail" />
    </div>
    <v-dialog v-model="dia" max-width="1020px" class="dialog">
      <template v-slot>
        <div class="dialog-content">
          <i @click="dia=!dia" class="fa-regular fa-circle-xmark closebtn"></i>
          <div class="outbox">
            <div class="image-navigation">
              <i @click="prevImage" class="fa-solid fa-chevron-left nav-icon"></i>
              <img :src="currenturl" class="popimg">
              <i @click="nextImage" class="fa-solid fa-chevron-right nav-icon"></i>
            </div>
            <div>
            <div class="dialog-buttons me-4">
            <i @click="downloadImage" class="fa-sharp fa-solid fa-download mb-3" ></i>
            <i @click="shareImage" class="fa-sharp fa-solid fa-share-nodes"></i>
          </div>
          
            
          
          </div>
         
        </div>
      </div>
      </template>
    </v-dialog>
  </div>
</template>

<style scoped>
.outbox {
  display: flex;
  background-image: radial-gradient(circle at top right, rgb(6, 134, 232) 0%, rgb(86, 172, 233) 13%, rgb(122, 192, 245) 13%, rgb(76, 166, 234) 23%, rgb(103, 176, 232) 23%, rgb(103, 176, 232) 33%, rgb(130, 185, 231) 33%, rgb(135, 196, 245) 46%, rgb(182, 233, 246) 46%, rgb(182, 233, 246) 48%, rgb(175, 217, 240) 48%, rgb(175, 217, 240) 63%, rgb(189, 223, 248) 63%, rgb(83, 172, 235) 83%, rgb(115, 189, 242) 83%, rgb(29, 174, 246) 100%);
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 70%;
  height: 70vh;
  overflow: hidden;
}
.imgcard {
  background-image: radial-gradient(circle at 75% 26%, rgba(116, 116, 116, 0.04) 0%, rgba(116, 116, 116, 0.04) 50%, rgba(222, 222, 222, 0.04) 50%, rgba(222, 222, 222, 0.04) 100%), radial-gradient(circle at 62% 63%, rgba(60, 60, 60, 0.04) 0%, rgba(60, 60, 60, 0.04) 50%, rgba(152, 152, 152, 0.04) 50%, rgba(152, 152, 152, 0.04) 100%), radial-gradient(circle at 80% 64%, rgba(108, 108, 108, 0.04) 0%, rgba(108, 108, 108, 0.04) 50%, rgba(252, 252, 252, 0.04) 50%, rgba(252, 252, 252, 0.04) 100%), radial-gradient(circle at 97% 83%, rgba(184, 184, 184, 0.04) 0%, rgba(184, 184, 184, 0.04) 50%, rgba(137, 137, 137, 0.04) 50%, rgba(137, 137, 137, 0.04) 100%), radial-gradient(circle at 60% 7%, rgba(69, 69, 69, 0.04) 0%, rgba(69, 69, 69, 0.04) 50%, rgba(211, 211, 211, 0.04) 50%, rgba(211, 211, 211, 0.04) 100%), linear-gradient(90deg, rgb(212, 245, 239), rgb(118, 205, 245));
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.image-thumbnail {
  width: 100%;
  height: auto;
  max-width: 450px;
  max-height: 350px;
  background-size: contain;
  cursor: pointer;
}
.image-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-icon {
  cursor: pointer;
  font-size: 24px;
  margin: 0 10px;
}
.dialog-buttons {
  padding-left: 10px;
  margin-left: 0%;
  margin-top: 5px;
  font-size: 1.3em;
  width: 10%;
  max-height:100px;
  cursor: pointer;
}
 .popimg{
  display: flex;
  max-width: 80%;
  height: auto; 
  margin-left: 2%;
  padding-top: 5px;
  border-radius: 5px;
   
  
 }
 .prvsbtn {
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
  margin-right: 14px;
}
.nxtbtn {
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
  margin-left: 14px;
  
  
}
@media (max-width: 1200px) {
  .imgcard {
    padding-top: 20px;
    padding-bottom: 15px;
  }

  .image-thumbnail {
    max-width: 400px;
    max-height: 300px;
  }
}

@media (max-width: 992px) {
  .imgcard {
    padding-top: 15px;
    padding-bottom: 10px;
  }

  .image-thumbnail {
    max-width: 350px;
    max-height: 250px;
  }
}

@media (max-width: 768px) {
  .imgcard {
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .image-thumbnail {
    max-width: 300px;
    max-height: 200px;
  }

  .outbox {
    max-width: 100%;
    height: auto;
  }

  .popimg {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 576px) {
  .imgcard {
    padding-top: 5px;
    padding-bottom: 0;
  }

  .image-thumbnail {
    max-width: 250px;
    max-height: 150px;
  }

  .outbox {
    max-width: 100%;
    height: auto;
  }

  .popimg {
    width: 100%;
    margin-left: 0;
  }

  .prvsbtn, .nxtbtn {
    font-size: 1em;
  }

  .closebtn {
    margin-left: 95%;
    font-size: 1.5em;
  }

  .dialog-buttons {
    font-size: 1em;
  }
}
</style>

<script>
export default {
  data: () => ({
    images: [
      { url: require("@/assets/ptf1.jpg") },
      { url: require("@/assets/ptf11.jpg") },
      { url: require("@/assets/ptf3.jpg") },
      { url: require("@/assets/ptf10.jpg") },
      { url: require("@/assets/ptf30.jpg") },
      { url: require("@/assets/ptf6.1.jpg") },
      { url: require("@/assets/ptf31.jpg") },
      { url: require("@/assets/ptf33.jpg") },
      { url: require("@/assets/ptf34.jpg") },
      { url: require("@/assets/ptf12.jpg") },
      { url: require("@/assets/ptf13.jpg") },
      { url: require("@/assets/ptf14.jpg") },
      { url: require("@/assets/ptf15.jpg") },
      { url: require("@/assets/ptf16.jpg") },
      { url: require("@/assets/ptf17.jpg") },
      { url: require("@/assets/ptf18.jpg") },
      { url: require("@/assets/ptf19.jpg") },
      { url: require("@/assets/ptf20.jpg") },
      { url: require("@/assets/ptf21.jpg") },
      { url: require("@/assets/ptf22.jpg") },
      { url: require("@/assets/ptf23.jpg") },
      { url: require("@/assets/ptf24.jpg") },
      { url: require("@/assets/ptf25.jpg") },
      { url: require("@/assets/ptf26.jpg") },
      { url: require("@/assets/ptf27.jpg") },
      { url: require("@/assets/ptf28.jpg") },
      { url: require("@/assets/ptf29.jpg") },
      { url: require("@/assets/ptf5.jpg") },
      { url: require("@/assets/ptf6.jpg") },
      { url: require("@/assets/ptf7.jpg") },
      { url: require("@/assets/ptf8.jpg") },
      { url: require("@/assets/ptf9.jpg") }
      
  
    ],
    currenturl: '',
    currentIndex: 0,
    dia: false
  }),
  methods: {
    viewimage(url) {
      this.currentIndex = this.images.findIndex(image => image.url === url);
      this.currenturl = url;
      this.dia = true;
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.currenturl = this.images[this.currentIndex].url;
      }
    },
    prevImage() {
      if (this.images.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.currenturl = this.images[this.currentIndex].url;
      }
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.currenturl;
      link.download = this.currenturl.split('/').pop();
      link.click();
    },
    shareImage() {
      if (navigator.share) {
        navigator.share({
          title: 'Check out this image',
          url: this.currenturl
        }).catch(console.error);
      } else {
        alert('Sharing not supported');
      }
    }
  }
};
</script>
