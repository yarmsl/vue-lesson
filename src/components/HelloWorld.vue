<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="change">aloha?</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello",
    };
  },
  methods: {
    change() {
      this.msg = "Aloha!";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
