export function countDown(n) {

  if (n < 1) 
    return "Число не может быть меньше единицы."
  

  if (n > 50) 
    return "Число не может быть больше пятидесяти."
  

  if (!Number.isInteger(n)) 
    return "Число должно быть целым."
  

  let ansver = String();

  for (let i = n; i >= 1; i--) 
    ansver += i;
  
    return answer;
  


}
