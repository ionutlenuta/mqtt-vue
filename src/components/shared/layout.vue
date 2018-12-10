<template lang="pug">
div
  div.py-3.border.rounded.bg-danger
    h1.font-weight-bold.text-center.text-light
      img.mb-2.img-fluid.img-wrapper(src='../../../public/smart-home.png')
      | My smart home
  div.pb-5
    .container-fluid
      .row.mt-5
        .col-12
          router-view
</template>

<style lang="scss">
@import "../../assets/style/index.scss";
</style>

