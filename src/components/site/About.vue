<template>
  <q-intersection
    transition="fade"
    transition-duration="1000"
    once
    class="intersection-600"
  >
    <q-card flat class="bg-grey-3">
      <q-card-section class="no-padding">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              src="../../assets/site/img/about.jpg"
              alt="About Us Image"
              class="full-width"
              style="max-height: 600px; object-fit: cover"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-lg row content-center">
            <q-card-section class="col-10 q-col-gutter-y-md">
              <h6 class="text-positive no-margin">About Us</h6>
              <h3 class="no-margin text-weight-bold">
                25+ Years Experience In Solar & Renewable Energy Industry
              </h3>
              <p class="text-grey-6 text-subtitle1">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam eteos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet ita duo justo erat
                amet ita.
              </p>
              <div>
                <p class="text-grey-6 text-subtitle1">
                  <i class="fas fa-check-circle text-positive q-pr-sm"></i> High
                  Quality
                </p>
                <p class="text-grey-6 text-subtitle1">
                  <i class="fas fa-check-circle text-positive q-pr-sm"></i>
                  Customer Satisfaction
                </p>
                <p class="text-grey-6 text-subtitle1">
                  <i class="fas fa-check-circle text-positive q-pr-sm"></i>
                  Innovative Solutions
                </p>
              </div>
              <div>
                <q-btn
                  label="Explore More"
                  color="positive"
                  no-caps
                  unelevated
                  rounded
                  size="22px"
                  class="text-weight-regular"
                />
              </div>
            </q-card-section>
            <div class="col-2"></div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-intersection>
</template>
