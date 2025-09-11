const quizData = [
    {
        question: "動脈圧波形に基づく心拍出量(CO)モニターで、測定精度に影響を与える因子として最も重要なものはどれですか？",
        options: ["体温", "動脈コンプライアンスや血管抵抗の変動", "ヘモグロビン濃度"],
        answer: "動脈コンプライアンスや血管抵抗の変動",
        explanation: "これらのモニターは動脈圧波形を解析して一回拍出量を推定するため、血管作動薬の使用などで血管の特性が変化すると、キャリブレーションが必要になるか、精度が低下します。",
        page: "N/A"
    },
    {
        question: "カプノグラムのαアングル（alpha angle）が増大している場合、どのような病態が考えられますか？",
        options: ["気管支攣縮などの呼気流出路閉塞", "肺塞栓症", "再呼吸"],
        answer: "気管支攣縮などの呼気流出路閉塞",
        explanation: "αアングルはフェーズIIとIIIの移行部の角度で、呼気流出路閉塞があると肺胞ガスの呼出が遅延し、この角度が増大します（シャークフィン様波形）。",
        page: "N/A"
    },
    {
        question: "パルスオキシメータの測定値が不正確になる原因として正しいものはどれですか？",
        options: ["貧血 (Hb > 5g/dL)", "メトヘモグロビン血症", "黄疸"],
        answer: "メトヘモグロビン血症",
        explanation: "メトヘモグロビンは赤色光と赤外光の両方を吸収するため、存在するとSpO2値は実際の飽和度に関わらず85%付近に収束する傾向があります。",
        page: "N/A"
    },
    {
        question: "食道ドップラーモニターで測定されるCorrected Flow Time (FTc)が短縮している場合、何を意味しますか？",
        options: ["後負荷が高い", "前負荷が不足している（循環血液量減少）", "心収縮力が低下している"],
        answer: "前負荷が不足している（循環血液量減少）",
        explanation: "FTcは心周期に対する駆出時間の割合を示し、前負荷に敏感に反応します。FTcの短縮は、左室充満が不十分であることを示唆します。",
        page: "N/A"
    },
    {
        question: "観血的動脈圧ラインの波形が「なまり（damping）」を示す場合、その原因として考えられるものはどれですか？",
        options: ["トランスデューサーの位置が高すぎる", "ライン内に気泡や血栓が存在する", "チューブが長すぎる"],
        answer: "ライン内に気泡や血栓が存在する",
        explanation: "ライン内の気泡、血栓、カテーテルのキンクなどは、圧波形の伝達を妨げ、収縮期圧が低く、拡張期圧が高く表示される「なまり」の原因となります。",
        page: "N/A"
    },
    {
        question: "近赤外線分光法(NIRS)を用いた脳酸素飽和度モニター(rSO2)が低下した場合、その原因として考えにくいものはどれですか？",
        options: ["低血圧や低心拍出量", "低酸素血症や高度な貧血", "高炭酸ガス血症"],
        answer: "高炭酸ガス血症",
        explanation: "高炭酸ガス血症は脳血管を拡張させ、脳血流を増加させるため、通常はrSO2を上昇させる方向に働きます。rSO2の低下は脳への酸素供給低下を示唆します。",
        page: "N/A"
    },
    {
        question: "呼気ガス麻酔薬モニターで、吸気濃度と呼気終末濃度（ET concentration）の差が大きい場合、それは何を意味しますか？",
        options: ["麻酔薬の溶解度が高く、組織への取り込みが大きい", "麻酔深度が安定している", "心拍出量が低い"],
        answer: "麻酔薬の溶解度が高く、組織への取り込みが大きい",
        explanation: "吸気と呼気終末濃度の差は、肺胞から血液への麻酔薬の取り込みを反映します。溶解度が高い麻酔薬や、導入初期、心拍出量が高い状態ではこの差が大きくなります。",
        page: "N/A"
    },
    {
        question: "経皮的二酸化炭素分圧(PtcCO2)モニタリングに関する記述で正しいものはどれですか？",
        options: ["常にPaCO2と一致する", "末梢循環不全があるとPaCO2より高く測定される", "センサー部の加温は不要である"],
        answer: "末梢循環不全があるとPaCO2より高く測定される",
        explanation: "PtcCO2は局所の組織CO2産生と血流に影響されます。ショックなどで末梢循環が悪化すると、CO2のウォッシュアウトが低下し、PaCO2よりも高い値を示します。",
        page: "N/A"
    },
    {
        question: "手術部位のSSI（手術部位感染）予防の観点から、周術期に体温をモニターし、正常に保つことが推奨されています。目標とすべき核心温度は何度以上ですか？",
        options: ["35.0℃", "36.0℃", "37.0℃"],
        answer: "36.0℃",
        explanation: "周術期の低体温はSSIのリスクを増加させることが知られており、多くのガイドラインで核心温度を36.0℃以上に維持することが推奨されています。",
        page: "N/A"
    },
    {
        question: "ST変化をモニタリングする心電図誘導として、前壁虚血の検出に最も感度が高いとされるのはどの誘導の組み合わせですか？",
        options: ["II, aVF", "V5, II", "I, aVL"],
        answer: "V5, II",
        explanation: "V5は左室側壁・前壁の変化を、II誘導は下壁の変化を捉えやすいため、この2誘導を監視することで広範囲の心筋虚血を高い感度で検出できるとされています。",
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

    window.location.href = 'c20_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
