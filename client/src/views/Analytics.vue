<template>
  <v-card color="purple">
    <!--    <Notification snackbar color="success" message="Hello there"/>-->
    <!--    <v-card-text class="text-capitalize text-center white&#45;&#45;text">Coming soon</v-card-text>-->
    <Notification :snackbar="show" color="error" message="Failed to login"/>
  </v-card>
</template>

<script>
import Notification from '../components/Notification'

export default {
  name: 'Analytics',
  data () {
    return {
      show: true
    }
  },
  components: {
    Notification
  }
}
</script>
