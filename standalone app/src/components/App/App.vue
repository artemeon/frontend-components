<template>
  <div id="app">
    <Loader></Loader>
    <ContainerFluid>
      <Row>
        <!-- <div class="row"> -->
        <Col :sm="12" :md="3" :lg="3" :xl="3">
          <!-- <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3"> -->
          <Navbar></Navbar>
          <!-- </div> -->
        </Col>
        <Col :sm="12" :md="9" :lg="9" :xl="9">
          <!-- <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9"> -->
          <router-view/>
          <!-- </div> -->
        </Col>
        <!-- </div> -->
      </Row>
    </ContainerFluid>
  </div>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="scss" scoped style="./App.scss">
</style>


