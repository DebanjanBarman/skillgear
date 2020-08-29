<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }" class="ml-16">
      <v-btn small outlined depressed color="purple" class="white--text" v-bind="attrs"
             v-on="on">
        Log in
      </v-btn>
    </template>
    <v-card>

        <v-container>
          <Tabs/>
        </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Tabs from '@/components/Tabs'

export default {
  name: 'Signup',
  data: () => ({
    dialog: false
  }),
  components: {
    Tabs
  }
}
</script>

<style scoped>

</style>
