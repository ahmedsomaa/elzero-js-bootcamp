// Assignment 1
let articles = [
  {
    userId: 10,
    title: 'Article Title Number 1',
    description: 'Article Description Number 1'
  },
  {
    userId: 5,
    title: 'Article Title Number 2',
    description: 'Article Description Number 2'
  },
  {
    userId: 5,
    title: 'Article Title Number 3',
    description: 'Article Description Number 3'
  },
  {
    userId: 5,
    title: 'Article Title Number 4',
    description: 'Article Description Number 4'
  },
  {
    userId: 5,
    title: 'Article Title Number 5',
    description: 'Article Description Number 5'
  },
  {
    userId: 5,
    title: 'Article Title Number 6',
    description: 'Article Description Number 6'
  },
  {
    userId: 25,
    title: 'Article Title Number 7',
    description: 'Article Description Number 7'
  },
  {
    userId: 25,
    title: 'Article Title Number 8',
    description: 'Article Description Number 8'
  },
  {
    userId: 15,
    title: 'Article Title Number 9',
    description: 'Article Description Number 9'
  },
  {
    userId: 15,
    title: 'Article Title Number 10',
    description: 'Article Description Number 10'
  }
];

const articlesPromise = new Promise((resolve, _reject) => {
  resolve(articles);
});

articlesPromise
  .then((resolvedArticles) => {
    resolvedArticles.length = 5;
    return resolvedArticles;
  })
  .then((resolved) => {
    resolved.forEach((article) =>
      document.write(`<div>
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    </div>`)
    );
  });

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
async function fetchArticles() {
  const promise = await fetch('./articles.json');
  const result = await promise.json();
  result.length = 5;
  result.forEach((article) =>
    document.write(`<div>
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    </div>`)
  );
}

fetchArticles();
