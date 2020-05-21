<template>
  <Page :backgroundSpanUnderStatusBar="true" @loaded="getStats">
    <ActionBar title="Statistics" />

    <GridLayout class="p-15" columns="*, *" rows="90, 90, 90, 90, 90, 100">
      <card-view row="0" col="0" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Total Cases"></label>
          <label color="teal" class="text--large" :text="stats.cases"></label>
        </stack-layout>
      </card-view>

      <card-view row="0" col="1" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Cases Today"></label>
          <label color="cyan" class="text--large" :text="stats.todayCases"></label>
        </stack-layout>
      </card-view>

      <card-view row="1" col="0" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Critical Cases"></label>
          <label color="red" class="text--large" :text="stats.critical"></label>
        </stack-layout>
      </card-view>

      <card-view row="1" col="1" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Cases Per Million"></label>
          <label color="brown" class="text--large" :text="stats.casesPerOneMillion"></label>
        </stack-layout>
      </card-view>

      <card-view row="2" col="0" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Recoveries"></label>
          <label color="green" class="text--large" :text="stats.recovered"></label>
        </stack-layout>
      </card-view>

      <card-view row="2" col="1" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Active Cases"></label>
          <label color="teal" class="text--large" :text="stats.active"></label>
        </stack-layout>
      </card-view>

      <card-view row="3" col="0" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Casualties"></label>
          <label color="red" class="text--large text--red" :text="stats.deaths"></label>
        </stack-layout>
      </card-view>

      <card-view row="3" col="1" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Casualties per Million"></label>
          <label color="red" class="text--large" :text="stats.deathsPerOneMillion"></label>
        </stack-layout>
      </card-view>

      <card-view row="4" col="0" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Casualties Today"></label>
          <label color="yellow" class="text--large" :text="stats.todayDeaths"></label>
        </stack-layout>
      </card-view>

      <card-view row="4" col="1" class="cardStyle" margin="10" elevation="10" radius="2">
        <stack-layout class="cardContent text-center">
          <label class="text--medium" color="black" text="Tests"></label>
          <label color="green" class="text--large" :text="stats.tests"></label>
        </stack-layout>
      </card-view>

      <Label
        row="5"
        colSpan="2"
        :text="`Last Update:${new Date(stats.updated)}`"
      ></Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      stats: {}
    };
  },
  methods: {
    getStats() {
      fetch("https://corona.lmao.ninja/v2/countries/kenya")
        .then(response => response.json())
        .then(r => {
          this.stats = r;
        })
        .catch(e => {});
    }
  }
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>