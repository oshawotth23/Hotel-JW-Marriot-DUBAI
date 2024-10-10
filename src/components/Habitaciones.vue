<template>
  <div>
    <div class="card-container">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        class="card"
      >
        <img :src="card.image" alt="Image" class="card-image" />
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
        <button class="price-button">{{ card.price }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
  { 
    image: 'https://i.pinimg.com/originals/8f/a5/71/8fa571bf5e890bdbe1a292acc3052604.jpg', 
    title: 'Habitación Individual sencilla', 
    description: 'Ideal para viajeros solitarios, esta habitación ofrece comodidad y privacidad, equipada con una cama individual y un baño privado. Perfecta para descansar después de un largo día de exploración.',
    price: '$50 por noche'
  },
  {
    image: 'https://hotelmarceau.com/_novaimg/4459236-1380768_0_451_4800_2615_2200_1200.rc.jpg',  
    title: 'Habitación Doble sencilla', 
    description: 'Con espacio suficiente para dos personas, esta habitación cuenta con una cama matrimonial y un ambiente acogedor. Ideal para parejas que buscan una escapada romántica.',
    price: '$100 por noche'
  },
  {
    image: 'https://www.lourdes-roissy.com/sites/lourdes-roissy.com/files/styles/chambre_slider/public/chambres/hotel-lourdes-4-estrellas-cerca-gruta-roissy_8.jpg?itok=CkyWQUSF',  
    title: 'Habitación Triple sencilla', 
    description: 'Perfecta para familias o grupos de amigos, esta habitación cuenta con tres camas individuales y un baño amplio. Disfruta de un ambiente cómodo y funcional.',
    price: '$150 por noche'
  },
  { 
    image: 'https://hotel.hardrock.com/riviera-maya/es/files/6192/14579996_ImageLargeWidth.jpg', 
    title: 'Habitación Cuadruple sencilla', 
    description: 'Diseñada para grupos, esta habitación ofrece dos camas dobles y una zona de estar. Ideal para disfrutar de momentos inolvidables con amigos o familiares.',
    price: '$200 por noche'
  },
  {
    image: 'https://lh3.googleusercontent.com/proxy/o2960Fy21_KwWeXta2xYy2qOOqsGZo8O718bcM3PigouhSX-NBwGJhvUBAhxn-KCSJrWGpyeDRvzX53aJLJklOzrDi4MHNPxG2BK9pvk', 
    title: 'Habitación Quintuple sencilla', 
    description: 'Espaciosa y confortable, esta habitación es ideal para familias numerosas. Equipadas con camas individuales y dobles, ofrece un ambiente acogedor para todos.',
    price: '$250 por noche'
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/554425499.jpg?k=2cceae7192050766eee707aec9b607fc58db7c77b9197cebc2f8b70a52faf9a3&o=&hp=1',  
    title: 'Habitación Individual VIP', 
    description: 'Una opción de lujo para el viajero que busca confort y elegancia. Cuenta con muebles de alta calidad y un ambiente relajante, ideal para descansar y recargar energías.',
    price: '$80 por noche'
  },
  {
    image: 'https://cdn02.plentymarkets.com/vji7b8phcm0f/frontend/Referenzseiten/Hotel-Zimmer-Luxus/Luxus-Bett-Fuer-Hotel-Zimmer-Voll-Ausstattung-Gold-Grau-Von-Casa-Padrino.png',  
    title: 'Habitación Doble VIP', 
    description: 'Disfruta de una experiencia exclusiva en esta habitación doble de lujo, con decoraciones elegantes, baño privado y todas las comodidades para una estancia inolvidable.',
    price: '$140 por noche'
  },
  { 
    image: 'https://www.hotelaristondubrovnik.com/wp-content/uploads/2020/05/Ariston_Triple-Room_1.jpg',  
    title: 'Habitación Triple VIP', 
    description: 'Perfecta para familias o grupos, esta habitación triple ofrece un amplio espacio y servicios premium para asegurar una estancia placentera y confortable.',
    price: '$200 por noche'
  },
  {
    image: 'https://hotelflamingoinn.com.mx/wp-content/uploads/2021/05/habitacion-ejecuiva-triple.jpg', 
    title: 'Habitación Cuadruple VIP', 
    description: 'Amplia y lujosa, esta habitación cuadruple está diseñada para brindar comodidad y espacio a grupos, con decoración moderna y amenities exclusivos.',
    price: '$250 por noche'
  },
  { 
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4Mjg2MzY3NDUyNTUyODE4NA%3D%3D/original/75f9ea77-d618-48e8-b82d-11cabe5ea57e.jpeg?im_w=720', 
    title: 'Habitación Quintuple VIP', 
    description: 'La opción perfecta para grupos grandes, esta habitación quintuple ofrece una experiencia única de lujo, con un diseño contemporáneo y servicios excepcionales.',
    price: '$350 por noche'
  }
]);
</script>

<style>
.toolbar {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 100px; 
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

.card-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
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
