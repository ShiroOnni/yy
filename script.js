// Boules de neige
const snowballsContainer = document.querySelector('#snowballs');
const snowballData = [
    
    { image: 'IMG_4739.JPG', comment: "Voici le commentaire pour Photo 2." },
    { image: 'IMG_4766.PNG', comment: "Voici le commentaire pour Photo 3." },
    { image: 'IMG_4996.JPG', comment: "Voici le commentaire pour Photo 4." },
    { image: 'IMG_5495.JPG', comment: "Voici le commentaire pour Photo 5." },
    { image: 'IMG_5692.JPG', comment: "Voici le commentaire pour Photo 6." },
    { image: 'IMG_5812.JPG', comment: "Voici le commentaire pour Photo 7." },
    { image: 'IMG_7165.JPG', comment: "Voici le commentaire pour Photo 8." },
    { image: 'IMG_7876.JPG', comment: "Voici le commentaire pour Photo 9" },
    { image: 'IMG_7891.JPG', comment: "Voici le commentaire pour Photo 10" },
    { image: 'IMG_8321.JPG', comment: "Voici le commentaire pour Photo 5." },
];

function createSnowball() {
    const snowball = document.createElement('div');
    snowball.classList.add('snowball');

    // Sélection d'une image et d'un commentaire aléatoires
    const randomData = snowballData[Math.floor(Math.random() * snowballData.length)];
    const img = document.createElement('img');
    img.src = randomData.image;
    img.alt = 'Photo dans une boule de neige';
    snowball.appendChild(img);

    snowball.style.left = Math.random() * 100 + 'vw';

    // Redirige vers la page image.html au clic
    snowball.addEventListener('click', () => {
        const url = `image.html?image=${encodeURIComponent(randomData.image)}&comment=${encodeURIComponent(randomData.comment)}`;
        window.location.href = url;
    });

    snowballsContainer.appendChild(snowball);

    // Suppression de la boule après sa chute
    setTimeout(() => snowball.remove(), 6000);
}

setInterval(createSnowball, 1000);

// Flocons de neige
const snowflakesContainer = document.querySelector('#snowflakes');
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';
    snowflakesContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 7000);
}

setInterval(createSnowflake, 150);

// Quiz (inchangé)
const quizQuestions = [
    { question: "🌍 La Terre est ronde ?", options: ["Vrai ✅", "Faux ❌"], answer: 0 },
    { question: "☀️ Le soleil tourne autour de la Terre ?", options: ["Vrai ✅", "Faux ❌"], answer: 1 },
    { question: "💧 Tu a aimer la premiere fois ou on c'est embrasser?", options: ["Vrai ✅", "Faux ❌"], answer: 0 },
    { question: "🌍 Qui de nous deux aime plus la bouffe japonaise ?", options: ["Yacine ", "Syrine "], answer: 1 },
    { question: "🌍 Qui de nous deux a dit jtm en premier ?", options: ["Yacine ", "Syrine "], answer: 0 },
    { question: "🌍 Qui de nous deux est le plus susptible de s embrouiller dehors ?", options: ["Yacine ", "Syrine "], answer: 1},
    { question: "🌍 Qui de nous deux ferais tout pour l autre ?", options: ["Yacine ", "Syrine "], answer:0},
    { question: "🌍 Qui de nous deux mange le plus?", options: ["Yacine ", "Syrine "], answer:"vomito"},
    { question: "☀️ La date de notre premier appel a etais le 18 janvier ?", options: ["Vrai ✅", "Faux ❌"], answer: 1 },
    { question: "☀️ La chose que je prefere chez toi et ton visage ?", options: ["Vrai ✅", "Faux ❌"], answer:1},
    { question: "☀️ Yacine et syrine vont il finir ensemble ?", options: ["Vrai ✅", "Faux ❌"], answer:0},

];

let currentQuestion = 0;
const questionContainer = document.querySelector('#question-container');
const resultContainer = document.querySelector('#result');

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        resultContainer.textContent = "Quiz terminé 🎉 ! Merci pour votre participation.";
        questionContainer.innerHTML = '';
        return;
    }

    const question = quizQuestions[currentQuestion];
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <div class="quiz-options">
            ${question.options
                .map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`)
                .join('')}
        </div>
    `;
}

function checkAnswer(selected) {
    const question = quizQuestions[currentQuestion];
    if (selected === question.answer) {
        alert('Bonne réponse ! 🎉');
    } else {
        alert('Mauvaise réponse. 😢');
    }
    currentQuestion++;
    showQuestion();
}

if (questionContainer) showQuestion();
