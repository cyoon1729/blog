<script>
import BlogPostList from '~/components/BlogPostList'
import SearchBar from '~/components/SearchBar'

export default {
  components: {
    BlogPostList,
    SearchBar
  },
  async asyncData({ $content }) {
    const posts = await $content('rl_newsletter').fetch()

    return {
      posts
    }
  }
}
</script>

<template>
  <div class="content text-center w-full">
    <div class="w-full ">
      <h1>RL Newsletters</h1>
      <p>Get to know what's up in Reinforcement Learning research!</p>
      <SearchBar />
      <BlogPostList :list="posts" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
.content {
  width: 100%;
}

h1 {
  font-family: $ff-sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.299664px;
  color: #2599e2;
  margin-top: 0.8em;
  @apply mb-2;

  &:nth-child(n + 2) {
    @apply mt-8;
  }
}
</style>
