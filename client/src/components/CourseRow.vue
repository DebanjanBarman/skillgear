<template>
  <div class="courseRow">
    <v-container style="background-color: #F4F5F9">
      <v-row v-if="courses.length<2" class="col-12">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="n in 3"
          :key="n"
        >
          <v-skeleton-loader
            type="card"
            max-width="220"
            ref="skeleton"
            class="mx-auto my-2 pa-3"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row class="pb-8" v-if="courses.length>=1">
        <v-col
          v-for="(course, index) in courses"
          :key="index"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <v-card
            class="mx-auto my-2 pa-3"
            max-width="220"
            style="border-radius: 7px"
            :to="`/player?courseId=`+course._id"
          >
            <v-img
              height="110"
              style="border-radius: 7px"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <div class="pa-1 black--text" style="font-size: 0.9rem">{{ course.name }}</div>
            <p class="ml-1 purple--text" style="font-size: 12px; font-weight: 400">{{ course.author }}
              <span style="font-size: 13px; color: #1f1f1f; float: right"
                    class="ml-1">{{ course.time || '3 Lesson' }}</span>
            </p>
            <!--            <span style="font-size: 13px" class="ml-1">4h 20m of 4h 30m</span>-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CourseRow',
  props: {
    url: String
  },
  data () {
    return {
      courses: Object
    }
  },
  methods: {
    getCourse: async function () {
      try {
        const response = await axios.get(this.url)
        this.courses = response.data.data.courses
      } catch (e) {
        this.courses = [e]
        console.log('something went wrong')
      }
    }
  },
  created () {
    this.getCourse()
  }
}
</script>

<style scoped>

</style>
