<template>
  <div class="p-4 mx-auto border-radius bg-light">
    <form
      @submit.prevent="handleSubmit"
      v-if="!Submitted"
      class="col-xl-6 m-auto d-flex-column align-items-center"
    >
      <div class="form-group col-xl-6 m-auto">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group col-xl-6 m-auto">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-check col-xl-6 m-auto">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <div class="form-group col-xl-6 m-auto">
        <button type="submit" class="btn btn-primary align-self-center">
          Submit
        </button>
      </div>
    </form>
    <div v-else>
      <div class="d-flexflex-column">
        <div>Merci voor contact</div>
        <button
          @click="Submitted = false"
          type="button"
          class="btn btn-primary"
        >
          Reset Form
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  components: {},
  data() {
    return {
      Submitted: false,
    };
  },
  props: {
    username: String,
    nickname: String,
  },
  methods: {
    handleLogout() {
      this.$emit("logout");
    },
    handleSubmit() {
      console.log("test");
      3;
      this.Submitted = true;
    },
  },
};
</script>
  
  <style></style>
  