# TODO

- check TODOs
- remove commented out code

```javascript
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
