describe("ProductService -> getProducts()", () => {
  test("get all products", async () => {});
});

describe("ProductService -> getProductById()", () => {
  test("when provided id correct, return specific product", async () => {});

  test("when product with provided id doesn't exist, return error message", async () => {});

  test("when provided id has incorrect syntax, return error message", async () => {});
});

describe("ProductService -> createProduct()", () => {
  test("when provided body data correct, return new product", async () => {});

  test("when provided product name incorrect, return error message", async () => {});

  test("when provided product price incorrect, return error message", async () => {});
});

describe("ProductService -> updateProduct()", () => {
  test("when provided id and body data correct, return updated product", async () => {});

  test("when product with provided id doesn't exist, return error message", async () => {});

  test("when provided id has incorrect syntax, return error message", async () => {});

  test("when provided body data correct, return new product", async () => {});

  test("when provided product name incorrect, return error message", async () => {});

  test("when provided product price incorrect, return error message", async () => {});
});

describe("ProductService -> deleteProduct()", () => {
  test("when provided id correct, return 204 status", async () => {});

  test("when product with provided id doesn't exist, return error message", async () => {});

  test("when provided id has incorrect syntax, return error message", async () => {});
});
