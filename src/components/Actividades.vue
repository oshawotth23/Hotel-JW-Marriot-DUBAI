<template>
  <div class="card-container">
    <div 
      v-for="(card, index) in cards" 
      :key="index" 
      class="card"
    >
      <div class="image-container">
        <img :src="card.image" alt="Image" class="card-image" />
      </div>
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-description">{{ card.description }}</p>
      <button class="price-button">{{ card.price }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
  { 
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b1/bb/61.jpg', 
    title: 'Canyoning 12 Actividades', 
    description: 'Embárcate en una emocionante aventura de canyoning, donde experimentarás 12 actividades diferentes que incluyen saltos, rapel y deslizamientos por cascadas, todo en un entorno natural impresionante.',
    price: '$90 por persona'
  },
  {
    image: 'https://images.mnstatic.com/b6/d6/b6d67b7e402c48a351e30ca76f02e9ac.jpg',  
    title: 'Rafting Rio Fonce', 
    description: 'Afronta las emocionantes corrientes del río Fonce en una experiencia de rafting inolvidable. Con instructores expertos, disfrutarás de un día lleno de adrenalina y paisajes espectaculares.',
    price: '$80 por persona'
  },
  {
    image: 'https://www.boyacaradio.com/imagenes/fotos_noticias/zero-gravity-parapente-algodonales.jpg',  
    title: 'Parapente', 
    description: 'Siente la libertad y la emoción de volar con el parapente. Disfruta de vistas panorámicas impresionantes mientras te deslizas suavemente sobre paisajes naturales.',
    price: '$120 por persona'
  },
  { 
    image: 'https://paravolarcolombia.com/wp-content/uploads/2022/09/Bungee-140-mts-Ecolombia-Experience-6.jpg', 
    title: 'Bungee Jumping', 
    description: 'Desata tu adrenalina con una experiencia de bungee jumping. Salta desde una altura impresionante y siente la emoción de caer en picada antes de que el cordón te detenga.',
    price: '$180 por persona'
  },
  {
    image: 'https://paravolarcolombia.com/wp-content/uploads/2022/09/espeliologia-en-santander-1024x683.jpg', 
    title: 'Espeleismo Cueva De La Vaca', 
    description: 'Explora las maravillas subterráneas en una emocionante aventura de espeleología en la Cueva De La Vaca. Descubre formaciones rocosas únicas y aprende sobre la geología de la región.',
    price: '$45 por persona'
  },
  {
    image: 'https://images.myguide-cdn.com/ecuador/companies/rafting-canyoning-canopy-bridge-jumping-in-a-full-day-extreme/large/rafting-canyoning-canopy-bridge-jumping-in-a-full-day-extreme-4070424.jpg',  
    title: 'Canyoning 32 Actividades', 
    description: 'Vive la experiencia definitiva de canyoning con 32 actividades emocionantes. Desde saltos y escaladas hasta descensos en rappel, esta aventura es perfecta para los amantes de la naturaleza.',
    price: '$160 por persona'
  },
  {
    image: 'https://sangilextremo.com.co/wp-content/uploads/2020/01/canotaje-rio-suarez-102.jpg',  
    title: 'Rafting Rio Suarez', 
    description: 'Aventura en rafting por las emocionantes aguas del río Suarez. Disfruta de un día lleno de diversión, con giros y remolinos que te mantendrán al borde de tu asiento.',
    price: '$200 por persona'
  },
  { 
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/ab/a7/47.jpg',  
    title: 'Cuatrimotos', 
    description: 'Atrévete a explorar terrenos difíciles en una emocionante aventura de cuatrimotos. Con paisajes espectaculares y adrenalina a raudales, esta actividad es ideal para los amantes de la velocidad.',
    price: '$60 por persona'
  },
  {
    image: 'https://i.pinimg.com/736x/7c/f9/8c/7cf98c2093b70992575895145283d627.jpg', 
    title: 'Cabalgata', 
    description: 'Disfruta de una relajante cabalgata por paisajes naturales. Esta experiencia es perfecta para aquellos que buscan conectarse con la naturaleza a través de un paseo tranquilo a caballo.',
    price: '$40 por persona'
  },
  { 
    image: 'https://weekend-bucket.s3.amazonaws.com/Espeleologia_Cueva_del_Indio_12_e781311f49.jpg', 
    title: 'Espeleismo Cueva Del Indio', 
    description: 'Adéntrate en la fascinante espeleología de la Cueva Del Indio. Descubre un mundo subterráneo lleno de misterios y maravillas geológicas en esta aventura única.',
    price: '$45 por persona'
  }
]);
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  width: 100%;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s; 
}

.card:hover {
  transform: scale(1.05); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.image-container {
  height: 200px; 
  overflow: hidden; 
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover; 
}

.card-title {
  padding: 5px 0;
  font-size: 20px;
  font-weight: bold; 
  color: #333; 
  font-family: 'Arial', sans-serif;
  margin: 0; 
}

.card-description {
  padding: 20px;
  font-size: 18px; 
  color: #000; 
  font-weight: normal;
  min-height: 80px;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
}

.price-button {
  margin: 10px 0; 
  padding: 10px 20px; 
  background-color: transparent; 
  border: 2px solid green;
  color: green; 
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.price-button:hover {
  background-color: green;
  color: white;
}
</style>
