const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[25,36,22,29];
const allages=ages.concat(ages2).concat([5]).concat(ages3);
const allages2=[...ages,...ages2, 5,...ages3];
console.log(allages2);

const business=650;
const minister=450;
const sochib=250;

const takapoisha=[650,450,250,850];
const max= Math.max(...takapoisha);

const maximum= Math.max(business,minister,sochib);
console.log(max);