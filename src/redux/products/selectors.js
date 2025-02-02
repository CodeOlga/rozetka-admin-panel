export const getProducts = (state) => state.products?.items || [];
export const isLoading = (state) => state.products?.loading ?? true;
