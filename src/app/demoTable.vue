<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="time" width="180" />
    <el-table-column prop="name" label="name" width="180" />
    <el-table-column prop="address" label="value" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: 'zgz',
          address: '123'
        },
        {
          date: '2016-05-04',
          name: 'zgz',
          address: '123'
        }
      ]
    }
  }
}
</script>
