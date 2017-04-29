(function(exports) {

  function NewsItem(apiData) {
    this.apiData = apiData;
    this.headline;
    this.summary;
    this.thumbnail;
  }

  NewsItem.prototype.getHeadline = function() {
    console.log(this.apiData.response.content.webTitle);
    return this.headline = this.apiData.response.content.webTitle;
  };

  NewsItem.prototype.showHeadline = function() {
    return this.headline;
  };

  NewsItem.prototype.getSummary = function() {
  };

  NewsItem.prototype.showSummary = function() {
    return this._summary.sentences;
  };

  NewsItem.prototype.getThumbnail = function() {
    return this._thumbnail = this.apiData.response.content.fields.thumbnail;
  };

  NewsItem.prototype.showThumbnail = function() {
    return this._thumbnail;
  };

  exports.NewsItem = NewsItem;
})(this);

