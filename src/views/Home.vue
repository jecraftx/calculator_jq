<template>
  <div class="container">
    <!-- <div class="home"></div> -->
    <div class="calculator">
      <p class="text-right par-out"></p>
      <input class="result" type="text" readonly placeholder="0" />
      <div class="d-flex clear">
        <button class="c">C</button>
        <button class="ce">CE</button>
      </div>
      <div class="buttons">
        <button class="num-set" value="1">1</button>
        <button class="num-set" value="2">2</button>
        <button class="num-set" value="3">3</button>
        <button class="plus">+</button>
        <button class="num-set" value="4">4</button>
        <button class="num-set" value="5">5</button>
        <button class="num-set" value="6">6</button>
        <button class="minus">-</button>
        <button class="num-set" value="7">7</button>
        <button class="num-set" value="8">8</button>
        <button class="num-set" value="9">9</button>
        <button class="divide">/</button>
        <button class="num-set" value="0">0</button>
        <button class="times">*</button>
        <button class="eq">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>