const quizData = [
    {
        question: "血小板活性化において、α顆粒から放出される止血に重要なタンパク質は何ですか？",
        options: ["ADPとセロトニン", "フィブリノゲン、第V因子、vWF", "カルシウムとヒスタミン"],
        answer: "フィブリノゲン、第V因子、vWF",
        explanation: "α顆粒にはフィブリノゲン、第V・VIII因子、vWFなどのタンパク質が含まれ、これらが放出されることで凝固反応と血小板凝集が促進されます。",
        page: 416
    },
    {
        question: "プロテインCが活性化されると、どの凝固因子を不活化しますか？",
        options: ["第Va因子と第VIIIa因子", "第IXa因子と第Xa因子", "プロトロンビンとフィブリノゲン"],
        answer: "第Va因子と第VIIIa因子",
        explanation: "活性化プロテインC(APC)は、補因子であるプロテインSと共に、凝固反応の重要な補因子である第Va因子と第VIIIa因子を分解・不活化します。",
        page: 418
    },
    {
        question: "von Willebrand病 (vWD) Type 2Bの特徴的な検査所見は何ですか？",
        options: ["低用量リストセチンによる血小板凝集の亢進", "vWF抗原の完全な欠如", "第VIII因子の著しい低下"],
        answer: "低用量リストセチンによる血小板凝集の亢進",
        explanation: "Type 2BではvWFが血小板GP Ibへ異常に高い親和性を持つため、低用量のリストセチンで血小板凝集が亢進します。DDAVP投与は血小板減少を悪化させるため禁忌です。",
        page: 419
    },
    {
        question: "肝硬変患者における止血系の「リバランス」について正しい記述はどれですか？",
        options: ["凝固因子のみが低下するため、常に出血傾向である", "抗凝固因子も同時に低下するため、出血と血栓の両方のリスクがある", "血小板機能は常に亢進している"],
        answer: "抗凝固因子も同時に低下するため、出血と血栓の両方のリスクがある",
        explanation: "肝硬変では凝固因子だけでなくプロテインC・Sなどの抗凝固因子も産生低下します。このため、一見出血傾向に見えても、実際には不安定なバランスの上にあり、血栓症のリスクも高いです。",
        page: 420
    },
    {
        question: "播種性血管内凝固症候群(DIC)の検査所見として典型的でないものはどれですか？",
        options: ["血小板減少、PT・APTT延長", "D-ダイマーの上昇", "アンチトロンビン(AT)活性の上昇"],
        answer: "アンチトロンビン(AT)活性の上昇",
        explanation: "DICは凝固系の亢進と消費が病態の中心です。そのため、ATのような抗凝固因子は消費されて活性が低下します。",
        page: 420
    },
    {
        question: "トラウマ起因性凝固障害(TIC)の病態に関与する主要な因子は何ですか？",
        options: ["活性化プロテインC (APC)による凝固抑制と線溶亢進", "第VIII因子の過剰産生", "血小板数の急激な増加"],
        answer: "活性化プロテインC (APC)による凝固抑制と線溶亢進",
        explanation: "外傷による組織低灌流が引き金となりAPCが過剰に活性化され、凝固因子の不活化と線溶亢進を引き起こすことがTICの主要なメカニズムと考えられています。",
        page: 421
    },
    {
        question: "ヘパリン起因性血小板減少症(HIT)が他の薬剤性血小板減少症と異なる最も重要な臨床的特徴は何ですか？",
        options: ["出血傾向が強い", "血栓塞栓症のリスクが非常に高い", "血小板数が5万/μL以下になることはない"],
        answer: "血栓塞栓症のリスクが非常に高い",
        explanation: "HITでは、抗PF4/ヘパリン複合体抗体が血小板を活性化するため、血小板減少にもかかわらず、動脈および静脈の血栓症を高率に合併します。",
        page: 423
    },
    {
        question: "活性化部分トロンボプラスチン時間(aPTT)が延長するが、出血傾向をきたさず、むしろ血栓傾向と関連する疾患はどれですか？",
        options: ["第XII因子欠損症", "ループスアンチコアグラント（抗リン脂質抗体症候群）", "血友病A"],
        answer: "ループスアンチコアグラント（抗リン脂質抗体症候群）",
        explanation: "ループスアンチコアグラントはリン脂質に結合し、in vitroのaPTT測定を妨害して延長させますが、in vivoでは血栓形成を促進します。",
        page: 423
    },
    {
        question: "クロピドグレルに対する反応性が低い患者が存在する主な理由は何ですか？",
        options: ["腎機能障害による薬剤排泄の遅延", "肝臓の代謝酵素CYP2C19の遺伝子多型", "P2Y12受容体の変異"],
        answer: "肝臓の代謝酵素CYP2C19の遺伝子多型",
        explanation: "クロピドグレルはプロドラッグであり、CYP2C19によって活性代謝物に変換される必要があります。この酵素の遺伝子多型を持つ患者では、活性化が不十分となり効果が減弱します。",
        page: 428
    },
    {
        question: "トラネキサム酸が抗線溶作用を発揮する機序は何ですか？",
        options: ["プラスミンを直接不活化する", "プラスミノーゲンのフィブリンへの結合を阻害する", "tPAの産生を抑制する"],
        answer: "プラスミノーゲンのフィブリンへの結合を阻害する",
        explanation: "トラネキサム酸はリジンのアナログであり、プラスミノーゲンやプラスミンのリジン結合部位に結合し、フィブリンへの結合を競合的に阻害することで線溶を抑制します。",
        page: 431
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

    window.location.href = 'c23_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
