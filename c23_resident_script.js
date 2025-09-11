const quizData = [
    {
        question: "一次止血（primary hemostasis）の主な役割は何ですか？",
        options: ["フィブリンによる安定した血栓の形成", "血管損傷部位への血小板の沈着", "線溶による血栓の溶解"],
        answer: "血管損傷部位への血小板の沈着",
        explanation: "一次止血は、血管損傷部位に血小板が付着・凝集して一次血小板血栓を形成するプロセスです。",
        page: 414
    },
    {
        question: "健常な血管内皮が持つ抗血栓作用に関与しないものはどれですか？",
        options: ["プロスタサイクリンの産生", "組織因子（TF）の発現", "組織因子経路インヒビター（TFPI）の産生"],
        answer: "組織因子（TF）の発現",
        explanation: "組織因子は血管内皮下組織に存在し、血管損傷時に血液と接触することで凝固を開始させます。健常な内皮はTFを発現しません。",
        page: 415
    },
    {
        question: "血小板の粘着において、フォン・ヴィレブランド因子(vWF)と結合する血小板表面の受容体は何ですか？",
        options: ["糖タンパク質 Ib-IX-V 複合体", "糖タンパク質 IIb/IIIa 受容体", "インテグリン α2β1"],
        answer: "糖タンパク質 Ib-IX-V 複合体",
        explanation: "血小板の糖タンパク質 Ib-IX-V 複合体が血管内皮下のvWFと結合することで、高ずり応力下での初期の血小板粘着が起こります。",
        page: 416
    },
    {
        question: "古典的な凝固カスケードモデルにおいて、外因系を開始させる因子は何ですか？",
        options: ["第XII因子", "組織因子（TF）", "コラーゲン"],
        answer: "組織因子（TF）",
        explanation: "外因系は、血管損傷によって組織因子が血中の第VII因子と接触し、複合体を形成することで開始されます。",
        page: 417
    },
    {
        question: "フィブリン塊を分解する主要な酵素は何ですか？",
        options: ["トロンビン", "プラスミン", "組織プラスミノーゲンアクチベーター(tPA)"],
        answer: "プラスミン",
        explanation: "プラスミノーゲンがtPAなどによって活性化されてできたプラスミンが、フィブリンを分解し、線溶を引き起こします。",
        page: 417
    },
    {
        question: "最も一般的な遺伝性出血性疾患はどれですか？",
        options: ["血友病A", "フォン・ヴィレブランド病 (vWD)", "血友病B"],
        answer: "フォン・ヴィレブランド病 (vWD)",
        explanation: "フォン・ヴィレブランド病は人口の最大1%が罹患しているとされ、最も頻度の高い遺伝性出血性疾患です。",
        page: 418
    },
    {
        question: "ワルファリンが阻害するビタミンK依存性凝固因子に含まれないものはどれですか？",
        options: ["第II因子", "第VII因子", "第VIII因子"],
        answer: "第VIII因子",
        explanation: "ワルファリンはビタミンK依存性の第II, VII, IX, X因子およびプロテインC, Sの合成を阻害します。第VIII因子はビタミンK非依存性です。",
        page: 419
    },
    {
        question: "プロトロンビン時間(PT)が評価する凝固経路はどれですか？",
        options: ["内因系と共通系", "外因系と共通系", "内因系のみ"],
        answer: "外因系と共通系",
        explanation: "PTは、組織因子（トロンボプラスチン）を添加して凝固を開始させるため、外因系（第VII因子）と共通系（第X, V, II因子、フィブリノゲン）を評価します。",
        page: 424
    },
    {
        question: "アスピリンが抗血小板作用を示す機序は何ですか？",
        options: ["P2Y12受容体の不可逆的阻害", "シクロオキシゲナーゼ(COX)-1の不可逆的阻害", "糖タンパク質 IIb/IIIa 受容体の阻害"],
        answer: "シクロオキシゲナーゼ(COX)-1の不可逆的阻害",
        explanation: "アスピリンは血小板のCOX-1を不可逆的に阻害し、血小板凝集を促進するトロンボキサンA2の産生を抑制します。",
        page: 427
    },
    {
        question: "ヘパリンの抗凝固作用を発揮するために必須の血漿タンパク質は何ですか？",
        options: ["アンチトロンビン(AT)", "プロテインC", "組織因子経路インヒビター(TFPI)"],
        answer: "アンチトロンビン(AT)",
        explanation: "ヘパリンはアンチトロンビンに結合し、その立体構造を変化させることで、トロンビンや第Xa因子などの凝固因子に対する阻害作用を100倍以上に増強します。",
        page: 418
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

    window.location.href = 'c23_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
