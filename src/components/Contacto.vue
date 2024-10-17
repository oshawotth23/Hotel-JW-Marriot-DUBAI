<template>
  <div class="container">
    <div class="hotel-card">
      <h2>HOTEL JW MARRIOTT</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            v-model="hotelData.fullName"
            required
          />
        </div>

        <div class="form-group">
          <label for="roomType">Tipo de Habitación:</label>
          <select id="roomType" v-model="hotelData.roomType" required>
            <option value="" disabled>Selecciona un tipo</option>
            <option value="sencilla">Sencilla</option>
            <option value="vip">VIP</option>
          </select>
        </div>

        <div class="form-group">
          <label for="nights">Cantidad de Noches:</label>
          <input
            type="number"
            id="nights"
            v-model="hotelData.nights"
            min="1"
            required
          />
        </div>

        <div class="form-group">
          <label for="petFriendly">Requieres Pet-Friendly?:</label>
          <select id="petFriendly" v-model="hotelData.petFriendly" required>
            <option value="" disabled>Tienes mascota?</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label for="paymentType">Tipo de Pago:</label>
          <select id="paymentType" v-model="hotelData.paymentType" required>
            <option value="" disabled>Selecciona un tipo de pago</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        <div class="form-group">
          <label for="bank">Banco:</label>
          <input
            type="text"
            id="bank"
            v-model="hotelData.bank"
            required
          />
        </div>

        <div class="form-group">
          <label for="stars">Cuenta bancaria:</label>
          <input
            type="text"
            id="cuentas"
            v-model="hotelData.stars"
            min="1"
            max="5"
            required
          />
        </div>

        <button type="submit">Registrar Cliente</button>
      </form>

      <div class="location">
        <h3>Ubicación del Hotel JW Marriott</h3>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9884765516196!2d55.27417641501629!3d25.200818583917136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e609b3a3c51%3A0x70f123b70e6e9780!2sJW%20Marriott%20Hotel%20Dubai!5e0!3m2!1ses!2sae!4v1636043291713!5m2!1ses!2sae"
            width="100%" 
            height="400"  >
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hotelData = ref({
  fullName: '',
  roomType: '',
  nights: 1,
  petFriendly: '',
  paymentType: '',
  bank: '',
  stars: 0,
});

const submitForm = () => {
  console.log('Datos del Hotel:', hotelData.value);
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #1a1a1a; 
  color: white;
}

.container {
  max-width: 800px; 
  margin: 50px auto;
}

.hotel-card {
  padding: 2em;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #2c2c2c; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  font-size: 1.1em;
}

h2, h3 {
  color: #fff; 
  text-align: center;
  margin-bottom: 1.5em;
  font-family: 'Georgia', serif;
  font-weight: bold;
}

.map-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 3px solid #ffcc00;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  background: url('https://images.unsplash.com/photo-1561301232-e8dca601bdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5NzR8MHwxfGFsbHwxfHx8fHx8fHwxNjE3MzE3ODQz&ixlib=rb-1.2.1&q=80&w=1080') no-repeat center center;
  background-size: cover;
}

iframe {
  border: 0;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  margin-bottom: 0.5em;
  color: #fff;
  display: block;
  font-weight: bold;
}

input,
select {
  border: 2px solid #555;
  border-radius: 5px;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  transition: border-color 0.3s;
  background-color: #444; 
  color: white;
}

input:focus,
select:focus {
  border-color: #777; 
  outline: none;
}

button {
  padding: 0.7em;
  color: white;
  background-color: #555; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #777; 
}
</style>
