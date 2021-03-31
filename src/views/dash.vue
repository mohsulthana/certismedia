<template>
    <div class="p-grid p-fluid">
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">Impressions <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="impression" />
            </div>
        </div>
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">Views <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="conversions" />
            </div>
        </div>
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">First Quartiles <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="conversions" />
            </div>
        </div>
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">Mid Point <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="conversions" />
            </div>
        </div>
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">Third Quartile <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="conversions" />
            </div>
        </div>
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5 class="centerText">Completed View <i class="pi pi-download"></i></h5>
                <Chart type="line" :data="conversions" />
            </div>
        </div>
    </div>
</template>

<script>
// const { reactive } = require('@vue/reactivity');
// import { onMounted } from 'vue';
// import axios from '@/axios'

export default {
    // setup() {
    //     const impression = reactive({
    //         labels: [],
    //         datasets: [
    //             {
    //                 label: 'First Dataset',
    //                 data: [],
    //                 fill: true,
    //                 borderColor: '#42A5F5',
    //             },
    //         ],
    //     });

    //     // Fetching data
    //     onMounted(() => {
    //         axios.get('/impression').then((response) => {
    //             response.data.slice(0, 20).forEach((element) => {
    //                 impression.datasets[0].data.push(parseInt(element.impression));
    //                 impression.labels.push(element.country);
    //             });
    //         });
    //     });

    //     return {
    //         impression,
    //     };
    // },
    async mounted() {
        await this.$http.get('/impression').then((response) => {
            response.data.slice(0, 20).forEach((element) => {
                this.impression.datasets[0].data.push(element.impression);
                this.impression.labels.push(element.country);
            });
        });
        // this.$http.get('/conversion').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.conversion.datasets[0].data.push(JSON.parse(element.conversion));
        //         this.conversion.labels.push(element.country);
        //     });
        // });
        // this.$http.get('/views').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.views.datasets[0].data.push(JSON.parse(element.views));
        //         this.views.labels.push(element.country);
        //     });
        // });
        // this.$http.get('/midpoint').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.midpoint.datasets[0].data.push(JSON.parse(element.midpoint));
        //         this.midpoint.labels.push(element.country);
        //     });
        // });
        // this.$http.get('/completedview').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.completedview.datasets[0].data.push(JSON.parse(element.completedview));
        //         this.completedview.labels.push(element.country);
        //     });
        // });
        // this.$http.get('/firstquartile').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.firstquartile.datasets[0].data.push(JSON.parse(element.firstquartile));
        //         this.firstquartile.labels.push(element.country);
        //     });
        // });
        // this.$http.get('/thirdquartile').then((response) => {
        //     response.data.slice(0, 20).forEach((element) => {
        //         this.thirdquartile.datasets[0].data.push(JSON.parse(element.thirdquartile));
        //         this.thirdquartile.labels.push(element.country);
        //     });
        // });
    },
    computed: {},
    data() {
        return {
            impression: {
                labels: [],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [],
                        fill: false,
                        borderColor: '#42A5F5',
                    },
                ],
            },
            clicks: {
                labels: [],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#42A5F5',
                    },
                ],
            },
            conversions: {
                labels: [],
                datasets: [
                    {
                        label: 'Data',
                        data: [],
                        fill: false,
                        borderColor: '#b944d6',
                    },
                ],
            },
        };
    },
};
</script>

<style scoped>
</style>