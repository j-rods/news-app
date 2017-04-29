(function(exports) {

  function NewsListView(newsList){
    this.newsList = newsList;console.log(this.newsList);
  }

   NewsListView.prototype.viewHeadlines = function() {
    console.log(this.newsList);
    var headlineText = [];
    for (var i = 0; i < this.newsList.newsItems.length; i++){
      headlineText.push(this.newsList.newsItems[i].getHeadline());
    }
    console.log(this.newsList.newsItems.length);
    return '<ul><li><div>' + headlineText.join('</div></li><li><div>') + '</div></li></ul>' ;console.log(headlineText);
  };

  exports.NewsListView = NewsListView;
})(this);
