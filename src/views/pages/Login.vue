<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img
                src="@/assets/images/pages/login.png"
                alt="login"
                class="mx-auto"
              />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>
                    Welcome to the Certis DSP reporting platform, please login
                    to your account
                  </p>
                </div>

                <div>
                  <vs-input
                    name="username"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Username"
                    v-model="username"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6"
                  />
                  <vs-button
                    type="border"
                    class="float-left my-8"
                    to="/register"
                    >Register</vs-button
                  >
                  <vs-button @click="login" class="float-right my-8"
                    >Login</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checkbox_remember_me: false,
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then((response) => {
          if (
            response.data.status_dashboard == 0 ||
            response.data.status_reporting == 0
          ) {
            this.$vs.notify({
              color: "warning",
              title: "Your account is not ready,",
              text:
                "Your account is in synchronization. Please try again later.",
            });
          } else {
            if (response.data.state == "warning") {
              this.$vs.notify({
                color: response.data.state,
                title: response.data.state.toUpperCase(),
                text: response.data.message,
              });
            } else {
              this.$vs.notify({
                color: response.data.state,
                title: response.data.state.toUpperCase(),
                text: response.data.message,
              });
              this.$router.push("/");
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.$vs.notify({
            color: "danger",
            title: "Can't login",
            text: error.data.messages.error,
          });
        });
    },
  },
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
