<template>
  <div class="login">
    <div class="container">
      <form>
        <h1>LOGIN</h1>
        <div class="form-login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="username"
            />
            <small
              class="error-messages"
            >
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
        debugger;
        this.$store.dispatch("loginAdmin", {
            username: this.username,
            password: this.password
        }).then((response) =>{
            this.$router.push({path: '/'});
        }).catch((err) =>{
            console.log(err);
        })
    },
  },
};
</script>

<style>
</style>