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

    <div class="fixed-card">
      <h2>Historia del JW Marriott</h2>
      <p>
        El JW Marriott es un símbolo de lujo y confort en la hospitalidad moderna. Desde su inauguración, ha ofrecido un servicio excepcional y un ambiente elegante que atrae a viajeros de todo el mundo. Cada hotel JW Marriott es único, reflejando la cultura local y proporcionando experiencias inolvidables.
      </p>
    </div>

    <div class="cards-container">
      <div class="horizontal-card">
        <div class="image-section">
          <img
            :src="horizontalImages[currentHorizontalImage]"
            alt="Horizontal Image"
            class="horizontal-image"
          />
        </div>
        <div class="description-section">
          <h2>Servicios</h2>
          <p>
            El JW Marriott ofrece una experiencia de lujo con una amplia variedad de servicios diseñados para tu comodidad y bienestar. Relájate y disfruta de nuestra piscina de última generación, sumérgete en la tranquilidad de nuestro sauna, o date un merecido descanso en el jacuzzi. Además, contamos con un spa exclusivo que ofrece tratamientos rejuvenecedores y una atención personalizada para revitalizar cuerpo y mente.
            Entre otros servicios, el JW Marriott se destaca por su restaurante gourmet, gimnasio de alta gama y actividades recreativas pensadas para brindarte una estancia inolvidable.
            Para más información, haz clic <router-link to="/servicios">aquí</router-link>.
          </p>
        </div>
      </div>

      <div class="horizontal-card">
        <div class="image-section">
          <img
            :src="activityImages[currentActivityImage]"
            alt="Activity Image"
            class="horizontal-image"
          />
        </div>
        <div class="description-section">
          <h2>Actividades</h2>
          <p>
            El JW Marriott te invita a vivir una aventura sin igual con una amplia variedad de actividades de deportes extremos que desafiarán tus límites. Atrévete a experimentar el adrenalínico canyoning en ríos cristalinos, descubre la belleza oculta del espeleísmo en impresionantes cuevas, o siente la emoción del bungee jump desde alturas vertiginosas. También puedes disfrutar de la emoción del rafting en rápidos desafiantes que pondrán a prueba tu valentía.
            Entre estas emocionantes experiencias, el JW Marriott se enorgullece de ofrecerte la oportunidad de conectar con la naturaleza mientras disfrutas de un ambiente seguro y confortable.
            Para más información, haz clic <router-link to="/Actividades">aquí</router-link>.
          </p>
        </div>
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
  'https://img.freepik.com/fotos-premium/modelo-fitness-joven-hermosa-chica-morena-traje-bano-negro-posa-piscina-agua_115086-1386.jpg',
  'https://www.fluidra.com/projects//web/app/uploads/2021/08/iStock-827324092.jpg',
  'https://www.firplak.com/wp-content/uploads/2024/05/Hidromasaje-Santorini-Empotrar-Blanco-Iso-WEB.webp',
  'https://www.bellatriz.com/wp-content/uploads/2022/04/woman-relaxing-in-the-spa-scaled.jpg',
  'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg',
];

const activityImages = [
  'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b1/bb/61.jpg',
  'https://images.mnstatic.com/b6/d6/b6d67b7e402c48a351e30ca76f02e9ac.jpg',
  'https://www.boyacaradio.com/imagenes/fotos_noticias/zero-gravity-parapente-algodonales.jpg',
  'https://paravolarcolombia.com/wp-content/uploads/2022/09/Bungee-140-mts-Ecolombia-Experience-6.jpg',
  'https://paravolarcolombia.com/wp-content/uploads/2022/09/espeliologia-en-santander-1024x683.jpg',
];

const currentImage = ref(0);
const currentHorizontalImage = ref(0);
const currentActivityImage = ref(0);

const changeImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};

const changeHorizontalImage = () => {
  currentHorizontalImage.value = (currentHorizontalImage.value + 1) % horizontalImages.length;
};

const changeActivityImage = () => {
  currentActivityImage.value = (currentActivityImage.value + 1) % activityImages.length;
};

onMounted(() => {
  setInterval(changeImage, 3000);
  setInterval(changeHorizontalImage, 4000);
  setInterval(changeActivityImage, 5000);
});

</script>

<style>
.carousel-container {
  position: relative;
  width: 100%;
  height: 120vh; 
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

.fixed-card {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 350px;
  max-height: 500px;
  padding: 15px;
  background-color: rgba(52, 58, 64, 0.8);
  border: 2px solid #6c757d;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  z-index: 1000;
}

.fixed-card h2,
.fixed-card p {
  color: #f8f9fa;
  margin: 5px 0;
  font-family: 'Georgia', serif;
}

.cards-container {
  position: absolute; 
  top: 2%; 
  right: 2%; 
  display: flex;
  flex-direction: column; 
  gap: 20px; 
}

.horizontal-card {
  display: flex;
  background-color: rgba(52, 58, 64, 0.8);
  border: 2px solid #6c757d;
  border-radius: 10px;
  padding: 15px;
  max-width: 800px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
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

.description-section h2 {
  margin: 0 0 10px 0; 
}

.description-section p {
  font-size: 1rem;
  line-height: 1.5; 
  color: #f8f9fa;
  font-family: 'Georgia', serif;
}

.extra-content {
  padding: 20px;
  background-color: rgba(52, 58, 64, 0.8);
  color: #f8f9fa;
  margin-top: 20px;
}

@media (max-width: 1390px) {
  .fixed-card {
    top: 10%; 
    left: 50%; 
    transform: translateX(-50%); 
    width: 350px; 
    font-size: 1.2em;
  }

  .cards-container {
    top: 50%; 
    right: 10%;
  }
  .carousel-container {
  position: relative;
  width: 100%;
  height: 200vh;
  overflow: hidden;
}

}
</style>

