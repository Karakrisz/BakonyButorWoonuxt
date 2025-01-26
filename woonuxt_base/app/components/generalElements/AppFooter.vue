<template>
  <footer class="bg-light">
      <div class="container">
          <div class="flex flex-wrap">
              <!-- Left column -->
              <div class="flex flex-col items-start justify-between w-full gap-5 pt-10 mb-8 md:py-12 md:w-fit md:mb-0 md:pr-12">
                  <div>
                      <h2 class="mb-[30px] text-2xl font-black">BAKONY BÚTOR</h2>
                      <nav>
                          <ul class="space-y-4 text-xs">
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Főoldal</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Galéria</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Rólunk</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Referenciák</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Kapcsolat</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Adatkezelési Tájékoztató</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="#" class="hover:underline">Gyakran Ismételt Kérdések</NuxtLink>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <NuxtImg src="/img/digital_seed_logo.svg" alt="Digital Seed Studio" class="h-12" />
              </div>

              <!-- Center column (Map) -->
              <div class="relative overflow-hidden md:flex-1">
                  <NuxtImg src="img/terkep.webp" alt="Map" class="absolute top-0 left-0 object-cover w-full h-full" />
              </div>

              <!-- Right column (Contact form) -->
              <div class="w-full px-[55px] py-12 md:w-1/2 bg-green-light">
                  <h2 class="mb-[7px] text-xl font-medium">Kapcsolat</h2>
                  <p class="mb-[28px] text-xs">Írjon nekünk bizalommal, szívesen fogadjuk kérdéseit és észrevételeit!</p>
                  <form>
                      <div class="mb-4">
                          <input type="text" placeholder="Név" class="w-full px-0 text-xs bg-transparent border-t-0 border-b border-x-0" />
                      </div>
                      <div class="mb-4">
                          <input type="email" placeholder="E-mail cím" class="w-full px-0 text-xs bg-transparent border-t-0 border-b border-x-0" />
                      </div>
                      <div class="mb-4">
                          <input type="tel" placeholder="Telefonszám" class="w-full px-0 text-xs bg-transparent border-t-0 border-b border-x-0" />
                      </div>
                      <div class="mb-4">
                          <textarea placeholder="Üzenet" rows="4" class="w-full px-0 text-xs bg-transparent border-t-0 border-b border-x-0"></textarea>
                      </div>
                      <button type="submit" class="button bg-green">Küldés</button>
                  </form>
              </div>
          </div>
      </div>
  </footer>
</template>