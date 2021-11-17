<!-- Vue Component -->
<template>
  <div>
    <vx-card
      title="Select your campaign for reporting view"
      class="overflow-hidden"
    >
      <template slot="actions">
        <date-picker
          placeholder="Filter date"
          v-model="dateRange"
          valueType="format"
          :clearable="true"
          :range-separator="' to '"
          range
          :confirm-text="'Filter'"
          :confirm="true"
        ></date-picker>
      </template>
      <vue-good-table
        :expandOptions="{ enabled: true }"
        :columns="columns"
        :rows="dashboard"
        :group-options="{
          enabled: true,
          collapsable: true,
          headerPosition: 'top',
        }"
        @on-row-click="seeLineDetail"
        @on-row-dblclick="onCellClick"
      >
        <template slot="expanded-row" slot-scope="props">
          <div>Hello</div>
        </template>
        <template slot="table-header-row" slot-scope="props">
          <span v-if="props.column.field == 'action'">
            <vs-button
              color="primary"
              type="border"
              icon="visibility"
              @click="seeDetail(props.row)"
            ></vs-button>
          </span>
          <span v-else-if="props.column.field == 'campaign_name'">
            <router-link
              :to="{
                path: 'reporting-detail',
                query: { campaign_id: parseInt(props.row.campaign_id) },
              }"
              >{{ props.row.campaign_name }}</router-link
            >
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'ctr'">
            {{ `${parseFloat(props.row.ctr).toFixed(2)}%` }}
          </span>
          <span v-else-if="props.column.field == 'winrate'">
            {{ `${parseFloat(props.row.winrate).toFixed(2)}%` }}
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </vx-card>
  </div>
  <!-- <v-data-table
    :headers="headers"
    :items="dashboard"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="campaign_name"
    show-expand
    dense
    :loading="this.$root.loadingWorking"
    loading-text="Loading... Please wait"
    class="elevation-5"
    @click:row="seeDetail"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title
          >Select your campaign for reporting view</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <date-picker
          placeholder="Filter date"
          v-model="dateRange"
          valueType="format"
          :clearabl="true"
          :range-separator="' to '"
          range
          :confirm-text="'Filter'"
          :confirm="true"
        ></date-picker>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ item }">
      <td class="text-left ml-3"></td>
      <td @click="seeLineDetail(value.line_id, item)" v-for="(value, index) in item.lines" :key="index" class="text-start text-warning">{{ value.line_name }}</td>
    </template>
  </v-data-table> -->
</template>

<script>
import { VCard, VCardText, VCardTitle, VDataTable, VBtn } from "vuetify/lib";
import axios from "@/axios";
import DatePicker from "vue2-datepicker";
import { VueGoodTable } from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";
import "vue2-datepicker/index.css";

export default {
  components: {
    VCard,
    VBtn,
    VCardText,
    VCardTitle,
    VDataTable,
    DatePicker,
    VueGoodTable,
  },
  watch: {
    dateRange: function (newVal, oldVal) {
      this.dashboard = [];
      if (newVal[0] == null && newVal[0] == null) {
        this.from = "";
        this.to = "";
      } else {
        this.from = newVal[0];
        this.to = newVal[1];
      }
      this.fetchImpressions();
    },
  },
  data() {
    return {
      columns: [
        {
          label: "",
          field: "before",
        },
        {
          label: "Campaign",
          field: "campaign_name",
        },
        {
          label: "Impressions",
          field: "impressions",
          type: "number",
        },
        {
          label: "Clicks",
          field: "clicks",
          type: "number",
        },
        {
          label: "CTR",
          field: "ctr",
          type: "percentage",
        },
        {
          label: "Views",
          field: "views",
          type: "number",
        },
        {
          label: "Completed Views",
          field: "completed_views",
          type: "number",
        },
        {
          label: "Win Rate",
          field: "winrate",
          type: "percentage",
        },
        {
          label: "Landings",
          field: "landings",
          type: "number",
        },
        {
          label: "Registrations",
          field: "registrations",
          type: "number",
        },
        {
          label: "Subscriptions",
          field: "subscriptions",
          type: "number",
        },
        // {
        //   label: "Action",
        //   field: "action",
        // },
      ],
      expanded: [],
      dateRange: {},
      from: "",
      to: "",
      singleExpand: false,
      headers: [
        { text: "", value: "data-table-expand" },
        {
          text: "Campaign Name",
          align: "left",
          sortable: false,
          value: "campaign_name",
        },
      ],
      dashboard: [],
    };
  },
  methods: {
    onCellClick(params) {
      console.log(params);
    },
    fetchImpressions() {
      const idUser = this.$store.state.AppActiveUser.id;
      const username = this.$store.state.AppActiveUser.username;
      const table = username + idUser;
      axios
        .get(`reporting/dashboard/${table}?from=${this.from}&to=${this.to}`)
        .then((response) => {
          response.data.forEach((element) => {
            this.dashboard.push({
              campaign_id: element.campaign_id,
              children: element.lines,
              clicks: parseFloat(element.clicks),
              impressions: parseFloat(element.impressions),
              campaign_name: element.campaign_name,
              completed_views: parseFloat(element.completed_views),
              views: parseFloat(element.views),
              ctr:
                element.impressions == null || element.clicks == null
                  ? 0
                  : parseInt(element.clicks) / parseInt(element.impressions),
              landings:
                element.landings == null ? 0 : parseFloat(element.landings),
              winrate:
                element.impressions == null || element.bids == null
                  ? 0
                  : parseFloat(element.impressions) / parseFloat(element.bids),
              registrations:
                element.registrations == null
                  ? 0
                  : parseFloat(element.registrations),
              subscriptions:
                element.subscriptions == null
                  ? 0
                  : parseFloat(element.subscriptions),
            });
          });

          this.dashboard.map((element) => {
            element.children.map((child) => {
              child.campaign_id = element.campaign_id;
              child.campaign_name = child.line_name;
              child.winrate =
                child.impressions == null || child.bids == null
                  ? 0
                  : (parseFloat(child.impressions) / parseFloat(child.bids)) *
                    100;
              child.ctr =
                child.clicks == null || child.impressions == null
                  ? 0
                  : (parseFloat(child.clicks) / parseFloat(child.impressions)) *
                    100;
              child.winrate =
                child.winrate == Infinity ? 0 : parseFloat(child.winrate);
              child.ctr = child.ctr == Infinity ? 0 : parseFloat(child.ctr);
              delete child.line_name;
            });
          });
        });
    },
    seeLineDetail(line) {
      return this.$router.push({
        path: "/reporting-detail-line",
        query: {
          line: parseInt(line.row.line_id),
          campaign_id: parseInt(line.row.campaign_id),
        },
      });
    },
    seeDetail(args) {
      return this.$router.push({
        path: "/reporting-detail",
        query: { campaign_id: parseInt(args.campaign_id) },
      });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>

<style>
tr.v-data-table__expanded.v-data-table__expanded__row:hover,
.v-data-table__expanded.v-data-table__expanded__content,
tr {
  cursor: pointer;
}
</style>