export const SIZE_MEDIUM = 'medium';
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';
export const SIZE_FULL = 'full';

export const VARIANT_PRIMARY = 'primary';
export const VARIANT_SECONDARY = 'secondary';
export const VARIANT_TERTIARY = 'tertiary';
export const VARIANT_LINK = 'link';

export const TAG_BUTTON = 'button';
export const TAG_A = 'a';
export const TAG_SPAN = 'span';
export const TAG_DIV = 'div';
export const TAG_LABEL = 'label';

export const SIZES = new Map()
  .set(SIZE_MEDIUM, {
    name: SIZE_MEDIUM,
    classes: 'min-w-[150px] py-4 px-5 text-sm',
  })
  .set(SIZE_SMALL, {
    name: SIZE_SMALL,
    classes: 'min-w-auto py-3 px-4 text-xs',
  })
  .set(SIZE_LARGE, {
    name: SIZE_LARGE,
    classes: 'pt-[17px] px-[30px] pb-[14px] leading-tight text-m',
  });
export const VARIANTS = new Map()
  .set(VARIANT_PRIMARY, {
    name: VARIANT_PRIMARY,
    classes: 'bg-pink-600 hover:bg-pink-400 active:bg-pink-900 disabled:bg-gray-600',
  })
  .set(VARIANT_SECONDARY, {
    name: VARIANT_SECONDARY,
    classes: 'bg-blue-600 hover:bg-blue-400 active:bg-blue-900 disabled:bg-gray-600',
  })
  .set(VARIANT_TERTIARY, {
    name: VARIANT_TERTIARY,
    classes:
      'text-pink bg-transparent border-2 border-gray-500 hover:text-pink hover:bg-slate-400 disabled:bg-gray-600',
  })
  .set(VARIANT_LINK, {
    name: VARIANT_LINK,
    classes:
      'text-xs text-pink-500 underline bg-transparent disabled:text-gray-600 disabled:bg-color-transparent',
  });

export const TAGS = new Map()
  .set(TAG_BUTTON, TAG_BUTTON)
  .set(TAG_A, TAG_A)
  .set(TAG_SPAN, TAG_SPAN)
  .set(TAG_DIV, TAG_DIV)
  .set(TAG_LABEL, TAG_LABEL);
