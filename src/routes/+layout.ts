import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  async function getCount() {
    // Doing some async work
    return 4
  }

  return {
    count: getCount()
  };
};
