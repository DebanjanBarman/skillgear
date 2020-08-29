<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="purple--text "
  >
    <v-container class="mt-4">
      Full Name
      <v-row class="col-12 pa-0 ma-0">
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Full Name"
            outlined
            required
            clearable
            dense
          ></v-text-field>
        </v-col>

      </v-row>

      Email
      <v-row class="col-12 pa-0 ma-0">
        <v-col cols="12">
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
      </v-row>

      Password

      <v-row class="col-12 pa-0 ma-0">
        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :append-icon="show1 ? mdiEye : mdiEyeOff"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"

            name="input-10-1"
            label="Password"
            outlined
            counter
            dense

          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">

          <v-text-field
            v-model="passwordConfirm"
            :rules="[rules.required, rules.min, v => v===password || 'Password do not match :(']"
            :append-icon="show2 ? mdiEye : mdiEyeOff"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"

            name="input-10-2"
            label="Confirm Password"
            counter
            outlined
            dense
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
            tile
            outlined
            :loading="loading"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-form>
</template>

<script>
import { mdiEye, mdiEyeOff } from '@mdi/js'
import { SIGN_UP } from '../../config/config'

import axios from 'axios'
// import Notification from '@/components/Notification'

export default {
  data: () => ({

    show1: false,
    show2: false,
    valid: false,
    loading: false,

    name: '',
    email: '',
    password: '',
    passwordConfirm: '',

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],

    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
    },

    nameRules: [
      v => !!v || 'Name is required',
      v => v.length >= 4 || 'Name is too short',
      v => v.trim().length >= 4 || 'Name is too short'
    ],
    mdiEyeOff,
    mdiEye,
    request: {
      status: '',
      message: ''
    }
  }),
  methods: {
    signUp: async function () {
      try {
        const response = await axios.post(SIGN_UP, {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm
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
        console.log(e)
        this.request.status = e.response.data.status
        this.request.message = e.response.data.message

        console.log(this.request.status)
        console.log(this.request.message)
        this.loading = false
      }
      this.clearInputField()
    },

    validate () {
      this.$refs.form.validate()
      if (this.name !== '' && this.email !== '' && this.password !== '' && this.passwordConfirm !== '' && this.password === this.passwordConfirm) {
        this.loading = true
        this.signUp()
      }
    },
    clearInputField () {
      this.name = ''
      this.email = ''
      this.password = ''
      this.passwordConfirm = ''
    }
  }

}
</script>
