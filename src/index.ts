export type RoundOptionsConfig = {
  minimumDecimals?: number
  maximumDecimals?: number
  exactDecimals?: number
}

export default function roundOptions(
  num: number | string,
  config: RoundOptionsConfig = {},
): string {
  if (!["string", "number"].includes(typeof num) || num === "") {
    return ""
  }
  num = Number(num)
  // Destructure with default values
  const { minimumDecimals = 0, maximumDecimals = Infinity, exactDecimals } = config

  // Check for valid finite number
  if (typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return ""
  }

  const numAsString = num.toString()
  const decimalPart = numAsString.includes(".") ? numAsString.split(".")[1] : ""
  const numberOfDecimalsInNumber = decimalPart.length

  let numberOfDecimalsToRound =
    exactDecimals ?? Math.min(Math.max(numberOfDecimalsInNumber, minimumDecimals), maximumDecimals)

  // Round the number to the determined length of decimals
  return num.toFixed(numberOfDecimalsToRound)
}
