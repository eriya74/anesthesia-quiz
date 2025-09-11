document.addEventListener('DOMContentLoaded', () => {
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));
    const scoreContainer = document.getElementById('score');
    const resultsDetailsContainer = document.getElementById('results-details');

    if (quizResults) {
        const { score, total, userAnswers } = quizResults;
        const percentage = Math.round((score / total) * 100);
        scoreContainer.innerHTML = `<h2>正答率: ${percentage}% (${score} / ${total})</h2>`;

        let detailsHtml = '';
        userAnswers.forEach((answer, index) => {
            detailsHtml += `
                <div class="result-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                    <p><strong>問題 ${index + 1}:</strong> ${answer.question}</p>
                    <p>あなたの回答: ${answer.userAnswer || '無回答'}</p>
                    <p>正解: ${answer.correctAnswer}</p>
                    <p>解説: ${answer.explanation} (p.${answer.page})</p>
                </div>
            `;
        });
        resultsDetailsContainer.innerHTML = detailsHtml;
    } else {
        scoreContainer.innerHTML = "<h2>結果を読み込めませんでした。</h2>";
    }
});
