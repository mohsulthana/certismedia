<template>
  <div class="vx-row">
    <!-- CHAT CARD -->
    <div class="vx-col w-full mb-base">
      <vx-card
        title="Select your campaign for reporting view"
        class="overflow-hidden"
      >
        <template slot="actions">
          <vs-button icon="refresh" @click="fetchDataManually"
            >Fetch Data Manually</vs-button
          >
        </template>
        <vs-table
          v-model="selected"
          stripe
          max-items="10"
          search
          pagination
          :data="dashboard"
          @selected="seeDetail"
        >
          <template slot="thead">
            <vs-th sort-key="campaign_name"> Campaign Name </vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].campaign_name">
                {{ data[indextr].campaign_name }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vx-card>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
import axios from "@/axios";

export default {
  components: {
    apexchart,
  },
  data() {
    return {
      dashboard: [],
      selected: [],
    };
  },
  methods: {
    fetchDataManually() {
      const id = this.$store.state.AppActiveUser.id;
      const email = this.$store.state.AppActiveUser.email;

      axios.get(`fetch-report/${id}`, { params: { email: email } }).then(() => {
        this.fetchImpressions();
      });
    },
    fetchImpressions() {
      const email = this.$store.state.AppActiveUser.email;
      axios.get("dashboard", { params: { email: email } }).then((response) => {
        this.dashboard = response.data;
      });
    },
    seeDetail(args) {
      return this.$router.push({
        path: "/reporting-detail/",
        query: { id: args.id, campaign: args.campaign_id },
      });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>