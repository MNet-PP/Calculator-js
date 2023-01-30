const inputA = document.querySelector('.number-a');
const inputB = document.querySelector('.number-b');
const selectOperation = document.querySelector('.select-operation');
const btnResult = document.querySelector('.btn-result');
const outputResult = document.querySelector('.output');

btnResult.addEventListener('click', () => {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperation.value;

    const result = calculate({a, b, operation});

    outputResult.innerHTML = result;
})