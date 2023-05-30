<template>
  <div class="p-4 mx-auto border-radius bg-light">
    <div class="py-4 px-2 border-radius">
      <h2 data-testid="username" class="text-2xl">Welcome {{ username }}!</h2>
      <div>
        <div class="distract">
          <h3 data-testid="nickname">AKA : {{ nickname }}</h3>
        </div>
        <button
          class="btn btn-primary"
          @click="showContact = !showContact"
          data-testid="contact-btn"
        >
          Reveal
        </button>
      </div>
      <div v-if="showContact" data-testid="contact-info">
        Userinfo
        <ul>
          <li><bold>Username: </bold>User</li>
          <li><bold>Email: </bold>User@FooBar.com</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showContact: false,
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
  },
};
</script>

<style></style>
