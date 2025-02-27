<template>
  <footer class="bg-footer text-left q-pt-xl">
    <div class="row text-white flex-wrap justify-between">
      <div class="col-md-1 col-sm-1 col-12"></div>
      <div class="col-12 col-sm-4 col-md-2">
        <!-- Section Adress Start -->
        <h6 class="q-mb-lg">Andress</h6>
        <p class="q-mb-lg">{{ address.street }}</p>
        <p class="q-mb-lg">{{ address.number }}</p>
        <p class="q-mb-lg">{{ address.email }}</p>
        <section>
        <!-- Social Links Start -->
          <div class="d-flex justify-content-center q-gutter-sm">
            <a href="#" class="text-white">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" class="text-white">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" class="text-white">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        <!-- Social Links End -->
        </section>
        <!-- Section Adress End -->
      </div>
      <div class="col-12 col-sm-4 col-md-2">
        <!-- Quick Links Start -->
        <h6 class="q-mb-lg">Quick Links</h6>
        <!-- Links Start -->
         <p class="q-mb-lg link-footer" v-for="(link, index) in links" :key="index">
          <router-link :to="link.to" class="a-footer"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z"/></svg> {{ link.label }}</router-link>
        </p>
        <!-- Quick Links And Link End -->
      </div>
      <div class="col-12 col-sm-4 col-md-2">
        <!-- Section Project Start -->
        <h6 class="q-mb-lg">Project Gallery</h6>
        <!-- Projects -->
        <p>Elena</p>
        <!-- Section Project End -->
      </div>
        <!-- Section Newsletter Start -->
      <div class="col-12 col-sm-4 col-md-2">
        <h6 class="q-mb-lg">Newsletter</h6>
        <p class="q-mb-lg">
          Dolor amet sit justo amet elitr clita ipsum elitr est.
        </p>
        <section class="row items-end">
          <!-- Your Email -->
        <q-input label="Your email" class="col-8" color="white" label-color="white" ></q-input>
        <q-btn color="primary" icon="send" @click="onClick" style="height: 10px; width: 40px;"/>
        </section>
        <!-- Section Newletter End -->
      </div>
      <div class="col-12 col-sm-1 col-md-1"></div>
    </div>
    <hr class="q-mt-xl separator-footer"/>
    <aside class="text-center q-pa-md">
      <span
        ><span class="text-white">&copy;{{ siteName }}</span> ,Todos direitos
        reservados</span
      >
    </aside>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      siteName: "CPID",
      address: {
        street: "Rua Exemplo",
        number: "+55 (27) 999999999",
        email: "email@gmail.com",
      },
      links:[
        {label: "About", to: "/about"},
        {label: "Contact Us", to: "/contact"},
        {label: "Our Service", to: "/service"},
        {label: "Terms & Conditions", to: "/terms"},
        {label: "Support", to: "/support"},
      ]
    };
  },
  methods: {
    onClick() {
      alert("Email enviado com sucesso!");
    },
  },
};
</script>

<style scoped>
 p,span {
  color: #8a9b9b;
  transition: color 0.3s, transform 0.5s;
}


</style>
