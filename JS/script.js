
var  Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
Person.prototype.calculateAge = function(){
    console.log(2020 -this.yearOfBirth);

}

Person.prototype.lastName = 'Smith';

var  john = new Person('John', 1990, 'teacher');

console.log(john);
john.calculateAge();

var  jane = new Person('Jane', 1993, 'Designer');
console.log(jane);
jane.calculateAge();
var  Mark = new Person('Mark', 1960, 'Retired');
console.log(Mark);
Mark.calculateAge();
var  Mary = new Person('Mary', 1999, 'student');
console.log(Mary);
Mary.calculateAge();

console.log(john.lastName);

console.log(jane.lastName);
console.log(Mark.lastName);
console.log(Mary.lastName);
