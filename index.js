// newsController = new NewsController();
// newsController.renderHeadlines();
(function(exports) {
  exports.newsApp = new NewsController(new ListNews());
  // exports.newsApp.renderHeadlines();
})(this);