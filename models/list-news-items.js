(function(exports) {

  function ListNews() {
    this._newsItems = [];
  }

  ListNews.prototype.loadNews = function(apiData) {
    this._newsItems.push(newsItem = new NewsItem(apiData));
  }


  exports.ListNews = ListNews;
})(this);