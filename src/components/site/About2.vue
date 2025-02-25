<script setup>
import ListFeature from 'src/components/site/lists/ListFeature.vue'

const features = [
  {
    icon: 'fa fa-check',
    title: 'Quality',
    subtitle: 'Services',
  },
  {
    icon: 'fa fa-user-check',
    title: 'Expert',
    subtitle: 'Workers',
  },
  {
    icon: 'fa fa-drafting-compass',
    title: 'Free',
    subtitle: 'Test',
  },
  {
    icon: 'fa fa-headphones',
    title: 'Customer',
    subtitle: 'Support',
  },
]
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
          <div class="col-12 col-md-6 q-py-xl row">
            <div class="col-1 col-md-2"></div>
            <q-card-section class="col-10 col-md-9 q-pa-none">
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
                  v-for="(feature, index) in features"
                  :key="index"
                  :icon="feature.icon"
                  :title="feature.title"
                  :subtitle="feature.subtitle"
                />
              </div>
            </q-card-section>
            <div class="col-1"></div>
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
