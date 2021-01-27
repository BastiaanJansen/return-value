# Return Value

The all on in one npm package for all your input = output needs.
This package simply returns whatever you pass into it.
Can be used as a stub for a function that should return the values passed into it.

We have 100% test coverage.
This way we can guarantee that this function behaves exactly as expected.

## Installation

```
npm install return-value
```

## Usage

```ts
import { returnValue } from "return-value";

returnValue("hello"); // returns "hello"
returnValue(2); // returns 2
returnValue<number[]>([1, 2, 3, 4]); // returns [1, 2, 3, 4]
returnValue(returnValue); // returns ValueFunction
returnValue<Function>(returnValue); // returns Function
returnValue("💩"); // returns "💩"
```
