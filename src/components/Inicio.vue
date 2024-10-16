<template>
  <div class="carousel-container">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="Carousel Image"
      class="carousel-image"
      :class="{ 'visible': index === currentImage }"
    />
    <div class="invisible-div"></div>
    <div v-if="showCard" class="floating-card show" @click="closeCard">
      <h2>Historia del JW Marriott</h2>
      <p>
        El JW Marriott es un símbolo de lujo y confort en la hospitalidad moderna. Desde su inauguración, ha ofrecido un servicio excepcional y un ambiente elegante que atrae a viajeros de todo el mundo. Cada hotel JW Marriott es único, reflejando la cultura local y proporcionando experiencias inolvidables.
      </p>
    </div>
    <div class="horizontal-card">
      <div class="image-section">
        <img
          :src="horizontalImages[currentHorizontalImage]"
          alt="Horizontal Image"
          class="horizontal-image"
        />
      </div>
      <div class="description-section">
        <h2>Sipnosis</h2>
        <p>
          Situado en lugares privilegiados, el JW Marriott ofrece comodidades de primera clase, incluyendo restaurantes gourmet, spas de lujo, gimnasio, y actividades recreativas. Con un enfoque en el bienestar de sus huéspedes, cada visita promete ser una escapada memorable, y <router-link to="/servicios">otros</router-link>.
        </p>
      </div>
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

const horizontalImages = [
  'https://img.freepik.com/fotos-premium/modelo-fitness-joven-hermosa-chica-morena-traje-bano-negro-posa-piscina-agua_115086-1386.jpg', // piscina
  'https://www.fluidra.com/projects//web/app/uploads/2021/08/iStock-827324092.jpg', // sauna
  'https://www.firplak.com/wp-content/uploads/2024/05/Hidromasaje-Santorini-Empotrar-Blanco-Iso-WEB.webp', // jacuzzi
  'https://www.bellatriz.com/wp-content/uploads/2022/04/woman-relaxing-in-the-spa-scaled.jpg', // spa
  'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg', // restaurante
];

const currentImage = ref(0);
const currentHorizontalImage = ref(0);
const showCard = ref(false);

const changeImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};

const changeHorizontalImage = () => {
  currentHorizontalImage.value = (currentHorizontalImage.value + 1) % horizontalImages.length;
};

onMounted(() => {
  setInterval(changeImage, 3000);
  setInterval(changeHorizontalImage, 4000);
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

.invisible-div {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 400px;
  height: 50px;
  transform: translate(-50%, -60%);
  background-color: transparent; 
  z-index: 999;
}

.floating-card {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 350px;
  height: auto;
  max-height: 500px;
  padding: 15px;
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
.floating-card p {
  color: #f8f9fa;
  margin: 5px 0;
  font-family: 'Georgia', serif;
}

.horizontal-card {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(52, 58, 64, 0.8);
  border: 2px solid #6c757d;
  border-radius: 10px;
  padding: 15px;
  max-width: 800px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.description-section {
  flex: 2;
  padding-left: 15px;
}

.description-section h2 
.description-section p { 
 margin-top: 0;
  color: #f8f9fa;
  font-family: 'Georgia', serif;
}

</style>
