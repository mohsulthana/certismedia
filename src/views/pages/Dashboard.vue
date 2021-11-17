<!-- Vue Component -->

<template>
  <div>
    <vx-card title="Dashboard" class="overflow-hidden">
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
        }"
        @on-row-click="onRowClick"
      >
        <template slot="expanded-row" slot-scope="props">
          <div>Hello</div>
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
    <!-- <v-data-table
      :headers="headers"
      :items="dashboard"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="campaign_name"
      show-expand
      :loading="this.$root.loadingWorking"
      loading-text="Loading... Please wait"
      class="elevation-5"
    >
      <template v-slot:item.ctr="{ item }">
        {{ `${item.ctr.toFixed(2)}%` }}
      </template>
      <template v-slot:item.winrate="{ item }">
        {{ `${item.winrate.toFixed(2)}%` }}
      </template>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Dashboard</v-toolbar-title>
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
      <template v-slot:expanded-item="{ headers, item }">
        <td class="text-start text-warning" :colspan="headers.length">
          <vs-row>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="(line, index) in item.lines" :key="index">
                    <td class="text-start">{{ item.lines[index].line_name.slice(0, 50) }}...</td>
                    <td class="text-start">{{ item.lines[index].impressions }}</td>
                    <td class="text-start">{{ item.lines[index].clicks }}</td>
                    <td class="text-start">{{ item.lines[index].ctr }}</td>
                    <td class="text-start">{{ item.lines[index].view }}</td>
                    <td class="text-start">{{ item.lines[index].completed_views }}</td>
                    <td class="text-start">{{ `${item.winrate.toFixed(2)}%` }}</td>
                    <td class="text-start">{{ item.lines[index].impressions }}</td>
                    <td class="text-start">{{ item.lines[index].impressions }}</td>
                    <td class="text-start">{{ item.lines[index].impressions }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </vs-row>
        </td>
      </template>
    </v-data-table> -->
  </div>
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
  data() {
    return {
      columns: [
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
        { text: "Impressions", value: "impressions" },
        { text: "Clicks", value: "clicks" },
        { text: "CTR", value: "ctr" },
        { text: "Views", value: "views" },
        { text: "Completed Views", value: "completed_views" },
        { text: "Win Rate", value: "winrate" },
        { text: "Landings", value: "landings" },
        { text: "Registrations", value: "registrations" },
        { text: "Subscriptions", value: "subscriptions" },
      ],
      dashboard: [],
      lines: [],
    };
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
  methods: {
    onRowClick(params) {
      console.log(params);
    },
    fetchImpressions() {
      const idUser = this.$store.state.AppActiveUser.id;
      const username = this.$store.state.AppActiveUser.username;
      const table = username + idUser;

      axios
        .get(`Reporting/dashboard/${table}?from=${this.from}&to=${this.to}`)
        .then((response) => {
          response.data.forEach((element) => {
            this.dashboard.push({
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
              child.campaign_name = child.line_name;
              child.winrate =
                child.impressions == null || child.bids == null
                  ? 0
                  : parseFloat(child.impressions) / parseFloat(child.bids);
              child.ctr =
                child.clicks == null || child.impressions == null
                  ? 0
                  : parseFloat(child.clicks) / parseFloat(child.impressions);
              child.winrate =
                child.winrate == Infinity ? 0 : parseFloat(child.winrate);
              child.ctr = child.ctr == Infinity ? 0 : parseFloat(child.ctr);
              delete child.line_name;
            });
          });
        });
    },
  },
  mounted() {
    this.fetchImpressions();
  },
};
</script>