<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="show"
      left
      bottom
      :color="background"
      timeout="3000"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          small
          depressed
          v-bind="attrs"
          @click="show = false"
          color="transparent"
        >
          close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: this.message,
      show: this.snackbar,
      background: this.color
    }
  },
  props: {
    snackbar: Boolean,
    color: String,
    message: String
  }
}
</script>
