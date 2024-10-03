<template>
  <q-layout view="lHh lpR fFr">

    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar style="height: 100px;">
        <q-toolbar-title>
          <q-avatar size="300px">
            <img src="https://prazukyoimagewear.com/wp-content/uploads/2017/04/jw-marriott-logo.png" style="object-fit: contain;">
          </q-avatar>
          <!-- <span class="text-white"> JW Marriott Marquis Hotel Dubai </span> -->
        </q-toolbar-title>
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
