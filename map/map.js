import quests from '../data.js';
import { getUser } from '../user.utils.js';

const user = getUser();

if (user.hp <= 0){
    alert('YOU ARE DEAD');
    alert(`You DIED with ${user.gold} gold.`);
    window.location = '../index.html';
    localStorage.clear();

}

const section = document.querySelector('section');
let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    if (user.completed[quest.id]){
        completedQuests++;
    }
}

if (completedQuests === quests.length){
    alert('NICE JOB! YOU COMPLETED ALL MISSIONS AND HAVE' + user.gold + ' gold.');
    window.location = '../index.html';
    localStorage.clear();
}



for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]){
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {
        const quest = quests[i];

        const a = document.createElement('a');
        a.textContent = quest.title;
        a.href = '/quest/?id=' + quest.id;

        section.append(a);}
    
} 
