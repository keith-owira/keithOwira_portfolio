<template>
<v-app id="home">
  <!--Navigation Bar-->
    <NavBar />
    <v-container fluid>
      <!--Introduction Part-->
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-yellow">Hello</h1>
              <span>
              <h1 class="text-grey">Welcome to Owira's </h1>
              <h1 class="text-yellow" >World </h1>
              </span>
              <span class="text-grey">Software Engineer</span><br />
              <span>
                <a href="https://www.linkedin.com/in/keith-owira-477ba1221/" target="_blank" rel="noopener noreferrer">
                <v-btn class="mw-4" icon="fab fa-linkedin" variant="plain" color="white"></v-btn>
                </a>
                <a href="https://github.com/keith-owira" target="_blank" rel="noopener noreferrer">
                <v-btn class="mw-4" icon="fab fa-github" variant="plain" color="white"></v-btn>
                </a>
                <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
                <v-btn class="mw-4" icon="fab fa-twitter" variant="plain" color="white"></v-btn>
                </a>
              </span>
            </div>
          </v-col>
          <v-col cols="2">
            <div style="position: absolute; z-index: 9999; bottom: 0; left: 50%; transform: translateX(-50%);">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999;" class="mt-16">
              <v-img src="@/assets/OwiraFro.png" contain max-height="300" class="image-blend"></v-img>
            </div>
          
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class = "mt-16" id="about">

        <!--About Me Section-->
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="@\assets\Owira.png" max-height="300"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div>
                <h5 class="mt-16">About Me</h5>
                <div style="width: 120px;">
                  <v-slider v-model="slider2" color="yellow"></v-slider>
                </div>
                <h4 class="mt-n4">I am a Result-Oriented Software Engineer</h4>
                <h4>And Backend Developer</h4>
                <p class="text-grey">Demonstrated expertise in crafting solutions and driving projects
                  through the complete Software Development Life Cycle (SDLC) with a focus on Agile methodologies. Proficient in API development,
                  specializing in advanced data structures such as queues using Redis and trees using graph theory. Dedicated to leveraging this experience
                  to enhance the success of your company's projects, I am recognized for adaptability and a strong problem-solving acumen.</p>
                <br/>
                <a href="https://drive.google.com/file/d/1g7iERCO62bMscMXTe9mniJOWqn-n-_u4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <v-btn tile dark color = "yellow" class="mt-4">
                  Download Resume
                </v-btn>
              </a>
              </div>
            </v-col>
          </v-row>
         </div>
        
         <!--Tech Stack Section-->
      <div>
          <h2 class="text-center mt4"  style="padding-top: 20px;" id="stack">TechStack</h2>
          <div style="width:120px;margin: auto;">
            <v-slider  v-model="slider2" color="yellow"></v-slider>
          </div>
          <v-col cols="12" class="padd">
        <v-carousel :cycle="true"  :show-arrows="false" hide-delimiters>
          <v-carousel-item style="background-color: white; height: 200px"
              class="pb-0 mb-0">
            <div class="first" id="project">
              <v-row>
                <v-col cols="12">
                  <div class="child">
                    <v-btn icon="fas fa-laptop-code" color="#FBDF7E" class="text-white"></v-btn>
                    <h3 class="ml-3 mt-4">Web Technologies</h3>
                    <p class="text-black ml-3 mt-4 text-caption">
                      <ul  style=" list-style-type: none;">
                        <li >Backend > Laravel, Slim and Springboot</li>
                        <li>Frontend > Angular and Vue</li>
                        <li>Scripting > Node </li>
                      </ul>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>

          <v-carousel-item>
            <div class="first" id="project">
              <v-row>
                <v-col cols="12">
                  <div class="child">
                    <v-btn icon="fas fa-code" color="#FBDF7E" class="text-white"></v-btn>
                    <h3 class="ml-3 mt-4">Languages</h3>
                    <p class="text-black ml-3 mt-4 text-caption">
                      <ul style=" list-style-type: none;">
                        <li >Backend > PHP, Javascript Java</li>
                        <li>Frontend > Javascript , Go Lang</li>
                        <li>Fundamentals > Java .Net</li>
                      </ul>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>

          <v-carousel-item>
            <div class="first" id="project">
              <v-row>
                <v-col cols="12">
                  <div class="child">
                    <v-btn icon="fas fa-database" color="#FBDF7E" class="text-white"></v-btn>
                    <h3 class="ml-3 mt-4">Databases</h3>
                    <p class="text-black ml-3 mt-4 text-caption">
                      <ul style=" list-style-type: none;">
                        <li >Relational > Mysql</li>
                        <li>Non-Relational > MongoDB</li>
                        <li>Oracle Sql</li>
                      </ul>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>
        </v-carousel>
        </v-col>
      </div>
      </v-col>
      <v-col cols="12" id="portfolio" width="100%">
    <div class="pre" id="portfolio">
      <v-row justify="center">
        <v-col cols="12" sm="12">
          <div class="d-flex justify-center mb-6">
            <v-btn color="#FBDF7E" class="mr-2">PUBLIC PROJECTS</v-btn>
          </div>
        </v-col>

        <!--Projects Page-->

        <v-col cols="12" sm="4">
          <v-carousel cycle hide-delimiters :show-arrows="false" >
            <v-carousel-item v-for="(item, i) in portfolioItems" :key="i">
              <v-card class="mw-auto" max-width="400" height="">
                <v-img :src="require(`@/assets/${item.image}`)" height="225px" cover></v-img>
                <v-card-title>
                  <a :href="item.link" target="_blank" rel="noopener noreferrer" class="custom-link">
                    {{ item.title }}
                  </a>
                </v-card-title>
                <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                <v-card-text>{{ item.description }}</v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
  </v-col>

<v-divider></v-divider>

    <!--Certificates Section-->

      <v-col cols="12" sm="12" id="services">
        <div class ="d-flex justify-center mb-6">
          <v-btn color ="#FBDF7E" class="mr-2">CERTIFICATIONS</v-btn>
        </div>
      </v-col>
        <!-- <v-col cols="12" class="imgHover">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items" :key="i">
          <v-col cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
                <v-img :src="require(`@/assets/${item.img}`)" height="225" contain></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-col> -->
    <v-col cols="12" class="imgHover">
    <v-carousel :cycle="true"  :show-arrows="false" hide-delimiters>
      <template v-for="(item, i) in items" :key="i">
        <v-carousel-item style="background-color: white; height: 800px"
              class="pb-0 mb-0">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering }">
                <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }">
                  <v-img :src="require(`@/assets/${item.img}`)" height="100%" contain></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-col>
      <v-col cols="12" sm="12">
        <!-- <div class = "d-flex justify-center mb-6">
          <v-btn color="#fbdf7e" class="mt-4">Load More</v-btn>
        </div> -->
      </v-col>

      <!-- <v-col cols="12" id="portfolio" width="100%">
        <div class="pre" id="portfolio" >
          <v-row>
            <v-col cols="12" sm="12" id="portfolio">
        <div class ="d-flex justify-center mb-6">
          <v-btn color ="#FBDF7E" class="mr-2">PUBLIC PROJECTS</v-btn>
        </div>
      </v-col>
            

            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="400" height="">
                <v-img src="@/assets/SureApparels.png" height = "100%" cover></v-img>
              <v-card-title>
                <a href="https://sureapparelstore.com/" target="_blank" rel="noopener noreferrer" class="custom-link">
                SureApparels 
                </a>
              </v-card-title>
              <v-card-subtitle>
                Sportswear E-commerce
              </v-card-subtitle>
              <v-card-text>Sportwear E-commerce running on a MVC Framework. The platform has its largest clientele in South Africa</v-card-text>
            </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="@/assets/VivianasCatering.png" height = "100%" cover></v-img>
              <v-card-title>
                <a href="https://vivianascatering.co.ke/" target="_blank" rel="noopener noreferrer" class="custom-link">
                Vivians Catering
                </a>
              </v-card-title>
              <v-card-subtitle>
                <a href="https://f-apps.co.ke/portfolio/mia-poster-8/" target="_blank" rel="noopener noreferrer" class="custom-link">
                Business Single Page Application
                </a>
              </v-card-subtitle>
              <v-card-text>Built on vue js that gives offering the business catalouge and a communication channel for customers</v-card-text>
            </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="@/assets/DetrixWMS.png" height = "180px" cover></v-img>
              <v-card-title>
                <a href="https://f-apps.co.ke/portfolio/mia-poster-8/" target="_blank" rel="noopener noreferrer" class="custom-link">
                Warehouse Management
                </a>
              </v-card-title>
              <v-card-subtitle>
                 Inventory Management System
              </v-card-subtitle>
              <v-card-text> Built on php that offers Warehouse Transfers, Requisition Management and Reconciliation Management</v-card-text>
            </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col> -->
  
      <!-- <v-col cols="12" id="biog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9"> Hire me for Awesome Projects</h1>
              <p class="text-grey">Lorem olor sit amet consectet aborum quaerat minus rem totam voluptas nulla praesentium quis sequi min
                olor sit amet consectet aborum quaerat minus rem totam voluptas nulla praesentium quis sequi min</p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn color="#FBDF7E" class="mt-15">Hire Me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col> -->

      <!--Contact Me Section-->
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <!-- <v-col cols="12" sm="4">
            <div class="child">
              <h1>Contact Info</h1>
              <v-btn icon ="fas fa-map-marker-alt"  class="mt-10" variant="outlined"></v-btn><br/>
              <span class="text-caption">Nairobi, Kenya</span> <br />
              <v-btn icon="fas fa-phone-alt" class="mt=10" variant="outlined"></v-btn> <br/>
      
              <span class="text-caption">+254 769 728 089</span> <br/>
              <v-btn icon="fas fa-envelope" class="mt=10" variant="outlined"></v-btn> <br/>
              <span class="text-caption">owirakeith57@gmail.com</span> <br/>
              <br/>
            </div>
          </v-col> -->
        <v-col cols="12" sm="8">
            <h1 class="mt-8">Send Your Message</h1>
            <v-divider></v-divider>
            <span class="text-caption"> To collaborate with me on any project or have me as part of your team. You can reach out below
            </span>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field v-model="email" label="Email" persistent-hint variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="phoneNumber" label="Phone Number" persistent-hint variant="outlined"></v-text-field>
              </v-col>
            </v-row>
                <v-textarea v-model="message" label="Message" persistent-hint variant="outlined"></v-textarea>
                <v-btn color="#FBDF7E" class="mt-2" @click="sendEmail" >Submit Now</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-container>

    <!--Footer Section-->
  
   <FooterView />

   <!--Whatsapp Section-->
   <div class="whatsapp-icon" @click="redirectToWhatsApp">
      <v-icon color="green" size="42">fab fa-whatsapp</v-icon>
    </div>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import emailjs from 'emailjs-com' 
// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';
export default defineComponent({
  name: 'HomeView',
  setup(){
    return{
      slider2:50,
      items:[{
        img: "cisco.jpg",
      },
      {
        img: "java.jpg",
      },
      {
        img: "pm.png",
      },
      ],
      carouselItems: [
        {},
        {},
        {},
      ],
      portfolioItems: [
        {
          title: "SureApparels",
          subtitle: "Sportswear E-commerce",
          description: "Sportwear E-commerce running on a MVC Framework.The platform has its largest clientele in South Africa",
          link: "https://sureapparelstore.com/",
          image: "SureApparels.png",
        },
        {
          title: "Vivians Catering",
          subtitle: "Business Single Page Application",
          description: "Built on vue js that gives offering the business catalouge and a communication channel for customers",
          link: "https://vivianascatering.co.ke/",
          image: "VivianasCatering.png",
        },
        {
          title: "Warehouse Management",
          subtitle: "Inventory Management System",
          description: "Built on php that offers Warehouse Transfers, Requisition Management and Reconciliation Management",
          link: "https://f-apps.co.ke/portfolio/mia-poster-8/",
          image: "DetrixWMS.png",
        },
        
      ],
    }
  },
data(){
  return{
      email: '',
      phoneNumber: '',
      message: '',
  }
},
  components: {
    NavBar,
    FooterView
  },
  methods: {
    scroll(refName) {
    this.$nextTick(() => {
      const element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },  
  redirectToWhatsApp() {
      const phoneNumber = "+254769728089";
      window.location.href = `https://wa.me/${phoneNumber}`;
    },
    async sendEmail() {
      try { const templateParams = {
      from_name: this.email,
      to_name: this.phoneNumber,
      message: this.message,
    };
    console.log(templateParams);

      const response = await emailjs.send(
        'service_osvrwgn',
        'template_6ri5aqr',
        templateParams,
        'Jtyyj55592n2SwrqR'
      );
        // const response = await emailjs.sendForm('service_osvrwgn', 'template_j8baxi9', e.target,
        // 'Jtyyj55592n2SwrqR', {
        //   email: this.email,
        //   phoneNumber: this.phoneNumber,
        //   message: this.message
        // })

        console.log("Email :",response);


      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.email = ''
      this.phoneNumber = ''
      this.message = ''
    },
    // sendEmail() {
    //   const templateParams = {
    //     email: this.email,
    //     phoneNumber: this.phoneNumber,
    //     message: this.message,
    //   };

    //   emailjs
    //     .sendForm("service_osvrwgn", "template_j8baxi9", templateParams, "Jtyyj55592n2SwrqR")
    //     .then(
    //       (result) => {
    //         console.log("You have successfully submitted your message", result.text);
    //       },
    //       (error) => {
    //         console.log("This form failed to submit, please kindly check your internet connection", error.text);
    //       }
    //     );
    // },

  },
});
</script>

<style scoped>
    .v-container{ 
        padding:16px 0;
    }
    .image-blend{
      width: 100%; 
      height: 400px; 
      position: relative;
      mix-blend-mode: multiply;
      opacity: 0.9; 
      object-fit: cover;
    }
    .head{
      position:relative;
      text-align:center;
      padding: 12px;
      margin-bottom: 6px;
      height:400px;
      width:100%;
      color:white;
    }
    .head::before{
      content:" ";
      position :absolute;
      top :0;
      left:0;
      height:100%;
      width:50%;
      background: black;
      transform:skew(0deg,6deg);
    }
    .head::after{
      content:" ";
      position :absolute;
      top :0;
      right:0;
      height:100%;
      width:50%;
      background: black;
      transform:skew(0deg,-6deg);
    }
/* Default styling for larger screens */
    .egg {
      display: block;
      margin-left: 100px;
      margin-top: 50px;
      width: 356px;
      height: 300px;
      background-color: #fbdf7e;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }

    /* Media query for small screens */
    @media screen and (max-width: 600px) {
      .egg {
        margin-left: 10%; /* Use a percentage for responsive margin */
        margin-top: 5vh; /* Use a viewport height unit for responsive margin */
        width: 70vw; /* Use a viewport width unit for responsive width */
        height: 50vh; /* Use a viewport height unit for responsive height */
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      }
    }

    /* .egg{
      display: block;
      margin-left: 100px;
      margin-top: 50px;
      width: 356px;
      height: 300px;
      background-color: #fbdf7e;
      border-radius: 50% 50% 50% 50%/ 60% 60% 40% 40%;
    } */
    /* @media screen and (max-width: 600px) {
    .egg {
      width: 90vw;
      height: 30vh; 
    }
} */
    .first{
      width:100%;
      height: 280px;
      text-align: center;
      padding: 2rem 2rem;
    }
    .child{
      display:inline-block;
      padding: 2rem 1rem;
      vertical-align: middle;
      text-align: center;
      margin-right: 8px;
    }
    .custom-link {
  color: black; /* Default text color */
  text-decoration: none; /* Remove underline by default */
  transition: color 0.3s, text-decoration 0.3s; /* Add transition for smooth effect */
  }
  .custom-link:hover {
    color: rgb(145, 145, 41); /* Text color on hover */
    text-decoration: underline; /* Underline on hover */
  }
    .imgHover{
      padding : 0 10%;
    }
    .padd{
      height: 300px;
      margin-bottom: 50px; /* Adjust as needed */
       padding-bottom: 20px; 
       padding-top: 50px;

    }
    .pre{

      width:100%;
      height: 500px;
      text-align: center;
      padding: 0 40px;
      background-color: #f5f5f5;
      
    }
    .hire{
      width:100%;
      height:200px ;
      padding: 0 200px;
      background-color:#e9e9e9 ;
      margin-top:-24px;
    }
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
