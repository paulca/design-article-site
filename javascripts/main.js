window.onload = function(){ //load this when the page loads
  
  //set up swap variables
  var summary = document.getElementById('summary') 
  var long_summary = summary.innerHTML + ' <a href="#" onclick="swap_full_summary();return false;">...less</a>'
  var short_summary = summary.innerHTML.substr(0,100) + '...' + ' <a href="#" onclick="swap_full_summary();return false;">full details...</a>'
  var body = document.getElementById('view-page')

  //do the swap
  swap_full_summary = function(){
  if(summary.innerHTML == long_summary)
    {
      summary.innerHTML = short_summary
    }
    else
    {
      summary.innerHTML = long_summary
    }
  }
  summary.innerHTML = short_summary
}