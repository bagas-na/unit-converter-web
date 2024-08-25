async function loadForm(path) {
    try {
        const formWrapper = document.getElementById('form-wrapper');

        const data = await fetch(path);
        const formHTML = await data.text();

        formWrapper.innerHTML = formHTML;
    } catch (e) {
        throw new Error(`Cannot get file, error: ${e}`);
    }
}

async function changeUnitType(type) {
    activeType = type;

    // Update styles
    document.querySelectorAll('#unit-types>li')
        .forEach(item => {
            if (item.dataset.type === type) {
                item.className = "text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
            } else {
                item.className = "hover:text-blue-700"
            }
        });

    // Load the selected form
    loadForm(`component/${type}.html`);
}
function convertLength(inputValue, inputUnitName, outputUnitName) {
    const inputUnit = LENGTHS.find(unit => unit.name === inputUnitName);
    const outputUnit = LENGTHS.find(unit => unit.name === outputUnitName);

    const outputValue = inputValue * inputUnit.value / outputUnit.value;

    return [outputValue, inputUnit, outputUnit]
}

function convertMass(inputValue, inputUnitName, outputUnitName) {
    const inputUnit = MASS.find(unit => unit.name === inputUnitName);
    const outputUnit = MASS.find(unit => unit.name === outputUnitName);

    const outputValue = inputValue * inputUnit.value / outputUnit.value;

    return [outputValue, inputUnit, outputUnit]
}

function convertTemperature(inputValue, inputUnitName, outputUnitName) {
    const inputUnit = TEMPERATURE.find(unit => unit.name === inputUnitName);
    const outputUnit = TEMPERATURE.find(unit => unit.name === outputUnitName);

    let tempValue = Number(inputValue);

    // Convert whatever temperature into celsius first
    switch (inputUnitName) {
        case 'celsius':
            // do nothing
            break;
        case 'fahrenheit':
            tempValue = (tempValue - 32) * 5 / 9;
            break;
        case 'kelvin':
            tempValue -= 273.15
            break;
    }
    // Convert celsius into the desired output unit
    switch (outputUnitName) {
        case 'celsius':
            // do nothing
            break;
        case 'fahrenheit':
            tempValue = (tempValue * 9 / 5) + 32;
            break;
        case 'kelvin':
            tempValue -= 273.15
            break;
    }
    const outputValue = tempValue;

    return [outputValue, inputUnit, outputUnit]
}

async function handleConversion() {
    const inputValue = document.getElementById('input-value').value;
    const inputUnitName = document.getElementById('input-unit').value;
    const outputUnitName = document.getElementById('output-unit').value;

    let inputUnit
    let outputUnit
    let outputValue

    switch (activeType) {
        case 'length':
            [outputValue, inputUnit, outputUnit] = convertLength(inputValue, inputUnitName, outputUnitName);
            break;
        case 'mass':
            [outputValue, inputUnit, outputUnit] = convertMass(inputValue, inputUnitName, outputUnitName);
            break;
        case 'temperature':
            [outputValue, inputUnit, outputUnit] = convertTemperature(inputValue, inputUnitName, outputUnitName);
            break;
        default:
            throw new Error('Invalid unit type');
    }

    await loadForm('component/result.html')
    document.getElementById('input-value').textContent = Number(inputValue).toFixed(4);
    document.getElementById('input-unit').textContent = inputUnit.symbol;
    document.getElementById('result-value').textContent = outputValue.toPrecision(6);
    document.getElementById('result-unit').textContent = outputUnit.symbol;
}


function reset() {
    changeUnitType(activeType);
}


document.addEventListener('DOMContentLoaded', async function () {
    await loadForm('component/length.html')
});

let activeType = "length";

