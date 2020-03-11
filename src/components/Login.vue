<template>
  <div class="login">
    <button @click="signInWithGoogle()">Submit</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .then(res => {
          this.user = res.user;
          console.log(this.user);
        });
    }
  }
};
</script>
