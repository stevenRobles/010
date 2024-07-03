document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

// Mostrar y ocultar ejercicios
function showExercise(id) {
    document.querySelectorAll('.exercise-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
function hideExercise(exerciseId) {
    // Oculta el ejercicio actual
    document.getElementById(exerciseId).style.display = 'none';
}
// Procesos Selectivos
function determineParity() {
    const num = parseInt(document.getElementById('num1').value);
    const result = (num % 2 === 0) ? 'El número es par' : 'El número es impar';
    document.getElementById('result1').innerText = result;
}

function determineSign() {
    const num = parseInt(document.getElementById('num2').value);
    let result;
    if (num > 0) {
        result = 'El número es positivo';
    } else if (num < 0) {
        result = 'El número es negativo';
    } else {
        result = 'El número es cero';
    }
    document.getElementById('result2').innerText = result;
}

function determineAge() {
    const age = parseInt(document.getElementById('age').value);
    const result = (age >= 18) ? 'La persona es mayor de edad' : 'La persona es menor de edad';
    document.getElementById('result3').innerText = result;
}

function determineLeapYear() {
    const year = parseInt(document.getElementById('year').value);
    const result = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 'El año es bisiesto' : 'El año no es bisiesto';
    document.getElementById('result4').innerText = result;
}

function determineGreater() {
    const num1 = parseInt(document.getElementById('num3').value);
    const num2 = parseInt(document.getElementById('num4').value);
    let result;
    if (num1 > num2) {
        result = `El mayor es ${num1}`;
    } else if (num2 > num1) {
        result = `El mayor es ${num2}`;
    } else {
        result = 'Ambos números son iguales';
    }
    document.getElementById('result5').innerText = result;
}

// Bucles
function showEvenNumbers() {
    const n = parseInt(document.getElementById('num5').value);
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += i + ' ';
        }
    }
    document.getElementById('result6').innerText = result.trim();
}

function showDivisors() {
    const num = parseInt(document.getElementById('num6').value);
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result += i + ' ';
        }
    }
    document.getElementById('result7').innerText = result.trim();
}

function isPerfectNumber() {
    const num = parseInt(document.getElementById('num7').value);
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    const result = (sum === num) ? 'El número es perfecto' : 'El número no es perfecto';
    document.getElementById('result8').innerText = result;
}

function isPrimeNumber() {
    const num = parseInt(document.getElementById('num8').value);
    if (num < 2) {
        document.getElementById('result9').innerText = 'El número no es primo';
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.getElementById('result9').innerText = 'El número no es primo';
            return;
        }
    }
    document.getElementById('result9').innerText = 'El número es primo';
}

function invertNumber() {
    let num = parseInt(document.getElementById('num9').value);
    let inverted = 0;
    while (num > 0) {
        inverted = (inverted * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    document.getElementById('result10').innerText = 'El número invertido es: ' + inverted;
}

function multiplyByAddition() {
    const num1 = parseInt(document.getElementById('num10').value);
    const num2 = parseInt(document.getElementById('num11').value);
    let result = 0;
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    document.getElementById('result11').innerText = 'El resultado es: ' + result;
}

function divideBySubtraction() {
    let num1 = parseInt(document.getElementById('num12').value);
    const num2 = parseInt(document.getElementById('num13').value);
    let result = 0;
    while (num1 >= num2) {
        num1 -= num2;
        result++;
    }
    document.getElementById('result12').innerText = 'El resultado es: ' + result;
}

function showFibonacciSeries() {
    const n = parseInt(document.getElementById('num14').value);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById('result13').innerText = 'La serie de Fibonacci es: ' + fib.join(', ');
}

// Arreglos
function showMultiplesOf5() {
    const arr = document.getElementById('array1').value.split(',').map(Number);
    const result = arr.filter(num => num % 5 === 0);
    document.getElementById('result14').innerText = 'Múltiplos de 5: ' + result.join(', ');
}

function calculateAverage() {
    const arr = document.getElementById('array2').value.split(',').map(Number);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    document.getElementById('result15').innerText = 'El promedio es: ' + average;
}

function findMaxElement() {
    const arr = document.getElementById('array3').value.split(',').map(Number);
    const max = Math.max(...arr);
    document.getElementById('result16').innerText = 'El mayor es: ' + max;
}

function showNamesNotAna() {
    const names = document.getElementById('array4').value.split(',');
    const result = names.filter(name => name.trim().toLowerCase() !== 'ana');
    document.getElementById('result17').innerText = 'Nombres que no son Ana: ' + result.join(', ');
}

function showEvenNumbersReverse() {
    const arr = document.getElementById('array5').value.split(',').map(Number).reverse();
    const result = arr.filter(num => num % 2 === 0);
    document.getElementById('result18').innerText = 'Números pares: ' + result.join(', ');
}

// Cadenas
function printCharacters() {
    const str = document.getElementById('str1').value;
    const result = str.split('').join(', ');
    document.getElementById('result19').innerText = 'Los caracteres son: ' + result;
}

function countVowels() {
    const str = document.getElementById('str2').value.toLowerCase();
    const count = str.match(/[aeiouáéíóúü]/gi)?.length || 0;
    document.getElementById('result20').innerText = 'El número de vocales es: ' + count;
}

function reverseString() {
    const str = document.getElementById('str3').value;
    const reversed = str.split('').reverse().join('');
    document.getElementById('result21').innerText = 'La cadena invertida es: ' + reversed;
}

function countWords() {
    const str = document.getElementById('str4').value.trim();
    const words = str.split(/\s+/).length;
    document.getElementById('result22').innerText = 'El número de palabras es: ' + words;
}

function replaceSpaces() {
    const str = document.getElementById('str5').value;
    const result = str.replace(/\s+/g, '-');
    document.getElementById('result23').innerText = 'La cadena resultante es: ' + result;
}

function countSpecificCharacters() {
    const str = document.getElementById('str6').value;
    const char = document.getElementById('char1').value;
    const count = str.split(char).length - 1;
    document.getElementById('result24').innerText = 'El número de caracteres es: ' + count;
}

function removeSpecificCharacters() {
    const str = document.getElementById('str7').value;
    const char = document.getElementById('char2').value;
    const result = str.split(char).join('');
    document.getElementById('result25').innerText = 'La cadena resultante es: ' + result;
}

function toggleCase() {
    const str = document.getElementById('str8').value;
    const result = str.split('').map(char => {
        return (char === char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    document.getElementById('result26').innerText = 'La cadena resultante es: ' + result;
}

function removeSpaces() {
    const str = document.getElementById('str9').value;
    const result = str.replace(/\s+/g, '');
    document.getElementById('result27').innerText = 'La cadena sin espacios es: ' + result;
}

function findLongestWord() {
    const str = document.getElementById('str10').value;
    const words = str.split(/\s+/);
    const longest = words.reduce((a, b) => a.length > b.length ? a : b);
    document.getElementById('result28').innerText = 'La palabra más larga es: ' + longest + ' con ' + longest.length + ' caracteres';
}
