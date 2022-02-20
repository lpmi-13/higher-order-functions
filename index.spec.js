import jest from 'jest-mock';
import {
    applyNTimes,
    findAndReplace,
    greaterThan,
    manualFilter,
    manualMap,
    manualReduce,
    multiplyByNumber,
    printIfEven,
    quadrupleAdd,
    useTheCallback,
} from './index';

describe('applyNTimes', () => {
  test('apples the given function to the original number the same number of times as the second functions argument', () => {
    const originalNumber = 5;
    const functionToApply = num => num * 2;
    const numberOfTimesToApply = 3;
    const expected = 30;
    const result = applyNTimes(5, functionToApply)(numberOfTimesToApply);

    expect(result).toBe(expected);
  });
});

describe('findAndReplace', () => {
  test('takes a regex and replacement and calls that function on a string', () => {
    const regex = /somebody has a case of the mondays/ig;
    const replacement = 'TGIF!';
    const sourceText = 'uh oh...looks like somebody has a case of the mondays';
    const expected = 'uh oh...looks like TGIF!';
    const result = findAndReplace(regex, replacement)(sourceText);

    expect(result).toBe(expected);
  })
})

describe('greaterThan', () => {
  test('returns true if the second number is bigger than the first number', () => {
    const firstNumber = 2;
    const secondNumber = 3;
    const expected = secondNumber > firstNumber;
    const result = greaterThan(firstNumber)(secondNumber);

    expect(result).toEqual(expected);
  });

  test('returns false if the second number is less than the first number', () => {
    const firstNumber = 20;
    const secondNumber = 10;
    const expected = secondNumber > firstNumber;
    const result = greaterThan(firstNumber)(secondNumber);

    expect(result).toEqual(expected);
  });
});

describe('manualFilter', () => {
  test('filters by the supplied function', () => {
    const originalArray = ['morning', 'noon', 'night'];
    const filterFunction = word => word.toLowerCase().startsWith('n');
    const expected = ['noon', 'night'];
    const result = manualFilter(originalArray, filterFunction);

    expect(result).toStrictEqual(expected);
  });
});

describe('manualMap', () => {
  test('calls the callback on each of the array items', () => {
    const arrayItems = [1,2,3,4,5];
    const callback = jest.fn();
    manualMap(arrayItems, callback);

    expect(callback.mock.calls.length).toBe(arrayItems.length);
  });
});

describe('manualReduce', () => {
  test('uses a combine function to produce a single value from the array', () => {
    const originalArray = [1,2,3,4,5,6,7,8,9];
    const combineFunction = (firstNumber, secondNumber) => firstNumber + secondNumber;
    const startValue = 0;
    const expected = 45;
    const result = manualReduce(originalArray, combineFunction, startValue);

    expect(result).toBe(expected);
  });

  test('calls the combine function for every item in the array', () => {
    const originalArray = [1,2,3,4,5,6,7,8,9];
    const combineFunction = jest.fn();
    const startValue = 0;
    const expected = 45;
    manualReduce(originalArray, combineFunction, startValue);

    expect(combineFunction.mock.calls.length).toBe(originalArray.length);
  });
});

describe('multiplyByNumber', () => {
  test('returns the product of the first function and second function', () => {
    const firstNumber = 5;
    const secondNumber = 10;
    const expected = firstNumber * secondNumber;
    const result = multiplyByNumber(firstNumber)(secondNumber);

    expect(result).toEqual(expected);
  });

  test('returns zero if one of the arguments is zero', () => {
    const firstNumber = 0;
    const secondNumber = 12;
    const expected = firstNumber * secondNumber;
    const result = multiplyByNumber(firstNumber)(secondNumber);

    expect(result).toEqual(expected);
  });
});

describe('printIfEven', () => {
  test('uses a function argument to determine if an argument is even', () => {
    const isEven = (n) => n % 2 == 0;
    const value = 2;
    const expected = isEven(value);
    const result = printIfEven(isEven, value);

    expect(result).toBe(expected);
  });
});

describe('quadrupleAdd', () => {
  test('adds all four function arguments together', () => {
    const firstNumber = 10;
    const secondNumber = 20;
    const thirdNumber = 30;
    const fourthNumber = 40;
    const expected = firstNumber + secondNumber + thirdNumber + fourthNumber;
    const result = quadrupleAdd(firstNumber)(secondNumber)(thirdNumber)(fourthNumber);

    expect(result).toBe(expected);
  });
});

describe('useTheCallback', () => {
  test('uses the callback that gets passed in', () => {
    const callback = jest.fn();
    const args = [1,2,3];
    useTheCallback(callback)(args);

    expect(callback.mock.calls.length).toBe(1);
  });

  test('calls the callback with the args that get passed in', () => {
    const callback = jest.fn();
    const args = [1,2,3];
    useTheCallback(callback)(args);

    expect(callback.mock.calls[0][0]).toStrictEqual([1,2,3]);
  });
});
