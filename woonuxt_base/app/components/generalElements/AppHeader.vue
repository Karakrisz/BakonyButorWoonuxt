<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
  { name: 'Főoldal', link: '/' },
  { name: 'Galéria', link: '/galeria' },
  { name: 'Rólunk', link: '/rolunk' },
  { name: 'Referenciák', link: '/referenciak' },
  { name: 'Kapcsolat', link: '/kapcsolat' },
];
</script>

<template>
  <header class="bg-white h-[50px] shadow-sm relative z-50">
    <div class="container flex items-center justify-between h-full px-4 mx-auto">
      <MenuTrigger class="lg:hidden" />

      <NuxtLink to="/" class="shrink-0">
        <NuxtImg src="/img/logo.svg" class="header-logo" />
      </NuxtLink>
      <div class="lg:flex items-center hidden">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.link"
          class="text-sm w-[130px] flex h-[50px] items-center justify-center text-center transition-colors duration-200 hover:bg-light border-b-2 border-b-transparent hover:border-green box-border"
          activeClass="bg-light border-b-2 !border-green">{{ link.name }}
        </NuxtLink>
      </div>
      <div class="flex gap-4">
        <ProductSearch class="hidden md:inline-flex max-w-[320px]" />
        <SignInLink />
        <CartTrigger />
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
