const quizData = [
    {
        question: "超音波技術が画像生成と受信に利用する物理学的原理は何ですか？",
        options: ["圧電効果 (piezoelectric effect)", "ドップラー効果", "音響インピーダンス"],
        answer: "圧電効果 (piezoelectric effect)",
        explanation: "超音波トランスデューサは、圧電結晶を用いて電気エネルギーと機械的エネルギーを相互に変換する圧電効果を利用しています。",
        page: 383
    },
    {
        question: "内頸静脈のような表在構造の描出に最も適したトランスデューサはどれですか？",
        options: ["リニア型", "コンベックス型", "フェーズドアレイ型"],
        answer: "リニア型",
        explanation: "リニア型プローブは高周波で分解能が高く、血管穿刺や神経ブロックなど表在構造の描出に適しています。",
        page: 385
    },
    {
        question: "胸骨傍アプローチおよび心尖部アプローチで最適な心臓の画像を得るための標準的な患者体位は何ですか？",
        options: ["左側臥位", "仰臥位", "右側臥位"],
        answer: "左側臥位",
        explanation: "左側臥位にすることで、心臓が胸壁に近づき、肺によるアーチファクトが減少し、より鮮明な画像が得られます。",
        page: 385
    },
    {
        question: "胸骨傍長軸像(PLAX)を描出する際、プローブのインジケータ（ノッチ）は患者のどの方向に向けるべきですか？",
        options: ["右肩", "左肩", "頭側"],
        answer: "右肩",
        explanation: "PLAX像では、インジケータを患者の右肩に向けるのが標準的なプローブの向きです。",
        page: 386
    },
    {
        question: "胸骨傍長軸像(PLAX)で、心嚢液と胸水を鑑別する際の解剖学的指標は何ですか？",
        options: ["下行大動脈", "僧帽弁", "左心室"],
        answer: "下行大動脈",
        explanation: "下行大動脈の前方に認められる無エコー領域は心嚢液、後方に見られる場合は胸水です。",
        page: 386
    },
    {
        question: "正常な肺滑走（lung sliding）をMモードで観察した際の典型的な所見は何と呼ばれますか？",
        options: ["サンディービーチサイン (sandy beach sign)", "バーコードサイン (barcode sign)", "スパインサイン (spine sign)"],
        answer: "サンディービーチサイン (sandy beach sign)",
        explanation: "正常な肺では、胸壁の静的な層と肺実質の動的な層が砂浜のようなパターン（seashore sign）を呈します。",
        page: 391
    },
    {
        question: "気胸の診断において、最も特異度が高いとされる超音波所見は何ですか？",
        options: ["ラングポイント (lung point)", "Bラインの消失", "肺滑走の消失"],
        answer: "ラングポイント (lung point)",
        explanation: "ラングポイントは正常な肺と気胸の境界を示し、気胸に100%特異的な所見です。",
        page: 393
    },
    {
        question: "肺水腫などの間質性病変を示唆する、胸膜ラインから発生する垂直方向のアーチファクトはどれですか？",
        options: ["Bライン (B-lines)", "Aライン (A-lines)", "Zライン (Z-lines)"],
        answer: "Bライン (B-lines)",
        explanation: "1肋間に3本以上のBラインが認められる場合、肺水腫や間質性肺炎などの病態を示唆します。",
        page: 391
    },
    {
        question: "FASTの右上腹部評価で、肝臓と右腎臓の間にある腹腔内出血が貯留しやすい部位は何と呼ばれますか？",
        options: ["モリソン窩 (Morrison pouch)", "ダグラス窩", "脾腎陥凹"],
        answer: "モリソン窩 (Morrison pouch)",
        explanation: "モリソン窩は仰臥位で腹腔内の最も低い位置の一つであり、腹腔内出血が貯留しやすい場所です。",
        page: 394
    },
    {
        question: "胃内容物を評価するための胃超音波検査で、完全な評価のために推奨される2つの体位は何ですか？",
        options: ["仰臥位と右側臥位", "仰臥位と左側臥位", "座位と仰臥位"],
        answer: "仰臥位と右側臥位",
        explanation: "仰臥位と右側臥位で撮像することで、胃内の液体や固形物を前庭部に集め、より正確な評価が可能になります。",
        page: 397
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

    window.location.href = 'c21_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
