<template>
   <q-card>
    <q-card-section class="row q-gutter-xl">
            <!-- Image Team Member -->
        <img src="/src/assets/site/exemple-picture.png" alt="">
        <div class="column items-center justify-between q-py-md">
            <!-- Social -->
            <router-link to="#"><i class="fab fa-facebook fa-1x"></i></router-link>
            <router-link to="#"><i class="fab fa-instagram fa-1x"></i></router-link>
            <router-link to="#"><i class="fab fa-twitter fa-1x"></i></router-link>
        </div>
    </q-card-section>
    <q-card-section>
            <!-- About Person -->
        <h5 class="q-my-sm">Full Name</h5>
        <span>Designation</span>
    </q-card-section>
   </q-card>
</template>
<script>
export default {
    name: "CardTimeComponent",
};
</script>
<style scoped>

a{
    text-decoration: none;
    color: #000;
}

i{
    border: 1px solid green;
    border-radius: 50%;
    color: green;
    padding: 10px;
    transition: 0.3s;
}

i:hover{
    border-radius: 50%;
    background-color: green;
    color: #fff;
    transition: 0.3s;
}

</style>