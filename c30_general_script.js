const quizData = [
    {
        question: "慢性高血圧患者の脳血流自動調節能曲線は、健常成人と比較してどのように変化していますか？",
        options: ["左方にシフトする", "右方にシフトする", "変化しない"],
        answer: "右方にシフトする",
        explanation: "慢性高血圧では、脳血管が持続的な高圧に順応するため、自動調節能が機能する血圧範囲（プラトー）全体がより高い圧力帯へ右方にシフトします。",
        page: 534
    },
    {
        question: "静脈麻酔薬（プロポフォールなど）が頭蓋内圧(ICP)を低下させる主な機序は何ですか？",
        options: ["脳血管を直接収縮させるため", "脳代謝率(CMRO2)を低下させ、それに伴い脳血流(CBF)が減少するため", "脳脊髄液の産生を抑制するため"],
        answer: "脳代謝率(CMRO2)を低下させ、それに伴い脳血流(CBF)が減少するため",
        explanation: "静脈麻酔薬は脳の活動を抑制しCMRO2を低下させます。正常な脳では神経血管カップリングにより、CMRO2の低下に応じてCBFも減少し、結果としてICPが低下します。",
        page: 535
    },
    {
        question: "頭蓋内圧(ICP)が亢進している患者に、PaCO2を25mmHgまで低下させるような過度の過換気を行うことの潜在的なリスクは何ですか？",
        options: ["脳浮腫の増悪", "過度の脳血管収縮による脳虚血", "てんかん発作の誘発"],
        answer: "過度の脳血管収縮による脳虚血",
        explanation: "過度の過換気は、脳血管を過度に収縮させ脳血流を著しく減少させるため、特に脳損傷部位で虚血を引き起こし、二次性脳損傷を悪化させる危険があります。",
        page: 535
    },
    {
        question: "脳動脈瘤クリッピング術で、一時的に親動脈を遮断する際に脳保護を目的として行われる「バーストサプレッション」とは何ですか？",
        options: ["脳波を平坦化させることで脳代謝を最大限に抑制すること", "意図的に血圧を上昇させること", "低体温にすること"],
        answer: "脳波を平坦化させることで脳代謝を最大限に抑制すること",
        explanation: "プロポフォールやチオペンタールを高用量投与し、脳波が平坦になる（バーストサプレッション）まで脳の活動を抑制することで、虚血耐性を高めることを目的とします。",
        page: 543
    },
    {
        question: "座位での脳外科手術中に静脈空気塞栓症(VAE)が発生した場合、まず行うべきでない処置はどれですか？",
        options: ["執刀医に通知し、手術操作を中断してもらう", "亜酸化窒素を使用している場合は中止する", "PEEPをかける"],
        answer: "PEEPをかける",
        explanation: "PEEPは右房圧を上昇させ、卵円孔開存(PFO)がある場合に右→左シャントを介した奇異性脳塞栓のリスクを増大させる可能性があるため、その有効性は確立されていません。",
        page: 542
    },
    {
        question: "くも膜下出血後の脳血管攣縮（vasospasm）の治療として、有効性が証明されている唯一の薬物療法は何ですか？",
        options: ["カルシウム拮抗薬（ニモジピン）", "スタチン", "マグネシウム"],
        answer: "カルシウム拮抗薬（ニモジピン）",
        explanation: "ニモジピンの経口投与は、脳血管攣縮による遅発性脳虚血の発生率と重症度を低下させ、予後を改善することが示されている唯一の薬物です。",
        page: 543
    },
    {
        question: "頸動脈内膜剥離術(CEA)後の合併症である過灌流症候群のリスク因子として最も重要なものはどれですか？",
        options: ["術前の低血圧", "術前の高度な頸動脈狭窄と、それに伴う脳血流自動調節能の障害", "高齢"],
        answer: "術前の高度な頸動脈狭窄と、それに伴う脳血流自動調節能の障害",
        explanation: "高度狭窄に長期間さらされた脳血管は、慢性的な低灌流に適応して拡張しています。血行再建後に自動調節能が破綻すると、急激な血流増加により過灌流となり、脳浮腫や頭蓋内出血をきたします。",
        page: 544
    },
    {
        question: "頭蓋内圧亢進患者の管理において、3%高張食塩水がマンニトールと比較して有利な可能性がある点は何ですか？",
        options: ["利尿作用が少ないため、循環血液量の減少が少ない", "血液脳関門を通過しない", "コストが安い"],
        answer: "利尿作用が少ないため、循環血液量の減少が少ない",
        explanation: "高張食塩水はマンニトールよりも血管内ボリュームを維持・増加させる効果があり、利尿作用も少ないため、循環動態が不安定な患者で使いやすい場合があります。",
        page: 540
    },
    {
        question: "覚醒下開頭術（Awake craniotomy）で、術中に患者がてんかん発作を起こした場合の第一選択の治療薬は何ですか？",
        options: ["プロポフォールのボーラス投与", "冷生食による皮質冷却", "ミダゾラムの少量投与"],
        answer: "冷生食による皮質冷却",
        explanation: "術中の発作に対しては、まず執刀医による冷生食での皮質冷却が試みられます。これによりマッピングを妨げることなく発作を抑制できることが多いです。",
        page: 542
    },
    {
        question: "脳動静脈奇形(AVM)の外科的切除における「正常灌流圧破綻現象（normal perfusion pressure breakthrough）」とは何ですか？",
        options: ["AVM切除後の高血圧", "AVM周囲の正常脳組織が、正常な血圧に再灌流された際に過灌流となり、浮腫や出血をきたす現象", "AVMへの血流が術中に増加すること"],
        answer: "AVM周囲の正常脳組織が、正常な血圧に再灌流された際に過灌流となり、浮腫や出血をきたす現象",
        explanation: "AVM存在下では、周囲の正常脳血管は慢性的な低灌流状態に適応しています。AVMを摘出すると、これらの血管に急に正常な圧がかかり、自動調節能が破綻して過灌流状態となります。",
        page: 544
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

    window.location.href = 'c30_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
