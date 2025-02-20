<template>
    <div class="col-6">
      <div class="row items-center">
        <q-btn
          round
          :icon="icon"
          color="positive"
          text-color="white"
          size="18px"
          class="q-mr-md"
        />
        <div class="flex column">
          <p class="q-mb-none text-grey-6">{{ title }}</p>
          <h6 class="q-ma-none">
            <strong> {{ subtitle }} </strong>
          </h6>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    }
  }
  </script>