export const setLocalStorage = (name, value) => localStorage.setItem(name, value);
export const getLocalStorage = (name) => localStorage.getItem(name);

export const convertToCurrency = (money) => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'NGN'}).format(money)

export const convertToPercent = (value1, value2) => {
  const division = value1/value2;
  return division * 100
}