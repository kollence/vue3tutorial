<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/game">Game</router-link> |
    <router-link to="/formpage">Form</router-link> |<br>
    <router-link to="/compositionapi">Composition Api</router-link> |
    <router-link to="/posts">Posts</router-link> |
  </nav>
  <router-view/>
</template>

<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
