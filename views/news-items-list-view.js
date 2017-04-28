(function(exports) {

  function NewsListView(newsList) {
    this.newsList = newsList;
  }

   NewsListView.prototype.viewHeadlines = function() {
    var headlineText = [];
    for (i = 0; i < this.newsList.length; i++){
      this.newsList[i].getHeadline();
      headlineText.push(this.newsList[i].showHeadline());
    }
    return '<ul><li><div>' + headlineText.join('</div></li><li><div>') + '</div></li></ul>' ;
  };

  exports.NewsListView = NewsListView;
})(this);
