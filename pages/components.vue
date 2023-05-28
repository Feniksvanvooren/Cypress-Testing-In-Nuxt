<template>
  <div class="site-content">
    <div class="site-wrap container-wrap">
      <div class="container">
        <h1>Components page</h1>
        <SwitchButton :options="buttonOptions" class="py-2 border-radius" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      buttonOptions: [
        {
          title: "optie 1",
          value: "optie1",
        },
        {
          title: "optie 2",
          value: "optie2",
        },
        {
          title: "optie 3",
          value: "optie3",
        },
        {
          title: "optie 4",
          value: "optie4",
        },
      ],
    };
  },
};
</script>
