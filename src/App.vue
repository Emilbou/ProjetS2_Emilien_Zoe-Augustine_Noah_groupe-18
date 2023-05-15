<script setup lang="ts">
  //
</script>

<template>
  <header>
    <h1 class="text-4xl">Test avec "router"</h1>
  </header>

  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
</template>