document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const newListItem = document.createElement('li')
    newListItem.textContent = `${title}, ${author}, ${category}`
    resultBox = document.querySelector('#book-1')
  });


});
