// Shopify configuration and API utilities

export const shopifyConfig = {
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN || '',
  shopDomain: process.env.SHOPIFY_SHOP_DOMAIN || '',
  apiVersion: '2024-01',
};

// Shopify Admin API endpoint
export const getAdminApiUrl = () => {
  return `https://${shopifyConfig.shopDomain}/admin/api/${shopifyConfig.apiVersion}`;
};

// Shopify REST API endpoints
export const getProductsUrl = () => {
  return `${getAdminApiUrl()}/products.json`;
};

export const getProductUrl = (productId: string) => {
  return `${getAdminApiUrl()}/products/${productId}.json`;
};

export const getCheckoutUrl = () => {
  return `${getAdminApiUrl()}/checkouts.json`;
};
