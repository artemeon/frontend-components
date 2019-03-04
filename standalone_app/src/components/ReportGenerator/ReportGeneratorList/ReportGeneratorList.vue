<template>
  <div v-if="Object.keys(reportList).length !== 0">
    <h1>Filter</h1>
    <table class="table table-striped">
      <tbody>
        <tr v-for="(report, index) in reportList.reports" :key="index">
          <td>
            <i class="fa fa-external-link" aria-hidden="true"></i>
          </td>
          <td>{{report.strTitle}}</td>
          <td>{{report.strTargetobject}}</td>
          <td class="actions">
            <span>
              <router-link :to="'/reportconfigurator/edit/'+report.strSystemid">
                <i
                  class="fa fa-pencil"
                  aria-hidden="true"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Bearbeiten"
                ></i>
              </router-link>
            </span>
            <span>
              <i
                class="fa fa-folder-open-o"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Report Anzeigen"
              ></i>
            </span>
            <span @click="deleteReport(report.strSystemid)">
              <i
                class="fa fa-trash-o"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Löschen"
              ></i>
            </span>
            <span @click="duplicateReport(report.strSystemid)">
              <i
                class="fa fa-files-o"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Kopie erstellen"
              ></i>
            </span>
            <span>
              <i
                class="fa fa-tag"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Tags bearbeiten"
              ></i>
            </span>
            <span>
              <i
                class="fa fa-users"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Rechte bearbeiten"
              ></i>
            </span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="actions">
            <router-link to="/reportconfigurator/new">
              <i
                class="fa fa-plus-circle"
                aria-hidden="true"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Neuen Datensatz anlegen"
              ></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pager">
      <ul class="pagination">
        <li class="active">
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
        <li>
          <span>
            Gesamt:
            {{reportList.totalCount}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./ReportGeneratorList.ts">
</script>
<style lang="scss" scoped src="./ReportGeneratorList.scss">
</style>


