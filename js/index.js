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

/*============== 
Message Form
==============*/
var messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", event =>{
        event.preventDefault();
        var name = event.target.usersName.value;
        var email = event.target.usersEmail.value;
        var message = event.target.usersMessage.value;
        console.log(name, email, message);

        var messageSection = document.getElementById('messages');

        var messageList = messageSection.querySelector('ul');

        var newMessage = document.createElement('li');

        newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                                <span> — ${message}</span>`;
        
        var removeButton = document.createElement("button");
        removeButton.innerText = "remove";
        removeButton.type = "button";
             
        
        removeButton.addEventListener("click", function() {
            var entry = removeButton.parentNode; 
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        
        messageList.appendChild(newMessage);

        messageForm.reset();
    }
);

