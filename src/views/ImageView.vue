<template>
  <div>
    <BackNavigation to="/images">&lt;&lt;Back to Image Gallery</BackNavigation>
    <div v-if="!loading" class="image-details-container">
      <img :src="image.url" height="400" width="400" class="detail-image" />
      <div class="image-details">
        <ul>
          <li>Image title:</li>
          <li class="value">{{ image.title }}</li>
          <li>Image id:</li>
          <li class="value">{{ image.id }}</li>
        </ul>
      </div>
    </div>
    <div class="loader-container" v-else>
      <moon-loader :loading="true" color="#add8e6" size="200"></moon-loader>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import BackNavigation from "@/components/BackNavigation";
import {
  GET_CURRENT_IMAGE,
  GET_LOADING_IMAGES,
  FETCH_IMAGE
} from "@/store/module/images";
const { mapGetters, mapActions } = createNamespacedHelpers("images");

export default {
  name: "ImageView",
  props: {
    imageId: {
      require: true
    }
  },
  components: {
    BackNavigation,
    MoonLoader
  },
  computed: {
    ...mapGetters({
      image: GET_CURRENT_IMAGE,
      loading: GET_LOADING_IMAGES
    })
  },
  methods: {
    ...mapActions({ fetchImage: FETCH_IMAGE })
  },
  watch: {
    imageId: function() {
      this.fetchImage(this.imageId);
    }
  },
  created() {
    this.fetchImage(this.imageId);
  }
};
</script>

<style lang="scss" scoped>
.image-details-container {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    margin: 0;
  }
}
.image-details {
  max-width: 400px;
  ul {
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
  li {
    list-style: none;
  }
  .value {
    font-weight: 500;
    font-size: 14pt;
    margin-bottom: 10px;
  }
}
.detail-image {
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
</style>
