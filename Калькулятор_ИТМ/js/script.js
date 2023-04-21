function change(){
    console.log(document.getElementById("weight").value);
}
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / ((height/100) * (height/100));


    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Введите корректные данные";
        return;
    }

    let result = "Ваш ИМТ: " + bmi.toFixed(1) + "<br>";
    if (bmi < 18.5) {
        result += "Дефицит массы тела";
    } else if (bmi < 25) {
        result += "Нормальный вес";
    } else if (bmi < 30) {
        result += "Избыточный вес";
    } else if (bmi < 35) {
        result += "Ожирение І степени";
    } else if (bmi < 40) {
        result += "Ожирение ІІ степени";
    } else {
        result += "Ожирение ІІІ степени";
    }
    document.getElementById("result").innerHTML = result;
}