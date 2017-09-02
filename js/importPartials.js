$(document).ready(function(){
  var links = $('link[rel="import"]');
  for (var l = 0; l < links.length; l++) {
    var partial = links[l];
    var content = partial.import;
    var el = $(content).find('.partial').clone(true).get(0);
    var placeholder = $('#' + el.id);
    var placeholderClass = placeholder.attr('class');
    placeholder.replaceWith(el);
    $("#" + el.id).attr('class', placeholderClass);
  }
});
