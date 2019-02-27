<template>
  <div v-if="Object.keys(reportList).length !== 0">
    <h1>Filter</h1>
    <table class="table table-striped">
      <tbody>
        <tr v-for="(report, index) in reportList.reports" :key="index">
          <td>{{report.strTitle}}</td>
          <td id="actions">
            <span>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span>
              <span>
                <i class="fa fa-folder-open-o" aria-hidden="true"></i>
              </span>
              <span @click="deleteReport(report.strSystemid)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </span>
              <i class="fa fa-files-o" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-tag" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-users" aria-hidden="true"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./ReportGeneratorList.ts">
</script>
<style lang="scss" scoped src="./ReportGeneratorList.scss">
</style>


