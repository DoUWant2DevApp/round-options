# round-options

round-options is a package that lets you round numbers to an exact, minimum, or maximum number of decimal places.

```
npm i round-options
```

```javascript
import roundOptions from "round-options"

roundOptions(2) // output: "2"
roundOptions(2, { minimumDecimals: 4 }) // output: "2.0000"
roundOptions(2.22, { minimumDecimals: 4 }) // output: "2.2200"
roundOptions(2.6666666, { minimumDecimals: 4 }) // output: "2.6666666"
roundOptions(2.222266, { maxDecimals: 4 }) // output: "2.2223"
roundOptions(2.222266, { maxDecimals: 8 }) // output: "2.222266"
roundOptions(2.2222, { exactDecimals: 7 }) // output: "2.2222000"
roundOptions(2.2222666, { exactDecimals: 4 }) // output: "2.2223"
roundOptions(2.22222, { minimumDecimals: 4, maxDecimals: 6 }) // output: "2.22222"
roundOptions(2.22222222, { minimumDecimals: 4, maxDecimals: 6 }) // output: "2.222222"
roundOptions(2.22, { minimumDecimals: 4, maxDecimals: 6 }) // output: "2.2200"
roundOptions(2.22266, { minimumDecimals: 2, maxDecimals: 10, exactDecimals: 3 }) // output: "2.223"
roundOptions(false) // output: ""
roundOptions(true) // output: ""
roundOptions(undefined) // output: ""
roundOptions({ someKey: 5 }) // output: ""
roundOptions([5]) // output: ""
roundOptions("") // output: ""
roundOptions(word) // output: ""
roundOptions(NaN) // output: ""
```

## round-options parameters

The roundOptions function takes one required parameter and one optional parameter. It returns a string representation of a number.

A number or a string of a number is required as the first parameter in the roundOptions function. If another value is passed, the function will return an empty string.

The optional second parameter a `config` object with options for specifying `minimumDecimals`, `maximumDecimals`, and/or `exactDecimals`.

## Motivation

This simple package was initially created for and is maintained by [GameSensConverter](https://gamesensconverter.com/).

The motivation for this package was to make it easy to round numbers with a large number of decimal places without needing to add unnecessary trailing zeros for numbers with fewer decimal places.
