window.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  searchButton.onclick = searchBook;
})

async function searchBook() {
  const input = document.getElementById('search-input');
  const query = encodeURI(input.value);
  const uri = `/search?query=${query}`;
  window.location.href = uri;
}
