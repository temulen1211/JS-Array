let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));
console.log(itCompanies.slice(2, 4));

itCompanies.shift();
console.log(itCompanies);

itCompanies.unshift('Facebook');
itCompanies.pop();
console.log(itCompanies);