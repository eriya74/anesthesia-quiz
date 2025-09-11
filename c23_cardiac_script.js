const quizData = [
    {
        question: "人工心肺(CPB)中の凝固障害の主な原因でないものはどれですか？",
        options: ["血液希釈と血小板減少", "接触活性化による凝固線溶系の亢進", "第VIII因子の産生亢進"],
        answer: "第VIII因子の産生亢進",
        explanation: "CPB中は、回路への接触による血小板活性化と消費、血液希釈、低体温などが複合的に作用し、凝固障害を引き起こします。第VIII因子は消費されます。",
        page: 420
    },
    {
        question: "デスモプレシン(DDAVP)がvon Willebrand病 (vWD) Type 1に有効なのはなぜですか？",
        options: ["血小板産生を促進するため", "血管内皮細胞からのvWF放出を刺激するため", "第VIII因子の半減期を延長するため"],
        answer: "血管内皮細胞からのvWF放出を刺激するため",
        explanation: "DDAVPは血管内皮細胞のWeibel-Palade小体からのvWFと第VIII因子の放出を促し、一次止血能を一時的に改善させます。",
        page: 418
    },
    {
        question: "Viscoelastic testing (ROTEM/TEG)で、R時間(CT)が延長し、αアングルとMA(MCF)が正常な場合、どのような治療が最も適切ですか？",
        options: ["血小板輸血", "新鮮凍結血漿(FFP)の投与", "クリオプレシピテートの投与"],
        answer: "新鮮凍結血漿(FFP)の投与",
        explanation: "R時間(CT)の延長は凝固因子の欠乏を示唆します。αアングルやMAが正常であることから、フィブリノゲンや血小板は比較的保たれていると考えられ、FFPによる凝固因子補充が第一選択となります。",
        page: 426
    },
    {
        question: "遺伝性血栓性素因の中で最も頻度が高いものはどれですか？",
        options: ["プロテインC欠損症", "第V因子ライデン変異", "アンチトロンビン欠損症"],
        answer: "第V因子ライデン変異",
        explanation: "第V因子ライデン変異は、活性化プロテインC(APC)による第Va因子の不活化に抵抗性を示す変異で、白人人口の約5%に見られ、最も頻度の高い遺伝性血栓性素因です。",
        page: 422
    },
    {
        question: "緊急でワルファリンの効果を拮抗させる必要がある場合、新鮮凍結血漿(FFP)よりも4因子プロトロンビン複合体製剤(4F-PCC)が推奨される主な理由は何ですか？",
        options: ["感染症のリスクが低いから", "より少量で迅速かつ確実にビタミンK依存性凝固因子を補充できるから", "コストが安いから"],
        answer: "より少量で迅速かつ確実にビタミンK依存性凝固因子を補充できるから",
        explanation: "4F-PCCは濃縮された凝固因子製剤であり、FFPに比べて少量で済み、輸液負荷が少なく、投与時間も短く、より予測可能な効果が得られます。",
        page: 431
    },
    {
        question: "DOACs（直接経口抗凝固薬）のうち、直接トロンビン阻害薬はどれですか？",
        options: ["リバーロキサバン", "アピキサバン", "ダビガトラン"],
        answer: "ダビガトラン",
        explanation: "ダビガトランは直接トロンビン（第IIa因子）を阻害します。リバーロキサバンやアピキサバンは直接第Xa因子阻害薬です。",
        page: 430
    },
    {
        question: "心臓手術中に高用量のトラネキサム酸を投与した際に懸念される中枢神経系の合併症は何ですか？",
        options: ["脳梗塞", "痙攣", "鎮静遷延"],
        answer: "痙攣",
        explanation: "高用量のトラネキサム酸はGABA-A受容体を介して中枢神経の抑制を阻害し、特に開心術後にてんかん様痙攣を引き起こすリスクが報告されています。",
        page: 431
    },
    {
        question: "抗リン脂質抗体症候群(APS)の患者で、周術期にヘパリンブリッジングを行う際の注意点は何ですか？",
        options: ["APTTを指標としたヘパリン管理は信頼性が低い可能性がある", "出血リスクが非常に高いため、ブリッジングは禁忌である", "ワルファリンより出血リスクが低い"],
        answer: "APTTを指標としたヘパリン管理は信頼性が低い可能性がある",
        explanation: "APSではループスアンチコアグラントの影響でベースラインのAPTTが延長していることが多く、ヘパリンの効果をAPTTで正確にモニターすることが困難な場合があります。抗Xa因子活性の測定が有用です。",
        page: 423
    },
    {
        question: "イドラシズマブ（Idarucizumab）は、どの抗凝固薬の特異的拮抗薬ですか？",
        options: ["ワルファリン", "ダビガトラン", "リバーロキサバン"],
        answer: "ダビガトラン",
        explanation: "イドラシズマブはダビガトランに対するモノクローナル抗体断片であり、ダビガトランに高い親和性で結合し、その抗凝固作用を迅速に中和します。",
        page: 434
    },
    {
        question: "血小板機能測定装置であるPFA-100で閉鎖時間(CT)が延長している場合、どのような異常が示唆されますか？",
        options: ["凝固因子の欠乏", "血小板機能障害または血小板減少", "線溶亢進"],
        answer: "血小板機能障害または血小板減少",
        explanation: "PFA-100は高ずり応力下での血小板による一次血栓形成能を評価します。閉鎖時間の延長は、vWDやアスピリン内服などの血小板機能異常、または高度な血小板減少を示唆します。",
        page: 427
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

    window.location.href = 'c23_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
