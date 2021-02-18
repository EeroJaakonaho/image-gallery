<template>
  <div class="home">
    <Header>Image Gallery</Header>
    <Pagination
      :currentPage="currentPage"
      :maxPage="maxPage"
      :shownPages="5"
      @changePage="changePage"
    />
    <image-grid
      :images="images"
      :loading="isLoading"
      :limit="parseInt(limit, 10)"
    ></image-grid>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ImageGrid from "@/components/ImageGrid.vue";
import Pagination from "@/components/Pagination.vue";
import Header from "@/components/Header.vue";
import {
  GET_IMAGES,
  GET_TOTAL_COUNT,
  GET_LOADING_IMAGES,
  FETCH_IMAGES
} from "@/store/module/images";
const { mapGetters, mapActions } = createNamespacedHelpers("images");

export default {
  name: "ImageGallery",
  data() {
    return {
      currentPage: 1,
      limit: 16
    };
  },
  components: {
    ImageGrid,
    Pagination,
    Header
  },
  computed: {
    ...mapGetters({
      images: GET_IMAGES,
      totalCount: GET_TOTAL_COUNT,
      isLoading: GET_LOADING_IMAGES
    }),
    maxPage() {
      return Math.ceil(this.totalCount / this.limit);
    }
  },
  methods: {
    ...mapActions({ fetchImages: FETCH_IMAGES }),
    changePage(page) {
      this.currentPage = page;
      this.fetchImages({ page: this.currentPage, limit: this.limit });
    }
  },
  created() {
    this.currentPage = this.pageNumber || this.currentPage;
    this.fetchImages({
      page: this.pageNumber || this.currentPage,
      limit: this.limit
    });
  }
};
</script>
