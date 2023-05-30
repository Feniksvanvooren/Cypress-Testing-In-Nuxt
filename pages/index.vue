<template>
  <div class="site-content">
    <div class="site-wrap container-wrap mt-2">
      <div class="intro my-3 py-3 py-lg-6">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xxl-5">
              <h1>Hi there!</h1>
            </div>
            <div class="col-md-8 col-xxl-7">
              <div class="body">
                Welcome to the Cypress Testing Template for Nuxt! Streamline
                your testing process with our comprehensive template repository
                designed specifically for Cypress component and end-to-end (E2E)
                testing in Nuxt. Whether you're a seasoned developer or just
                starting out, this template provides a solid foundation for
                writing robust and reliable tests for your Nuxt applications.
                With this template, you'll have everything you need to quickly
                set up your testing environment and write effective tests.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul class="list-group">
          <div class="col-10 border-radius m-auto mb-2">
            <li class="list-group-item p-3">
              <h4>Component Testing:</h4>
              Easily write isolated tests for your Nuxt components using
              Cypress. Test individual components in isolation and ensure their
              functionality works as expected.
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Learn More
                </button>
              </div>
            </li>
          </div>
          <div class="col-10 border-radius m-auto mb-2">
            <li class="list-group-item p-3">
              <h4>End-to-End (E2E) Testing:</h4>
              Simulate real user interactions and test the entire application
              flow with E2E tests. Validate that all the components, pages, and
              functionality work harmoniously together.
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Learn More
                </button>
              </div>
            </li>
          </div>
          <div class="col-10 border-radius m-auto mb-2">
            <li class="list-group-item p-3">
              <h4>Nuxt Integration:</h4>
              Our template is specifically tailored for Nuxt applications,
              allowing you to seamlessly integrate and test your Nuxt projects
              with Cypress
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Learn More
                </button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
