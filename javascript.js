const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
 

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Você está no peso ideal!';
    } else if (bmi >= 25 && bmi <= 29.9) {
        description = 'Você está com sobrepeso!';
    } else if (bmi >= 30 && bmi <= 34.9) {
        description = 'Você está com obesidade moderada!';
    } else if (bmi >= 35 && bmi <= 39.9) {
        description = 'Você está com obesidade severa!';
    } else {
        description = 'Você está com obesidade mórbida!';
    }

    value.textContent = bmi;
    document.getElementById('description').textContent = description;

    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
});




