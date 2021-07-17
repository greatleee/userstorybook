window.addEventListener('DOMContentLoaded', async () => {
  const query = getQueryStringObject();
  const searchInput = document.getElementById('search-input');
  searchInput.value = query.query;

  let page = 1;
  const data = await searchBookFromDaum(page++);
  renderBookList(data);
  
  const rootElement = document.getElementById('search-index');
  let lock = false;
  document.onscroll = async () => {
    if (window.innerHeight + window.screenY >= rootElement.offsetHeight && !lock) {
      lock = true;
      setTimeout(() => {
        lock = false;
      }, 1000);
      const data = await searchBookFromDaum(page++);
      renderBookList(data);
    }
  };
})

async function searchBookFromDaum(page = 1) {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value;
  const uri = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${page}`;
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: 'KakaoAK bd732dcd1a44a5c4389521d0f15fe366',
    },
  });
  const data = await res.json();
  return data;
}

function renderBookListPagination(page, query) {
  if (page === NaN || page < 1) {
    alert('잘 못된 페이지입니다.');
    window.history.back();
    return;
  }
  page = page - 1;
  const numIndex = page % 7;
  const startNum = Math.floor(page / 7) * 7 + 1;
  const pageNumElements = document.querySelectorAll('.pagination > .page-num > a');
  pageNumElements.forEach((element, index) => {
    const page = startNum + index;
    element.innerText = page;
    element.setAttribute('href', `/search?query=${query}&page=${page}`);
    
    if (index === numIndex) {
      element.parentElement.classList.add('active');
    }
  });
}

async function renderBookList(data) {
  const rootElement = document.getElementById('search-index');

  data.documents.forEach((book) => {
    const a = document.createElement('a');
    a.className = 'list-group-item list-group-item-action py-3 lh-tight';
    const div = document.createElement('div');
    div.innerText = book.title;
    rootElement.append(div);
  });
}
