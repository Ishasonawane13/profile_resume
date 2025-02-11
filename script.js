const button = document.getElementById('changeTextBtn');
const message = document.getElementById('Atext');

button.addEventListener('click', function () {

    message.textContent = `Aggregate CGPA 9.62
     Sem1 - 9.73 Sem2 - 9.63 Sem3 - 9.5
                     Achieved 95 percentile in JEE Mains and 97.4 percentile in CET.
                     12th boards - 83 % 10th boards - 90.8 %
         Participated in Myntra’s Hackerramp Phase 2(semi final)
                     Solved 60 + Leetcode problems Rank - 1, 483, 289.`;
});

const button1 = document.getElementById('changeTextBtn1');
const message1 = document.getElementById('Stext');

button1.addEventListener('click', function () {

    message1.textContent = `Web Development: HTML, CSS, JavaScript
Coding Languages: C, Java, Python, Javascript
Graphic Design: Design principles, Figma, Canva
Public Speaking: Effective communication, Presentations, Engagement
Event Management: Planning, Coordination, Execution of events`;
});


// document.getElementById('changeTextBtn').addEventListener('click', function () {
//     document.getElementById(Atext).textContent = ;
// })