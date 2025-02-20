<script setup>
import ListFeature from 'src/components/site/lists/ListFeature.vue'
</script>

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
          <div class="col-12 col-md-6 q-pa-xl row">
            <div class="col-1"></div>
            <q-card-section class="q-pa-xl col-11">
              <h6 class="text-positive no-margin">Why Choose Us!</h6>
              <h3 class="no-margin q-py-md">
                <strong>
                  Complete Commercial & Residential Solar Systems
                </strong>
              </h3>
              <p class="text-grey-6 text-subtitle1">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div class="row q-col-gutter-md q-pt-md">
                <ListFeature 
                  icon="fa fa-check"
                  title="Quality"
                  subtitle="Services"
                />
                <ListFeature
                  icon="fa fa-user-check"
                  title="Expert"
                  subtitle="Workers"
                />
                <ListFeature
                  icon="fa fa-drafting-compass"
                  title="Free"
                  subtitle="Consultation"
                />
                <ListFeature
                  icon="fa fa-headphones"
                  title="Customer"
                  subtitle="Support"
                />
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
