<template>
  <v-card flat>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
      color="purple"
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
      >
        <v-card flat>
          <SigninForm/>
        </v-card>
      </v-tab-item>
      <v-tab-item
      >
        <v-card flat>
          <SignupForm/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import SigninForm from '@/components/SigninForm'
import SignupForm from '@/components/SignupForm'

export default {
  data () {
    return {
      tab: null,
      items: [
        'Sign in', 'Sign up'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    SigninForm,
    SignupForm
  }
}
</script>

<style></style>
