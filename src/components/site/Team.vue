<script setup>
import CardTeam from "./cards/CardTeam.vue";

const teamMembers = [
  {
    name: "Full Name",
    designation: "Designation",
    image: "src/assets/site/img/team/team1.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
  {
    name: "Full Name",
    designation: "Designation",
    image: "src/assets/site/img/team/team2.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
  {
    name: "Full Name",
    designation: "Designation",
    image: "src/assets/site/img/team/team3.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
];
</script>

<template>
  <!-- Section Team Start -->
  <section class="q-py-xl">
    <q-intersection
      transition="slide-up"
      once
      transition-duration="1000"
      class="intersection-180"
    >
      <h6 class="text-center text-positive no-margin">Team member</h6>
      <h3 class="text-center no-margin">
        <strong>Experienced Team Members</strong>
      </h3>
    </q-intersection>
    <q-intersection transition="slide-up" transition-duration="1500" once>
      <div class="row justify-center">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="row q-col-gutter-lg">
            <div
              v-for="(person, index) in teamMembers"
              :key="index"
              class="col-lg-4 col-md-6 col-sm-12"
            >
              <CardTeam
                :image="person.image"
                :facebookLink="person.facebookLink"
                :instagramLink="person.instagramLink"
                :twitterLink="person.twitterLink"
                :name="person.name"
                :designation="person.designation"
              />
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </q-intersection>
  </section>
  <!-- Section Team End -->
</template>
