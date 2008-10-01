$(function() {
  $('div#details p').truncate(50,{
    chars: /\s/,
    trail: [ " ( <a href='#' class='truncate_show'>full details</a>...)", " (...<a href='#' class='truncate_hide'>less</a> )" ]
    })
})