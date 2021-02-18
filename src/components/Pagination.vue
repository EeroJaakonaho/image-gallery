<template>
  <div class="pagination">
    <span @click="changePage(1)">&laquo;</span>
    <span
      v-for="page in pages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
      >{{ page }}</span
    >
    <span @click="changePage(maxPage)">&raquo;</span>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number
    },
    maxPage: {
      type: Number
    },
    shownPages: {
      type: Number,
      default: 6
    }
  },
  computed: {
    pages() {
      const pages = [];
      const startNumber =
        this.currentPage - Math.floor(this.shownPages / 2) > 0
          ? this.currentPage - Math.floor(this.shownPages / 2)
          : 1;
      for (let i = startNumber; i < startNumber + this.shownPages; ++i) {
        if (i <= this.maxPage) pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    changePage(page) {
      if (page !== this.currentPage) this.$emit("changePage", page);
    }
  }
};
</script>

<style scoped>
.pagination {
  display: inline-block;
  padding: 30px;
}

.pagination span {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
}

.pagination span.active {
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: default;
}

.pagination span:hover:not(.active) {
  background-color: #ddd;
}
</style>
