const quizData = [
    {
        question: "周術期の心筋梗塞の大部分が発生するのはどの期間ですか？",
        options: ["麻酔導入時", "手術中", "術後48～72時間以内"],
        answer: "術後48～72時間以内",
        explanation: "周術期の心筋再梗塞の多くは、手術のストレス反応がピークに達する術後48～72時間に発生し、しばしば無症候性です。",
        page: 460
    },
    {
        question: "心機能評価におけるMETs（Metabolic Equivalents）とは何を評価する指標ですか？",
        options: ["心拍出量", "運動耐容能", "左室駆出率"],
        answer: "運動耐容能",
        explanation: "METsは活動時の酸素消費量を安静時の倍数で表したもので、患者の身体活動能力、すなわち心予備能を評価する簡便な指標です。4METs以上が一つの目安となります。",
        page: 460
    },
    {
        question: "僧帽弁狭窄症(MS)患者で心房細動が起こると血行動態が破綻しやすい主な理由は何ですか？",
        options: ["心拍出量が過剰になるため", "心室レートが速くなり、拡張期充満時間が極端に短縮するため", "後負荷が急激に上昇するため"],
        answer: "心室レートが速くなり、拡張期充満時間が極端に短縮するため",
        explanation: "MSでは左室充満は拡張期に依存します。心房細動による心拍数の増加は拡張期時間を著しく短縮させ、左室充満不全と肺うっ血の急激な悪化を招きます。",
        page: 463
    },
    {
        question: "重症大動脈弁狭窄症(AS)患者で、アンギナ（狭心症）が冠動脈疾患なしに見られる主な理由は何ですか？",
        options: ["心筋酸素需要の増大と供給の低下", "冠動脈の攣縮", "肺高血圧の合併"],
        answer: "心筋酸素需要の増大と供給の低下",
        explanation: "左室肥大による酸素需要の増大と、高い左室壁張力および低い大動脈拡張期圧による冠血流（酸素供給）の低下という需給バランスの破綻が原因です。",
        page: 465
    },
    {
        question: "心不全のステージ分類で、ステージC（HF）と定義されるのはどのような状態ですか？",
        options: ["心不全のリスクはあるが、構造的心疾患や症状はない", "構造的心疾患はあるが、心不全の症状や徴候はない", "構造的心疾患があり、現在または過去に心不全の症状や徴候がある"],
        answer: "構造的心疾患があり、現在または過去に心不全の症状や徴候がある",
        explanation: "ステージCは、器質的心疾患を背景として、労作時呼吸困難や浮腫などの心不全症状・徴候を経験したことがある段階を指します。",
        page: 469
    },
    {
        question: "ICD（植込み型除細動器）を装着した患者の手術で、電気メスを使用する際に最も重要な管理は何ですか？",
        options: ["ICDの除細動機能を一時的に停止させること", "ペーシングモードを非同期にすること", "患者を接地すること"],
        answer: "ICDの除細動機能を一時的に停止させること",
        explanation: "電気メスのノイズを心室細動と誤認識し、不適切なショックが作動するのを防ぐため、術中は除細動機能を一時的に無効にする必要があります。",
        page: 466
    },
    {
        question: "心タンポナーデの身体所見である「奇脈」は、どのような生理学的現象を反映していますか？",
        options: ["吸気時の収縮期血圧の過度な低下", "呼気時の心拍数の増加", "吸気時の頸静脈怒張"],
        answer: "吸気時の収縮期血圧の過度な低下",
        explanation: "吸気時に増大した右室が、心嚢液によって圧排された心室中隔を介して左室を圧迫し、左室充満がさらに障害されることで一回拍出量が減少し、血圧が低下します。",
        page: 471
    },
    {
        question: "心肺バイパス（CPB）中の血液ガス管理におけるα-statとpH-statの主な違いは何ですか？",
        options: ["使用する酸素濃度", "血液ガスの測定温度の補正の有無", "ヘマトクリット値の目標"],
        answer: "血液ガスの測定温度の補正の有無",
        explanation: "α-statは37℃で測定した値をそのまま用いるのに対し、pH-statは患者の実際の体温に補正した値でpHを7.4に維持しようとする管理法です。",
        page: 473
    },
    {
        question: "心臓手術後にACE阻害薬やARBを内服している患者で、術中の血管拡張薬に対する反応はどうなる可能性がありますか？",
        options: ["反応性が亢進し、遷延性の低血圧をきたしやすい", "反応性が低下し、効果が得られにくい", "反応性に変化はない"],
        answer: "反応性が亢進し、遷延性の低血圧をきたしやすい",
        explanation: "ACE阻害薬/ARBはレニン・アンジオテンシン系を抑制しているため、麻酔薬などによる血管拡張作用が代償されにくく、遷延性の低血圧をきたすことがあります。",
        page: 462
    },
    {
        question: "心筋虚血を検出するモニターとして、心電図のST変化よりも早期に異常が出現するのはどれですか？",
        options: ["肺動脈楔入圧の上昇", "経食道心エコー(TEE)による局所壁運動異常", "血圧の低下"],
        answer: "経食道心エコー(TEE)による局所壁運動異常",
        explanation: "虚血のカスケードによれば、心筋虚血が起こるとまず拡張機能障害、次いで収縮機能障害（壁運動異常）、そして心電図変化、最後に胸痛という順で異常が出現します。",
        page: 462
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

    window.location.href = 'c26_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
