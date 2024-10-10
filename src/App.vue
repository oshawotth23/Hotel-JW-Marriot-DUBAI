<template>
  <q-layout view="lHh lpR fFr">
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar style="height: 100px;">
        <q-toolbar-title>
          <q-avatar size="300px">
            <img src="https://prazukyoimagewear.com/wp-content/uploads/2017/04/jw-marriott-logo.png" style="object-fit: contain;">
          </q-avatar>
        </q-toolbar-title>

        <div class="q-mr-md" style="margin-left: auto;">
          <a href="https://www.instagram.com" target="_blank" class="q-mx-xs">
            <img src="https://img.icons8.com/win10/200/FFFFFF/instagram-new.png" alt="Instagram" width="50" height="50"> <!-- Aumentado a 50x50 -->
          </a>
          <a href="https://www.facebook.com" target="_blank" class="q-mx-xs">
            <img src="https://img.icons8.com/m_outlined/200/FFFFFF/facebook-new.png" alt="Facebook" width="50" height="50"> <!-- Aumentado a 50x50 -->
          </a>
          <a href="https://www.twitter.com" target="_blank" class="q-mx-xs">
            <img src="https://img.icons8.com/m_sharp/512/FFFFFF/twitter.png" alt="Twitter" width="50" height="50"> <!-- Aumentado a 50x50 -->
          </a>
          <a href="https://www.tiktok.com" target="_blank" class="q-mx-xs">
            <img src="https://img.icons8.com/sf-regular-filled/512/FFFFFF/tiktok.png" alt="TikTok" width="50" height="50"> <!-- Aumentado a 50x50 -->
          </a>
        </div>
      </q-toolbar>

      <q-tabs align="center" class="bg-grey-9 text-white">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/Habitaciones" label="Habitaciones" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Actividades" label="Actividades" />
        <q-route-tab to="/Contacto" label="Contacto" />
      </q-tabs>
    </q-header>

    <q-page-container class="bg-grey-10 text-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-toolbar {
  display: flex;
  align-items: center;
}
</style>

