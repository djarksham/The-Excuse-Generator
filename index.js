let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoindx = Math.floor(Math.random () * who.length);
let actionindx = Math.floor(Math.random () * action.length); 
let whatindx = Math.floor(Math.random () * what.length);
let whenindx = Math.floor(Math.random () * when.length);

console.log(who[whoindx]+" "+action[actionindx]+" "+what[whatindx]+" "+when[whenindx]);