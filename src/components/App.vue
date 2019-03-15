<template>
  <div>
    <h1>Hello There</h1>

    <p>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <!-- note: this doesn't render user home like a non named version -->
      <!-- <router-link :to="{ name: 'user', params: { id: 'mickey' }}">Mickey</router-link> -->
      <router-link :to="{ name: 'user-home', params: { id: 'mickey' }}">Mickey</router-link>
      <!-- <router-link to="/user/mickey">Mickey</router-link> -->
      <router-link to="/user/mouse">Mouse</router-link>
      <router-link to="/user/mickey/profile">Mickey Profile</router-link>
      <router-link to="/user/mickey/posts">Mickey Posts</router-link>
      <router-link to="/user/mouse/posts">Mouse Posts</router-link>
    </p>

    <!-- note: is it a good idea to pass props like this? -->
    <router-view :alma="'barack'" korte="repa"></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";

const Foo = () => import("./Foo");
const Bar = () => import("./Bar");
const User = () => import("./User");
const NotHandledPath = () => import("./NotHandledPath");
const UserHome = () => import("./UserHome");
const UserPosts = () => import("./UserPosts");
const UserProfile = () => import("./UserProfile");

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },

  {
    path: "/user/:id",
    // note: this was a vue router warning cause children has a default
    // name: "user",
    // note: this passes all route params
    // props: true,
    props: (route) => {
      return {
        id: route.params.id,
        gender: Math.random() < 0.5 ? "male" : "female",
      };
    },
    // note: this won't pass params as props anymore, would be nice though
    // props: { gender: "male" },
    // note: won't pass params to new route, won't redirect with children
    // redirect: "/foo",
    // note: unfortunatelly we have to repeat params :(
    alias: "/userke/:id",
    component: User,

    children: [
      // note: that parent route props can be passed in children as well
      { path: "", component: UserHome, name: "user-home", props: true },
      { path: "profile", component: UserProfile, name: "user-profile" },
      { path: "posts", component: UserPosts, name: "user-posts" },
    ],

    beforeEnter(to, from, next) {
      // console.log("user route before enter", to.path, from.path);
      next();
    },
  },

  { path: "*", component: NotHandledPath },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  // console.log("global before each", to.path, from.path);
  next();
});

router.afterEach((to, from) => {
  // console.log("global after each", to.path, from.path);
});

router.beforeResolve((to, from, next) => {
  // console.log("global before resolve", to.path, from.path);
  next();
});

export default {
  router,
};
</script>
