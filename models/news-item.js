(function(exports) {

  function NewsItem(apiData) {
    this.apiData = apiData;
    this._headline;
    this._summary;
    this._thumbnail;
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

  NewsItem.prototype.getThumbnail = function() {
    this._thumbnail = this.apiData.response.content.fields.thumbnail;
  };

  NewsItem.prototype.showThumbnail = function() {
    return this._thumbnail;
  };

  exports.NewsItem = NewsItem;
})(this);

