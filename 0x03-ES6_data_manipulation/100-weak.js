export const weakMap = new WeakMap();

/**
 * Throttles a fake API call using a WeakwebMap
 * @param {Object} endpoint - object with protocol and URIs
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else if (weakMap.get(endpoint) >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    const timesAPIQueried = weakMap.get(endpoint);
    weakMap.set(endpoint, timesAPIQueried + 1);
  }
}
