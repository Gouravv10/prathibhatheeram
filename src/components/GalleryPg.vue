<template>
 
  <div class="d-flex flex-wrap gap-5 imgcard">
    <div v-for="image in images" :key="image.url">
      <img @click="viewimage(image.url)" :src="image.url" style="width: 450px; height: 350px; background-size: contain" />
    </div>
    <v-dialog v-model="dia" max-width="1020px" class="dialog">
      <template v-slot>
        <div class="dialog-content">
          <i @click="dia=!dia" class="fa-regular fa-circle-xmark closebtn"></i>
          <div class="outbox">
            <i @click="previousImage" class="fa-solid fa-chevron-left prvsbtn"></i>
            <img :src="currenturl" class="popimg">
            <div>
            <div class="dialog-buttons me-4">
            <i @click="downloadImage" class="fa-sharp fa-solid fa-download mb-3" ></i>
            <i @click="shareImage" class="fa-sharp fa-solid fa-share-nodes"></i>
          </div>
          <div class=" nxtbtn">
            <i @click="nextImage" class="fa-solid fa-chevron-right"></i>
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
  background-image: radial-gradient(circle at top right, rgb(6, 134, 232) 0%, rgb(86, 172, 233) 13%,rgb(122, 192, 245) 13%, rgb(76, 166, 234) 23%,rgb(103, 176, 232) 23%, rgb(103, 176, 232) 33%,rgb(130, 185, 231) 33%, rgb(135, 196, 245) 46%,rgb(182,233,246) 46%, rgb(182,233,246) 48%,rgb(175,217,240) 48%, rgb(175,217,240) 63%,rgb(189,223,248) 63%, rgb(83, 172, 235) 83%,rgb(115, 189, 242) 83%, rgb(29, 174, 246) 100%);
  padding: 20px;
  margin-left: 10%;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  max-width: 785px;
  height: 590px;

}
.imgcard {
  background-image: radial-gradient(circle at 75% 26%, rgba(116, 116, 116, 0.04) 0%, rgba(116, 116, 116, 0.04) 50%, rgba(222, 222, 222, 0.04) 50%, rgba(222, 222, 222, 0.04) 100%), radial-gradient(circle at 62% 63%, rgba(60, 60, 60, 0.04) 0%, rgba(60, 60, 60, 0.04) 50%, rgba(152, 152, 152, 0.04) 50%, rgba(152, 152, 152, 0.04) 100%), radial-gradient(circle at 80% 64%, rgba(108, 108, 108, 0.04) 0%, rgba(108, 108, 108, 0.04) 50%, rgba(252, 252, 252, 0.04) 50%, rgba(252, 252, 252, 0.04) 100%), radial-gradient(circle at 97% 83%, rgba(184, 184, 184, 0.04) 0%, rgba(184, 184, 184, 0.04) 50%, rgba(137, 137, 137, 0.04) 50%, rgba(137, 137, 137, 0.04) 100%), radial-gradient(circle at 60% 7%, rgba(69, 69, 69, 0.04) 0%, rgba(69, 69, 69, 0.04) 50%, rgba(211, 211, 211, 0.04) 50%, rgba(211, 211, 211, 0.04) 100%), linear-gradient(90deg, rgb(212, 245, 239), rgb(118, 205, 245));
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
}

.closebtn {
margin-left: 99%;
font-size: 1.7em;
cursor: pointer;
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
  width: 690px; 
  height: auto; 
  margin-left: 2%;
  padding-top: 5px;
  border-radius: 5px;
  background-size:contain;  
 }
 .prvsbtn {
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
 
}
.nxtbtn {
  cursor: pointer;
  font-size: 1.2em;
  align-self: center;
  margin-left: 14px;
  margin-top: 186px;
  
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
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
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
