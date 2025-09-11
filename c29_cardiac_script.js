const quizData = [
    {
        question: "肥満心筋症（Obesity cardiomyopathy）の病態生理で中心的な役割を果たすのは何ですか？",
        options: ["冠動脈の狭窄", "左室の求心性肥大と拡張機能障害", "弁膜症"],
        answer: "左室の求心性肥大と拡張機能障害",
        explanation: "肥満は高血圧や循環血液量の増加を通じて左室に容量・圧負荷をかけ、求心性肥大と拡張機能障害を引き起こし、最終的には収縮機能も低下させます。",
        page: 516
    },
    {
        question: "重度の低栄養状態で心臓手術を行う場合、特に注意すべき心血管系の合併症は何ですか？",
        options: ["高血圧クリーゼ", "心筋萎縮と低心拍出量症候群（LCOS）", "冠動脈攣縮"],
        answer: "心筋萎縮と低心拍出量症候群（LCOS）",
        explanation: "重度の低栄養は心筋萎縮を引き起こし、心収縮予備能を低下させます。手術侵襲や人工心肺による負荷に対応できず、術後にLCOSを発症するリスクが高まります。",
        page: 518
    },
    {
        question: "糖尿病性自律神経障害を持つ患者の麻酔管理で、最も警戒すべきことは何ですか？",
        options: ["術後痛覚過敏", "麻酔導入後の難治性低血圧と心拍変動の欠如", "気道反射の亢進"],
        answer: "麻酔導入後の難治性低血圧と心拍変動の欠如",
        explanation: "自律神経障害があると、血管運動神経の反応が障害され、麻酔薬による血管拡張や交感神経遮断に対して代償できず、カテコラミンに反応しにくい重篤な低血圧をきたすことがあります。",
        page: 523
    },
    {
        question: "甲状腺機能亢進症で心房細動を合併している患者の周術期管理で、最も重要な目標は何ですか？",
        options: ["心拍数を100回/分以上に保つ", "β遮断薬などで心室レートを厳格にコントロールし、甲状腺機能を正常化させること", "抗凝固療法を中止すること"],
        answer: "β遮断薬などで心室レートを厳格にコントロールし、甲状腺機能を正常化させること",
        explanation: "甲状腺ホルモン過剰は心筋の感受性を高め、頻脈性不整脈を悪化させます。β遮断薬によるレートコントロールと、抗甲状腺薬によるeuthyroid化が血行動態安定の鍵です。",
        page: 525
    },
    {
        question: "褐色細胞腫クリーゼによるたこつぼ型心筋症が疑われた場合、治療の基本方針はどうなりますか？",
        options: ["β作動薬による心収縮力の増強", "α遮断を優先した血圧コントロールと、β遮断薬による頻脈管理", "緊急心臓手術"],
        answer: "α遮断を優先した血圧コントロールと、β遮断薬による頻脈管理",
        explanation: "カテコラミン過剰による心筋障害であるため、原因であるカテコラミンの作用を遮断することが根本治療です。α遮断で後負荷を軽減し、次いでβ遮断で心毒性を軽減します。",
        page: 528
    },
    {
        question: "カルチノイド心疾患で最も特徴的に障害される弁はどれですか？",
        options: ["大動脈弁と僧帽弁", "三尖弁と肺動脈弁", "僧帽弁のみ"],
        answer: "三尖弁と肺動脈弁",
        explanation: "腫瘍から放出されたセロトニンなどの血管作動性物質は、肺で代謝されるため、その影響は主に右心系の弁（三尖弁・肺動脈弁）に及び、線維化による硬化・逆流を引き起こします。",
        page: 529
    },
    {
        question: "長期ステロイド使用者で急性副腎不全によるショックが起きた場合、昇圧薬に対する反応はどうなりますか？",
        options: ["カテコラミンに対する反応性が著しく低下する", "カテコラミンに対する反応性が亢進する", "変化しない"],
        answer: "カテコラミンに対する反応性が著しく低下する",
        explanation: "グルココルチコイドは血管のカテコラミン感受性を維持するために必須です。急性副腎不全ではこの作用が失われ、通常の昇圧薬に反応しない難治性低血圧（カテコラミン不応性ショック）を呈します。",
        page: 526
    },
    {
        question: "肥満外科手術（Bariatric surgery）後、長期的に心血管イベントが減少する主な理由は何ですか？",
        options: ["手術侵襲によるストレス反応", "体重減少に伴う、糖尿病、高血圧、脂質異常症などの心血管リスクファクターの改善", "食事制限による効果"],
        answer: "体重減少に伴う、糖尿病、高血圧、脂質異常症などの心血管リスクファクターの改善",
        explanation: "肥満外科手術による持続的な体重減少は、メタボリックシンドロームの構成要素を劇的に改善し、長期的な心血管疾患の発症リスクを低下させます。",
        page: 517
    },
    {
        question: "先端巨大症（アクロメガリー）患者の心合併症として最も頻度が高いものは何ですか？",
        options: ["冠動脈疾患", "左室肥大と心筋症", "先天性心疾患"],
        answer: "左室肥大と心筋症",
        explanation: "成長ホルモンの過剰は、高血圧や直接的な心筋への作用により、左室肥大、拡張機能障害、そして最終的には収縮機能障害を伴う心筋症を高率に引き起こします。",
        page: 529
    },
    {
        question: "糖尿病患者の周術期血糖管理において、HbA1cが8.5%以上の高値を示す場合、どのような対応が推奨されますか？",
        options: ["手術を中止する必要はない", "血糖コントロールの改善のために待機手術であれば延期を考慮する", "インスリンの使用を中止する"],
        answer: "血糖コントロールの改善のために待機手術であれば延期を考慮する",
        explanation: "HbA1c高値は、長期的な高血糖状態を反映し、術後感染症や心血管合併症のリスク増加と関連します。そのため、待機手術では血糖管理を改善するための延期が考慮されます。",
        page: 523
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

    window.location.href = 'c29_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
