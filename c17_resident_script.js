const quizData = [
    {
        question: "脊髄くも膜下麻酔で、局所麻酔薬を注入する空間はどこですか？",
        options: ["硬膜外腔", "くも膜下腔", "硬膜下腔"],
        answer: "くも膜下腔",
        explanation: "脊髄くも膜下麻酔では、脳脊髄液が存在するくも膜下腔に薬液を注入します。",
        page: "N/A"
    },
    {
        question: "硬膜外麻酔の効果発現が脊髄くも膜下麻酔より遅い主な理由は何ですか？",
        options: ["使用する薬液濃度が低いため", "薬物が硬膜を通過して作用部位に到達する必要があるため", "使用する針が太いため"],
        answer: "薬物が硬膜を通過して作用部位に到達する必要があるため",
        explanation: "硬膜外腔に投与された薬物は、硬膜を拡散して神経根に作用するため、効果発現に時間がかかります。",
        page: "N/A"
    },
    {
        question: "局所麻酔薬中毒(LAST)の初期症状として最も一般的なものはどれですか？",
        options: ["心停止", "呼吸抑制", "口周囲のしびれ、耳鳴りなどの中枢神経症状"],
        answer: "口周囲のしびれ、耳鳴りなどの中枢神経症状",
        explanation: "LASTは通常、興奮性の中枢神経症状から始まり、進行すると抑制症状や心毒性が出現します。",
        page: "N/A"
    },
    {
        question: "脊髄くも膜下麻酔後の頭痛(PDPH)のリスクを低減させるために有効な対策はどれですか？",
        options: ["穿刺後24時間の絶対安静", "細いペンシルポイント針の使用", "予防的な水分負荷"],
        answer: "細いペンシルポイント針の使用",
        explanation: "細径のペンシルポイント針は、硬膜の穿刺孔を小さくし、脳脊髄液の漏出を最小限に抑えるため、PDPHのリスクを低下させます。",
        page: "N/A"
    },
    {
        question: "高位脊髄くも膜下麻酔で起こる交感神経遮断による最も一般的な心血管系の変化は何ですか？",
        options: ["高血圧と頻脈", "低血圧と徐脈", "血圧不変と頻脈"],
        answer: "低血圧と徐脈",
        explanation: "血管拡張による静脈還流量の減少（前負荷低下）と、心臓交感神経の遮断により、低血圧と徐脈が生じます。",
        page: "N/A"
    },
    {
        question: "硬膜外麻酔のテストドーズにアドレナリン（エピネフリン）が含まれる主な目的は何ですか？",
        options: ["局所麻酔薬の効果時間を延長するため", "血管内への誤注入を検出するため", "鎮痛効果を増強するため"],
        answer: "血管内への誤注入を検出するため",
        explanation: "アドレナリンが血管内に注入されると、心拍数が急激に増加するため、カテーテルの血管内留置を早期に検出できます。",
        page: "N/A"
    },
    {
        question: "腕神経叢ブロックのアプローチのうち、横隔神経麻痺を最も高い頻度で合併するのはどれですか？",
        options: ["斜角筋間アプローチ", "鎖骨上アプローチ", "腋窩アプローチ"],
        answer: "斜角筋間アプローチ",
        explanation: "斜角筋間アプローチでは、横隔神経が腕神経叢のすぐ近くを走行しているため、ほぼ必発で横隔神経麻痺が起こります。",
        page: "N/A"
    },
    {
        question: "Bierブロック（静脈内区域麻酔）で、駆血帯の圧迫による痛みを軽減するために用いられる方法はどれですか？",
        options: ["麻酔薬の追加投与", "二重駆血帯を使用し、遠位側のカフを膨らませる", "鎮静薬の投与"],
        answer: "二重駆血帯を使用し、遠位側のカフを膨らませる",
        explanation: "二重駆血帯を用い、術中に麻酔がかかった皮膚の上にある遠位側カフに切り替えることで、駆血帯痛を軽減できます。",
        page: "N/A"
    },
    {
        question: "仙骨ブロックを行う際の最も重要な解剖学的指標（ランドマーク）は何ですか？",
        options: ["上前腸骨棘", "仙骨裂孔", "ヤコビ線"],
        answer: "仙骨裂孔",
        explanation: "仙骨裂孔は仙骨管の尾側の開口部であり、仙骨ブロックの穿刺部位を同定するための重要なランドマークです。",
        page: "N/A"
    },
    {
        question: "脊髄くも膜下麻酔と硬膜外麻酔を併用するCSEAの主な利点は何ですか？",
        options: ["両方の麻酔の合併症を減らせる", "速やかで確実な麻酔効果と、術後鎮痛の延長が得られる", "使用する局所麻酔薬の総量を減らせる"],
        answer: "速やかで確実な麻酔効果と、術後鎮痛の延長が得られる",
        explanation: "CSEAは、脊髄くも膜下麻酔の速効性と、硬膜外カテーテルによる術中・術後の鎮痛延長という両方の利点を兼ね備えています。",
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

    window.location.href = 'c17_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
