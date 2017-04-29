// newsController = new NewsController();
// newsController.renderHeadlines();
(function(exports) {
  var list = new ListNews();


//where does realdata come from?????

  // list.loadNews(realdata)
  exports.newsApp = new NewsController(list);
  exports.newsApp.renderHeadlines();
})(this);