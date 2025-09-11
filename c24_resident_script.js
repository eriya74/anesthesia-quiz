const quizData = [
    {
        question: "成人の総体液量（Total Body Water）のうち、細胞内液が占める割合はどのくらいですか？",
        options: ["約25%", "約45%", "約55%"],
        answer: "約55%",
        explanation: "総体液量のうち、約55%が細胞内液、残りの約45%が細胞外液（間質液と血管内液）です。",
        page: 437
    },
    {
        question: "血管内皮グリコカリックス層が破壊されると、どのような結果になりますか？",
        options: ["血管透過性が低下する", "血管透過性が亢進し、浮腫が生じやすくなる", "血圧が上昇する"],
        answer: "血管透過性が亢進し、浮腫が生じやすくなる",
        explanation: "グリコカリックスは血管内皮のバリア機能に重要です。その破壊は血管透過性を亢進させ、アルブミンなどの分子が間質に漏出しやすくなります。",
        page: 437
    },
    {
        question: "生理食塩水（0.9% NaCl）の Strong Ion Difference (SID) はいくつですか？",
        options: ["0", "27", "40"],
        answer: "0",
        explanation: "生理食塩水中の強カチオン[Na+]と強アニオン[Cl-]は共に154mEq/Lで等量のため、SID ([Na+]-[Cl-]) は0となります。",
        page: 438
    },
    {
        question: "大量の生理食塩水を投与した際に高クロール性代謝性アシドーシスが生じる主な理由は何ですか？",
        options: ["乳酸の産生が亢進するため", "血漿SIDが低下し、代償性に重炭酸イオンが減少するため", "腎臓での酸排泄が抑制されるため"],
        answer: "血漿SIDが低下し、代償性に重炭酸イオンが減少するため",
        explanation: "SIDが0の生理食塩水を大量に投与すると、血漿のSIDが低下します。電気的中性を保つため、重炭酸イオンが減少し、アシドーシスを呈します。",
        page: 438
    },
    {
        question: "リンゲル液に含まれる乳酸や酢酸などのアニオンバッファーは、体内で何に代謝されますか？",
        options: ["重炭酸イオン", "塩化物イオン", "乳酸"],
        answer: "重炭酸イオン",
        explanation: "乳酸や酢酸は肝臓などで代謝され、最終的に重炭酸イオンを産生するため、アルカリ化剤として作用します。",
        page: 439
    },
    {
        question: "5%ブドウ糖液を投与した際、その水分は最終的に主にどのコンパートメントに分布しますか？",
        options: ["血管内", "間質", "細胞内"],
        answer: "細胞内",
        explanation: "投与されたブドウ糖は速やかに代謝され、自由水（free water）として総体液量に比例して分布するため、その大部分（約2/3）は細胞内腔に移動します。",
        page: 440
    },
    {
        question: "アルブミン製剤が膠質液として血管内ボリュームを維持する主な機序は何ですか？",
        options: ["高い膠質浸透圧", "高いナトリウム濃度", "血管内皮細胞への直接作用"],
        answer: "高い膠質浸透圧",
        explanation: "アルブミンは分子量が大きく血管内に留まるため、膠質浸透圧を維持・上昇させ、血管内に水分を保持する働きがあります。",
        page: 440
    },
    {
        question: "ヒドロキシエチルスターチ(HES)製剤の周術期使用において、最も懸念される副作用の一つは何ですか？",
        options: ["高血圧", "急性腎障害(AKI)のリスク増加", "低カリウム血症"],
        answer: "急性腎障害(AKI)のリスク増加",
        explanation: "多くの臨床研究で、特に重症患者や大手術患者において、HES製剤の使用が急性腎障害のリスクを増加させることが示されています。",
        page: 441
    },
    {
        question: "輸液反応性を評価する指標として、脈圧変動(PPV)が有用とされるのはどのような患者ですか？",
        options: ["自発呼吸のある患者", "心房細動のある患者", "完全に調節換気されている患者"],
        answer: "完全に調節換気されている患者",
        explanation: "PPVは陽圧換気による心肺相互作用を利用した指標です。そのため、自発呼吸や不整脈があると、その信頼性は著しく低下します。",
        page: 441
    },
    {
        question: "ERASプロトコルにおける周術期輸液管理の基本的な考え方はどれですか？",
        options: ["積極的な輸液負荷を行う（Liberal）", "厳格な輸液制限を行う（Restrictive）", "過不足のない状態（Net-zero balance）を目指す"],
        answer: "過不足のない状態（Net-zero balance）を目指す",
        explanation: "ERASでは、過剰輸液による浮腫や合併症と、過度な制限による臓器灌流不全の両方を避けるため、正味の水分出納をゼロに近づけることが推奨されています。",
        page: 442
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

    window.location.href = 'c24_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
