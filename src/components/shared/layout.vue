<template lang="pug">
div
  div.border.rounded.bg-danger
    h1.font-weight-bold.text-center.text-light
      | My smart home
  div.pb-5
    .container-fluid
      .row.mt-2
        .col-12
          router-view
</template>

<style lang="scss">
@import "../../assets/style/index.scss";
</style>

