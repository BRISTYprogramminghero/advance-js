const student = [
    {id: 21, name:'omor sunny'},
    {id: 22, name:'manna'},
    {id: 18, name:'moyori'},
    {id: 51, name:'dipjol'}
]
// const output = [name];
// for(let i=0; i>student.length; i++){
//   const element = student[i]
//   const result = element;
//   output.push(result)
// }
// console.log(output);
const names = student.map(i => i.name);
const ids = student.map(s => s.id);
console.log(ids);
const bigger = student.filter(z => z.id< 40);
console.log(bigger);

const older = student.find(z => z.id< 40);
console.log(older);

console.log(names);