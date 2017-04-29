(function(exports) {

  function ListNews() {
    this.newsItems = [];
  }

  ListNews.prototype.loadNews = function(apiData) {
    this.newsItems.push(newsItem = new NewsItem(apiData));console.log(this.newsItems)
  }

  exports.ListNews = ListNews;
})(this);