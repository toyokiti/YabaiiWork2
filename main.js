'use strict';

const fizzBuzz = (fizzNum, buzzNum) => { //FizzBuzzの出力
    const results = []; //FizzBuzzの結果を格納
    for (let i = 1; i < 100; i++) {
        // Fizz＆Buzzの倍数のとき
        if (i % fizzNum === 0 && i % buzzNum === 0) {
            const objFizzBuzz = { 'name': 'FizzBuzz', 'number': i };
            results.push(objFizzBuzz);
        } else if (i % fizzNum === 0) {
            // Fizzの倍数のとき
            const objFizzBuzz = { 'name': 'Fizz', 'number': i };
            results.push(objFizzBuzz);
        } else if (i % buzzNum === 0) {
            // Buzzの倍数のとき
            const objFizzBuzz = { 'name': 'Buzz', 'number': i };
            results.push(objFizzBuzz);
        }
    }
    return results;
}

document.getElementById('btn').addEventListener('click', () => {
    const fizzNum = document.getElementById('fizzNum'); //ユーザーが入力したFizzNumを格納
    const buzzNum = document.getElementById('BuzzNum'); //ユーザーが入力したBuzzNumを格納
    const outputArea = document.getElementById('outputArea'); //結果を出力するエリアのDOMを取得
    if (Number.isInteger(Number(fizzNum.value)) && fizzNum.value !== '' && Number.isInteger(Number(buzzNum.value)) && buzzNum.value !== '') { // ユーザーの入力が整数かつ空白でない場合の処理

        const arrFizzBuzz = fizzBuzz(fizzNum.value, buzzNum.value); //FizzBuzzを計算
        arrFizzBuzz.forEach((value) => {
            const li = document.createElement('li');
            li.textContent = `${value.name}: ${value.number}`;
            outputArea.appendChild(li);
        });
    } else { //ユーザーの入力が空白、または整数以外の場合
        const li = document.createElement('li');
        li.textContent = '整数を入力してください';
        outputArea.appendChild(li);
    }
})