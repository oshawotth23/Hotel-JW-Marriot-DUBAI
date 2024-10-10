<template>
  <div>
    <div class="carousel-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Carousel Image"
        class="carousel-image"
        :class="{ 'visible': index === currentImage }"
      />
    </div>

    <div v-if="showCard" class="floating-card show" @click="closeCard">
      <h2>Historia del JW Marriott</h2>
      <p>
        El JW Marriott es un símbolo de lujo y confort en la hospitalidad moderna. Desde su inauguración, ha ofrecido un servicio excepcional y un ambiente elegante que atrae a viajeros de todo el mundo. Cada hotel JW Marriott es único, reflejando la cultura local y proporcionando experiencias inolvidables.
      </p>
      <h3>Sinopsis</h3>
      <p>
        Situado en lugares privilegiados, el JW Marriott ofrece comodidades de primera clase, incluyendo restaurantes gourmet, spas de lujo, gimnasio, y actividades recreativas. Con un enfoque en el bienestar de sus huéspedes, cada visita promete ser una escapada memorable, y <router-link to="/servicios">otros</router-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = [
  'https://s3.amazonaws.com/downloads.cvent.com/CSN/8105cee1-e2eb-4e7e-9110-045c6481884a/images/d250c4452d1f48cfb679a64edd0778c5_LARGE.jpg',
  'https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets-usage-rights/pdt-marriott-careers-image-751624001359726-wide-hor.jpg',
  'https://www.kayak.com.co/rimg/himg/6f/1f/93/expediav2-330899-877b7b-112360.jpg?width=1366&height=768&crop=true',
  'https://images.trvl-media.com/lodging/8000000/8000000/7998400/7998330/5cf62ee9.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
  'https://www.hotels-in-pune.net/data/Pics/OriginalPhoto/14001/1400181/1400181107/jw-marriott-hotel-pune-pic-33.JPEG',
];

const currentImage = ref(0);
const showCard = ref(false);

const changeImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};

onMounted(() => {
  setInterval(changeImage, 3000);
  setTimeout(() => {
    showCard.value = true;
  }, 2000);
});

const closeCard = () => {
  showCard.value = false; 
};
</script>

<style>
.carousel-container {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.carousel-image.visible {
  opacity: 1;
}

.floating-card {
  position: fixed; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: 400px; 
  height: auto; 
  max-height: 600px; 
  padding: 20px;
  background-color: rgba(52, 58, 64, 0.8); 
  border: 2px solid #6c757d; 
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translate(-50%, -50%) translateY(20px);
  transition: opacity 0.5s ease-in, transform 0.5s cubic-bezier(0.25, 1.5, 0.5, 1); 
  z-index: 1000; 
}

.floating-card.show {
  opacity: 1;
  transform: translate(-50%, -50%) translateY(0);
}

.floating-card h2,
.floating-card h3,
.floating-card p {
  color: #f8f9fa; 
  margin: 5px 0; 
}
</style>
