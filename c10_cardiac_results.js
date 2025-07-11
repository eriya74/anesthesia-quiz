document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const scoreContainer = document.getElementById('score-container');
    const quizResults = JSON.parse(localStorage.getItem('c10_cardiacQuizResults'));

    if (quizResults) {
        let correctCount = 0;
        quizResults.forEach(result => {
            if (result.isCorrect) {
                correctCount++;
            }

            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item', result.isCorrect ? 'correct' : 'incorrect');

            resultItem.innerHTML = `
                <div class="result-question">${result.question}</div>
                <div class="result-answer">あなたの回答: ${result.selected}</div>
                <div class="result-answer">正解: ${result.correctAnswer}</div>
                <div class="result-explanation">
                    <strong>解説:</strong> ${result.explanation} (p. ${result.page})
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });

        const score = (correctCount / quizResults.length) * 100;
        scoreContainer.innerText = `正答率: ${score.toFixed(1)}% (${correctCount} / ${quizResults.length} 問正解)`;
    } else {
        resultsContainer.innerHTML = '<p>結果が見つかりませんでした。もう一度クイズに挑戦してください。</p>';
    }
});
