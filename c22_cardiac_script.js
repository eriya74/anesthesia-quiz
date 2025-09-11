const quizData = [
    {
        question: "低体温心肺バイパス中にpH-stat管理を選択した場合、α-stat管理と比較して脳血流(CBF)はどうなりますか？",
        options: ["CBFは増加する", "CBFは減少する", "CBFは変化しない"],
        answer: "CBFは増加する",
        explanation: "pH-stat管理では、CO2を添加して体温補正後のpHを7.4に保つため、相対的な高炭酸ガス血症となり、脳血管が拡張して脳血流が増加します。",
        page: 404
    },
    {
        question: "重篤な代謝性アシドーシス（例：pH 7.1）の心筋収縮力に対する治療として、炭酸水素ナトリウムを投与する際の最も大きな懸念点は何ですか？",
        options: ["高ナトリウム血症", "CO2産生による細胞内アシドーシスの悪化", "代謝性アルカローシスの誘発"],
        answer: "CO2産生による細胞内アシドーシスの悪化",
        explanation: "炭酸水素ナトリウムはCO2を産生します。換気が不十分な場合、CO2は容易に細胞膜を通過し、細胞内pHをさらに低下させ、心筋抑制を悪化させる可能性があります。",
        page: 407
    },
    {
        question: "心臓手術後の低心拍出量状態で乳酸値が上昇している（Type A 乳酸アシドーシス）。この状態の是正に最も重要な治療はどれですか？",
        options: ["乳酸の直接的な除去", "炭酸水素ナトリウムの投与", "循環を改善し、組織灌流と酸素供給を増加させること"],
        answer: "循環を改善し、組織灌流と酸素供給を増加させること",
        explanation: "Type A 乳酸アシドーシスは組織の低灌流・低酸素が原因です。根本的な治療は、輸液、強心薬、血管作動薬などを用いて心拍出量を増やし、酸素供給を改善することです。",
        page: 406
    },
    {
        question: "大量の生理食塩水で蘇生を行った心臓手術後の患者が呈する典型的な酸塩基平衡障害は何ですか？",
        options: ["アニオンギャップ開大性代謝性アシドーシス", "高クロール性（非アニオンギャップ）代謝性アシドーシス", "代謝性アルカローシス"],
        answer: "高クロール性（非アニオンギャップ）代謝性アシドーシス",
        explanation: "生理食塩水はSIDが0であり、大量投与すると血漿SIDが低下し、代償性にHCO3-が減少するため、高クロール性の非アニオンギャップ代謝性アシドーシスを引き起こします。",
        page: 406
    },
    {
        question: "心機能低下患者において、動静脈血酸素含量差（AV difference）が増大している場合、何が示唆されますか？",
        options: ["心拍出量が増加している", "組織の酸素需要に対して酸素供給が不十分である", "敗血症を合併している"],
        answer: "組織の酸素需要に対して酸素供給が不十分である",
        explanation: "心拍出量が低下すると、組織は需要を満たすためにより多くの酸素を血液から抽出しようとします。その結果、動脈血と静脈血の酸素含量の差が大きくなります。",
        page: 412
    },
    {
        question: "急性呼吸窮迫症候群(ARDS)の患者にPermissive hypercapnia（許容性高炭酸ガス血症）を適用している際、代償的に生じる代謝性の変化は何ですか？",
        options: ["代謝性アシドーシス", "代謝性アルカローシス", "変化はない"],
        answer: "代謝性アルカローシス",
        explanation: "持続する呼吸性アシドーシスに対し、腎臓が代償的に重炭酸イオンを再吸収するため、代謝性アルカローシスが生じ、pHの変動を緩衝します。",
        page: 407
    },
    {
        question: "重度のアルカレミア（pH > 7.6）が冠循環に与える影響として最も懸念されることは何ですか？",
        options: ["冠血管拡張による過灌流", "冠動脈攣縮のリスク増加", "冠血管抵抗の低下"],
        answer: "冠動脈攣縮のリスク増加",
        explanation: "重度のアルカレミア、特に呼吸性アルカローシスは、冠動脈の血管攣縮を引き起こし、心筋虚血のリスクを増大させる可能性があります。",
        page: 405
    },
    {
        question: "Δgap [ (AG - 12) + HCO3- ] を計算する目的は何ですか？",
        options: ["呼吸性代償の程度を評価するため", "アニオンギャップ開大性代謝性アシドーシスに、他の代謝性障害が合併しているかを評価するため", "腎臓の機能を評価するため"],
        answer: "アニオンギャップ開大性代謝性アシドーシスに、他の代謝性障害が合併しているかを評価するため",
        explanation: "Δgapは、アニオンギャップの増加分を重炭酸に加えることで、アニオンギャップアシドーシス以外の代謝性アシドーシスやアルカローシスの合併を評価する指標です。",
        page: 408
    },
    {
        question: "心臓手術後に頻脈と低血圧を呈し、血液ガスでpH 7.25, PaCO2 30, HCO3- 12, BE -10という結果でした。最も考えられる酸塩基平衡障害の組み合わせはどれですか？",
        options: ["純粋な代謝性アシドーシス", "代謝性アシドーシスと呼吸性アシドーシスの合併", "代謝性アシドーシスと代償性の呼吸性アルカローシス"],
        answer: "代謝性アシドーシスと代償性の呼吸性アルカローシス",
        explanation: "低いHCO3-とBEは代謝性アシドーシスを示します。Winterの式で予測されるPaCO2は約26mmHgであり、実測値30mmHgは代償範囲内であるため、呼吸性代償を伴う代謝性アシドーシスと判断します。",
        page: 409
    },
    {
        question: "シアン化物中毒では、組織の酸素利用が障害されます。この時の混合静脈血酸素飽和度(SvO2)と動静脈血酸素含量差(AV difference)はどのようになると予測されますか？",
        options: ["SvO2は低下し、AV differenceは増大する", "SvO2は上昇し、AV differenceは減少する", "両者とも変化しない"],
        answer: "SvO2は上昇し、AV differenceは減少する",
        explanation: "シアン化物中毒では、組織が酸素を抽出できないため、静脈血の酸素飽和度が高くなり、動静脈の酸素含量差は著しく減少します。",
        page: 412
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

    window.location.href = 'c22_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
