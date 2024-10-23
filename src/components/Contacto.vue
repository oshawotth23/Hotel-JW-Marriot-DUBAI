<template>
  <div class="container">
    <div class="hotel-card">
      <h2>HOTEL JW MARRIOTT</h2>

      <div class="form-group">
        <label for="fullName">Nombre Completo:</label>
        <input type="text" id="fullName" v-model="hotelData.fullName" required />
        <p v-if="formMessages.fullName" class="error-message">{{ formMessages.fullName }}</p>
      </div>

      <div class="form-group">
        <label for="roomType">Tipo de Habitación:</label>
        <select id="roomType" v-model="hotelData.roomType" required>
          <option value="" disabled>Selecciona un tipo</option>
          <option value="sencilla">Sencilla</option>
          <option value="vip">VIP</option>
        </select>
        <p v-if="formMessages.roomType" class="error-message">{{ formMessages.roomType }}</p>
      </div>

      <div class="form-group">
        <label for="nights">Cantidad de Noches:</label>
        <input type="number" id="nights" v-model="hotelData.nights" min="1" required />
        <p v-if="formMessages.nights" class="error-message">{{ formMessages.nights }}</p>
      </div>

      <div class="form-group">
        <label for="petFriendly">Requieres Pet-Friendly?:</label>
        <select id="petFriendly" v-model="hotelData.petFriendly" required>
          <option value="" disabled>Tienes mascota?</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
        <p v-if="formMessages.petFriendly" class="error-message">{{ formMessages.petFriendly }}</p>
      </div>

      <div class="form-group">
        <label for="paymentType">Tipo de Pago:</label>
        <select id="paymentType" v-model="hotelData.paymentType" required>
          <option value="" disabled>Selecciona un tipo de pago</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="efectivo">Efectivo</option>
          <option value="transferencia">Transferencia</option>
        </select>
        <p v-if="formMessages.paymentType" class="error-message">{{ formMessages.paymentType }}</p>
      </div>

      <div class="form-group">
        <label for="bank">Banco:</label>
        <input type="text" id="bank" v-model="hotelData.bank" required />
        <p v-if="formMessages.bank" class="error-message">{{ formMessages.bank }}</p>
      </div>

      <div class="form-group">
        <label for="stars">Cuenta bancaria:</label>
        <input type="text" id="stars" v-model="hotelData.stars" required />
        <p v-if="formMessages.stars" class="error-message">{{ formMessages.stars }}</p>
      </div>

      <button type="button" @click="checkForm">Registrar Cliente</button>

      <div v-if="formMessage" class="floating-card">{{ formMessage }}</div>
      <div v-if="formMessage" class="success-card">Reserva realizada con éxito</div>

      <div class="location">
        <h3>Ubicación del Hotel JW Marriott</h3>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9884765516196!2d55.27417641501629!3d25.200818583917136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e609b3a3c51%3A0x70f123b70e6e9780!2sJW%20Marriott%20Hotel%20Dubai!5e0!3m2!1ses!2sae!4v1636043291713!5m2!1ses!2sae"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen
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
  stars: '',
});

const formMessages = ref({
  fullName: '',
  roomType: '',
  nights: '',
  petFriendly: '',
  paymentType: '',
  bank: '',
  stars: ''
});

const formMessage = ref('');

const checkForm = () => {
  Object.keys(formMessages.value).forEach(key => {
    formMessages.value[key] = '';
  });

  let isValid = true;

  if (!hotelData.value.fullName) {
    formMessages.value.fullName = 'Por favor, ingresa tu nombre completo.';
    isValid = false;
  }
  if (!hotelData.value.roomType) {
    formMessages.value.roomType = 'Por favor, selecciona un tipo de habitación.';
    isValid = false;
  }
  if (!hotelData.value.nights) {
    formMessages.value.nights = 'Por favor, ingresa la cantidad de noches.';
    isValid = false;
  }
  if (!hotelData.value.petFriendly) {
    formMessages.value.petFriendly = 'Por favor, indica si necesitas un servicio Pet-Friendly.';
    isValid = false;
  }
  if (!hotelData.value.paymentType) {
    formMessages.value.paymentType = 'Por favor, selecciona el tipo de pago.';
    isValid = false;
  }
  if (!hotelData.value.bank) {
    formMessages.value.bank = 'Por favor, ingresa el banco.';
    isValid = false;
  }
  if (!hotelData.value.stars) {
    formMessages.value.stars = 'Por favor, ingresa el número de cuenta bancaria.';
    isValid = false;
  }

  if (isValid) {
    formMessage.value = '¡Formulario completado con éxito!';
    setTimeout(() => {
      formMessage.value = '';
    }, 5000);
  }
};
</script>

<style>
body {
  font-family: 'Verdana', sans-serif !important;
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

.error-message {
  color: red;
  font-size: 0.9em;
}

.floating-card {
  margin-top: 1em;
  background-color: #4caf50;
  color: white;
  padding: 1em;
  text-align: center;
  border-radius: 10px;
}

.success-card {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  background-color: #bd1e1e; 
  color: white; 
  padding: 1.5em; 
  border-radius: 15px; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 
  text-align: center; 
  font-family: 'Georgia', serif; 
  font-size: 1.5em;
  z-index: 1000; 
}
</style>
