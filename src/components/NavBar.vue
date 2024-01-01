<template>
  <div>
    <v-app-bar app color="black" dark flat class="px-12" :class="{ 'navbar-fixed': isNavbarFixed }">
      <v-btn>
        <v-icon color="yellow" left class="mr-2">fas fa-signature</v-icon>KEITH OWIRA
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')" class="text-yellow hidden-sm-and-down">Home</v-btn>
      <v-btn text @click="scroll('about')" class="hidden-sm-and-down">About</v-btn>
      <v-btn text @click="scroll('portfolio')" class="hidden-sm-and-down">Portfolio</v-btn>
      <v-btn text @click="scroll('stack')" class="hidden-sm-and-down">Stack</v-btn>
      <v-btn text @click="scroll('contact')" class="hidden-sm-and-down">Contact</v-btn>
      <!-- Add a menu button for mobile -->
      <v-btn icon @click.stop="toggleMenu" class="hidden-md-and-up">
        <v-icon>fas fa-bars</v-icon>  
      </v-btn>
    </v-app-bar>

    <!-- Mobile menu -->
    <v-app-bar app color="black" dark flat class="top-right-menu" v-if="menuVisible"  :class="{ active: menuVisible }">
      <v-btn icon @click.stop="toggleMenu" class="top-right-close-button">
        <v-icon>fas fa-close</v-icon>
      </v-btn>
      <v-btn text @click="scroll('home')" class="text-yellow hidden-md-and-up">Home</v-btn>
      <v-btn text @click="scroll('about')" class="hidden-md-and-up">About</v-btn>
      <v-btn text @click="scroll('portfolio')" class="hidden-md-and-up">Portfolio</v-btn>
      <v-btn text @click="scroll('stack')" class="hidden-md-and-up">Stack</v-btn>
      <v-btn text @click="scroll('contact')" class="hidden-md-and-up">Contact</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarFixed: false,
      menuVisible: false,
      navItems: [
        { text: 'Home', ref: 'home' },
        { text: 'About', ref: 'about' },
        { text: 'Portfolio', ref: 'portfolio' },
        { text: 'Stack', ref: 'stack' },
        { text: 'Contact', ref: 'contact' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Adjust the scroll threshold as needed
      this.isNavbarFixed = window.scrollY > 100;
    },
    scroll(refName) {
      this.$nextTick(() => {
        const element = document.getElementById(refName);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    handleMobileItemClick(item) {
      this.menuVisible = false;
      this.scroll(item.ref);
    },
  },
};
</script>

<style scoped>
.navbar-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Adjust the z-index as needed */
}
.top-right-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 10vh; /* Set the height to full viewport height */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end; /* Align items to the right */
  gap: 10px; /* Adjust the gap as needed to reduce space between buttons */
  z-index: 9999;
  background-color: #333; /* Customize the background color */
  padding: 20px; /* Add padding as needed */
  transition: transform 0.3s ease-in-out;
}

.top-right-menu.active {
  transform: translateX(0);
}

.top-right-close-button {
  color: white;
}
</style>
