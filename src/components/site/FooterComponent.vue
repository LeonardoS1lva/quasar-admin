<template>
    <q-page class="bg-dark text-body footer mt-5 pt-5">
      <q-container class="py-5">
        <q-row class="q-gutter-md">
          <q-col cols="12" md="6" lg="3">
            <q-card class="bg-dark text-white">
              <q-card-section>
                <h5 class="text-white mb-4">Address</h5>
                <p class="mb-2">
                  <q-icon name="fa fa-map-marker-alt" class="me-3" />123 Street, New York, USA
                </p>
                <p class="mb-2">
                  <q-icon name="fa fa-phone-alt" class="me-3" />+012 345 67890
                </p>
                <p class="mb-2">
                  <q-icon name="fa fa-envelope" class="me-3" />info@example.com
                </p>
                <div class="d-flex pt-2">
                  <q-btn flat round icon="fab fa-twitter" class="btn-outline-light btn-social" />
                  <q-btn flat round icon="fab fa-facebook-f" class="btn-outline-light btn-social" />
                  <q-btn flat round icon="fab fa-youtube" class="btn-outline-light btn-social" />
                  <q-btn flat round icon="fab fa-linkedin-in" class="btn-outline-light btn-social" />
                </div>
              </q-card-section>
            </q-card>
          </q-col>
          <q-col cols="12" md="6" lg="3">
            <q-card class="bg-dark text-white">
              <q-card-section>
                <h5 class="text-white mb-4">Quick Links</h5>
                <q-btn flat label="About Us" class="btn-link" />
                <q-btn flat label="Contact Us" class="btn-link" />
                <q-btn flat label="Our Services" class="btn-link" />
                <q-btn flat label="Terms & Condition" class="btn-link" />
                <q-btn flat label="Support" class="btn-link" />
              </q-card-section>
            </q-card>
          </q-col>
          <q-col cols="12" md="6" lg="3">
            <q-card class="bg-dark text-white">
              <q-card-section>
                <h5 class="text-white mb-4">Project Gallery</h5>
                <q-row class="q-gutter-xs">
                  <q-col cols="4">
                    <q-img src="img/gallery-1.jpg" class="rounded" />
                  </q-col>
                  <q-col cols="4">
                    <q-img src="img/gallery-2.jpg" class="rounded" />
                  </q-col>
                  <q-col cols="4">
                    <q-img src="img/gallery-3.jpg" class="rounded" />
                  </q-col>
                  <q-col cols="4">
                    <q-img src="img/gallery-4.jpg" class="rounded" />
                  </q-col>
                  <q-col cols="4">
                    <q-img src="img/gallery-5.jpg" class="rounded" />
                  </q-col>
                  <q-col cols="4">
                    <q-img src="img/gallery-6.jpg" class="rounded" />
                  </q-col>
                </q-row>
              </q-card-section>
            </q-card>
          </q-col>
          <q-col cols="12" md="6" lg="3">
            <q-card class="bg-dark text-white">
              <q-card-section>
                <h5 class="text-white mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <q-input filled placeholder="Your email" class="border-0 w-100 py-3 ps-4 pe-5">
                  <template v-slot:append>
                    <q-btn label="SignUp" color="primary" class="py-2" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card>
          </q-col>
        </q-row>
      </q-container>
      <q-container>
        <q-card class="bg-dark text-white">
          <q-card-section>
            <q-row>
              <q-col cols="12" md="6" class="text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
              </q-col>
              <q-col cols="12" md="6" class="text-center text-md-end">
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                <br />Distributed By:
                <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
              </q-col>
            </q-row>
          </q-card-section>
        </q-card>
      </q-container>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>
  
  <style scoped>
  .footer {
    animation: fadeIn 0.1s;
  }
  </style>