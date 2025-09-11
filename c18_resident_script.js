const quizData = [
    {
        question: "バッグマスク換気における適切な気道確保のための基本的な手技は何ですか？",
        options: ["頭部後屈顎先挙上法", "下顎挙上法", "両方の組み合わせ"],
        answer: "両方の組み合わせ",
        explanation: "頭部後屈顎先挙上法と下顎挙上法を組み合わせることで、舌根沈下を防ぎ、咽頭腔を広げ、効果的なバッグマスク換気が可能になります。",
        page: "N/A"
    },
    {
        question: "Mallampati分類でクラスIIIと判断される所見はどれですか？",
        options: ["軟口蓋、口蓋垂、口蓋弓が完全に見える", "軟口蓋と硬口蓋のみが見える", "口蓋垂の基部と軟口蓋が見える"],
        answer: "軟口蓋と硬口蓋のみが見える",
        explanation: "クラスIIIでは、開口時に軟口蓋と硬口蓋しか見えず、口蓋垂は見えません。これは喉頭展開困難のリスクが高いことを示唆します。",
        page: "N/A"
    },
    {
        question: "喉頭展開時に声帯を最も明瞭に視認するために行うべき外部からの操作は何ですか？",
        options: ["輪状軟骨圧迫法（Sellick手技）", "甲状軟骨のBURP法", "下顎のスニッフィングポジション"],
        answer: "甲状軟骨のBURP法",
        explanation: "BURP法（後方、上方、右方への圧迫）は、甲状軟骨を操作して声門の視野を改善する手技です。Sellick手技は誤嚥防止が目的です。",
        page: "N/A"
    },
    {
        question: "ラリンジアルマスク(LMA)が適切なサイズの選択において、最も一般的な指標は何ですか？",
        options: ["患者の年齢", "患者の体重", "患者の身長"],
        answer: "患者の体重",
        explanation: "LMAのサイズは、主に患者の体重に基づいて選択されます。各サイズには推奨される体重範囲が記載されています。",
        page: "N/A"
    },
    {
        question: "迅速導入気管挿管(RSI)の目的として最も重要なことは何ですか？",
        options: ["挿管操作を素早く終わらせること", "胃内容物の誤嚥リスクを最小限にすること", "血行動態の変動を抑えること"],
        answer: "胃内容物の誤嚥リスクを最小限にすること",
        explanation: "RSIは、鎮静薬投与から気管チューブのカフ膨張までの時間を短縮し、その間のマスク換気を行わないことで、誤嚥のリスクを最小化する手技です。",
        page: "N/A"
    },
    {
        question: "気管チューブのカフ圧の適切な範囲はどれくらいですか？",
        options: ["10-20 cmH2O", "20-30 cmH2O", "30-40 cmH2O"],
        answer: "20-30 cmH2O",
        explanation: "カフ圧が低すぎるとリークや誤嚥のリスクがあり、高すぎると気管粘膜の血流障害を引き起こすため、20-30 cmH2Oが推奨されます。",
        page: "N/A"
    },
    {
        question: "喉頭展開が困難な場合の補助器具として、ビデオ喉頭鏡の特徴は何ですか？",
        options: ["直接視ではなく、カメラを通した間接的な視野で声門を確認する", "スタイレットが不要である", "常に気管支ファイバーより優れている"],
        answer: "直接視ではなく、カメラを通した間接的な視野で声門を確認する",
        explanation: "ビデオ喉頭鏡は、ブレード先端のカメラで撮影した映像をモニターに表示することで、直接喉頭鏡では見えにくい声門を視認可能にします。",
        page: "N/A"
    },
    {
        question: "抜管後に発生する喉頭痙攣の初期対応として最も適切なものはどれですか？",
        options: ["直ちに再挿管する", "持続的な陽圧換気(CPAP)と下顎挙上", "筋弛緩薬を少量投与する"],
        answer: "持続的な陽圧換気(CPAP)と下顎挙上",
        explanation: "喉頭痙攣の初期対応は、100%酸素によるCPAPと下顎挙上です。改善しない場合に筋弛緩薬の投与や再挿管を考慮します。",
        page: "N/A"
    },
    {
        question: "Cormack-Lehane分類でGrade 3とはどのような喉頭展開視野ですか？",
        options: ["声帯全体が見える", "喉頭蓋のみが見える", "声帯の後部のみが見える"],
        answer: "喉頭蓋のみが見える",
        explanation: "Grade 3では喉頭蓋は見えるが声門は全く見えない状態を指し、挿管困難が予想されます。",
        page: "N/A"
    },
    {
        question: "気道確保困難(Difficult Airway)の予測因子である「LEMON法」の'N'は何を意味しますか？",
        options: ["Neck mobility (頸部の可動性)", "Nasal patency (鼻腔の開存性)", "Nausea/Vomiting history (嘔気・嘔吐の既往)"],
        answer: "Neck mobility (頸部の可動性)",
        explanation: "LEMONはLook externally, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobilityの頭字語で、Nは頸部の可動性評価を意味します。",
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

    window.location.href = 'c18_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
