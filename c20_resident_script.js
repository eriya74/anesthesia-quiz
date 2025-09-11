const quizData = [
    {
        question: "パルスオキシメータが測定しているものは何ですか？",
        options: ["動脈血の酸素分圧 (PaO2)", "動脈血ヘモグロビンの酸素飽和度 (SpO2)", "組織の酸素消費量"],
        answer: "動脈血ヘモグロビンの酸素飽和度 (SpO2)",
        explanation: "パルスオキシメータは、赤色光と赤外光の吸光度の差を利用して、動脈血の機能的酸素飽和度を非侵襲的に測定します。",
        page: "N/A"
    },
    {
        question: "カプノグラム（呼気終末二酸化炭素波形）のフェーズII（D-E）は何を表していますか？",
        options: ["死腔ガスの呼出", "肺胞ガスと死腔ガスの混合ガスの呼出", "純粋な肺胞ガスの呼出"],
        answer: "肺胞ガスと死腔ガスの混合ガスの呼出",
        explanation: "フェーズIIは、解剖学的死腔のガスに肺胞ガスが混じり始め、CO2濃度が急峻に上昇する部分です。",
        page: "N/A"
    },
    {
        question: "非観血的自動血圧計(NIBP)の測定値が不正確になる原因として考えにくいものはどれですか？",
        options: ["患者の体動や不整脈", "適切なサイズのマンシェットの使用", "マンシェットの巻き方が緩い"],
        answer: "適切なサイズのマンシェットの使用",
        explanation: "適切なサイズのマンシェットを使用することは、正確な血圧測定のための必須条件です。不適切なサイズは測定誤差の原因となります。",
        page: "N/A"
    },
    {
        question: "中心温（核心温度）を最もよく反映する測定部位はどれですか？",
        options: ["腋窩", "口腔", "食道下部または鼻咽頭"],
        answer: "食道下部または鼻咽頭",
        explanation: "食道下部や鼻咽頭は、大血管に近く、核心温度を良好に反映します。腋窩温は核心温度より低く出ることが多いです。",
        page: "N/A"
    },
    {
        question: "観血的動脈圧測定で、圧トランスデューサーのゼロ点校正を行うべき高さはどこですか？",
        options: ["心臓と同じ高さ（右房レベル）", "穿刺部位と同じ高さ", "脳と同じ高さ"],
        answer: "心臓と同じ高さ（右房レベル）",
        explanation: "圧トランスデューサーを右房の高さ（腋窩中腋窩線）に合わせることで、静水圧の影響を排除し、正確な中心部の血圧を測定できます。",
        page: "N/A"
    },
    {
        question: "末梢神経刺激装置(PNS)を用いた四連反応(TOF)で、TOF比が0.7は何を意味しますか？",
        options: ["筋弛緩が全くない状態", "深い筋弛緩状態", "筋弛緩からの回復期にある状態"],
        answer: "筋弛緩からの回復期にある状態",
        explanation: "TOF比は4回目の刺激に対する1回目の刺激の高さの比です。0.9未満では臨床的に意味のある筋弛緩が残存していると判断されます。",
        page: "N/A"
    },
    {
        question: "心電図の第II誘導でP波が最も明瞭に観察される理由は何ですか？",
        options: ["心室の電気軸と一致するため", "洞結節の脱分極ベクトルとほぼ平行であるため", "ノイズが最も少ない誘導だから"],
        answer: "洞結節の脱分極ベクトルとほぼ平行であるため",
        explanation: "洞結節から房室結節への電気的興奮の伝播方向（右房上部から左下方向）が、第II誘導（右手から左足）の軸とほぼ一致するため、P波が最大振幅で記録されます。",
        page: "N/A"
    },
    {
        question: "BISモニター（バイスペクトラルインデックス）の値が40-60の範囲にある場合、どのような麻酔深度を示唆しますか？",
        options: ["鎮静状態", "外科的麻酔に適した状態", "深い昏睡状態"],
        answer: "外科的麻酔に適した状態",
        explanation: "BIS値40-60は、体動や覚醒のリスクが低い、全身麻酔における適切な外科的鎮静レベルとされています。",
        page: "N/A"
    },
    {
        question: "尿量モニターが反映する生理学的指標として最も重要なものは何ですか？",
        options: ["腎機能そのもの", "全身の循環状態と腎血流", "膀胱の容量"],
        answer: "全身の循環状態と腎血流",
        explanation: "尿量は腎血流と糸球体濾過を反映するため、心拍出量や循環血液量など、全身の灌流状態を評価する間接的な指標として重要です。",
        page: "N/A"
    },
    {
        question: "食道聴診器で心音と呼吸音を聴取する際、最も聴取しやすいとされる位置はどこですか？",
        options: ["食道上部", "気管分岐部レベルの食道", "胃に近い食道下部"],
        answer: "気管分岐部レベルの食道",
        explanation: "気管分岐部や心臓の高さに先端を置くことで、心音と両側の呼吸音をバランス良く聴取することができます。",
        page: "N/A"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let i = 0; i < currentQuestion.options.length; i++) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${i}">
                    ${currentQuestion.options[i]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
    const userAnswers = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswerNode = (answerContainer.querySelector(selector) || {});
        const userAnswerIndex = parseInt(userAnswerNode.value);
        const correctAnswerIndex = currentQuestion.options.indexOf(currentQuestion.answer);

        userAnswers.push({
            question: currentQuestion.question,
            userAnswer: currentQuestion.options[userAnswerIndex],
            correctAnswer: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            page: currentQuestion.page,
            isCorrect: userAnswerIndex === correctAnswerIndex
        });

        if (userAnswerIndex === correctAnswerIndex) {
            score++;
        }
    });

    localStorage.setItem('quizResults', JSON.stringify({
        score: score,
        total: quizData.length,
        userAnswers: userAnswers
    }));

    window.location.href = 'c20_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
