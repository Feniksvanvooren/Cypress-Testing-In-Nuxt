<template>
  <div class="site-content">
    <div class="site-wrap container-wrap my-2 py-8">
      <div class="intro my-3 pb-3 pb-lg-6 mb-7">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xxl-5">
              <h1>Hi there!</h1>
            </div>
            <div class="col-md-8 col-xxl-7">
              <div class="body">
                Welcome to the Cypress Testing Template for Nuxt!
                <br />
                Streamline your testing process with our comprehensive template
                repository designed specifically for Cypress component and
                end-to-end (E2E) testing in Nuxt. Whether you're a seasoned
                developer or just starting out, this template provides a solid
                foundation for writing robust and reliable tests for your Nuxt
                applications. With this template, you'll have everything you
                need to quickly set up your testing environment and write
                effective tests.
              </div>
              <div class="text-mid mt-2">~ greetz, Feniks</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7">
        <ul class="list-group">
          <div class="col-10 m-auto mb-1">
            <h2>New to Cypress?</h2>
            <h4>Read these 2 pages of documentation</h4>
            <p>I promise they're usefull</p>
          </div>
          <div class="col-10 border-radius m-auto mb-2">
            <li class="list-group-item p-3">
              <h4>Component Testing:</h4>
              <div class="my-1">
                Easily write isolated tests for your Nuxt components using
                Cypress. Test individual components in isolation and ensure
                their functionality works as expected.
              </div>
              <div class="col-12">
                <a
                  href="https://docs.cypress.io/guides/component-testing/overview"
                  class="btn btn-primary"
                >
                  Learn More</a
                >
              </div>
            </li>
          </div>
          <div class="col-10 border-radius m-auto mb-2">
            <li class="list-group-item p-3">
              <h4>End-to-End (E2E) Testing:</h4>
              <div class="my-1">
                Simulate real user interactions and test the entire application
                flow with E2E tests. Validate that all forms, pages, and
                functionality work harmoniously together.
              </div>
              <div class="col-12">
                <a mb-7 class="btn btn-primary"> Learn More</a>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <div class="col-10 m-auto mb-1">
          <h2>Wanna jump right in?</h2>
          <h4>Open up your terminal...</h4>
          <p>and type the following:</p>
          <div class="bg-dark text-white p-3 d-flex flex-column mb-4">
            <div>npx cypress open</div>
          </div>
          <div class="d-flex h4 mb-2">
            <div>
              For detailed instruction check the README.md file of the
              repository.
            </div>
          </div>
          <button @click="openReadme" class="btn btn-primary">
            Checkout README.md
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    openReadme() {
      const readmeURL = `https://github.com/Feniksvanvooren/Cypress-Testing-In-Nuxt/blob/main/README.md`;
      window.open(readmeURL, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
