import React, {useState} from "react";
import TextInput from "./TextInput";
import Button from "./Button";

function Form() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');

    function calculateBMI() {
        const weightValue = parseFloat(weight); //parseFloat разбирает текстовую строку, ищет и возвращает из неё десятичное число.
        const heightValue = parseFloat(height);

        if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
            setResult('Введите корректные данные');
            return;
        }

        const bmi = weightValue / ((heightValue/100) * (heightValue/100));

        let bmiCategory;

        if (bmi < 18.5) {
            bmiCategory = 'Дефицит массы тела';
        } else if (bmi < 25) {
            bmiCategory = 'Нормальный вес';
        } else if (bmi < 30) {
            bmiCategory = 'Избыточный вес';
        } else if (bmi < 35) {
            bmiCategory = 'Ожирение І степени';
        } else if (bmi < 40) {
            bmiCategory = 'Ожирение ІІ степени';
        } else {
            bmiCategory = 'Ожирение ІІІ степени';
        }

        setResult(`Ваш ИМТ: ${bmi.toFixed(1)}. ${bmiCategory}`);
    }

    return (
        <div className='cont'>
            <h1>Калькулятор ИМТ</h1>
            <form>
                <TextInput label='Вес (в кг)' value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Введите свой вес' />
                <TextInput label='Рост (в м)' value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Введите свой рост'/>
                <Button onClick={calculateBMI}>Рассчитать ИМТ</Button>
                <div id='result'>{result}</div>
            </form>
        </div>
    );
}

export default Form;
