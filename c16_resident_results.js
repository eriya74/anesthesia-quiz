document.addEventListener('DOMContentLoaded', () => {
    const resultsData = JSON.parse(localStorage.getItem('quizResults'));
    if (!resultsData) {
        window.location.href = 'index.html';
        return;
    }

    const scorePercentage = (resultsData.score / resultsData.total) * 100;
    document.getElementById('score-percentage').textContent = scorePercentage.toFixed(2);
    document.getElementById('score').textContent = resultsData.score;
    document.getElementById('total').textContent = resultsData.total;

    const answersContainer = document.getElementById('answers-container');
    resultsData.userAnswers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer-review');
        if (answer.isCorrect) {
            answerDiv.classList.add('correct');
        } else {
            answerDiv.classList.add('incorrect');
        }

        answerDiv.innerHTML = `
            <h4>${answer.question}</h4>
            <p>あなたの回答: ${answer.userAnswer || '無回答'}</p>
            <p>正解: ${answer.correctAnswer}</p>
            <p>解説: ${answer.explanation} (p.${answer.page})</p>
        `;
        answersContainer.appendChild(answerDiv);
    });

    localStorage.removeItem('quizResults');
});
