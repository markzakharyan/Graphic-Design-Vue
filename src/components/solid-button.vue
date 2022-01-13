<template>
  <div class="solid-button-container">
    <button class="solid-button-button button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'SolidButton',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.solid-button-container {
  display: flex;
  position: relative;
}
.solid-button-button {
  color: var(--dl-color-gray-white);
  border: none;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-doubleunit);
  border-radius: 50px;
  padding-right: var(--dl-space-space-doubleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: #8f00ff;
}
</style>
