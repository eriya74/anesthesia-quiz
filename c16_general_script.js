const quizData = [
    {
        question: "術中の低血圧が術後合併症リスクを増加させるとされるMAPの閾値は一般的にどれくらいですか？",
        options: ["MAP < 70 mmHg", "MAP < 60 mmHg", "MAP < 50 mmHg"],
        answer: "MAP < 50 mmHg",
        explanation: "大規模な観察研究では、MAPが50mmHg未満の状態が5分続くだけで、術後の有害事象リスクが増加すると関連付けられています。",
        page: 52
    },
    {
        question: "心室コンプライアンスが低下した「硬い」心臓において、正常な充満圧がもたらす結果として最も適切なものはどれですか？",
        options: ["過剰な一回拍出量を生じる", "正常な拡張末期容量(EDV)を達成できる", "十分なEDVを達成できない可能性がある"],
        answer: "十分なEDVを達成できない可能性がある",
        explanation: "コンプライアンスの低い心臓では、正常な充満圧では心筋が十分に伸展せず、結果として拡張末期容量が不十分になることがあります。",
        page: 53
    },
    {
        question: "陽圧換気中の患者において、循環血液量減少（hypovolemia）を鋭敏に示す指標はどれですか？",
        options: ["中心静脈圧(CVP)", "収縮期血圧変動(SPV)または脈圧変動(PPV)", "心拍数"],
        answer: "収縮期血圧変動(SPV)または脈圧変動(PPV)",
        explanation: "SPVやPPVは、CVPのような静的な充満圧よりも、輸液反応性をより正確に予測する動的な指標です。",
        page: 54
    },
    {
        question: "冠動脈の血流予備能が枯渇し始めるのは、冠動脈の狭窄が何%に達したときですか？",
        options: ["約50%", "約70%", "約90%"],
        answer: "約90%",
        explanation: "代償的な血管拡張により、約90%の高度な狭窄に至るまで冠血流は維持されますが、それを超えると予備能は枯渇します。",
        page: 56
    },
    {
        question: "肺高血圧症の治療薬として、吸入で投与される重要な血管拡張物質は何ですか？",
        options: ["プロスタグランジン", "一酸化窒素(NO)", "エンドセリン受容体拮抗薬"],
        answer: "一酸化窒素(NO)",
        explanation: "吸入NOは選択的に肺血管を拡張させるため、肺高血圧の治療において中心的な役割を果たしてきました。",
        page: 57
    },
    {
        question: "P/F比 (PaO2/FIO2) が酸素化の指標としてA-a勾配よりも優れている点は何ですか？",
        options: ["計算が簡単である点", "高いFIO2レベルでも比較的安定している点", "シャント率を直接反映する点"],
        answer: "高いFIO2レベルでも比較的安定している点",
        explanation: "A-a勾配はFIO2によって大きく変動しますが、P/F比は高いFIO2でも比較的安定しており、酸素化障害の重症度評価に有用です。",
        page: 60
    },
    {
        question: "100%酸素を投与しても改善しない低酸素血症の主な原因は何ですか？",
        options: ["換気血流不均等", "拡散障害", "肺内シャント"],
        answer: "肺内シャント",
        explanation: "肺内シャントでは、血液がガス交換に関与しないため、100%酸素を投与しても動脈血酸素分圧は十分に上昇しません。",
        page: 61
    },
    {
        question: "生理的死腔の増大をきたす病態として適切でないものはどれですか？",
        options: ["肺塞栓症", "出血性ショック", "肺炎"],
        answer: "肺炎",
        explanation: "肺炎は主にシャント（換気のない領域への血流）を引き起こします。肺塞栓やショックは血流がない（または減少した）換気領域、すなわち死腔を増大させます。",
        page: 63
    },
    {
        question: "麻酔薬が呼吸ドライブに与える影響として、最も顕著なものはどれですか？",
        options: ["末梢化学受容器の感受性を高める", "高炭酸ガス血症および低酸素血症に対する換気応答を抑制する", "呼吸リズム生成を促進する"],
        answer: "高炭酸ガス血症および低酸素血症に対する換気応答を抑制する",
        explanation: "揮発性麻酔薬、鎮静薬、オピオイドは、用量依存的にCO2や低酸素に対する中枢の化学感受性を鈍化させ、呼吸抑制を引き起こします。",
        page: 66
    },
    {
        question: "酸素供給量(DO2)が低下する要因の組み合わせとして正しいものはどれですか？",
        options: ["心拍出量の増加と貧血", "心拍出量の低下と低酸素血症", "心拍出量の増加と高酸素血症"],
        answer: "心拍出量の低下と低酸素血症",
        explanation: "酸素供給量(DO2)は心拍出量(CO)と動脈血酸素含量(CaO2)の積で決まります。COの低下や、貧血・低酸素血症によるCaO2の低下はDO2を減少させます。",
        page: 67
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

    window.location.href = 'c16_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
