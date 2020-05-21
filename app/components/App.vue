<template>
  <BottomNavigation>
    <TabStrip>
      <TabStripItem>
        <Label text="Home"></Label>
        <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
      </TabStripItem>
      <TabStripItem>
        <Label text="Stats"></Label>
        <Image src.decode="font://&#xf080;" class="far t-36"></Image>
      </TabStripItem>
      <TabStripItem>
        <Label text="News"></Label>
        <Image src.decode="font://&#xf1ea;" class="far t-36"></Image>
      </TabStripItem>
    </TabStrip>

    <TabContentItem>
      <Frame>
        <Home />
      </Frame>
    </TabContentItem>

    <TabContentItem>
      <Frame>
        <Stats />
      </Frame>
    </TabContentItem>

    <TabContentItem>
      <Frame>
        <News />
      </Frame>
    </TabContentItem>
  </BottomNavigation>
</template>

<script>
import Home from "./Home.vue";
import Stats from "./Stats.vue";
import News from "./News.vue";

export default {
  components: {
    Home,
    Stats,
    News
  }
};
</script>

<style lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
