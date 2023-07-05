const addAndMultiply = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return [sum, product];
};

const [firstSum, firstProduct] = addAndMultiply(10, 5);
console.log(firstSum);
console.log(firstProduct);
