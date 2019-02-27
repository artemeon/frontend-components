<template>
  <div id="app">
    <Loader></Loader>
    <ContainerFluid>
      <Row>
        <Col :sm="12" :md="3" :lg="3" :xl="3">
          <Navbar></Navbar>
        </Col>
        <Col :sm="12" :md="9" :lg="9" :xl="9">
          <router-view/>
        </Col>
      </Row>
    </ContainerFluid>
  </div>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="scss" scoped style="./App.scss">
</style>


