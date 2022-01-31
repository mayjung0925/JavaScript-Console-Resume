

let resume = {
    name :  'Eunjin Jeong',
    career : 'Web Developer',
    description : 'I believe consistency wins the race.'
}
console.log('Name:'+resume.name.toUpperCase());
console.log('Career:'+resume.career);
console.log('Description:'+resume.description);

// Is there a better way to add a line break in console log?
let linebreak1 ='\n'
console.log(linebreak1);

console.log('My Interests : ');
interests ('camping');
interests('knitting');
interests('coding');

let linebreak2 ='\n'
console.log(linebreak2);

function interests(text){
    console.log('*'+text);
}



console.log('My Previous Experience :');

displayPosition('FCA', 'Substitute teacher', 'Teaching phonics and arithmetic for k- 1 grade')
displayPosition('Kwangsung America', 'Warehouse worker', 'Managed daily inventory for auto parts')
displayPosition('Korens Inc.', 'Inspector', 'Examined  materials and products for any defect, or deviations')


function displayPosition(company, job, description) {
 console.log('*' + company + ':' + job+ '-' + description);

}

let linebreak3 ='\n'
console.log(linebreak3);

console.log('My Skills :');

displaySkill('Baking', true);
displaySkill('badminton', false);
displaySkill('JavaScript',true);
displaySkill('HTML & CSS',false );


function displaySkill(skill,cool){

  
  if(cool === true){
      console.log('*BAM :'+ ' '+skill)

  }else{
      console.log('*'+skill);
  }

}

