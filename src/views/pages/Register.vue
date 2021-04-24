<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter">
            <div
              class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
            >
              <img
                src="@/assets/images/pages/register.jpg"
                alt="login"
                class="mx-auto"
              />
            </div>
            <div
              class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"
            >
              <div class="px-8 pt-8 register-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Create Account</h4>
                  <p>Fill the below form to create a new account.</p>
                </div>
                <div>
                  <vs-input
                    name="name"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Full name"
                    v-model="name"
                    class="w-full"
                    type="email"
                  />
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-mail"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="email"
                    required
                    class="w-full"
                    type="email"
                  />
                  <vs-input
                    name="username"
                    icon-no-border
                    icon="icon icon-edit"
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
                  <vs-button @click="prosesDaftar()" class="float-right my-8"
                    >Register</vs-button
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
import axios from "@/axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      checkbox_remember_me: false,
    };
  },
  methods: {
    async fetchDashboard(args) {
      await axios.get(`fetch-dashboard/${args}`);
      // .then(() => {
      //   this.$vs.notify({
      //     color: "success",
      //     title: "Success",
      //     text: "Data fetched successfully",
      //   });
      // })
      // .catch((error) => {
      //   const resp = error.response;
      //   this.$vs.notify({
      //     color: "danger",
      //     title: `Error ${resp.status}`,
      //     text:
      //       "Something bad happen to server. Please contact the administrator.",
      //   });
      // })
    },
    async fetchReport(args) {
      await axios.get(`fetch-report/${args}`);
      // .then(() => {
      //   this.$vs.notify({
      //     color: "success",
      //     title: "Success",
      //     text: "Data fetched successfully",
      //   });
      // })
      // .catch((error) => {
      //   const resp = error.response;
      //   this.$vs.notify({
      //     color: "danger",
      //     title: `Error ${resp.status}`,
      //     text:
      //       "Something bad happen to server. Please contact the administrator.",
      //   });
      // })
    },
    async fetchDailyDelivery() {
      await axios.get(`fetch-daily-delivery`);
      // .then(() => {
      //   this.$vs.notify({
      //     color: "success",
      //     title: "Success",
      //     text: "Data fetched successfully",
      //   });
      // })
      // .catch((error) => {
      //   const resp = error.response;
      //   this.$vs.notify({
      //     color: "danger",
      //     title: `Error ${resp.status}`,
      //     text:
      //       "Something bad happen to server. Please contact the administrator.",
      //   });
      // })
    },
    acceptAlert(args) {
      this.fetchDashboard(args).then(() => {});
      this.fetchReport(args).then(() => {});
      this.fetchDailyDelivery().then(() => {});
      // axios
      //   .post(`Dashboard/fetchFromAPI/${args}`)
      //   .then(() => {
      //     this.$vs.notify({
      //       color: "success",
      //       title: "Success",
      //       text: "Data fetched successfully",
      //     });
      //   })
      //   .catch((error) => {
      //     const resp = error.response;
      //     this.$vs.notify({
      //       color: "danger",
      //       title: `Error ${resp.status}`,
      //       text:
      //         "Something bad happen to server. Please contact the administrator.",
      //     });
      //   })
      // .finally(() => {
      this.$nextTick(() => {
        this.$router.push("login");
        this.$vs.notify({
          color: "success",
          title: "Success",
          text: "User succesfully registered",
        });
      });
      // });
    },
    prosesDaftar() {
      const data = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
      };
      this.$store
        .dispatch("daftar", data)
        .then((response) => {
          this.$vs.notify({
            color: "success",
            title: "Success",
            text: "User succesfully registered. Please login",
          });
          this.$router.push("login");
          // this.$nextTick(() => {
          // this.$vs.dialog({
          //   type: "confirm",
          //   color: "danger",
          //   title: `Sync the data`,
          //   text: "User registered. Please hit button below to sync the data to your account",
          //   accept: this.acceptAlert,
          //   parameters: response.data.id,
          // });
          // });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: `Error ${error.data.error}`,
            text: error.data.messages.error,
          });
        });
    },
  },
};
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
