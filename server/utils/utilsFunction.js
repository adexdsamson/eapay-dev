module.exports = {
  checkBody: function (value) {
    if (value === undefined || value.length === 0) return true;
  },
  checkFile: function(file){
    if(file === undefined) return true
  }
};
