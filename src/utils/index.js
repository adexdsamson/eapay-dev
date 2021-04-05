export const setLocalStorage = (name, value) => localStorage.setItem(name, value);
export const getLocalStorage = (name) => localStorage.getItem(name);

export const convertToCurrency = (money) => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'NGN'}).format(money)


/**
 * 
 * Calculates in percent, the change between two number or value
 * 
 * @param {*} value1 The value that change
 * @param {*} value2 The initial value
 * @returns 
 */

export const getPercent = (value1, value2) => {
  let changeValue = value2 - value1;
  return ((changeValue/ value2) * 100).toFixed(0)
}

