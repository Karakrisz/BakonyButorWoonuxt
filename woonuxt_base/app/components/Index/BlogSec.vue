<script setup>
  const posts = [
    {
      title: 'Hogyan teremtsünk harmóniát az otthonunkban?',
      image: '/img/szobak/nappali.webp',
      description:
        'Fedezze fel, hogyan választhat olyan bútorokat, amelyek összhangot teremtenek otthonában, és a nyugalom szigetévé alakítják azt.',
    },
    {
      title: 'Tippek kis terek berendezéséhez',
      image: '/img/szobak/nappali.webp',
      description:
        'A kis lakások és helyiségek berendezése igazi kihívás lehet, de a megfelelő bútordarabok és elrendezés segítségével még a legkisebb tér is tágasnak és kényelmesnek tűnhet. ',
    },
    {
      title: 'A természet szépsége otthonában',
      image: '/img/szobak/nappali.webp',
      description:
        'A természet inspirálta bútorok és lakberendezési megoldások nemcsak esztétikai élményt nyújtanak, hanem nyugalmat és frissességet hoznak a mindennapokba.',
    },
  ]
</script>

<template>
       <section class="container py-24 mx-auto">
      <h2 class="pb-12 text-xl font-medium">Blog</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="post in posts" :key="post.title" class="group">
          <div
            class="overflow-hidden transition duration-300 ease-in-out transform cursor-pointer bg-light hover:bg-gray-100"
          >
            <NuxtImg
              :src="post.image"
              :alt="post.title"
              class="object-cover w-full h-48 pointer-events-none"
            />
            <div class="p-4">
              <h3 class="font-medium pb-[7px]">{{ post.title }}</h3>
              <p class="text-sm font-light">{{ post.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>