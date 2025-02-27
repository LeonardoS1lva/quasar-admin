<template>
  <q-layout view="hHr LpR lFf">
    <div class="row justify-between items-center q-pl-xl q-pr-xl gt-sm" style="background-color: #1A2A36; color: #8a9b9b;;">
      <div class="row q-gutter-x-xl items-center">
      <span class="row">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#32C36C"><path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Zm0-456Z"/>
        </svg>CPID, Espirito Santo, BR
      </span>
      <span class="row">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#32C36C"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z"/>
        </svg>{{ getDate }}
      </span>
      </div>
      <div class="row q-gutter-x-sm">
      <div class="q-pa-sm row items-center">
        <span class="row">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#32C36C">
            <path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z"/>
          </svg>+012 345 6789
        </span>
      </div>
      <div class="row q-gutter-x-sm q-pa-sm items-center">
        <a href="#" class="text-success q-pr-sm" style="border-right: 1px solid #fff;">
              <i class="fab fa-facebook fa-1x" style="color: #32C36C; height: 20px; width: 20px;"></i>
            </a>
            <a href="#" class="text-success q-pr-sm" style="border-right: 1px solid #fff;">
              <i class="fab fa-instagram fa-1x" style="color: #32C36C;" ></i>
            </a>
            <a href="#" class="text-success q-pr-sm">
              <i class="fab fa-twitter fa-1x" style="color: #32C36C;"></i>
            </a>
      </div>

      </div>
    </div>
    <header id="header" class="bg-white shadow-1">
      <div class="row no-wrap items-center" style="height: 75px;" v-if="!isMobile">
        <div class="col-4 q-pa-md">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav
          class="col-8 row justify-end items-center"
          style="height: 100%;"
        >
          <router-link
            v-for="link in links"
            :key="link.text"
            :to="link.to"
            class="text-uppercase no-decoration link-header q-pr-xl"
          >
            {{ link.text }}
          </router-link>
          <router-link id="button-header" class="row justify-center items-center no-decoration" to="/">Get A Quote &rarr;</router-link>
        </nav>
      </div>
      <div v-else class="row no-wrap justify-between items-center">
        <div class="col-4 q-pa-md">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav class="q-pa-md">
          <q-btn color="primary" icon="menu">
        <q-menu>
          <q-list style="min-width: 100px" v-for="link in links " :key="link.text">
            <q-item :to="link.to" clickable v-close-popup>
              {{ link.text }}
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        </nav>
      </div>
    </header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>
<script>
import FooterComponent from "src/components/site/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      links: [
        { text: "Inicio", to: "#home" },
        { text: "Serviços", to: "#services" },
        { text: "Projetos", to: "#projects" },
        { text: "Contato", to: "#contact" },
        { text: "Login", to: "/Login-1" },
      ],
      getDate: this.getCurrentDate(),
      isDivVisible: null
    };
  },
    computed:{
      isMobile(){
        return this.$q.screen.width < 1200
      }
    },
    methods: {
      //Função para o pegar o dia, mes e a hora atual
    getCurrentDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let monthName = this.getMonthName(month);
    let partForDay = null
    if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  if(hour < 10){
    hour = `0${hour}`
  }
  if(hour > 6 && hour < 12){
    partForDay = 'da Manhã'
  }
  if(hour > 12 && hour < 18){
    partForDay = 'da Tarde'
  }
  if(hour > 18 && hour < 6){
    partForDay = 'da Noite'
  }
  return `${monthName} - ${day} : ${hour}.${minutes} ${partForDay}`;
},
// Função para pegar o mês atual
  getMonthName(monthNumber){
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];
      return monthNames[monthNumber - 1]
  }
    },
  mounted() {
    this.getCurrentDate()
  },
};
</script>

<style src="src/css/site/global.css">

</style>
