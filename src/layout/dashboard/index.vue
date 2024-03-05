<template>
  <div class="app-container">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>柱状图</span>
            </div>
          </template>
          <div ref="main" v-loading="loading" style="height: 300px;"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>饼图</span>
            </div>
          </template>
          <div ref="root" style="height: 300px;"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <div ref="lineCharts" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
            </div>
          </template>
          <div ref="funnelCharts" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <kot-button>123123123</kot-button>
    <kot-button type="primary">123123123</kot-button>
    <kot-button type="danger">123123123</kot-button>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
const main = ref(null)
function setMainCharts() {
  loading.value = true
  var myChart = echarts.init(main.value as unknown as HTMLElement);
  var option;
  
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
  
  option && myChart.setOption(option);
  setTimeout(() => {
    loading.value = false
  }, 2000);
}

const root = ref(null)
function setRootCharts() {
  var myChart = echarts.init(root.value as unknown as HTMLElement);
  var option;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 3
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

const lineCharts = ref(null)
function setLineCharts() {
  var myChart = echarts.init(lineCharts.value as unknown as HTMLElement);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);
}

const funnelCharts = ref(null)
function setFunnelCharts() {
  var myChart = echarts.init(funnelCharts.value as unknown as HTMLElement);
  var option;

  option = {
    title: {
      text: 'Funnel'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

const loading = ref(false)
onMounted(() => {
  setMainCharts()
  setRootCharts()
  setLineCharts()
  setFunnelCharts()
})

</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
</style>