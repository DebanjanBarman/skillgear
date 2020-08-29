<template>
    <div class="browse">
      <v-card flat>
        <v-toolbar
          flat
          class="purple--text"
        >

<!--          <v-toolbar-title>Courses</v-toolbar-title>-->

          <template>
            <v-tabs
              v-model="tab"
              align-with-title
              show-arrows
              color="purple"
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>

            </v-tabs>
          </template>
        </v-toolbar>
        <v-divider></v-divider>

      </v-card>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <CourseRow :url="HOME_VIEW"/>
        </v-tab-item>
      </v-tabs-items>
    </div>
</template>

<script>
import { HOME_VIEW } from '../../config/config'
import CourseRow from '@/components/CourseRow'

export default {
  data () {
    return {
      tab: null,
      items: [
        'All', 'new releases', 'most popular', 'development', 'security', 'creative', 'data'
      ],
      courses: [Object],
      HOME_VIEW
    }
  },
  components: {
    CourseRow
  }
}
</script>
