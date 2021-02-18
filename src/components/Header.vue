<template>
  <div class="header">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
