<template>
  <div id="campaign-detail">
    <div class="vx-row">
      <div class="vx-col w-full mb-base">
        <vx-card :title="campaignName" class="overflow-hidden">
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
      <div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Ad size" class="overflow-hidden">
          <apexchart
            width="380"
            type="donut"
            :options="adSizeOptions"
            :series="adSizeSeries"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Exchanges" class="overflow-hidden">
          <apexchart
            width="380"
            type="donut"
            :options="exchangeOptions"
            :series="exchangeSeries"
          ></apexchart>
        </vx-card>
      </div>
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
            <vs-list-item
              :title="`CTR: ${formatNumber(ctr)}%`"
            ></vs-list-item>
          </vs-list>
        </vx-card>
      </div>
      <!-- <div class="vx-col w-full lg:w-1/1 sm:w-1/1 mb-base">
        <vx-card title="Daily Impressions" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="dailyImpressionsOption"
            :series="dailyImpressions"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/1 sm:w-1/1 mb-base">
        <vx-card title="Daily Click" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="dailyClickOption"
            :series="dailyClick"
          ></apexchart>
        </vx-card>
      </div> -->
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
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].time">
                  {{
                    `${data[indextr].time}`
                  }}
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
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
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
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
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

export default {
  components: {
    apexchart,
  },
  data() {
    return {
      campaign_id: this.$route.query.campaign_id,
      creatives: [],
      inventory: [],
      dailyDelivery: [],
      campaignName: "",
      impressions: 0,
      click: 0,
      ctr: 0,
      winrate: 0,
      adSizeOptions: {
        labels: [],
      },
      adSizeSeries: [],
      exchangeOptions: {
        labels: [],
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
  computed: {},
  methods: {
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
        obj.click,
        obj.ctr,
        obj.win_rate,
        obj.view,
        obj.completed_view,
        `${obj.time.substring(0, 4)}-${obj.time.substring(
          4,
          6
        )}-${obj.time.substring(6, 8)}`,
      ]);

      const header = [
        "Campaign",
        "Campaign ID",
        "Impressions",
        "Click",
        "CTR",
        "Win Rate",
        "View",
        "Completed View",
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
        `Certis_${this.campaignName}_Daily Delivery.csv`
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
        obj.click,
        obj.ctr,
        obj.win_rate,
        obj.view,
        obj.completed_view,
      ]);

      const header = [
        "Inventory Name",
        "Impressions",
        "Click",
        "CTR",
        "Win Rate",
        "View",
        "Completed View",
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
        `Certis_${this.campaignName}_Inventory.csv`
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
        obj.click,
        obj.ctr,
        obj.win_rate,
        obj.view,
        obj.completed_view,
      ]);

      const header = [
        "Creative Name",
        "Impressions",
        "Click",
        "CTR",
        "Win Rate",
        "View",
        "Completed View",
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
      link.setAttribute("download", `Certis_${this.campaignName}_Creative.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    fetchCreative() {
      axios.get(`reporting/creative/${this.campaign_id}`).then((response) => {
        response.data.forEach((element) => {
          this.creatives.push({
            clicks: parseFloat(element.clicks),
            impressions: parseFloat(element.impressions),
            creative_name: element.creative_name,
            completed_views: parseFloat(element.completed_views),
            views: parseFloat(element.views),
            ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
          });

          // total delivery
          this.impressions += parseFloat(element.impressions)
          this.click += parseFloat(element.clicks)
        });
        this.ctr = this.click/this.impressions * 100
      });
    },
    fetchDailyDelivery () {
      axios.get(`reporting/daily/${this.campaign_id}`).then((response) => {
        response.data.forEach((element) => {
          this.dailyDelivery.push({
            clicks: parseFloat(element.clicks),
            impressions: parseFloat(element.impressions),
            time: element.date_time,
            completed_views: parseFloat(element.completed_views),
            views: parseFloat(element.views),
            ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
          });
        });
      });
    },
    fetchInventory() {
      axios.get(`reporting/inventory/${this.campaign_id}`).then((response) => {
        response.data.forEach((element) => {
          this.inventory.push({
            clicks: parseFloat(element.clicks),
            impressions: parseFloat(element.impressions),
            inventory_name: element.inventory_name,
            completed_views: parseFloat(element.completed_views),
            views: parseFloat(element.views),
            ctr: element.ctr == null ? 0 : parseFloat(element.ctr),
          });
        });
      });
    },
    fetchAdSize() {
      axios.get(`reporting/adsize/${this.campaign_id}`).then((response) => {
        response.data.forEach((element) => {
          this.adSizeSeries.push(parseFloat(element.impressions))
          this.adSizeOptions.labels.push(element.creative_size)
        })
      });
    },
    fetchExchange() {
      axios.get(`reporting/exchange/${this.campaign_id}`).then((response) => {
        response.data.forEach((element) => {
          this.exchangeSeries.push(parseFloat(element.impressions))
          this.exchangeOptions.labels.push(element.exchange_name)
        })
      });
    },
    fetchCampaignName() {
      axios.get(`reporting/campaign_name/${this.campaign_id}`).then((response) => {
        this.campaignName = response.data[0].campaign_name
      })
    }
  },
  mounted() {
    this.fetchCreative();
    this.fetchInventory();
    this.fetchDailyDelivery();
    this.fetchAdSize();
    this.fetchExchange();
    this.fetchCampaignName();
  },
};
</script>