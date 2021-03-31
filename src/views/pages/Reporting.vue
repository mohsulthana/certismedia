<template>
  <div class="vx-row">
    <!-- CHAT CARD -->
    <div class="vx-col w-full mb-base">
      <vx-card title="Select your campaign for reporting view" class="overflow-hidden">
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
    fetchImpressions() {
      const email = this.$store.getters.AppActiveUser
      axios.get("dashboard", { email: email }).then((response) => {
        this.dashboard = response.data;
      });
    },
    seeDetail(args) {
      return this.$router.push({ path: '/reporting-detail/', query: {id: args.id, campaign: args.campaign_id} });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>