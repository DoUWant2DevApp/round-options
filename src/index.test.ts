import roundOptions, { type RoundOptionsConfig } from "./index"

const testArray: Array<[number | string, RoundOptionsConfig | undefined, number | string]> = [
  [2, undefined, "2"],
  [
    2,
    {
      minimumDecimals: 2,
    },
    "2.00",
  ],
  [
    2,
    {
      minimumDecimals: 2,
      maximumDecimals: 5,
    },
    "2.00",
  ],
  [
    2,
    {
      minimumDecimals: 2,
      maximumDecimals: 5,
      exactDecimals: 4,
    },
    "2.0000",
  ],
  [
    2.5698785,
    {
      minimumDecimals: 2,
      maximumDecimals: 5,
    },
    "2.56988",
  ],
  [
    2.5698725,
    {
      minimumDecimals: 2,
      maximumDecimals: 5,
    },
    "2.56987",
  ],
  [
    2.5698725,
    {
      minimumDecimals: 2,
      maximumDecimals: 5,
    },
    "2.56987",
  ],
  [
    //@ts-ignore for handling invalid numbers
    undefined,
    undefined,
    "",
  ],
  [
    2.5698725,
    {
      minimumDecimals: 2,
      maximumDecimals: 12,
    },
    "2.5698725",
  ],
  [
    2.5698725,
    {
      maximumDecimals: 12,
    },
    "2.5698725",
  ],
  [
    2.569872512121212121212,
    {
      maximumDecimals: 12,
    },
    "2.569872512121",
  ],
  [
    "2.2.2",
    {
      maximumDecimals: 12,
    },
    "",
  ],
]

const docsArray: Array<[number | string, RoundOptionsConfig | undefined, number | string]> = [
  [2, undefined, "2"],
  [2, { minimumDecimals: 4 }, "2.0000"],
  ["2.22", { minimumDecimals: 4 }, "2.2200"],
  [2.6666666, { minimumDecimals: 4 }, "2.6666666"],
  [2.222266, { maximumDecimals: 4 }, "2.2223"],
  [2.222266, { maximumDecimals: 8 }, "2.222266"],
  [2.2222, { exactDecimals: 7 }, "2.2222000"],
  [2.2222666, { exactDecimals: 4 }, "2.2223"],
  [2.22222, { minimumDecimals: 4, maximumDecimals: 6 }, "2.22222"],
  ["2.22222222", { minimumDecimals: 4, maximumDecimals: 6 }, "2.222222"],
  [2.22, { minimumDecimals: 4, maximumDecimals: 6 }, "2.2200"],
  [2.22266, { minimumDecimals: 2, maximumDecimals: 10, exactDecimals: 3 }, "2.223"],
  //@ts-ignore
  [false, undefined, ""],
  //@ts-ignore
  [true, undefined, ""],
  //@ts-ignore
  [undefined, undefined, ""],
  //@ts-ignore
  [{ someKey: 5 }, undefined, ""],
  //@ts-ignore
  [[5], undefined, ""],
  ["", undefined, ""],
  ["word", undefined, ""],
  [NaN, undefined, ""],
]

test.each([...testArray, ...docsArray])("roundToLength test", (value, config, output) => {
  //@ts-ignore for handling invalid numbers
  expect(roundOptions(value, config).toString()).toBe(output.toString())
})

// let str = ``
// docsArray.forEach((test) => {
//   const [value, config, output] = test

//   str =
//     str +
//     `roundOptions(${value}${
//       config
//         ? ", {" +
//           Object.keys(config)
//             .map((key, index) => {
//               return `${key}: ${
//                 // @ts-ignore
//                 typeof config[key] === "string" ? `"` + config[key] + `"` : config[key].toString()
//                 // @ts-ignore
//               }${index < Object.keys(config).length - 1 ? ", " : ""}`
//             })
//             .join("") +
//           "}"
//         : ""
//     }) // output: ${
//       typeof roundOptions(value, config) === "string"
//         ? `"` + roundOptions(value, config) + `"`
//         : roundOptions(value, config)
//     }\n`
// })
// console.log(str)
