// // // for (var i = 10; i >= 2; i--) {
// // //     if (i % 2 === 0) {
// // //         document.write(i);
// // //         document.write('<br>');
// // //     }
// // // }

// // // var i = 0;
// // // while (i <= 10) {
// // //     document.write(i + '<br>');
// // //     i++;
// // // }

// // var j = 0;
// // do {
// //     document.write(j + '<br>');
// //     j++
// // } while (j <= 10)

// var studentsAge = [20, 32, 28, 18];
// studentsAge.push(33);
// //document.write(studentsAge.length);

// // for (var i = 0; i < studentsAge.length; i++) {
// //     if (studentsAge[i] !== undefined) {
// //         document.write(studentsAge[i] + '<br>');
// //     }
// // }

// // studentsAge.forEach(print);
// // function print(el) {
// //     document.write(el + '<br>');
// // }

// // studentsAge.forEach(function (el) {
// //     document.write(el + '<br>');
// // });

// var students = {
//     Ivan: 33,
//     Petro: 20,
//     Iryna: 17
// }

// // document.write(students['Ivan']);

// var counter = 0;
// for (var key in students) {
//     counter++;
//     document.write(key + ': ' + students[key]+'<br>');
// }
// document.write('Total: ' + counter);

var ivan = {
    name: 'Ivan',
    age: 30,
    say: function () {
        document.write('My name is ' + this.name
          + ' my age is ' + this.age + '<br>');
    }
}

ivan.say();

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        document.write('My name is ' + this.name
          + ' my age is ' + this.age + '<br>');
    }
    return this;
}

var petro = new Student('Petro', 29);
petro.say();
var iryna = new Student('Iryna', 19);
iryna.say();