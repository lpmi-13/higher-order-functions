
export function findAndReplace(original, replacement) {
  return function(source) {
    return source.replace(original, replacement);
  };
};

export function applyNTimes(num, fn) {
  return function(numberOfApplications) {
    return fn(num) * numberOfApplications;
  }
}

export function greaterThan(n) {
  return function(m) {
    return m > n;
  }
}

export function manualFilter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i])
    }
  }
  return newArray;
}

export function manualMap(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

export function manualReduce(array, combineFunction, startValue) {
  let current = startValue;
  for (let element of array) {
    current = combineFunction(current, element);
  }
  return current;
}

export function multiplyByNumber(firstNumber) {
  return function(secondNumber) {
    return firstNumber * secondNumber;
  }
}

export function printIfEven(evenFunc, num) {
  return evenFunc(num);
}

export function quadrupleAdd(firstNumber) {
  return function(secondNumber) {
    return function(thirdNumber) {
      return function(fourthNumber) {
        return firstNumber + secondNumber + thirdNumber + fourthNumber;
      }
    }
  }
}

export function useTheCallback(func) {
  return function(...args) {
    return func(...args)
  }
}

