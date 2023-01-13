//Домашнее задание
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.

let city1 = {};
city1.name = 'ГородN';
city1.population = '10 млн';
let getName1 = () => {return city1.name};
let exportStr1 = () => {return `name=${city1.name}\npopulation=${city1.population}\n`};
let getCity1 = () => {return getName1()};
console.log(city1);

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

let city2 = {
    name: 'ГородM',
    population: 1e6,
    getName: getName2 = () => {return city2.name},
    exportStr: exportStr2 = () => {return `name=${city2.name}\npopulation=${city2.population}\n`},
    getCity: getCity2 = () => {return getName2()}
};
console.log(city2);


// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

console.log(getName1());
console.log(getName2());


// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.

console.log(exportStr1());
console.log(exportStr2());


// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

let getObj = () => {return this};
console.log(getCity1(getObj));
console.log(getCity2(getObj));

// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);


// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

let summ = 0;
let d2 = [45, 78, 10, 3];
for(let i = 0; i < d2.length; i++){
    summ += d2[i];
};
console.log(summ)


// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

let summ2 = 0;
let d3 = [45, 78, 10, 3];
d3[7] = 100;
for(let i in d3){
    summ2 += d3[i];
};
console.log(summ2)