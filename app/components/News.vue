<template>
  <Page @loaded="getTweets">
    <ActionBar title="News" />
    <ListView for="item in news">
      <v-template>
        <card-view class="cardStyle text--dark" margin="5" elevation="1" radius="10">
          <stack-layout>
            <label color="black" class="text--large" :text="item.user"></label>
            <Image v-if="item.media" :src="item.media[0].media_url_https" />
            <TextView color="black" class="text--medium text--dark" editable="false">
              <FormattedString>
                <Span color="black" :text="item.tweet" />
              </FormattedString>
            </TextView>
            <label color="black" class="text--medium" :text="formattedDate(item.created_at)"></label>
          </stack-layout>
        </card-view>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      news: []
    };
  },
  methods: {
    formattedDate(date) {
      let dt = new Date(date);
      return dt.toLocaleTimeString("en-us");
    },
    getTweets() {
      fetch("https://twitter.covid19kenya.site/api/v2/MOH_kenya?count=100")
        .then(response => response.json())
        .then(r => {
          this.news = r;
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