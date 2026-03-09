/*============== 
Footer of HTML
==============*/
const footerInIndex = document.createElement('footer');

document.body.appendChild(footerInIndex);

const today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector('footer')

var copyright = document.createElement('p')

copyright.innerHTML = `&copy; Rodrigo ${thisYear}`;

footer.appendChild(copyright);

/*============== 
List of skills
==============*/

var skills = ["JavaScript", "HTML", "CSS", "GitHub", "Python"];

var skillsSection = document.getElementById('Skills');

var skillsList = skillsSection.querySelector('ul');

for (let i = 0; i<skills.length; i++){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}