const quizData = [
    {
        question: "腎血流の自動調節能において、輸入細動脈の血管収縮を引き起こす主な体液性因子は何ですか？",
        options: ["プロスタグランジン", "アンジオテンシンII", "心房性ナトリウム利尿ペプチド(ANP)"],
        answer: "アンジオテンシンII",
        explanation: "アンジオテンシンIIは、特に高濃度で輸入細動脈を収縮させ、腎血流を減少させます。低濃度では主に輸出細動脈を収縮させます。",
        page: 499
    },
    {
        question: "末期腎不全(ESRD)患者の麻酔管理において、サクシニルコリンの使用が相対的に安全とされる理由は何ですか？",
        options: ["血漿カリウム値を低下させるため", "腎機能正常者と比較して、血清カリウム値の上昇が同程度（約0.6 mEq/L）であるため", "作用時間が短縮するため"],
        answer: "腎機能正常者と比較して、血清カリウム値の上昇が同程度（約0.6 mEq/L）であるため",
        explanation: "ESRD患者でも、術前のカリウム値が安全域にあれば、サクシニルコリンによるカリウム上昇は健常人と同程度であり、臨床的に問題となることは稀です。",
        page: 505
    },
    {
        question: "肝硬変患者でプロトロンビン時間(INR)が延長していても、必ずしも出血傾向とは言えない理由は何ですか？",
        options: ["血小板機能が代償性に亢進しているため", "プロテインCやSなどの抗凝固因子も同時に産生低下しているため", "INRは肝機能の指標ではないため"],
        answer: "プロテインCやSなどの抗凝固因子も同時に産生低下しているため",
        explanation: "肝硬変では凝固因子と抗凝固因子の両方が低下し、「リバランス」された状態にあります。INRは抗凝固因子の低下を反映しないため、出血リスクを過大評価する可能性があります。",
        page: 506
    },
    {
        question: "肝腎症候群(HRS-AKI)の治療として推奨される薬物の組み合わせはどれですか？",
        options: ["フロセミドとドパミン", "アルブミンと血管収縮薬（テルリプレシンなど）", "β遮断薬とACE阻害薬"],
        answer: "アルブミンと血管収縮薬（テルリプレシンなど）",
        explanation: "HRS-AKIの治療は、アルブミン投与による循環血漿量の増加と、テルリプレシンやノルアドレナリンなどの血管収縮薬による内臓血管拡張の是正が中心となります。",
        page: 509
    },
    {
        question: "揮発性麻酔薬が肝血流に与える影響として正しいものはどれですか？",
        options: ["用量依存的に肝血流を増加させる", "肝動脈血流を維持しようとする自動調節能（hepatic arterial buffer response）を減弱させる", "門脈血流を選択的に増加させる"],
        answer: "肝動脈血流を維持しようとする自動調節能（hepatic arterial buffer response）を減弱させる",
        explanation: "揮発性麻酔薬は、門脈血流が減少した際に代償的に肝動脈血流を増加させるという重要な自己調節機構を抑制し、肝臓を虚血に対して脆弱にする可能性があります。",
        page: 505
    },
    {
        question: "MELDスコアの計算に必要な3つの血液検査項目は何ですか？",
        options: ["アルブミン、ビリルビン、AST", "血清クレアチニン、総ビリルビン、INR", "ナトリウム、カリウム、クレアチニン"],
        answer: "血清クレアチニン、総ビリルビン、INR",
        explanation: "MELDスコアは、血清クレアチニン、総ビリルビン、INRの3つの客観的な検査値を用いて計算され、肝疾患の重症度と予後を評価します。",
        page: 510
    },
    {
        question: "術後黄疸の鑑別診断において、間接（非抱合型）ビリルビン優位の黄疸の原因として考えられるものはどれですか？",
        options: ["胆道閉塞", "溶血または術後血腫の吸収", "薬剤性肝障害"],
        answer: "溶血または術後血腫の吸収",
        explanation: "溶血や血腫の吸収では、ヘモグロビンの分解産物である間接ビリルビンが過剰に産生され、肝臓の抱合能を上回るため、間接ビリルビン優位の黄疸となります。",
        page: 512
    },
    {
        question: "末期腎不全患者への麻酔で、シスアトラクリウムが筋弛緩薬として選択されることが多い理由は何ですか？",
        options: ["作用時間が最も短いから", "腎排泄に依存しないホフマン分解で代謝されるから", "循環抑制作用が最も少ないから"],
        answer: "腎排泄に依存しないホフマン分解で代謝されるから",
        explanation: "シスアトラクリウムは主に血漿中でのホフマン分解とエステル加水分解によって消失するため、腎機能や肝機能に影響されず、作用時間の遷延が少ないです。",
        page: 505
    },
    {
        question: "肝硬変による門脈圧亢進症の合併症である肝肺症候群(HPS)で低酸素血症が生じる主なメカニズムは何ですか？",
        options: ["肺線維症", "肺内血管拡張によるシャント形成", "肺水腫"],
        answer: "肺内血管拡張によるシャント形成",
        explanation: "HPSでは、肺内の毛細血管が異常に拡張し、肺胞ガスと接触せずに血液が通過するシャントが形成されるため、著しい低酸素血症をきたします。",
        page: 508
    },
    {
        question: "KDIGOガイドラインによる術後急性腎障害(AKI)の診断基準に含まれる項目はどれですか？",
        options: ["血清クレアチニンの上昇または尿量の減少", "BUNの上昇", "尿比重の上昇"],
        answer: "血清クレアチニンの上昇または尿量の減少",
        explanation: "AKIの診断は、血清クレアチニン値の急激な上昇（48時間以内に0.3mg/dL以上、または7日以内にベースラインの1.5倍以上）または持続的な尿量減少（6時間以上0.5mL/kg/hr未満）に基づいて行われます。",
        page: 504
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

    window.location.href = 'c28_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
