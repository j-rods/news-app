(function(exports) {

  function NewsItem(apiData) {
    this.apiData = apiData;
    this._headline;
    this._summary;
  }

  NewsItem.prototype.getHeadline = function() {
    this._headline = this.apiData.response.content.webTitle;
  };

  NewsItem.prototype.showHeadline = function() {
    return this._headline;
  };

  NewsItem.prototype.getSummary = function() {
  };

  NewsItem.prototype.showSummary = function() {
    return this._summary.sentences;
  };

  exports.NewsItem = NewsItem;
})(this);

