<template>
  <div>User
    <p>id: {{id}}</p>
    <p>gender: {{gender}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    gender: { type: String, default: "-" },
  },

  beforeRouteEnter(to, from, next) {
    // console.log("user comp before enter", to.path, from.path);
    next((vm) => {
      // console.log("user comp before enter confirmed, `this` is here", vm);
    });
  },

  beforeRouteUpdate(to, from, next) {
    // console.log("user comp update", to.path, from.path);
    console.log("user comp: matched", this.$route.matched);

    next();
  },

  beforeRouteLeave(to, from, next) {
    // console.log("user comp before leave", to.path, from.path);
    next();
  },

  // watch: {
  //   $route(to) {
  //     console.log("User: route change: watch", to.path);
  //   },
  // },

  created() {
    console.log("User created", this.id);
  },
};
</script>
