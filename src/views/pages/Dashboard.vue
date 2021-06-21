<template>
  <div class="vx-row">
    <!-- CHAT CARD -->
    <div class="vx-col w-full mb-base">
      <vx-card title="Dashboard" class="overflow-hidden">
        <template slot="actions">
          <!-- <vs-button icon="refresh" @click="fetchDataManually">Fetch Data Manually</vs-button> -->
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
            <vs-th sort-key="impressions"> Impression </vs-th>
            <vs-th sort-key="clicks"> Click </vs-th>
            <vs-th sort-key="views"> View </vs-th>
            <vs-th sort-key="completed_views"> Completed View </vs-th>
            <vs-th sort-key="ctr"> CTR </vs-th>
            <!-- <vs-th sort-key="win_rate"> Win Rate </vs-th> -->
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].campaign_name">
                {{ data[indextr].campaign_name }}
              </vs-td>

              <vs-td :data="data[indextr].impressions">
                {{ data[indextr].impressions }}
              </vs-td>

              <vs-td :data="data[indextr].clicks">
                {{ data[indextr].clicks }}
              </vs-td>

              <vs-td :data="data[indextr].views">
                {{ data[indextr].views }}
              </vs-td>

              <vs-td :data="data[indextr].completed_views">
                {{ data[indextr].completed_views }}
              </vs-td>

              <vs-td :data="data[indextr].ctr">
                {{ parseFloat(data[indextr].ctr).toFixed(2) }}%
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
    fetchImpressions() {
      axios.get("reporting/dashboard").then((response) => {
        response.data.forEach((element) => {
          this.dashboard.push({
            clicks: parseFloat(element.clicks),
            impressions: parseFloat(element.impressions),
            campaign_name: element.campaign_name,
            completed_views: parseFloat(element.completed_views),
            views: parseFloat(element.views),
            ctr: element.ctr == null ? 0 : parseFloat(element.ctr)
          })
        })
      });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>