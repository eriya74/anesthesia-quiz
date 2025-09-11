const quizData = [
    {
        question: "慢性腎臓病(CKD)患者の腎血流自動調節能は、慢性高血圧によりどのように変化していますか？",
        options: ["自動調節域の下限が低下する", "自動調節域が右方にシフトし、より高い灌流圧が必要となる", "自動調節能は消失している"],
        answer: "自動調節域が右方にシフトし、より高い灌流圧が必要となる",
        explanation: "慢性高血圧は腎血流の自動調節曲線を右方にシフトさせます。つまり、正常よりも高い血圧を維持しないと腎血流が低下しやすくなります。",
        page: 499
    },
    {
        question: "心臓手術を受ける末期腎不全(ESRD)患者で、術前に透析を行う際の最も重要な目標は何ですか？",
        options: ["カリウムと体液量を正常化し、尿毒症症状を軽減すること", "ヘマトクリットを40%以上にすること", "血圧を正常化すること"],
        answer: "カリウムと体液量を正常化し、循環動態を安定させること",
        explanation: "術前の透析は、高カリウム血症や体液過剰を是正し、周術期の心血管イベントのリスクを最小限にすることが最も重要です。",
        page: 503
    },
    {
        question: "肝硬変による門脈圧亢進症を合併した患者の心臓手術において、肝血流を維持するために特に避けるべきことは何ですか？",
        options: ["軽度の低血圧", "PEEPの使用や過剰な血管収縮薬による内臓血管抵抗の上昇", "硬膜外麻酔の併用"],
        answer: "PEEPの使用や過剰な血管収縮薬による内臓血管抵抗の上昇",
        explanation: "高いPEEPは肝静脈圧を上昇させ、血管収縮薬は内臓血流を減少させます。これらは共に肝灌流圧を低下させ、肝虚血を増悪させる可能性があります。",
        page: 506
    },
    {
        question: "肝硬変患者の心臓手術で、低アルブミン血症（<2.5g/dL）が薬物動態に与える影響として最も重要なことは何ですか？",
        options: ["脂溶性薬物の作用時間延長", "タンパク結合率の高い酸性薬物（チオペンタールなど）の遊離型（活性型）分画が増加する", "腎排泄型薬物のクリアランス低下"],
        answer: "タンパク結合率の高い酸性薬物（チオペンタールなど）の遊離型（活性型）分画が増加する",
        explanation: "アルブミンは多くの酸性薬物と結合します。低アルブミン血症では、これらの薬物の非結合型（薬理活性を持つ）分画が増加し、通常量でも過度の作用を示す危険があります。",
        page: 508
    },
    {
        question: "ポルトパルモナリー高血圧症（Portopulmonary Hypertension）を合併した患者の肝移植手術において、麻酔管理上の最大の課題は何ですか？",
        options: ["術後出血", "術中の急激な右心不全", "腎機能障害"],
        answer: "術中の急激な右心不全",
        explanation: "門脈遮断解除時などに急激に静脈還流が増加すると、既存の肺高血圧により右室が対応できず、致死的な右心不全を引き起こすリスクが非常に高いです。",
        page: 508
    },
    {
        question: "心臓手術後の急性腎障害(AKI)の危険因子として、術中因子で最も重要なものは何ですか？",
        options: ["麻酔薬の種類", "人工心肺の時間と術中低血圧", "手術時間"],
        answer: "人工心肺の時間と術中低血圧",
        explanation: "人工心肺による非拍動流、炎症反応、および術中の低血圧による腎灌流低下は、心臓術後AKIの最も強力な危険因子です。",
        page: 498
    },
    {
        question: "肝硬変患者の凝固障害において、トロンボエラストグラフィ(TEG/ROTEM)がPT/INRよりも病態を正確に反映するとされる理由は何ですか？",
        options: ["血小板機能と線溶系を含めた凝固能全体を評価できるため", "測定時間が短いため", "検体量が少量で済むため"],
        answer: "血小板機能と線溶系を含めた凝固能全体を評価できるため",
        explanation: "肝硬変の凝固障害は凝固因子だけでなく血小板や線溶系も関与します。TEG/ROTEMはこれらの要素を総合的に評価し、より的確な治療方針の決定に役立ちます。",
        page: 507
    },
    {
        question: "心臓手術を受けるC型肝炎患者の管理で、最も重要な感染対策は何ですか？",
        options: ["予防的抗ウイルス薬の投与", "標準予防策の徹底", "術後ガンマグロブリンの投与"],
        answer: "標準予防策の徹底",
        explanation: "C型肝炎は血液媒介感染症であるため、針刺し損傷の防止など、全ての患者に適用される標準予防策を厳格に遵守することが医療従事者への感染を防ぐ上で最も重要です。",
        page: 506
    },
    {
        question: "腎移植を受ける患者の麻酔で、術中に中心静脈圧(CVP)を比較的高めに（例：10-15mmHg）維持することが推奨される理由は何ですか？",
        options: ["心機能をサポートするため", "移植腎の初期機能を良好に保ち、尿細管壊死のリスクを低減するため", "出血を少なくするため"],
        answer: "移植腎の初期機能を良好に保ち、尿細管壊死のリスクを低減するため",
        explanation: "移植された腎臓は除神経状態にあり、自動調節能が不十分です。十分な灌流圧と血流を確保するために、高めのCVPを目標とした輸液管理が行われます。",
        page: 505
    },
    {
        question: "胆道手術中にオピオイドによるオッディ括約筋の攣縮が疑われた場合、拮抗薬として有効なのはどれですか？",
        options: ["プロタミン", "ナロキソンまたはグルカゴン", "アトロピン"],
        answer: "ナロキソンまたはグルカゴン",
        explanation: "オピオイドによる括約筋攣縮は、オピオイド拮抗薬であるナロキソンで拮抗できます。また、グルカゴンには平滑筋弛緩作用があり、同様に有効です。",
        page: 513
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

    window.location.href = 'c28_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
