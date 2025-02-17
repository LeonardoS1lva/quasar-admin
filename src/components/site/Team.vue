<script setup>
import CardTimeComponent from "./cards/CardTimeComponent.vue";
const teamMembers = [
  {
    name: "Kaio",
    designation: "Designation",
    image: "src/assets/site/exemple-picture.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
  {
    name: "Kaio",
    designation: "Designation",
    image: "src/assets/site/exemple-picture.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
  {
    name: "Kaio",
    designation: "Designation",
    image: "src/assets/site/exemple-picture.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
  {
    name: "Kaio",
    designation: "Designation",
    image: "src/assets/site/exemple-picture.png",
    facebookLink: "#",
    instagramLink: "#",
    twitterLink: "#",
  },
];
</script>

<template>
  <!-- Section Team Start -->
  
  <section class="q-py-xl">
    <q-intersection transition="slide-up" once transition-duration="1000">
    <h6 class="text-center text-positive q-mb-sm no-margin">Team member</h6>
    <h3 class="q-mb-xl q-mt-md text-center"><strong>Experienced Team Members</strong></h3>
    </q-intersection>
    <q-intersection transition="slide-up" transition-duration="1500" once>
    <div class="row q-gutter-md justify-center">
      <CardTimeComponent v-for="(person, index) in teamMembers" 
      :key="index" 
      :image="person.image" 
      :facebookLink="person.facebookLink" 
      :instagramLink="person.instagramLink" 
      :twitterLink="person.twitterLink" 
      :name="person.name" 
      :designation="person.designation"/>
    </div>
    </q-intersection>
  </section>
  <!-- Section Team End -->
</template>


