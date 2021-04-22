<template>
  <button :class="classes">
      {{ text }}
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: 'Button'
        },
        isPrimary: Boolean,
        isDanger: Boolean
    },
    computed: {
        classes() {
            return {
                'button': true,
                'is-primary': this.isPrimary,
                'is-danger': this.isDanger
            }
        }
    }
};
</script>

<style>

</style>