<template>
  <q-intersection
    transition="fade"
    transition-duration="1000"
    once
    class="intersection-630"
  >
    <q-card flat class="q-my-lg bg-grey-2">
      <q-card-section class="no-padding">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              src="../../assets/site/img/quote.jpg"
              alt="About Us Image"
              class="full-width"
              style="max-height: 600px; object-fit: cover"
            />
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-1"></div>
            <q-card-section class="col-md-9 col-sm-10 col-xs-10 q-pa-none">
              <h6 class="text-positive no-margin q-pt-md">Free Quote</h6>
              <h3 class="no-margin q-py-md">
                <strong> Get A Free Quote </strong>
              </h3>
              <p class="text-grey-6 text-subtitle1 q-pt-md">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>

              <div class="q-pa-md">
                <q-form @submit="onSubmit" class="q-gutter-md">
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-input
                        filled
                        v-model="name"
                        label="Your name *"
                        hint="Name and Lastname"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type something',
                        ]"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input
                        filled
                        type="email"
                        label="Your email *"
                        v-model="email"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type your email',
                          (val) =>
                            /.+@.+\..+/.test(val) ||
                            'Please type a valid email',
                        ]"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input
                        filled
                        type="tel"
                        v-model="mobile"
                        label="Your mobile"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-select
                        filled
                        v-model="service"
                        label="Select a service"
                        :options="[
                          { label: 'Service 1', value: 'service1' },
                          { label: 'Service 2', value: 'service2' },
                          { label: 'Service 3', value: 'service3' },
                        ]"
                      />
                    </div>
                  </div>

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />

                  <div>
                    <q-btn
                      label="Submit"
                      type="submit"
                      color="positive"
                      rounded
                      unelevated
                      no-caps
                      size="22px"
                      class="q-px-lg text-h4"
                    />
                  </div>
                </q-form>
              </div>
            </q-card-section>
            <div class="col-md-2 col-sm-1 col-xs-10"></div>
          </div>

          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-intersection>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const service = ref(null);
    const email = ref(null);
    const mobile = ref(null);
    const accept = ref(false);

    return {
      name,
      email,
      mobile,
      service,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};
</script>
