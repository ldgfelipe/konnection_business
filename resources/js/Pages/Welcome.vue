<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Bienvenido" />

   

    <v-container class="espacioAA">
      <video autoplay muted loop id="myVideo">
        <source :src="$assetUrl('/video/negocio1.mp4')" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      
      <div style="width:100%; text-align: center;">
      <img :src="$assetUrl('/logo/kb-logo.png')" width="250" style="opacity:1;" />
    </div>
    <div style="width:100%; text-align: center;">
      <Link :href="route('login')" style="background-color:#000066; color:white;" class="v-btn v-btn--size-small v-btn--variant-flat"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__content">Iniciar Sesión</span></Link>
      <Link :href="route('register')" style="background-color:#6699FF; color:white;" class="v-btn v-btn--size-small v-btn--variant-flat"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__content">Registrate</span></Link>
    </div>


  </v-container>

</template>


<script setup>
</script>
<style scoped>
body,html{
  width:100%;
  max-width:100%;
  height:100%;
  max-height:100%;
}
.espacioAA{
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
    min-height:600px;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  opacity:0.5;
}

</style>

