<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="hero-banner" id="beranda">
    <div class="hero-content">
      <h1>{{ props.profil.nama }}</h1>
      <p class="hero-subtitle">{{ props.profil.peran }}</p>
    </div>
  </section>
</template>
