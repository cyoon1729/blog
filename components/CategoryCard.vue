<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Title',
      required: true
    },
    description: {
      type: String,
      default: 'description',
      required: true
    }
  }
}
</script>

<template>
  <div
    class="min-w-md rounded overflow-hidden border-2 border-gray-200 shadow-lg text-center h-32 min-h-full bg-white hover:border-gray-400 hover:shadow"
  >
    <img class="w-full" :src="imagePath" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base mb-8">
        {{ description }}
      </p>
    </div>
  </div>
</template>
