<script setup lang="ts">
import Button from './components/Button.vue'

function test() {
    console.log("test");
}
</script>

<template>
    <Button label="test" @click="test"/>
</template>

<style>
html {
    width: 100%;
    height: 100%;
}

body {
    width: 100%;
    height: 100%;
    margin: 0 0 0 0;
}

#app {
    width: 100%;
    height: 100%;
}
</style>