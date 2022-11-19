const mainScript = document.scripts[0];

function makeHeader() {
  // header element
  let header = document.createElement('header');
  header.className = 'website-head';
  header.style.display = 'flex';
  header.style.padding = '20px';
  header.style.backgroundColor = 'rgb(255, 255, 255)';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';

  // header child elements
  const logo = makeHeaderLogo();
  const menu = makeHeaderMenu();

  // append children
  header.appendChild(logo);
  header.appendChild(menu);
  return header;
}

function makeHeaderLogo() {
  let logo = document.createElement('div');
  logo.className = 'logo';
  logo.title = 'Website Logo';
  logo.textContent = 'Elzero';
  logo.style = 'font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;';
  return logo;
}

function makeHeaderMenu() {
  let menu = document.createElement('ul');
  menu.className = 'menu';
  menu.style = 'padding: 0px; margin: 0px; display: flex; list-style: none;';
  ['Home', 'About', 'Service', 'Contact'].forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.style.margin = '5px';
    menu.appendChild(listItem);
  });
  return menu;
}

function makeContent() {
  let main = document.createElement('div');
  main.className = 'content';
  main.style.display = 'flex';
  main.style.padding = '20px';
  main.style.flexWrap = 'wrap';
  main.style.justifyContent = 'center';
  main.style.gap = '20px';
  main.style.minHeight = 'calc(100vh - 142px)';
  main.style.boxSizing = 'border-box';

  Array.from({ length: 15 }, (_, i) => i + 1).forEach((item) => {
    const productId = document.createElement('span');
    productId.textContent = item;
    productId.style =
      'font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px';
    const product = makeProduct();
    product.appendChild(productId);
    product.append('Product');
    main.appendChild(product);
  });

  return main;
}

function makeProduct() {
  let product = document.createElement('div');
  product.className = 'product';
  product.style.padding = '20px';
  product.style.backgroundColor = 'rgb(255, 255, 255)';
  product.style.border = '1px solid rgb(221, 221, 221)';
  product.style.width = 'calc((100% - 40px) / 3)';
  product.style.boxSizing = 'border-box';
  product.style.textAlign = 'center';
  product.style.color = 'rgb(136, 136, 136)';
  product.style.borderRadius = '6px';
  return product;
}

function makeFooter() {
  let footer = document.createElement('footer');
  footer.className = 'footer';
  footer.style.backgroundColor = 'rgb(35, 169, 110)';
  footer.style.fontSize = '26px';
  footer.style.textAlign = 'center';
  footer.style.padding = '20px';
  footer.style.color = 'rgb(255, 255, 255)';
  footer.textContent = 'Copyright 2021';
  return footer;
}

function makeDOM() {
  return [makeHeader(), makeContent(), makeFooter()];
}

document.body.style = 'margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;';

mainScript.before(...makeDOM());
