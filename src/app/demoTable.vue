<template>
  <div>
    <el-button @click="update">
      update
    </el-button>

    <!-- el-table Home页面中正常，运行页面中不正常 -->
    <!-- <el-table :data="tableData">
      <el-table-column prop="time" label="time" width="180" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="value" label="value" />
    </el-table> -->

    <vxe-table
      :data="tableData"
    >
      <vxe-table-column type="seq" width="60" />
      <vxe-table-column field="time" title="time" />
      <vxe-table-column field="name" title="name" />
      <vxe-table-column field="value" title="value" />
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          time: new Date(),
          name: 'zgz',
          value: 1
        },
        {
          time: new Date(),
          name: 'zgz',
          value: 2
        }
      ]
    }
  },
  mounted() {
    console.log(this.tableData)
  },
  methods: {
    update() {
      this.tableData = [
        {
          time: new Date(),
          name: 'zgz',
          value: 123
        }
      ]
    }
  }
}
</script>
