<template>
  <layout-two-columns class="organism-test">
    <template v-slot:left>
      <atom-headline />
      <lazy-image :src="$attrs.src" />
    </template>
    <template v-slot:right>
      <atom-headline />
      <lazy-picture v-bind="$attrs.picture" />
      <lazy-video />
    </template>
  </layout-two-columns>
</template>

<script>
import LazyImage from 'lazy-resources/components/LazyImage'
import LazyPicture from 'lazy-resources/components/LazyPicture'
import LazyVideo from 'lazy-resources/components/LazyVideo'
import LayoutTwoColumns from '@/components/layouts/TwoColumns'
import AtomHeadline from '@/components/atoms/Headline'

export default {
  critical: true,

  components: {
    LayoutTwoColumns,
    AtomHeadline,
    LazyImage,
    LazyPicture,
    LazyVideo
  }
}
</script>

<style lang="postcss">
.organism-test {
  /* empty */
}
</style>
