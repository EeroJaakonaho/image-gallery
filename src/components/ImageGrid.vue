<template>
  <keep-alive>
    <div class="grid-container" v-if="!loading">
      <router-link
        v-for="image in images"
        :to="`/images/${image.id}`"
        :key="image.id"
      >
        <img :src="image.thumbnailUrl" width="150" height="150" />
      </router-link>
    </div>
    <div class="loader-container" v-else>
      <moon-loader :loading="true" color="#add8e6" size="200"></moon-loader>
    </div>
  </keep-alive>
</template>

<script>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
export default {
  name: "ImageGrid",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 12
    }
  },
  components: {
    MoonLoader
  }
};
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
.grid-container {
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
</style>
