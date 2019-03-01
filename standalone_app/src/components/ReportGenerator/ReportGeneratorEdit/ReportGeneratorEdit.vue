<template>
  <div v-if="Object.keys(report).length!==0">
    <form @submit="submitForm">
      <div class="form-group">
        <Row>
          <Col :sm="3">
            <label for="reportconfigarator_title">Titel</label>
          </Col>
          <Col :sm="6">
            <input type="text" class="form-control" id="reportconfigarator_title" v-model="title">
          </Col>
        </Row>
      </div>

      <div class="form-group">
        <Row>
          <Col :sm="3">
            <label for="reportconfigarator_description">Beschreibung</label>
          </Col>
          <Col :sm="6">
            <textarea
              type="text"
              class="form-control"
              id="reportconfigarator_description"
              v-model="description"
            ></textarea>
          </Col>
        </Row>
      </div>
      <div class="form-group">
        <Row>
          <Col :sm="3">
            <label for="reportconfigarator_public">Für alle Anwender verfügbar</label>
          </Col>
          <Col :sm="6">
            <select id="reportconfigarator_public" v-model="availableForPublic">
              <option disabled>Bitte wählen</option>
              <option :value="0" :selected="checkIfPublic()">Nein</option>
              <option :value="1" :selected="checkIfPublic()">Ja</option>
            </select>
          </Col>
        </Row>
      </div>
      <Row>
        <Col :sm="3"></Col>
        <Col :sm="6">
          <span>Ist diese Option aktiv, so kann die Generierung des Exports erheblich länger dauern</span>
        </Col>
      </Row>
      <Row>
        <Col :sm="3">
          <label for="reportconfigarator_editobjects">Datensätze über den Report editieren</label>
        </Col>
        <Col :sm="6">
          <select id="reportconfigarator_editobjects" v-model="bitEditObjects">
            <option disabled>Bitte wählen</option>
            <option :value="0" :selected="checkIfObjectsEditable()">Nein</option>
            <option :value="1" :selected="checkIfObjectsEditable()">Ja</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col :sm="3"></Col>
        <Col :sm="6">
          <button type="submit" class="btn btn-default">
            <i class="fa fa-check" aria-hidden="true"></i>
            Speichern
          </button>
        </Col>
      </Row>
    </form>
  </div>
</template>

<script lang="ts" src="./ReportGeneratorEdit.ts">
</script>
<style lang="scss" scoped src="./ReportGeneratorEdit.scss">
</style>


