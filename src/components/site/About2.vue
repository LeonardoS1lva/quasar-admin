<template>
  <q-intersection
    transition="fade"
    transition-duration="1000"
    once
    class="intersection-600"
  >
    <q-card flat class="q-my-lg bg-grey-2">
      <q-card-section class="no-padding">
        <div class="row">
          <div class="col-12 col-md-6 q-pa-xl">
            <q-card-section class="q-pa-xl">
              <h6 class="text-positive no-margin q-pt-md">Why Choose Us!</h6>
              <h3 class="no-margin q-py-md">
                <strong>
                  Complete Commercial & Residential Solar Systems
                </strong>
              </h3>
              <p class="text-grey-7 q-pt-md">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div class="row q-col-gutter-md q-pt-md">
                <div class="col-6">
                  <div class="row items-center">
                    <q-btn
                      round
                      icon="fa fa-check"
                      color="positive"
                      text-color="white"
                      class="q-mr-md"
                    />
                    <div class="flex flex-center column">
                      <p class="q-mb-none text-grey-7">Quality</p>
                      <h6 class="q-ma-none">
                        <strong> Services </strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row items-center">
                    <q-btn
                      round
                      icon="fa fa-user-check"
                      color="positive"
                      text-color="white"
                      class="q-mr-md"
                    />
                    <div class="flex flex-center column">
                      <p class="q-mb-none text-grey-7">Expert</p>
                      <h6 class="q-ma-none">
                        <strong> Workers </strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row items-center">
                    <q-btn
                      round
                      icon="fa fa-drafting-compass"
                      color="positive"
                      text-color="white"
                      class="q-mr-md"
                    />
                    <div class="flex flex-center column">
                      <p class="q-mb-none text-grey-7">Free</p>
                      <h6 class="q-ma-none">
                        <strong> Consultation </strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row items-center">
                    <q-btn
                      round
                      icon="fa fa-headphones"
                      color="positive"
                      text-color="white"
                      class="q-mr-md"
                    />
                    <div class="flex flex-center column">
                      <p class="q-mb-none text-grey-7">Customer</p>
                      <h6 class="q-ma-none">
                        <strong> Support </strong>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="../../assets/site/img/feature.jpg"
              alt="About Us Image"
              class="full-width"
              style="max-height: 600px; object-fit: cover"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-intersection>
</template>

<style scoped src="../../css/site/global.css"></style>
