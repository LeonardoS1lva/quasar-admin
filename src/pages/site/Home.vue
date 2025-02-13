<template>
    <!-- Section Team Start -->
    <section class="q-py-xl">
        <h6 class="text-center q-mb-sm">Team member</h6>
        <h1 class="q-mb-xl q-mt-md text-center">Experienced Team Members</h1>
        <div class="card-time-container justify-center">
            <CardTimeComponent />
            <CardTimeComponent />
            <CardTimeComponent />
        </div>
    <!-- Section Team End -->
    </section>
    <!-- Section Testiomonial Start -->
    <section class="q-py-xl">
        <h6 class="text-center q-mb-sm">Testimonial</h6>
        <h1 class="q-mb-xl q-mt-md text-center">What Our Client Say!</h1>
        <div id="carousel">
            <CarouselTestimonial />
        </div>
        
    </section>
    <!-- Section Testimonial End -->
</template>
<script>
import CardTimeComponent from "src/components/site/cards/CardTimeComponent.vue";
import CarouselTestimonial from 'src/components/site/carousel/CarouselTestimonial.vue';

export default {
    name: "Home",
    components: {
        CardTimeComponent,
        CarouselTestimonial,
    },
};
</script>
<style scoped>
.card-time-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
#carousel{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

