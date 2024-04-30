// Get the input field and list
var input = document.getElementById('searchInput');
var list = document.getElementById('list');
var items = list.getElementsByClassName('item');

// Add event listener
input.addEventListener('input', filter);

// Filter function
function filter() {
  var filterValue = input.value.toLowerCase(); // Get filter value and convert to lowercase
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var text = item.textContent.toLowerCase(); // Get text content of item and convert to lowercase
    if (text.indexOf(filterValue) > -1) { // Check if text contains filter value
      item.classList.remove('hidden'); // If yes, show item
    } else {
      item.classList.add('hidden'); // If not, hide item
    }
  }
}
