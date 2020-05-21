<template>
  <Page :actionBarHidden="true" :backgroundSpanUnderStatusBar="true">
    <FlexboxLayout flexWrap="wrap" alignContent="flex-start">
      <Image src="https://www.eu-cord.org/2015/wp-content/uploads/2020/04/covid-19.jpg" />
      <Label
        class="h1"
        text="Covid 19 Tracker Kenya"
      ></Label>
      <Label class="h2" text="I Still don't Know What to put here"/>
      <Label class="h2" text="I'm Just glad it works 😁"/>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text: null
    };
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>