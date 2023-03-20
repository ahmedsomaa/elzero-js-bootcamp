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

// Assignment 3
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
  }
};
