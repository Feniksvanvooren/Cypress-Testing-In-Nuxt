<template>
  <div class="btn-ctr">
    <div class="d-md-flex bg-gray-ba p-1">
      <button
        type="button"
        v-for="(option, index) in options"
        :key="index"
        class="d-block w-100 py-2 text-white text-uppercase fw-500 px-2 px-md-8 switch-button"
        @click="updateActive(index)"
        :class="activeIndex == index ? 'active' : ''"
        :data-testid="'btn-option' + index"
      >
        {{ option.title }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    options: {
      type: Array,
    },
  },
  methods: {
    updateActive(index) {
      this.activeIndex = index;
      this.$emit("input", this.options[this.activeIndex].value);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-ctr {
  transition: all;
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
}

button {
  border-radius: 6px;
  border: none;
  background: none;
  &.active {
    background: orange;
  }
}
.switch-button {
  font-size: 0.85rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
}
</style>
