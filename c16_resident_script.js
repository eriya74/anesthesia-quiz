const quizData = [
    {
        question: "平均動脈圧(MAP)の生理学的構成要素は何ですか？",
        options: ["心拍数と一回拍出量", "全身血管抵抗(SVR)と心拍出量(CO)", "拡張期血圧と脈圧"],
        answer: "全身血管抵抗(SVR)と心拍出量(CO)",
        explanation: "MAPはSVRとCOの積で表されます。これは血圧管理の基本です。",
        page: 52
    },
    {
        question: "Poiseuilleの法則によれば、血管の抵抗と半径の関係はどうなっていますか？",
        options: ["抵抗は半径に比例する", "抵抗は半径の2乗に反比例する", "抵抗は半径の4乗に反比例する"],
        answer: "抵抗は半径の4乗に反比例する",
        explanation: "血管抵抗は半径の4乗に反比例するため、半径のわずかな変化が血流に大きな影響を与えます。",
        page: 52
    },
    {
        question: "心拍出量(CO)の決定要因は何ですか？",
        options: ["心拍数(HR)と一回拍出量(SV)", "前負荷と後負荷のみ", "収縮性と心拍数のみ"],
        answer: "心拍数(HR)と一回拍出量(SV)",
        explanation: "心拍出量は心拍数と一回拍出量の積です。一回拍出量は前負荷、後負荷、収縮性に影響されます。",
        page: 52
    },
    {
        question: "Frank-Starling機構とは何ですか？",
        options: ["心拍数が血圧を調節する仕組み", "理想的な充満で心臓のポンプ作用が増加する仕組み", "後負荷が心収縮力を決定する仕組み"],
        answer: "理想的な充満で心臓のポンプ作用が増加する仕組み",
        explanation: "Frank-Starling機構は、前負荷（心室の充満）が増加すると、心筋の収縮力が増大し、一回拍出量が増加するという心臓の生理学的特性です。",
        page: 53
    },
    {
        question: "心筋の収縮性は、負荷条件とは独立した指標です。これを測定するために臨床研究で用いられる指標は何ですか？",
        options: ["駆出率(EF)", "心室圧の時間的変化率(dP/dT)", "脈圧変動(PPV)"],
        answer: "心室圧の時間的変化率(dP/dT)",
        explanation: "dP/dTは心室圧の上昇速度を示し、心筋の収縮性を評価する指標として研究で用いられます。",
        page: 54
    },
    {
        question: "左心室の灌流が主に起こるのは心周期のどの時期ですか？",
        options: ["収縮期", "拡張期", "収縮期と拡張期の両方"],
        answer: "拡張期",
        explanation: "収縮期には心筋壁の張力が高いため血流が妨げられます。そのため、左心室は主に拡張期に灌流されます。",
        page: 56
    },
    {
        question: "Westの肺のゾーンのうち、通常は存在しないが、陽圧換気や低血圧時に出現する可能性があるのはどのゾーンですか？",
        options: ["ゾーン1", "ゾーン2", "ゾーン3"],
        answer: "ゾーン1",
        explanation: "ゾーン1では気道内圧が肺動脈圧および肺静脈圧を上回り、血流がなくなります。これは生理的死腔となります。",
        page: 57
    },
    {
        question: "低酸素性肺血管攣縮(HPV)はどのような生理学的役割を果たしますか？",
        options: ["換気の悪い領域への血流を増加させる", "換気の悪い領域から血流を遠ざけ、ガス交換を改善する", "全身の血圧を上昇させる"],
        answer: "換気の悪い領域から血流を遠ざけ、ガス交換を改善する",
        explanation: "HPVは、低酸素の肺胞領域の血管を収縮させ、換気の良い領域へ血流を再分配することで、シャントを減らし酸素化を改善する適応反応です。",
        page: 57
    },
    {
        question: "動脈血酸素飽和度(SaO2)が90%から低下すると、動脈血酸素分圧(PaO2)はどのように変化しますか？",
        options: ["直線的に低下する", "急激に低下する", "緩やかに低下する"],
        answer: "急激に低下する",
        explanation: "酸素解離曲線はS字状であり、飽和度90%（PaO2約60mmHg）を下回ると、曲線の傾きが急になるため、飽和度のわずかな低下でもPaO2は大きく低下します。",
        page: 58
    },
    {
        question: "高炭酸ガス血症の最も一般的で重要な原因は何ですか？",
        options: ["CO2産生の増加", "死腔の増加", "分時換気量の減少（低換気）"],
        answer: "分時換気量の減少（低換気）",
        explanation: "麻酔薬の呼吸抑制効果などによる分時換気量の減少が、高炭酸ガス血症の最も一般的な原因です。",
        page: 63
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });

    nextBtn.style.display = 'none';
}

function selectAnswer(selectedOption, button) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === selectedOption) {
            btn.classList.add('selected');
        }
    });

    userAnswers[currentQuestionIndex] = selectedOption;

    if (currentQuestionIndex < quizData.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        finishBtn.style.display = 'block';
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

finishBtn.addEventListener('click', () => {
    let score = 0;
    const results = quizData.map((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) {
            score++;
        }
        return {
            question: question.question,
            userAnswer: userAnswers[index],
            correctAnswer: question.answer,
            explanation: question.explanation,
            page: question.page,
            isCorrect: isCorrect
        };
    });

    localStorage.setItem('quizResults', JSON.stringify({
        score: score,
        total: quizData.length,
        userAnswers: results
    }));

    window.location.href = 'c16_resident_results.html';
});

loadQuestion();
