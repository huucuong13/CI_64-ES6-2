
const FaQ = [
    {
        question: "What is Wed development?",
        answer: "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network)."
    },
    {
        question: "What is HTML?",
        answer: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    },
    {
        question: "What is HTTP?",
        answer: "The World Wide Web is about communication between web clients and web servers.Clients are often browsers:Chrome, Edge, Safari, but they can be any type of program or device. Servers are most often computers in the cloud."
    },
    {
        question: "What are the technical skills required for front-end developer?",
        answer: "Be proficient in coding languages such as HTML, CSS, JavaScript, and jQuery. Understand server-side CSS. Be experienced with graphic design applications (e.g., Adobe Illustrator) Understand the principles of SEO."
    }
]

let templateHTML = ``;
for (let i = 0; i < FaQ.length; i++) {
    templateHTML += `<div class="container">
    <div class="box">
        <div class="question">
            <p> ${FaQ[i].question} </p>
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="answer">
            <div class="answer_content">${FaQ[i].answer}</div>
        </div>
    </div>
</div>`
}

let getFAQ = document.getElementById("FAQ");
getFAQ.innerHTML = templateHTML;

// RUN ANSWER
const question = document.querySelectorAll(".question");
question.forEach(question => {
    question.addEventListener("click", () =>  {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
})


