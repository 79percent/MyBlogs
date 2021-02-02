/**
 * CommonJs规范
 */
const person = require('./modules/person');
console.log(person)
const { gcf, li } = person;

gcf.sayName();
li.sayName();