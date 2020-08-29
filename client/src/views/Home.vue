<template>
  <div class="home">
    <v-container>
      <!--      <v-row class="pa-2">-->
      <!--        <v-sheet-->
      <!--          class="mx-auto"-->
      <!--          max-width="100%"-->
      <!--        >-->
      <!--          <v-slide-group show-arrows>-->
      <!--            <v-slide-item-->
      <!--              v-for="n in 10"-->
      <!--              :key="n"-->
      <!--            >-->
      <!--              <v-chip to="/player?sdfjsdf" class="px-6 mx-3" outlined color="purple">-->
      <!--                Bootstrap-->
      <!--              </v-chip>-->
      <!--            </v-slide-item>-->
      <!--          </v-slide-group>-->
      <!--        </v-sheet>-->

      <!--      </v-row>-->
      <!--      <v-row>-->
      <!--        <v-col cols="12">-->
      <!--          Running Courses-->
      <!--        </v-col>-->
      <!--      </v-row>-->

      <!--      <v-row>-->
      <!--        <v-col-->
      <!--          v-for="n in 4"-->
      <!--          :key="n"-->
      <!--          cols="12"-->
      <!--          xs="12"-->
      <!--          sm="6"-->
      <!--          md="4"-->
      <!--          lg="4"-->
      <!--        >-->
      <!--          <v-card to="/player?sdfdsfd">-->
      <!--            <div class="d-flex flex-no-wrap justify-space-between">-->
      <!--              <v-avatar class="ma-3" size="95" tile>-->
      <!--                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>-->
      <!--              </v-avatar>-->
      <!--              <div>-->
      <!--                <v-card-title style="font-size: 1rem">Abcdefghijklmnopqrs</v-card-title>-->
      <!--                <v-card-subtitle class="purple&#45;&#45;text" style="font-size: 0.8rem">Debian Barman</v-card-subtitle>-->
      <!--                <v-card-text>-->
      <!--                  <div>-->
      <!--                    <v-progress-linear-->
      <!--                      color="indigo"-->
      <!--                      rounded-->
      <!--                      value="70"-->
      <!--                    ></v-progress-linear>-->
      <!--                  </div>-->
      <!--                  <div style="color: #888; font-size: 0.8rem">Progress (70%)</div>-->
      <!--                </v-card-text>-->
      <!--              </div>-->

      <!--            </div>-->
      <!--          </v-card>-->
      <!--        </v-col>-->
      <!--      </v-row>-->

      <v-row class="mt-3">
        <v-col cols="12">
          Newest Courses
        </v-col>
      </v-row>

     <CourseRow :url="HOME_VIEW"/>
    </v-container>
  </div>
</template>

<script>
import { HOME_VIEW } from '../../config/config'
import CourseRow from '@/components/CourseRow'

export default {
  name: 'Home',
  data () {
    return {
      courses: [Object],
      HOME_VIEW
    }
  },
  components: {
    CourseRow
  }
}
</script>
