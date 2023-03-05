
const isValid = function(s) {
   return (
    (s.includes('(') && (s.indexOf('(') > s.indexOf(')') || s.charAt(s.length-1) == '(') || s.split('').reduce((acc,el)=>{return el=='('? acc+=1 : acc},0) != s.split('').reduce((acc,el)=>{return el==')'?acc+=1:acc},0)) ||
   (s.includes('{') && (s.indexOf('{') > s.indexOf('}') || s.charAt(s.length-1) == '{') || s.split('').reduce((acc,el)=>{return el=='{'? acc+=1 : acc},0) != s.split('').reduce((acc,el)=>{return el=='}'?acc+=1:acc},0)) ||
   (s.includes('[') && (s.indexOf('[') > s.indexOf(']') || s.charAt(s.length-1) == '[') || s.split('').reduce((acc,el)=>{return el=='['? acc+=1 : acc},0) != s.split('').reduce((acc,el)=>{return el==']'?acc+=1:acc},0)) ||
   s.includes('(]') || 
   s.includes('(}') ||
   s.includes('{]') || 
   s.includes('{)') ||
   s.includes('[}') ||
   s.includes('[)') ||
   s.length < 1 ||
   s.length % 2 != 0 
    

   )? false: true;
};
console.log(isValid('[({}])'));