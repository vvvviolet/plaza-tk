<template>
  <NuxtPage/>
  <AuthOverlay v-if="isAuthOpen"/>
  <EditProfileOverlay v-if="isEditProfileOpen"/>
</template>
<script setup>
import { storeToRefs } from 'pinia';
const  { $generalStore } = useNuxtApp();
const  { isAuthOpen,isEditProfileOpen } = storeToRefs($generalStore);
isAuthOpen.value=true
</script>