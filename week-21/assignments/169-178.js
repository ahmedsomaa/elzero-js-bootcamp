// Assignment 2

let request = new XMLHttpRequest();
request.open('GET', 'articles.json', true);
request.send();
request.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status == 200) {
    let response = this.responseText;
    let data = JSON.parse(response);
    console.log(data);
    console.log('Data Loaded');
  }
};

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3 & 4
let xhr = new XMLHttpRequest();
xhr.open('GET', 'articles.json', true);
xhr.send();
xhr.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let response = this.responseText;
    let mainData = JSON.parse(response);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = 'All';
    }
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    // Assignment 4 part
    const dataDiv = document.createElement('div');
    dataDiv.id = 'data';
    for (let i = 0; i < mainData.length; i++) {
      dataDiv.appendChild(createArticleDiv(mainData[i]));
    }
    document.body.appendChild(dataDiv);
  }
};

// function to create a div element for each article
function createArticleDiv({ title, author, category, body }) {
  const articleDiv = document.createElement('div');
  const articleTitle = document.createElement('h2');
  articleTitle.textContent = title;
  const articleBody = document.createElement('p');
  articleBody.textContent = body;
  const articleAuthor = document.createElement('p');
  articleAuthor.textContent = `Author: ${author}`;
  const articleCategory = document.createElement('p');
  articleCategory.textContent = `Category: ${category}`;
  articleDiv.appendChild(articleTitle);
  articleDiv.appendChild(articleBody);
  articleDiv.appendChild(articleAuthor);
  articleDiv.appendChild(articleCategory);
  return articleDiv;
}
