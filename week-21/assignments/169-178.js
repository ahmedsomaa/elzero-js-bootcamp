// Assignment 2
let request = new XMLHttpRequest();
request.open('GET', 'articles.json', true);
request.send();
request.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status == 200) {
    let response = this.responseText;
    let data = JSON.stringify(response);
    console.log(data);
    console.log('Data Loaded');
  }
};
