<template>
  <div class="login">
    <button @click="signInWithGoogle()">Submit</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../db";

export default {
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithRedirect(provider).then(res => {
        this.user = res.user;
      });
    }
  }
};
</script>
