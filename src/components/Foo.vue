<template>
  <div>Foo
    <p>route hash: {{$route.path}}</p>
    <p>route params: {{$route.params}}</p>
    <p>alma: {{alma}}</p>
    <p>korte: {{korte}}</p>
  </div>
</template>

<script>
export default {
  props: {
    alma: { type: String, default: "-" },
    korte: { type: String, default: "-" },
  },

  created() {
    console.log("Foo created", this.$route.path);
  },
};
</script>
