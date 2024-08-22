<template>
  <div class="blockbody">
    <div class="container">
      <div class="col-left">
        <div class="row row1"></div>
        <div class="row row2"></div>
        <div class="row row3">
          <div class="row-col left"></div>
          <div class="row-col right"></div>
        </div>
      </div>
      <div class="col-right">
        <div class="row top"></div>
        <div class="row bottom"></div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.blockbody {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 1000px;
  height: 700px;
  padding: 1em;
  display: flex;
  gap: 1em;
}

.col-left {
  flex: 2;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.col-right {
  border-radius: 30px;
  flex: 1;
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.row {
  flex: 1;
  border: 1px red solid;
  border-radius: 30px;
}

.row3 {
  display: flex;
  border-radius: 30px;
  gap: 1em;
}

.row-col {
  flex: 1;
  border: 2px red solid;
  border-radius: 30px;
}
</style>

<script>
</script>

