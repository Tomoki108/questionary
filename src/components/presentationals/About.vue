<template>
  <div class="greetings">
    <h1 class="green">Questionary App</h1>
    <h3>
      This is a simple questionary app for vue3 (Composition API) and typescript practice.
      <br>
      <br>
      You can answer two types of questionary. 
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
