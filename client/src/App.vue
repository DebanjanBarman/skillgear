<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      flat
      color="white"
      class="purple--text"
    >
      <v-icon
        class="mx-4"
        large
        color="#4747AD"
      >
        {{ mdiCogOutline }}
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">SkillGear</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Signup/>
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <v-list class="my-6">
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          class="px-6 py-1"
          :to="item.link"
          color="deep-purple"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation
      horizontal
      fixed
      class="hidden-lg-and-up justify-space-around"
    >
      <v-btn text color="deep-purple accent-4" v-for="item in items" :key="item.text" :to="item.link">
        <span> {{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-main>
      <v-container fluid style="background-color:#F4F5F9">
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Signup from '@/components/Signup'
import { mdiHomeOutline, mdiBookSearchOutline, mdiChartLine, mdiCogOutline } from '@mdi/js'

export default {
  props: {
    source: String
  },
  components: {
    Signup
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: mdiHomeOutline,
        text: 'Home',
        link: '/'
      },
      {
        icon: mdiBookSearchOutline,
        text: 'Browse',
        link: '/browse'
      },
      {
        icon: mdiChartLine,
        text: 'Analytics',
        link: '/analytics'
      }
    ],
    mdiCogOutline,
    dialog: false
  }),
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
