<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()

    return {
      page
    }
  }
}
</script>

<template>
  <article class="flex mx-auto pt-10">
    <nuxt-content class="mx-auto w-2/3" :document="page" />
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.article {
  align-content: center;
  width: 100%;
}

.nuxt-content {
  a {
    color: #e36f26;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2 {
    font-family: $ff-sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.299664px;
    color: #2599e2;
    @apply mb-2;

    &:nth-child(n + 2) {
      @apply mt-8;
    }
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-family: $ff-sans;
    @apply font-bold;
    @apply text-xl;
    @apply mt-3;
    @apply mb-2;
  }

  ul {
    @apply mt-3 mb-3 ml-6;
    @apply list-disc;
    font-family: PT Serif;
    @apply text-lg;
    list-style-position: outside;
  }

  li {
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
    margin-bottom: 0.8em;
    font-family: PT Serif;
    @apply text-lg;
  }
}
</style>
