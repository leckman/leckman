var cards = ['factual', 'patchwork', 'fade', 'purlpal', 'ab_initio', 'lingua'];

var leftColumn = '.col-left';
var rightColumn = '.col-right';

$(document).ready(function(){

  var added = 0;
  var getColumn = function() {
    added += 1;
    return added % 2 ? $(leftColumn) : $(rightColumn);
  }

  var getElement = function(cardName, callback, selector) {
    $.get(`/leckman/www/cards/${cardName}.html`, function(data, status, xhr) {
      callback($(data));
    });
  }

  var belongsOnPage = function(element) {
    var page = window.location.href.split('/').pop().split('.')[0];
    return page == 'index' || element.hasClass(page);
  }

  $("#sidebar").load('/leckman/www/partials/_sidebar.html .partial');

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    getElement(card, function(element, selector) {
      if (belongsOnPage(element)) {
        getColumn().append(element);
      }
    });
  }
});
