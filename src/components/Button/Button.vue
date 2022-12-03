<template>
  <component
    :is="tag"
    :class="[
      `relative inline-block h-auto cursor-pointer select-none appearance-none rounded-sm border-0
      font-semibold uppercase leading-none text-white transition-colors ease-out
      disabled:pointer-events-none`,
      sizeClass,
      variantClass,
      fullWidth && ['w-full'],
    ]"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import {
  SIZES,
  VARIANTS,
  TAGS,
  SIZE_MEDIUM,
  VARIANT_PRIMARY,
  TAG_BUTTON,
} from './constants';

export default {
  name: 'BaseButton',

  props: {
    size: {
      type: String,
      default: SIZE_MEDIUM,
      validator: (value) => SIZES.has(value),
    },

    variant: {
      type: String,
      default: VARIANT_PRIMARY,
      validator: (value) => VARIANTS.has(value),
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: TAGS.get(TAG_BUTTON),
      validator: (value) => TAGS.has(value),
    },
  },

  data() {
    return {};
  },

  computed: {
    sizeClass() {
      return SIZES.get(this.size);
    },

    variantClass() {
      return VARIANTS.get(this.variant);
    },
  },

  methods: {},
};
</script>
