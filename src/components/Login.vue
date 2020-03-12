<template>
  <div class="login">
    <button @click="signInWithGoogle()">Google signin</button>
    <button @click="signInWithEmail()">Email signin</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "@/db";

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
    },
    signInWithEmail: function(
      email = "tom.claes82@gmail.com",
      password = "12354$"
    ) {
      auth
        .signInWithEmailAndPassword(email, password)
        .catch(err => console.error(err));
    }
  }
};
</script>
