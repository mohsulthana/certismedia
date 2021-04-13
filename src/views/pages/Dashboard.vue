<template>
  <div class="vx-row">
    <!-- CHAT CARD -->
    <div class="vx-col w-full mb-base">
      <vx-card title="Dashboard" class="overflow-hidden">
        <template slot="actions">
          <vs-button icon="refresh" @click="fetchDataManually">Fetch Data Manually</vs-button>
        </template>
        <vs-table
          v-model="selected"
          stripe
          max-items="10"
          search
          pagination
          :data="dashboard"
        >
          <template slot="thead">
            <vs-th sort-key="campaign_name"> Campaign Name </vs-th>
            <vs-th sort-key="impression"> Impression </vs-th>
            <vs-th sort-key="click"> Click </vs-th>
            <vs-th sort-key="view"> View </vs-th>
            <vs-th sort-key="completed_view"> Completed View </vs-th>
            <vs-th sort-key="ctr"> CTR </vs-th>
            <!-- <vs-th sort-key="win_rate"> Win Rate </vs-th> -->
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].campaign_name">
                {{ data[indextr].campaign_name }}
              </vs-td>

              <vs-td :data="data[indextr].impression">
                {{ data[indextr].impression }}
              </vs-td>

              <vs-td :data="data[indextr].click">
                {{ data[indextr].click }}
              </vs-td>

              <vs-td :data="data[indextr].view">
                {{ data[indextr].view }}
              </vs-td>

              <vs-td :data="data[indextr].completed_view">
                {{ data[indextr].completed_view }}
              </vs-td>

              <vs-td :data="data[indextr].ctr">
                {{ data[indextr].ctr == null ? 0 : data[indextr].ctr }}%
              </vs-td>

              <!-- <vs-td :data="data[indextr].win_rate">
                {{ parseInt(data[indextr].win_rate).toFixed(2) }}%
              </vs-td> -->
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
  computed: {
    userStatus() {
      return this.$store.state.AppActiveUser.status;
    },
  },
  methods: {
    fetchDataManually() {
      const id = this.$store.state.AppActiveUser.id
      axios.get(`fetch-dashboard/${id}`)
        .then(() => {
          this.fetchImpressions()
        })
    },
    fetchImpressions() {
      const email = this.$store.state.AppActiveUser.email;
      axios.get("dashboard", { params: { email: email } }).then((response) => {
        this.dashboard = response.data;
      });
    },
    seeDetail(args) {
      return this.$router.push({
        path: `/campaign/detail/${args.campaign_id}`,
      });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>