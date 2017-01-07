var getCategory = function(list, post){
  for (var index in list){
    if(list[index]._id === post.categoryId){
      return list[index].category;
    }
  }
};
exports.getCategory = getCategory;