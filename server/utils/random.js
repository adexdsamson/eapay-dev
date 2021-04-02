module.exports = () => {
  let nums = "";
  for (let i = 0; i < 6; i++) {
    let num = Math.ceil(Math.random() * 9);
    nums += num + "";
  }
  return nums;
};
