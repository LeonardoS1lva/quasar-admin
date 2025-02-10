<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-sm q-mx-lg q-mt-md rounded-borders">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
            v-if="$q.screen.gt.sm"
          >
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="white"
            :icon="$q.dark.isActive ? 'ion-moon' : 'ion-sunny'"
            @click="$q.dark.toggle()"
          >
          </q-btn>

          <q-btn round dense flat color="white" icon="translate">
            <q-menu>
              <q-list>
                <q-item
                  v-for="lang in langOptions"
                  :key="lang.value"
                  clickable
                  @click="this.lang = lang.value"
                  dense
                  :class="{ 'bg-grey-3 text-grey': lang.value === this.lang }"
                >
                  <q-item-section>
                    <q-item-label>{{ lang.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-menu>
              <q-list>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Profile</q-item-label>
                    <q-item-label caption>Admin</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="help" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Faq</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="settings" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Settings</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section avatar>
                    <q-icon name="exit_to_app" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Logout</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary text-white"
      :mini="!leftDrawerOpen || miniState"
      @click.capture="drawerClick"
    >
      <!-- <q-toolbar class="bg-primary text-white">
        <q-avatar>
          <img
            src="../assets/quasar-logo-full.svg"
          />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>
      </q-toolbar> -->

      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item to="/" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Dashboard2" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>CRM Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item icon="pages" label="Pages">
            <q-list class="q-pl-lg">
              <q-item to="/Login-1" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="email" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Login-1</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/Lock" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="lock" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Lock Screen</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/Lock-2" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="lock" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Lock Screen - 2</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/Pricing" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="list" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Pricing</q-item-label>
                </q-item-section>
              </q-item>
              <q-item-label header class="text-weight-bolder text-white"
                >Generic</q-item-label
              >
              <q-item to="/Profile" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>User Profile</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                to="/Maintenance"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Maintenance</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item icon="map" label="Maps">
            <q-list class="q-pl-lg">
              <q-item to="/Map" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="map" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Map</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                to="/MapMarker"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon name="location_on" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Map Marker</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                to="/StreetView"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon name="streetview" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Street View</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-item to="/Mail" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Mail</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/directory" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="card_giftcard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Directory</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/TreeTable" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              <q-item-label>TreeTable</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Charts" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="insert_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Charts</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Footer" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Footer</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/CardHeader" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="card_giftcard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Card Header</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Cards" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="card_giftcard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cards</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Tables" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tables</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Contact" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Contact</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Checkout" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="check_circle_outline" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Checkout</q-item-label>
            </q-item-section>
          </q-item>

          <!--        not completed-->
          <q-item to="/Calendar" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="date_range" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Calendar</q-item-label>
            </q-item-section>
          </q-item>

          <!--        not completed-->
          <!--        <q-item to="/Taskboard" active-class="q-item-no-link-highlighting">-->
          <!--          <q-item-section avatar>-->
          <!--            <q-icon name="done"/>-->
          <!--          </q-item-section>-->
          <!--          <q-item-section>-->
          <!--            <q-item-label>Taskboard</q-item-label>-->
          <!--          </q-item-section>-->
          <!--        </q-item>-->

          <q-item to="/Pagination" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="date_range" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Pagination</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Ecommerce" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Product Catalogues</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item icon="menu_open" label="Menu Levels">
            <q-item class="q-ml-xl" active-class="q-item-no-link-highlighting">
              <q-item-section>
                <q-item-label>Level 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-expansion-item :header-inset-level="0.85" label="Level 2">
              <q-item
                class="q-ml-xl"
                style="margin-left: 55px !important"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section>
                  <q-item-label>Level 2.1</q-item-label>
                </q-item-section>
              </q-item>
              <q-expansion-item :header-inset-level="1" label="Level 2.2">
                <q-item
                  style="margin-left: 65px !important"
                  active-class="q-item-no-link-highlighting"
                >
                  <q-item-section>
                    <q-item-label>Level 2.2.1</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  style="margin-left: 65px !important"
                  active-class="q-item-no-link-highlighting"
                >
                  <q-item-section>
                    <q-item-label>Level 2.2.2</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <div class="q-mini-drawer-hide absolute" style="top: 30px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_left"
          @click="miniState = true"
          style="border: 4px solid white"
        />
      </div>
    </q-drawer>

    <q-page-container class="q-pa-md q-ml-md q-mt-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import Messages from "./Messages.vue";

import { defineComponent, ref, watch } from "vue";
import { useQuasar } from "quasar";
import languages from "quasar/lang/index.json";

const modules = import.meta.glob("../../node_modules/quasar/lang/*.js");

const appLanguages = languages.filter((lang) =>
  ["en-US", "de", "es", "fr", "ru", "ko", "pt-BR"].includes(lang.isoName)
);

const langOptions = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Messages,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const lang = ref($q.lang.isoName);
    const miniState = ref(false);

    watch(lang, (val) => {
      modules[`../../node_modules/quasar/lang/${val}.js`]().then((lang) => {
        $q.lang.set(lang.default);
      });
    });

    return {
      $q,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      lang,
      langOptions,
      miniState,

      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false;

          e.stopPropagation();
        }
      },
    };
  },
});
</script>

<style>
/* FONT AWESOME GENERIC BEAT */
.fa-beat {
  animation: fa-beat 5s ease infinite;
}

@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.25);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(1);
  }
}
</style>
