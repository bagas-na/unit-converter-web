// Base measurements in milimeters
const LENGTHS = [
    {
        name: 'inch',
        value: 25.4,
        symbol: 'in',
    },
    {
        name: 'foot',
        value: 25.4 * 12,
        symbol: 'ft',
    },
    {
        name: 'yard',
        value: 25.4 * 12 * 3,
        symbol: 'ft',
    },
    {
        name: 'mile',
        value: 25.4 * 12 * 3 * 1760,
        symbol: 'ft',
    },
    {
        name: 'milimeter',
        value: 1,
        symbol: 'ft',
    },
    {
        name: 'centimeter',
        value: 10,
        symbol: 'ft',
    },
    {
        name: 'meter',
        value: 100,
        symbol: 'cm',
    },
    {
        name: 'kilometer',
        value: 100 * 1000,
        symbol: 'cm',
    },
]

// Base measurments in ounces
const MASS = [
    {
        name: "ounce",
        value: 1,
        symbol: "oz",
    },
    {
        name: "pound",
        value: 16,
        symbol: "lb",
    },
    {
        name: "stone",
        value: 14 * 16,
        symbol: "St",
    },
    {
        name: "us ton",
        value: 2000 * 16,
        symbol: "tn",
    },
    {
        name: "miligram",
        value: 1 / (28349.5),
        symbol: "mg",
    },
    {
        name: "gram",
        value: 0.035274,
        symbol: "g",
    },
    {
        name: "kilogram",
        value: 35.274,
        symbol: "kg",
    },
    {
        name: "tonne",
        value: 35.274 * 1000,
        symbol: "mt",
    },
]

const TEMPERATURE = [
    {
        name: "celsius",
        symbol: "°C",
    },
    {
        name: "fahrenheit",
        symbol: "°F",
    },
    {
        name: "kelvin",
        symbol: " K",
    },
]