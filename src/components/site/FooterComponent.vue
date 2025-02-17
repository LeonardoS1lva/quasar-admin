<template>
  <footer class="bg-custom-footer custom-size text-left q-pt-md">
    <div class="row text-white flex-wrap q-px-xl">
      <div class="col-12 col-sm-6 col-md-3">
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
      <div class="col-12 col-sm-6 col-md-3">
        <!-- Quick Links Start -->
        <h6 class="q-mb-lg">Quick Links</h6>
        <!-- Links Start -->
         <p class="q-mb-lg link" v-for="(link, index) in links" :key="index">
          <router-link :to="link.to">{{ link.label }}</router-link>
        </p>
        <!-- Quick Links And Link End -->
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <!-- Section Project Start -->
        <h6 class="q-mb-lg">Project Gallery</h6>
        <!-- Projects -->
        <p>Elena</p>
        <!-- Section Project End -->
      </div>
        <!-- Section Newsletter Start -->
      <div class="col-12 col-sm-6 col-md-3">
        <h6 class="q-mb-lg">Newsletter</h6>
        <p class="q-mb-lg">
          Dolor amet sit justo amet elitr clita ipsum elitr est.
        </p>
        <section class="row items-end">
          <!-- Your Email -->
        <q-input label="Your email" class="col-8" color="secondary" input-class="text-custom" label-color="white" ></q-input>
        <q-btn color="primary" icon="send" @click="onClick" style="height: 10px; width: 40px;"/>
        </section>
        <!-- Section Newletter End -->
      </div>
    </div>
    <hr class="q-mt-xl"/>
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
hr {
  width: 80%;
  color: #8a9b9b;
}

p,span {
  color: #8a9b9b;
  transition: color 0.3s, transform 0.5s;
}
h6 {
  font-size: 1.5rem;
  font-weight: bold;
}
.custom-size {
  width: 100%;
  height: fit-content;
}
.bg-custom-footer {
  background-color: #1a2a36;
}
.text-custom {
  color: #fff;
}
a{
  color: #8a9b9b;
  text-decoration: none;
  transition: 0.5s;
}
.link:hover{
  color: #fff;
  transform: scale(1.1);
  transition: 0.3s;
  
}
</style>
