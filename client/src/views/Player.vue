<template>
  <v-container>

    <div v-if="course.name!=='Object'">
      <h4 style="color: #555; font-size: 1.2rem">{{ course.name }}</h4>
      <p style="font-size: 0.9rem" class="purple--text mt-2">{{ course.author }}</p>
    </div>

    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="8"
        lg="8"
        xl="8"
      >
        <v-card flat dark v-model="clipId">
          <div class="video-container" v-if="clipId!=='0'">
            <iframe
              class="responsive-iframe"
              :src="clipId"
              allow="autoplay"
              allowfullscreen
              allowtransparency
            ></iframe>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >

        <v-card
          class="pa-2 mb-16"
          flat
          style="height: 25rem; overflow: auto;"
        >
          <v-col
            cols="12"
            class="ma-0 pa-0 mt-0"
            xs12
            sm12
            md12
            lg4
            xl4
          >
            <!--            <v-card>-->
            <v-list>
              <v-list-item-group mandatory color="purple">
                <v-list-item
                  v-for="(item, i) in clipList"
                  :key="i"
                  @click="changeVideo(clipList[i])"
                >

                  <v-list-item-icon>
                    <!--                      <v-icon>mdi-email 1</v-icon>-->
                    {{ i + 1 }}
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ titleList[i] }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-list-item-title>{{ durationList[i] }}</v-list-item-title>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <!--            </v-card>-->
          </v-col>

          <!--          <button v-on:click="changeVideo(clipList[3])">-->
          <!--                <span class="video-no">-->
          <!--                  1-->
          <!--                </span>-->
          <!--            <span class="video-title">-->
          <!--                  video-->
          <!--                </span>-->
          <!--            <span class="video-runtime">-->
          <!--                  1m 3s-->
          <!--                </span>-->
          <!--          </button>-->

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios'
import { COURSE } from '../../config/config'

export default {
  data () {
    return {
      clipList: [],
      titleList: [],
      durationList: [],
      clipId: '0',
      course: Object,
      courseId: this.$route.query.courseId,

      request: {
        status: '',
        message: ''
      }

    }
  },
  created () {
    this.getCourse()
  },
  methods: {
    getCourse: async function () {
      try {
        const options = {
          method: 'GET',
          headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
          url: COURSE + this.courseId
        }
        const response = await axios(options)
        this.course = response.data.data.course
        response.data.data.course.content.map(el => {
          this.clipList.push(el.url)
          this.titleList.push(el.title)
          this.durationList.push(el.duration)
          setTimeout(() => {
            this.clipId = this.clipList[0]
          }, 50)
        })
      } catch (e) {
        this.request.status = e.response.data.status
        this.request.message = e.response.data.message

        console.log(this.request.status)
        console.log(this.request.message)
      }
    },
    changeVideo (id) {
      return (this.clipId = id)
    }
  }
}
</script>

<style scoped lang="scss">
.video-container {
  position: revert;
  width: 100%;
  overflow: hidden;
  padding-top: 57%; /*56.25%;  16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}

button {
  display: flex;
  width: 100%;
  height: 3rem;
  border: 0;
  background-color: #f9f9f9;
  margin: 0;
  color: #333;
}

button:hover {
  display: flex;
  width: 100%;
  height: 3rem;
  border: 0;
  background-color: #ddd;
  margin: 0;
  color: #000;
  cursor: pointer;
}

button > span {
  padding-top: 1rem;
  font-size: 14px;
}

.video-no {
  margin-right: 1rem;
  margin-left: 0.5rem;
  font-size: 16px;
  font-weight: bold;
}

.video-list {
  overflow: auto;
  height: 500px;
}

.video-runtime {
  margin-left: auto;
  padding-right: 1rem;
}

</style>
