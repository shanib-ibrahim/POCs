const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./module/replaceTemplate");
const { default: slugify } = require("slugify");

const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const productTemplate = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const cardTemplate = fs.readFileSync(
  `${__dirname}/templates/card.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const slug = dataObject.map((el) =>
  slugify(el.productName, {
    replacement: "-",
    lower: true,
  })
);

console.log(slug);

const server = http.createServer((req, res) => {
  const { query, pathname: pathName } = url.parse(req.url, true);

  //Overview Page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const cardsHtml = dataObject
      .map((element) => replaceTemplate(cardTemplate, element))
      .join("");
    const output = overview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  }
  // Prodcut Page
  else if (pathName === "/product") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const product = dataObject[query.id];
    const output = replaceTemplate(productTemplate, product);
    res.end(output);
  }
  // API
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
  //Not Found Page
  else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to requests on port 3000");
});
