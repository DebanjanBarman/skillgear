<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="purple--text mx-4"
    @submit="validate"
  >
    <v-container class="mt-4">
      <!--      <SocialLogin/>-->
      Credential
      <v-row class="col-12 pa-0 ma-0">
        <v-col cols="12" xs="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            outlined
            required
            clearable
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" lg="12">
          <v-text-field
            dense
            v-model="password"
            :append-icon="show1 ? mdiEye : mdiEyeOff"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            name="input-10-1"
            label="Password"
            outlined
            counter
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="col-12 pa-0 ma-0">
        <v-col>
          <v-btn
            color="purple"
            class="mr-4"
            @click="validate"
            :disabled="!valid"
            :loading="loading"
            tile
            outlined
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>

    </v-container>

  </v-form>
</template>

<script>
// 'mdi-eye' : 'mdi-eye-off'
// import SocialLogin from '@/components/SocialLogin'

// import Notification from '@/components/Notification'
import { mdiEye, mdiEyeOff } from '@mdi/js'
import axios from 'axios'
import { LOG_IN } from '../../config/config'

export default {

  data: () => ({
    show1: false,
    valid: false,
    loading: false,
    email: '',
    password: '',

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],

    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
    },
    mdiEye,
    mdiEyeOff,

    request: {
      status: '',
      message: ''
    }
  }),
  methods: {
    signIn: async function () {
      try {
        const response = await axios.post(LOG_IN, {
          email: this.email,
          password: this.password
        })
        const token = response.data.token
        const status = response.data.status
        const user = response.data.data.user

        console.log(token)
        console.log(status)
        console.log(user)
        console.log(response)

        localStorage.setItem('jwt', token)

        this.loading = false
      } catch (e) {
        this.request.status = e.response.data.status
        this.request.message = e.response.data.message

        console.log(this.request.status)
        console.log(this.request.message)
        // console.log(e.response.data.status)
        // console.log(e.response.data.message)

        this.loading = false
      }
      this.clearInputField()
    },
    validate () {
      this.$refs.form.validate()
      if (this.email !== '' && this.password !== '') {
        this.loading = true
        this.signIn()
      }
    },

    clearInputField () {
      this.email = ''
      this.password = ''
    }

  }

}
</script>
