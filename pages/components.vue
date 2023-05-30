<template>
  <div class="site-content">
    <div class="site-wrap container-wrap">
      <div class="container">
        <div class="border-radius my-5 col-10 m-auto">
          <SimpleComponent username="Mr Astley" nickname="Rick 'Roll' Astley" />
        </div>
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
