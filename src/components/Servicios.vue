<template>
  <div class="card-container">
    <div class="card" v-for="(room, index) in rooms" :key="index">
      <img :src="room.image" alt="Room Image" class="card-image" />
      <h3 class="card-title">{{ room.title }}</h3>
      <p class="card-description">{{ room.description }}</p>
      <button class="price-button">{{ room.price }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rooms = ref([
  {
    image: 'https://img.freepik.com/fotos-premium/modelo-fitness-joven-hermosa-chica-morena-traje-bano-negro-posa-piscina-agua_115086-1386.jpg',
    title: 'Piscina',
    description: 'Disfruta de nuestra amplia piscina al aire libre, perfecta para relajarse y refrescarse durante los días soleados.',
    price: '$10',
  },
  {
    image: 'https://www.fluidra.com/projects//web/app/uploads/2021/08/iStock-827324092.jpg',
    title: 'Sauna',
    description: 'Relájate en nuestra sauna, donde podrás liberar tensiones y disfrutar de un momento de tranquilidad.',
    price: '$40',
  },
  {
    image: 'https://www.firplak.com/wp-content/uploads/2024/05/Hidromasaje-Santorini-Empotrar-Blanco-Iso-WEB.webp',
    title: 'Jacuzzi',
    description: 'Relájate en nuestro jacuzzi, un oasis de burbujas que te hará sentir renovado y revitalizado.',
    price: '$15',
  },
  {
    image: 'https://www.bellatriz.com/wp-content/uploads/2022/04/woman-relaxing-in-the-spa-scaled.jpg',
    title: 'Spa',
    description: 'Descubre nuestra variedad de tratamientos en el spa, diseñados para revitalizar tu cuerpo y mente.',
    price: '$90',
  },
  {
    image: 'https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg',
    title: 'Restaurante',
    description: 'Disfruta de una experiencia culinaria única en nuestro restaurante, que ofrece platos de todo el mundo.',
    price: 'Carta',
  },
  {
    image: 'https://open-bar.cl/assets/img/photos/banner3.jpg',
    title: 'Open-Bar',
    description: 'Relájate en nuestro open-bar, donde puedes disfrutar de bebidas ilimitadas durante tu estancia.',
    price: 'Carta',
  },
  {
    image: 'https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(70)/assets.iprofesional.com/assets/jpg/2023/08/558175.jpg',
    title: 'Casino',
    description: 'Vive la emoción del juego en nuestro casino, donde encontrarás una variedad de juegos para todos los gustos.',
    price: '$20',
  },
  {
    image: 'https://ingenieriademenu.com/wp-content/uploads/2023/01/que-significa-pet-friendly.png',
    title: 'Pet-Friendly',
    description: 'Nuestra política pet-friendly asegura que tus mascotas son bienvenidas para disfrutar de unas vacaciones juntos.',
    price: '$10',
  },
  {
    image: 'https://i0.wp.com/lopezdoriga.com/wp-content/uploads/2017/10/wifi.jpg?resize=1024%2C683&ssl=1',
    title: 'Wifi Gratuito',
    description: 'Disfruta de conexión a internet gratuita en todas nuestras instalaciones para mantenerte conectado.',
    price: 'Gratis',
  },
  {
    image: 'https://www.vallesdelsol.cl/wp-content/uploads/2020/11/gyms.jpg',
    title: 'Gimnasio',
    description: 'Mantente en forma durante tu estancia con acceso a nuestro gimnasio completamente equipado.',
    price: '$50',
  },
]);
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  text-align: center;
  background-color: #fff;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-title {
  font-size: 1.2em;
  margin: 8px 0;
}

.card-description {
  font-size: 0.9em;
  margin: 8px 0;
}

.price-button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
}

.price-button:hover {
  background-color: darkgreen;
}
</style>
