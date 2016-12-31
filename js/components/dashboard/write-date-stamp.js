var dateStamp = function(){

  var date = new Date();
  var blogDate = date.getDate();

  var year = new Date();
  var blogYear = year.getFullYear();
  
  var month = new Date();
  var blogMonth = month.getMonth();
  var months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];

  return {"month": months[blogMonth], "date": blogDate, "year": blogYear}
};

module.exports = dateStamp;