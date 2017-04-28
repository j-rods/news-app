
function testNewsItemShowHeadline() {
  var newsItem = new NewsItem(DemoData());
  newsItem.getHeadline();
  expect.toEqual(newsItem.showHeadline(), 'Theresa May lays bare ambition to capture Labour heartlands');
}

function testNewsItemShowSummary() {
  var newsItem = new NewsItem(DemoData());
  newsItem.getSummary = function() {
    newsItem._summary = DemoSummary();
  }
  newsItem.getSummary();
  // debugger;
  assert.isTrue(newsItem.showSummary().includes("Theresa May laid bare the Conservatives’ ambitions to capture some of Labour’s most historic seats in England in a speech on Thursday night, telling voters in Leeds to put aside their traditional allegiances and vote “in the national interest”."));
  }

testNewsItemShowHeadline();
testNewsItemShowSummary();
