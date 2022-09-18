<template>
  <v-btn
    text
    class="hidden-md-and-down"
    @click="login"
  >
    <v-icon>
      mdi-login
    </v-icon>
    ログイン
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { signInWithRedirect } from 'firebase/auth'
import { auth, google } from '~/plugins/firebase'

@Component
export default class GuestBar extends Vue {
  login (): void {
    signInWithRedirect(auth, google)
  }
}
</script>
