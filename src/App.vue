<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import { computed,reactive } from "vue"
  import {useHead} from '@vueuse/head'
export default {
  name: 'App',
  
  setup(){
    const siteData = reactive({
      title:'Keith Owira',
      description:'Keith Owira portfolio|Software Engineer and Backend Developer with proven track record working with advanced data structures and algorithms '
    })
    useHead({
      title:computed(()=>siteData.title),
      meta:[
        {
          name:'description',
          content:computed(()=>siteData.description),
        },
      ],
    })
  },

  data: () => ({
    //
  }),
}
</script>
