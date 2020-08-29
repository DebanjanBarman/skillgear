<template>
  <v-row class="col-12 pa-0 ma-0">
    <v-col xs="12" sm="6" md="6">
      <v-btn @click="google()" color="purple" tile depressed class="ma-2 white--text">
        <v-icon left>mdi-google</v-icon>
        Sign in with Google
      </v-btn>
    </v-col>
    <v-col xs="12" sm="6" md="6">
      <v-btn color="purple" tile depressed class="ma-2 white--text">
        <v-icon left>mdi-facebook</v-icon>
        Sign in with Facebook
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SocialLogin'
}
</script>

<style scoped>

</style>
