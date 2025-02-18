<template>
   <q-card>
    <q-card-section class="row q-gutter-xl">
            <!-- Image Team Member -->
        <img :src="image" alt="Image Team.">
        <div class="column items-center justify-between q-py-md">
            <!-- Social -->
            <router-link :to="facebookLink"><i class="fab fa-facebook fa-1x"></i></router-link>
            <router-link :to="instagramLink"><i class="fab fa-instagram fa-1x"></i></router-link>
            <router-link :to="twitterLink"><i class="fab fa-twitter fa-1x"></i></router-link>
        </div>
    </q-card-section>
    <q-card-section>
            <!-- About Person -->
        <h5 class="q-my-sm">{{ name }}</h5>
        <span>{{ designation }}</span>
    </q-card-section>
   </q-card>
</template>
<script>
export default {
    props:{
        name:{
            type: String,
            required: true
        }, 
        image:{
            type: String,
            required: true
        },
        facebookLink:{
            type: String,
            required: true
        },
        instagramLink:{
            type: String,
            required: true
        },
        twitterLink:{
            type: String,
            required: true
        },
        designation:{
            type: String,
            required: true
        }
        }
}

;
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