<template>
  <div>
    <div class="vx-row">
      <!-- CHAT CARD -->
      <div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Impressions" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="impressionOption"
            :series="impression"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Conversions" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="conversionOption"
            :series="conversion"
          ></apexchart>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Clicks" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="clickOption"
            :series="click"
          ></apexchart>
        </vx-card>
      </div>
			<div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Third Quartile" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="thirdQuartileOption"
            :series="thirdquartile"
          ></apexchart>
        </vx-card>
      </div>
			<div class="vx-col w-full lg:w-1/2 sm:w-1/2 mb-base">
        <vx-card title="Midpoint" class="overflow-hidden">
          <apexchart
            width="100%"
            type="line"
            :options="midpointOption"
            :series="midpoint"
          ></apexchart>
        </vx-card>
      </div>
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
      // OPTIONS
      clickOption: {
        chart: {
          id: "click",
        },
        xaxis: {
          categories: [],
        },
      },
      impressionOption: {
        chart: {
          id: "impression",
        },
        xaxis: {
          categories: [],
        },
      },
      conversionOption: {
        chart: {
          id: "conversion",
        },
        xaxis: {
          categories: [],
        },
      },
      midpointOption: {
        chart: {
          id: "midpoint",
        },
        xaxis: {
          categories: [],
        },
      },
			thirdQuartileOption: {
        chart: {
          id: "thirdquartile",
        },
        xaxis: {
          categories: [],
        },
      },
			thirdquartile: [
        {
          name: "thirdquartile",
          data: [],
        },
      ],
      // DATA
      impression: [
        {
          name: "Impression",
          data: [],
        },
      ],
      click: [
        {
          name: "Click",
          data: [],
        },
      ],
      conversion: [
        {
          name: "Conversion",
          data: [],
        },
      ],
      midpoint: [
        {
          name: "Midpoint",
          data: [],
        },
      ],
    };
  },
  methods: {
    fetchImpressions() {
      axios.get("impression").then((response) => {
        response.data.slice(0, 20).forEach((element) => {
          this.impressionOption.xaxis.categories.push(element.inventory_name);
          this.impression[0].data.push(element.impression);
        });
      });
    },
    fetchViews() {
      axios.get("click").then((response) => {
        response.data.slice(0, 20).forEach((element) => {
          this.clickOption.xaxis.categories.push(element.inventory_name);
					this.click[0].data.push(element.click)
        });
      });
    },
    fetchConversions() {
      axios.get("conversion").then((response) => {
        response.data.slice(0, 20).forEach((element) => {
          this.conversionOption.xaxis.categories.push(element.inventory_name);
          this.conversion[0].data.push(element.conversion);
        });
      });
    },
    fetchMidpoint() {
      axios.get("MidPoint").then((response) => {
        response.data.slice(0, 20).forEach((element) => {
          this.midpointOption.xaxis.categories.push(element.inventory_name);
          this.midpoint[0].data.push(element.mid_point_view);
        });
      });
    },
		fetchThirdQuartile() {
      axios.get("ThirdQuartile").then((response) => {
        response.data.slice(0, 20).forEach((element) => {
          this.thirdQuartileOption.xaxis.categories.push(element.inventory_name);
					this.thirdquartile[0].data.push(element.third_quartile_view);
        });
      });
    },
  },
  mounted() {
    this.fetchImpressions();
    this.fetchViews();
    this.fetchConversions();
    this.fetchMidpoint();
		this.fetchThirdQuartile();
  },
};
</script>