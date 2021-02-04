const person = { name: 'rakib', age: 24, job: 'Facebooker', gfname: 'emma watson', address: 'bangladesh', phone: 02300303 }



const complexObject={
    name='abc',
    info: {
        address:'kola bagan',
        leader:'tiger Leader'
    }
}
const{leader}=complexObject.info;
//const { phone, gfname, address } = person;
//const gfname = person.gfname;
//const phone = person.phone;
// console.log(gfname, phone ,address);
// console.log(gfname, phone,address);
// console.log(gfname, phone,address);
// console.log(gfname, phone,address);


const friends = ['sakib khan', 'amir khan', 'salman khan', 'shahrukh khan'];
const [first] = friends;
console.log(first);