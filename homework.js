const arr = [2, 5, 7, 9];

const minNumber = Math.min(...arr);
console.log(minNumber);

function createCounter(init) {
  let value = init;

  return {
    increment: function () {
      value++;
    },
    decrement: function () {
      value--;
    },
    getValue: function () {
      return value;
    },
  };
}

const counter = createCounter(5);

counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

function findElementByClass(root, className) {
  if (root.classList.contains(className)) {
    return root;
  }
  for (let i = 0; i < root.children.length; i++) {
    const found = findElementByClass(root.children[i], className);
    if (found) {
      return found;
    }
  }

//   root.children.forEach(element => {
//     const found = findElementByClass(element, className);
//     if (found) {
//       return found;
//     }
//   });

  return null; // Если элемент с таким классом не найден
}

const rootElement = document.querySelector('#adf');
console.log(rootElement);

const foundEl = findElementByClass(rootElement,'root');
console.log(foundEl);