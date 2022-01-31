const camelCase = function (input) {
  newInput = input.split("");
  for (let a = 0; a < newInput.length; a++) {
    if (newInput[a] === " ") {
      let newUpper = "";
      newUpper = newInput[a + 1].toUpperCase();
      newInput.splice(a, 2, newUpper);
    }
  }
  return newInput.join("");
};

const pascalCase = (input) => {
  const lowerCamel = camelCase(input);
  return lowerCamel.charAt(0).toUpperCase() + lowerCamel.slice(1);
};

const snakeCase = (input) => {
  const snake = input.split("").map((letter) => {
    if (letter === " ") {
      letter = "_";
    }
    return letter;
  });
  return snake.join("");
};

const kebabCase = (input) => {
  const kebab = input.split("").map((letter) => {
    if (letter === " ") {
      letter = "-";
    }
    return letter;
  });
  return kebab.join("");
};

const titleCase = (input) => {
  let title = input.charAt(0).toUpperCase();
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === " ") {
      title = title + input.charAt(i + 1).toUpperCase();
    } else {
      title += input[i + 1];
    }
  }
  return title;
};

const vowelCase = (input) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const mapped = input.split("").map((letter) => {
    if (vowels.includes(letter)) {
      letter = letter.toUpperCase();
    }
    return letter;
  });
  return mapped.join("");
};

const consonantCase = (input) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const mapped = input.split("").map((letter) => {
    if (!vowels.includes(letter)) {
      letter = letter.toUpperCase();
    }
    return letter;
  });
  return mapped.join("");
};

const makeCase = (input, style) => {
  const precedence = {
    first: ["camel", "pascal", "snake", "kebab", "title"],
    second: ["vowel, consonant"],
    third: ["upper", "lower"],
  };
  let order = { first: [], second: [], third: [] };
  //checking and converting a string to an array
  Array.isArray(style) === true ? (style = style) : (style = [style]);
  for (let item of style) {
    if (precedence.first.includes(item)) {
      order["first"].push(item);
    } else if (precedence.second.includes(item)) {
      order["second"].push(item);
    } else if (precedence.third.includes(item)) {
      order["third"].push(item);
    }
  }
  for (let item in order) {
    order[item].forEach(arrItem => {
      switch(arrItem){
        case 'camel':
          input = camelCase(input);
          break;
        case 'pascal':
          input = pascalCase(input);
          break;
        case 'snake':
          input = snakeCase(input);
          break;
        case 'kebab':
          input = kebabCase(input);
          break;
        case 'title':
          input = titleCase(input);
          break;
        case 'vowel':
          input = vowelCase(input);
          break;
        case 'consonant':
          input = consonantCase(input);
          break;
        case 'upper':
          input = input.toUpperCase();
          break;
        case 'lower':
          input = input.toLowerCase();
          break;
        default:
          input = input;
      }
    })
  }
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
