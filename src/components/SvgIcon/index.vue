<template>
  <svg
    :class="[selfClasses, 'svg-icon']"
    aria-hidden="true"
  >
    <use :xlink:href="iconHref" />
  </svg>
</template>

<script>


/**
* @see https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
 */

export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconHref() {
      return `#icon-${this.iconName}`
    },
    selfClasses() {
      return `icon-${this.iconName}`
    },
  },
  created() {

    // svg debugger
    if (process.env.NODE_ENV === 'development') {
      if (!this.$svgList.includes(this.iconName)) {
        /* eslint no-console: ["warn", { allow: ["warn"] }] */
        console.warn(`[SvgIcon] plase add the '${this.iconName}.svg' file at path '@/icons/svg'`)
      }
      if (this.iconName === 'default-menu') {
        /* eslint no-console: ["warn", { allow: ["warn"] }] */
        console.warn(`[SvgIcon] you used 'default-menu.svg' place chenge!`)
      }
    }
  },
}
</script>
