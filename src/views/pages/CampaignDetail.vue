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
            <vs-list-item :title="`Impression: ${impression}`"></vs-list-item>
            <vs-list-item :title="`Click: ${click}`"></vs-list-item>
            <vs-list-item :title="`CTR: ${ctr}%`"></vs-list-item>
            <!-- <vs-list-item
              :title="`Win Rate: ${parseInt(winrate).toFixed(2)}%`"
            ></vs-list-item> -->
          </vs-list>
        </vx-card>
      </div>
      <!-- <div class="vx-col w-full lg:w-1/1 sm:w-1/1 mb-base">
        <vx-card title="Daily Impression" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="dailyImpressionOption"
            :series="dailyImpression"
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
              <vs-th sort-key="impression"> Impression </vs-th>
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <!-- <vs-th sort-key="win_rate"> Win Rate </vs-th> -->
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].time">
                  {{
                    `${data[indextr].time.substring(0, 4)}-${data[
                      indextr
                    ].time.substring(4, 6)}-${data[indextr].time.substring(
                      6,
                      8
                    )}`
                  }}
                </vs-td>
                <vs-td :data="data[indextr].impression">
                  {{ data[indextr].impression }}
                </vs-td>
                <vs-td :data="data[indextr].click">
                  {{ data[indextr].click }}
                </vs-td>
                <vs-td :data="data[indextr].ctr">
                  {{ data[indextr].ctr == null ? 0 : data[indextr].ctr }}%
                </vs-td>
                <!-- <vs-td :data="data[indextr].win_rate">
                  {{ parseInt(data[indextr].win_rate).toFixed(2) }}%
                </vs-td> -->
                <vs-td :data="data[indextr].view">
                  {{ data[indextr].view }}
                </vs-td>
                <vs-td :data="data[indextr].completed_view">
                  {{ data[indextr].completed_view }}
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
              <vs-th sort-key="impression"> Impression </vs-th>
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <!-- <vs-th sort-key="win_rate"> Win Rate </vs-th> -->
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].creative_name">
                  {{ data[indextr].creative_name }}
                </vs-td>
                <vs-td :data="data[indextr].impression">
                  {{ data[indextr].impression }}
                </vs-td>
                <vs-td :data="data[indextr].click">
                  {{ data[indextr].click }}
                </vs-td>
                <vs-td :data="data[indextr].ctr">
                  {{ data[indextr].ctr == null ? 0 : data[indextr].ctr }}%
                </vs-td>
                <!-- <vs-td :data="data[indextr].winrate">
                  {{ parseInt(data[indextr].winrate).toFixed(2) }}%
                </vs-td> -->
                <vs-td :data="data[indextr].view">
                  {{ data[indextr].view }}
                </vs-td>
                <vs-td :data="data[indextr].completed_view">
                  {{ data[indextr].completed_view }}
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
              <vs-th sort-key="impression"> Impression </vs-th>
              <vs-th sort-key="click"> Click </vs-th>
              <vs-th sort-key="ctr"> CTR </vs-th>
              <!-- <vs-th sort-key="win_rate"> Win Rate </vs-th> -->
              <vs-th sort-key="view"> View </vs-th>
              <vs-th sort-key="completed_view"> Completed View </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].inventory_name">
                  {{ data[indextr].inventory_name }}
                </vs-td>
                <vs-td :data="data[indextr].impression">
                  {{ data[indextr].impression }}
                </vs-td>
                <vs-td :data="data[indextr].click">
                  {{ data[indextr].click }}
                </vs-td>
                <vs-td :data="data[indextr].ctr">
                  {{ data[indextr].ctr == null ? 0 : data[indextr].ctr }}%
                </vs-td>
                <!-- <vs-td :data="data[indextr].winrate">
                  {{ parseInt(data[indextr].winrate).toFixed(2) }}%
                </vs-td> -->
                <vs-td :data="data[indextr].view">
                  {{ data[indextr].view }}
                </vs-td>
                <vs-td :data="data[indextr].completed_view">
                  {{ data[indextr].completed_view }}
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
      creatives: [],
      inventory: [],
      dailyDelivery: [],
      campaignName: "",
      impression: 0,
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
      dailyImpression: [
        {
          name: "DailyImpression",
          data: [],
        },
      ],
      dailyImpressionOption: {
        height: "200px",
        chart: {
          id: "daily-impression",
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
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    downloadDailyDeliveryAsCSV() {
      const daily = this.dailyDelivery.map((obj) => [
        this.campaignName,
        obj.campaign_id,
        obj.impression,
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
        "Impression",
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
        obj.impression,
        obj.click,
        obj.ctr,
        obj.win_rate,
        obj.view,
        obj.completed_view,
      ]);

      const header = [
        "Inventory Name",
        "Impression",
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
        obj.impression,
        obj.click,
        obj.ctr,
        obj.win_rate,
        obj.view,
        obj.completed_view,
      ]);

      const header = [
        "Creative Name",
        "Impression",
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
    fetchAdditionalInformation() {
      const campaign = this.$route.query.campaign;
      const id = this.$route.query.id;

      const email = this.$store.state.AppActiveUser.email;
      axios
        .get(`Reporting/getCampaignInformation/${campaign}/${id}`, {
          params: { email: email },
        })
        .then((response) => {
          response.data[0].forEach((element) => {
            if (element.ctr === null) {
              return;
            }
            this.ctr += element.ctr;
            this.campaignName = element.campaign_name;
            this.click += parseInt(element.click);
            this.impression += parseInt(element.impression);
            this.winrate += parseInt(element.winrate);
          });

          this.creatives = response.data[0];
          this.inventory = response.data[1];
          this.dailyDelivery = response.data[5];

          response.data[4].map((item) => {
            this.adSizeOptions.labels.push(item.creative_size);
            this.adSizeSeries.push(parseInt(item.total));
          });

          response.data[3].map((item) => {
            this.exchangeOptions.labels.push(item.exchange_name);
            this.exchangeSeries.push(parseInt(item.total));
          });
        });
    },
  },
  mounted() {
    this.fetchAdditionalInformation();
  },
};
</script>