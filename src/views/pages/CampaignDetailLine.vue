<template>
  <div id="campaign-detail">
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card :title="campaignName" class="overflow-hidden">
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
          <vs-button
            color="primary"
            @click="goBack()"
            type="border"
            icon="keyboard_backspace"
            >Back</vs-button
          >
        </vx-card>
      </div>
    </div>
    <div class="vx-row">
      <!-- CHAT CARD -->
      <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
        <vx-card
          title="Ad size"
          class="overflow-hidden"
          refreshContentAction
          @refresh="fetchAdSize"
        >
          <apexchart
            width="100%"
            height="100%"
            type="donut"
            :options="adSizeOptions"
            :series="adSizeSeries"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
        <vx-card
          title="Device OS"
          class="overflow-hidden"
          refreshContentAction
          @refresh="fetchDeviceOS"
        >
          <apexchart
            width="100%"
            height="100%"
            type="donut"
            :options="deviceOSOptions"
            :series="deviceOSSeries"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/3 sm:w-1/3 mb-base">
        <vx-card
          title="Exchanges"
          class="overflow-hidden"
          refreshContentAction
          @refresh="fetchExchange"
        >
          <apexchart
            width="100%"
            height="100%"
            type="donut"
            style="min-height: 238.7px !important"
            :options="exchangeOptions"
            :series="exchangeSeries"
          ></apexchart>
        </vx-card>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card class="overflow-hidden">
          <vs-list>
            <vs-list-header title="Total Delivery"></vs-list-header>
            <vs-list-item
              :title="`Impressions: ${formatNumber(impressions)}`"
            ></vs-list-item>
            <vs-list-item
              :title="`Click: ${formatNumber(click)}`"
            ></vs-list-item>
            <vs-list-item :title="`CTR: ${formatNumber(ctr)}%`"></vs-list-item>
          </vs-list>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/1 sm:w-1/1 mb-base">
        <vx-card class="overflow-hidden">
          <vs-table
            stripe
            max-items="10"
            search
            pagination
            :data="dailyDelivery"
          >
            <template slot="header">
              <h3 class="mr-5">Daily Delivery</h3>
              <vs-icon
                style="cursor: pointer"
                icon="get_app"
                size="25px"
                @click="downloadDailyDeliveryAsCSV()"
              ></vs-icon>
            </template>
            <template slot="thead">
              <vs-th sort-key="time"> Day </vs-th>
              <vs-th sort-key="impressions"> Impressions </vs-th>
              <vs-th sort-key="clicks"> Clicks </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="views"> Views </vs-th>
              <vs-th sort-key="completed_views"> Completed Views </vs-th>
              <vs-th sort-key="winrate"> Win Rate </vs-th>
              <vs-th sort-key="landings"> Landings </vs-th>
              <vs-th sort-key="registrations"> Registrations </vs-th>
              <vs-th sort-key="subscriptions"> Subscriptions </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].time">
                  {{ `${data[indextr].time}` }}
                </vs-td>
                <vs-td :data="data[indextr].impressions">
                  {{ data[indextr].impressions }}
                </vs-td>

                <vs-td :data="data[indextr].clicks">
                  {{ data[indextr].clicks }}
                </vs-td>

                <vs-td :data="data[indextr].ctr">
                  {{ parseFloat(data[indextr].ctr).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].views">
                  {{ data[indextr].views }}
                </vs-td>

                <vs-td :data="data[indextr].completed_views">
                  {{ data[indextr].completed_views }}
                </vs-td>

                <vs-td :data="data[indextr].winrate">
                  {{ parseFloat(data[indextr].winrate).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].landings">
                  {{ parseInt(data[indextr].landings) }}
                </vs-td>

                <vs-td :data="data[indextr].registrations">
                  {{ parseInt(data[indextr].registrations) }}
                </vs-td>

                <vs-td :data="data[indextr].subscriptions">
                  {{ parseInt(data[indextr].subscriptions) }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
          <vs-table stripe max-items="10" search pagination :data="creatives">
            <template slot="header">
              <h3 class="mr-5">Creative</h3>
              <vs-icon
                style="cursor: pointer"
                icon="get_app"
                size="25px"
                @click="downloadCreativeAsCSV()"
              ></vs-icon>
            </template>
            <template slot="thead">
              <vs-th sort-key="creative_name"> Name </vs-th>
              <vs-th sort-key="impressions"> Impressions </vs-th>
              <vs-th sort-key="clicks"> Clicks </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="views"> Views </vs-th>
              <vs-th sort-key="completed_views"> Completed Views </vs-th>
              <vs-th sort-key="winrate"> Win Rate </vs-th>
              <vs-th sort-key="landings"> Landings </vs-th>
              <vs-th sort-key="registrations"> Registrations </vs-th>
              <vs-th sort-key="subscriptions"> Subscriptions </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].creative_name">
                  {{ data[indextr].creative_name }}
                </vs-td>

                <vs-td :data="data[indextr].impressions">
                  {{ data[indextr].impressions }}
                </vs-td>

                <vs-td :data="data[indextr].clicks">
                  {{ data[indextr].clicks }}
                </vs-td>

                <vs-td :data="data[indextr].ctr">
                  {{ parseFloat(data[indextr].ctr).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].views">
                  {{ data[indextr].views }}
                </vs-td>

                <vs-td :data="data[indextr].completed_views">
                  {{ data[indextr].completed_views }}
                </vs-td>

                <vs-td :data="data[indextr].winrate">
                  {{ parseFloat(data[indextr].winrate).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].landings">
                  {{ parseInt(data[indextr].landings) }}
                </vs-td>

                <vs-td :data="data[indextr].registrations">
                  {{ parseInt(data[indextr].registrations) }}
                </vs-td>

                <vs-td :data="data[indextr].subscriptions">
                  {{ parseInt(data[indextr].subscriptions) }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
          <vs-table stripe max-items="10" search pagination :data="inventory">
            <template slot="header">
              <h3 class="mr-5">Inventory</h3>
              <vs-icon
                style="cursor: pointer"
                icon="get_app"
                size="25px"
                @click="downloadInventoryAsCSV()"
              ></vs-icon>
            </template>
            <template slot="thead">
              <vs-th sort-key="inventory_name"> Name </vs-th>
              <vs-th sort-key="impressions"> Impressions </vs-th>
              <vs-th sort-key="clicks"> Clicks </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="views"> Views </vs-th>
              <vs-th sort-key="completed_views"> Completed Views </vs-th>
              <vs-th sort-key="winrate"> Win Rate </vs-th>
              <vs-th sort-key="landings"> Landings </vs-th>
              <vs-th sort-key="registrations"> Registrations </vs-th>
              <vs-th sort-key="subscriptions"> Subscriptions </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].inventory_name">
                  {{ data[indextr].inventory_name }}
                </vs-td>
                <vs-td :data="data[indextr].impressions">
                  {{ data[indextr].impressions }}
                </vs-td>

                <vs-td :data="data[indextr].clicks">
                  {{ data[indextr].clicks }}
                </vs-td>

                <vs-td :data="data[indextr].ctr">
                  {{ parseFloat(data[indextr].ctr).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].views">
                  {{ data[indextr].views }}
                </vs-td>

                <vs-td :data="data[indextr].completed_views">
                  {{ data[indextr].completed_views }}
                </vs-td>

                <vs-td :data="data[indextr].winrate">
                  {{ parseFloat(data[indextr].winrate).toFixed(2) }}%
                </vs-td>

                <vs-td :data="data[indextr].landings">
                  {{ parseInt(data[indextr].landings) }}
                </vs-td>

                <vs-td :data="data[indextr].registrations">
                  {{ parseInt(data[indextr].registrations) }}
                </vs-td>

                <vs-td :data="data[indextr].subscriptions">
                  {{ parseInt(data[indextr].subscriptions) }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
import axios from "@/axios";
import Papa from "papaparse";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Qs from "qs";

export default {
  components: {
    apexchart,
    DatePicker,
  },
  data() {
    const idUser = this.$store.state.AppActiveUser.id;
    const username = this.$store.state.AppActiveUser.username;
    return {
      from: "",
      to: "",
      dateRange: {},
      table: username + idUser,
      line: this.$route.query.line,
      campaign_id: this.$route.query.campaign_id,
      creatives: [],
      lines: [],
      inventory: [],
      dailyDelivery: [],
      campaignName: "",
      impressions: 0,
      click: 0,
      ctr: 0,
      winrate: 0,
      adSizeOptions: {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        labels: [],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      },
      adSizeSeries: [],
      deviceOSSeries: [],
      deviceOSOptions: {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //       legend: {
        //         show: false,
        //       },
        //     },
        //   },
        // ],
        // legend: {
        //   formatter: function (label, opts) {
        //     return label + " - " + opts.w.globals.series[opts.seriesIndex];
        //   },
        // },
        labels: [],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      },
      exchangeOptions: {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //       legend: {
        //         show: false,
        //       },
        //     },
        //   },
        // ],
        labels: [],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      },
      exchangeSeries: [],
      dailyImpressions: [
        {
          name: "DailyImpressions",
          data: [],
        },
      ],
      dailyImpressionsOption: {
        height: "200px",
        chart: {
          id: "daily-impressions",
        },
        xaxis: {
          categories: [],
        },
      },
      dailyClick: [
        {
          name: "DailyClick",
          data: [],
        },
      ],
      dailyClickOption: {
        height: "200px",
        chart: {
          id: "daily-click",
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  watch: {
    dateRange: function (newVal, oldVal) {
      if (newVal[0] == null && newVal[0] == null) {
        this.from = "";
        this.to = "";
      } else {
        this.from = newVal[0];
        this.to = newVal[1];
      }
      this.recallFunction();
    },
  },
  methods: {
    recallFunction() {
      this.creatives = [];
      this.dailyDelivery = [];
      this.inventory = [];
      this.adSizeOptions = {
        labels: [],
      };
      this.adSizeSeries = [];
      this.impressions = 0;
      this.click = 0;
      this.ctr = 0;

      this.fetchCreative();
      this.fetchDailyDelivery();
      this.fetchInventory();
      this.fetchAdSize();
      this.fetchExchange();
      this.fetchDeviceOS();
    },
    defaultDate() {
      this.from = "";
      this.to = "";
      this.recallFunction();
    },
    formatNumber(number) {
      var nfObject = new Intl.NumberFormat("en-US");
      return nfObject.format(parseFloat(number).toFixed(2));
    },
    goBack() {
      return this.$router.go(-1);
    },
    downloadDailyDeliveryAsCSV() {
      const daily = this.dailyDelivery.map((obj) => [
        this.campaignName,
        obj.campaign_id,
        obj.impressions,
        obj.clicks,
        obj.ctr + "%",
        obj.views,
        obj.completed_views,
        obj.winrate + "%",
        obj.registrations,
        obj.subscriptions,
        `${obj.time.substring(0, 4)}-${obj.time.substring(
          4,
          6
        )}-${obj.time.substring(6, 8)}`,
      ]);

      const header = [
        "Campaign",
        "Campaign ID",
        "Impressions",
        "Clicks",
        "CTR",
        "Views",
        "Completed Views",
        "Win Rate",
        "Registrations",
        "Subscriptions",
        "Time",
      ];

      var blob = new Blob(
        [
          Papa.unparse({
            fields: header,
            data: daily,
          }),
        ],
        {
          type: "text/csv;charset=utf-8;",
        }
      );

      var link = document.createElement("a");

      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `Adlokel_${this.campaignName}_Daily Delivery.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    downloadInventoryAsCSV() {
      const inventory = this.inventory.map((obj) => [
        obj.inventory_name,
        obj.impressions,
        obj.clicks,
        obj.ctr + "%",
        obj.views,
        obj.completed_views,
        obj.winrate + "%",
        obj.registrations,
        obj.subscriptions,
      ]);

      const header = [
        "Inventory Name",
        "Impressions",
        "Clicks",
        "CTR",
        "Views",
        "Completed Views",
        "Registrations",
        "Subcriptions",
      ];

      var blob = new Blob(
        [
          Papa.unparse({
            fields: header,
            data: inventory,
          }),
        ],
        {
          type: "text/csv;charset=utf-8;",
        }
      );

      var link = document.createElement("a");

      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `Adlokel_${this.campaignName}_Inventory.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    downloadCreativeAsCSV() {
      const creatives = this.creatives.map((obj) => [
        obj.creative_name,
        obj.impressions,
        obj.clicks,
        obj.ctr + "%",
        obj.views,
        obj.completed_views,
        obj.win_rate + "%",
        obj.registrations,
        obj.subscriptions,
      ]);

      const header = [
        "Creative Name",
        "Impressions",
        "Clicks",
        "CTR",
        "Views",
        "Completed Views",
        "Win Rate",
        "Registrations",
        "Subscriptions",
      ];

      var blob = new Blob(
        [
          Papa.unparse({
            fields: header,
            data: creatives,
          }),
        ],
        {
          type: "text/csv;charset=utf-8;",
        }
      );

      var link = document.createElement("a");

      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `Adlokel_${this.campaignName}_Creative.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    fetchLines() {
      axios
        .get(
          `reporting/dashboard/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            element.lines.forEach((line) => {
              this.lines.push({
                line_name: line.line_name,
                clicks: parseFloat(line.clicks),
                impressions: parseFloat(line.impressions),
                time: line.date_time,
                completed_views: parseFloat(line.completed_views),
                views: parseFloat(line.views),
                ctr: line.ctr == null ? 0 : parseFloat(line.ctr),
                landings: line.landings == null ? 0 : parseFloat(line.landings),
                winrate:
                  line.impressions == null || line.bids == null
                    ? 0
                    : (parseFloat(line.impressions) / parseFloat(line.bids)) *
                      100,
                registrations:
                  line.registrations == null
                    ? 0
                    : parseFloat(line.registrations),
                subscriptions:
                  line.subscriptions == null
                    ? 0
                    : parseFloat(line.subscriptions),
              });
            });
          });
        });
    },
    fetchCreative() {
      axios
        .get(
          `reporting/creative/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            this.creatives.push({
              clicks: parseFloat(element.clicks),
              impressions: parseFloat(element.impressions),
              creative_name: element.creative_name,
              completed_views: parseFloat(element.completed_views),
              views: parseFloat(element.views),
              ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
              landings:
                element.landings == null ? 0 : parseFloat(element.landings),
              winrate:
                element.impressions == null || element.bids == null
                  ? 0
                  : (parseFloat(element.impressions) /
                      parseFloat(element.bids)) *
                    100,
              registrations:
                element.registrations == null
                  ? 0
                  : parseFloat(element.registrations),
              subscriptions:
                element.subscriptions == null
                  ? 0
                  : parseFloat(element.subscriptions),
            });

            // total delivery
            this.impressions += parseFloat(element.impressions);
            this.click += parseFloat(element.clicks);
          });
          this.ctr = (this.click / this.impressions) * 100;
        });
    },
    fetchDailyDelivery() {
      axios
        .get(
          `reporting/daily/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            this.dailyDelivery.push({
              clicks: parseFloat(element.clicks),
              impressions: parseFloat(element.impressions),
              time: element.date_time,
              completed_views: parseFloat(element.completed_views),
              views: parseFloat(element.views),
              ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
              landings:
                element.landings == null ? 0 : parseFloat(element.landings),
              winrate:
                element.impressions == null || element.bids == null
                  ? 0
                  : (parseFloat(element.impressions) /
                      parseFloat(element.bids)) *
                    100,
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
        });
    },
    fetchInventory() {
      axios
        .get(
          `reporting/inventory/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            this.inventory.push({
              clicks: parseFloat(element.clicks),
              impressions: parseFloat(element.impressions),
              inventory_name: element.inventory_name,
              completed_views: parseFloat(element.completed_views),
              views: parseFloat(element.views),
              ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
              landings:
                element.landings == null ? 0 : parseFloat(element.landings),
              winrate:
                element.impressions == null || element.bids == null
                  ? 0
                  : (parseFloat(element.impressions) /
                      parseFloat(element.bids)) *
                    100,
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
        });
    },
    fetchAdSize(card) {
      this.adSizeOptions = {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        labels: [],
        colors: ["#0288D1", "#00796B", "#689F38", "#C2185B"],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      };

      this.adSizeSeries = [];

      axios
        .get(
          `reporting/adsize/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            this.adSizeSeries.push(parseFloat(element.impressions));
            this.adSizeOptions.labels.push(element.creative_size);
          });
        })
        .finally(() => {
          card.removeRefreshAnimation();
        });
    },
    fetchExchange(card) {
      (this.exchangeOptions = {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        labels: [],
        colors: ["#0288D1", "#00796B", "#689F38", "#C2185B"],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      }),
        (this.exchangeSeries = []);

      axios
        .get(
          `reporting/exchange/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`,
          {
            params: {
              filter: { line_id: this.line },
            },
            paramsSerializer: function (params) {
              return Qs.stringify(params, { encode: false });
            },
          }
        )
        .then((response) => {
          response.data.forEach((element) => {
            this.exchangeSeries.push(parseFloat(element.impressions));
            this.exchangeOptions.labels.push(element.exchange_name);
          });
        })
        .finally(() => {
          card.removeRefreshAnimation();
        });
    },
    fetchDeviceOS(card) {
      (this.deviceOSOptions = {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(2) + "%";
          },
        },
        labels: [],
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
      }),
        (this.deviceOSSeries = []);

      axios
        .get(
          `reporting/device/${this.table}/${this.campaign_id}?from=${this.from}&to=${this.to}`
        )
        .then((response) => {
          response.data.forEach((element) => {
            element.impressions == "" ||
            element.impressions == null ||
            element.impressions == "0"
              ? ""
              : this.deviceOSSeries.push(parseFloat(element.impressions));
            element.device_os == "" || element.device_os == null
              ? ""
              : this.deviceOSOptions.labels.push(element.device_os);
          });
        })
        .finally(() => {
          card.removeRefreshAnimation();
        });
    },
    fetchCampaignName() {
      axios
        .get(`reporting/get_campaign/${this.table}`, {
          params: {
            filter: { line_id: this.line },
          },
          paramsSerializer: function (params) {
            return Qs.stringify(params, { encode: false });
          },
        })
        .then((response) => {
          const campaignId = this.$route.query.campaign_id;
          response.data.forEach((element) => {
            if (element.campaign_id == campaignId) {
              this.campaignName = element.campaign_name;
            }
          });
        });
    },
  },
  mounted() {
    this.fetchCreative();
    this.fetchDailyDelivery();
    this.fetchInventory();
    this.fetchAdSize();
    this.fetchExchange();
    this.fetchCampaignName();
    this.fetchDeviceOS();
  },
};
</script>

<style>
.apexcharts-canvas {
  height: 203.7px !important;
}
.vx-card__body > div {
  min-height: 203.7px !important;
}
</style>