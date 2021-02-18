<template>
  <div class="back-navigation-container">
    <router-link :to="to" class="back-navigation-link">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackNavigation",
  props: {
    to: String
  }
};
</script>

<style lang="scss" scoped>
.back-navigation-link {
  text-decoration: none;
  padding: 8px;
  border-radius: 3px;
  font-weight: 500;
  color: black;
  align-self: center;
  font-size: 10pt;
  letter-spacing: 0.03em;
  font-weight: 500;

  &:hover {
    background-color: #f3f3f3;
  }
}

.back-navigation-container {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}
</style>
