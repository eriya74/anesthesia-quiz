const quizData = [
    {
        question: "喘息患者で、術前に経口ステロイドの短期投与を考慮すべき臨床状況はどれですか？",
        options: ["症状が完全にコントロールされている", "ピーク呼気流量(PEF)が予測値の80%以上である", "最近症状が悪化しており、PEFが予測値の80%未満である"],
        answer: "最近症状が悪化しており、PEFが予測値の80%未満である",
        explanation: "喘息のコントロールが不十分な場合、短期の経口ステロイド投与で気道炎症を抑えることが、周術期の気管支攣縮リスクを低減させます。",
        page: 479
    },
    {
        question: "重症COPD患者で肺性心を合併している場合、麻酔管理で特に避けるべきことは何ですか？",
        options: ["低酸素血症、高炭酸ガス血症、アシドーシス", "軽度の頻脈", "後負荷の適度な低下"],
        answer: "低酸素血症、高炭酸ガス血症、アシドーシス",
        explanation: "これらの因子はすべて肺血管抵抗(PVR)を上昇させ、右室後負荷を増大させるため、既存の右心不全を急激に悪化させる危険があります。",
        page: 480
    },
    {
        question: "閉塞性睡眠時無呼吸(OSA)患者の周術期管理において、オピオイドの使用を最小限にすべき主な理由は何ですか？",
        options: ["鎮痛効果が乏しいため", "上気道閉塞と呼吸抑制のリスクを増大させるため", "悪心・嘔吐を誘発しやすいため"],
        answer: "上気道閉塞と呼吸抑制のリスクを増大させるため",
        explanation: "OSA患者はオピオイドによる呼吸抑制や上気道筋の弛緩作用に非常に敏感であり、術後の無呼吸や気道閉塞のリスクが著しく高まります。",
        page: 482
    },
    {
        question: "肺切除術を受ける患者の術後合併症を予測する上で、ppoFEV1%と並んで重要な指標とされるものは何ですか？",
        options: ["ppoDLco% (術後予測肺拡散能)", "最大換気量 (MVV)", "残気量 (RV)"],
        answer: "ppoDLco% (術後予測肺拡散能)",
        explanation: "ppoFEV1%が呼吸メカニクスを反映するのに対し、ppoDLco%は残存肺のガス交換能を反映します。両者が40%未満の場合、合併症リスクは高くなります。",
        page: 485
    },
    {
        question: "左側臥位での片肺換気中、非換気側（上側）肺への血流を減少させる最も重要な生理学的メカニズムは何ですか？",
        options: ["重力", "低酸素性肺血管攣縮 (HPV)", "外科的操作による圧迫"],
        answer: "低酸素性肺血管攣縮 (HPV)",
        explanation: "HPVは、非換気肺胞の低酸素状態に反応して局所の肺動脈を収縮させ、血流を換気されている下側肺へ再分配する最も重要なメカニズムです。",
        page: 490
    },
    {
        question: "片肺換気中に低酸素血症が遷延する場合の対処法として、非換気側（上側）肺にCPAPを適用する目的は何ですか？",
        options: ["上側肺を完全に虚脱させるため", "上側肺にわずかな酸素を供給し、シャント血の酸素化を図るため", "下側肺のコンプライアンスを改善するため"],
        answer: "上側肺にわずかな酸素を供給し、シャント血の酸素化を図るため",
        explanation: "上側肺に低圧のCPAP（通常5-10cmH2O）を適用することで、シャント血を部分的に酸素化し、全体の動脈血酸素化を改善させることができます。",
        page: 494
    },
    {
        question: "右肺上葉切除術で分離肺換気を行う場合、左用ダブルルーメンチューブ(DLT)ではなく、右用DLTや気管支ブロッカーが選択されることがあるのはなぜですか？",
        options: ["左用DLTでは右肺の手術ができないから", "右気管支の解剖学的特徴（右上葉気管支の分岐が早い）のため", "気管支ブロッカーの方が安価だから"],
        answer: "右気管支の解剖学的特徴（右上葉気管支の分岐が早い）のため",
        explanation: "右主気管支は短く、すぐに右上葉気管支が分岐するため、左用DLTを右主気管支に挿入すると右上葉を閉塞するリスクがあります。そのため、右上葉換気孔のある右用DLTや気管支ブロッカーが考慮されます。",
        page: 489
    },
    {
        question: "肥満性低換気症候群(OHS)が閉塞性睡眠時無呼吸(OSA)と異なる点は何ですか？",
        options: ["日中の傾眠傾向がないこと", "覚醒時の高炭酸ガス血症を伴うこと", "肥満を伴わないこと"],
        answer: "覚醒時の高炭酸ガス血症を伴うこと",
        explanation: "OHSは、他の肺疾患がないにもかかわらず、覚醒時にも慢性的な高炭酸ガス血症(PaCO2 > 45mmHg)を呈する病態であり、呼吸ドライブの中枢性障害が関与しています。",
        page: 484
    },
    {
        question: "肺切除術後の疼痛管理として胸部硬膜外鎮痛が優れているとされる主な理由は何ですか？",
        options: ["鎮静作用が強いから", "優れた鎮痛効果により、深呼吸や咳嗽を可能にし、呼吸器合併症を減少させるから", "循環抑制が少ないから"],
        answer: "優れた鎮痛効果により、深呼吸や咳嗽を可能にし、呼吸器合併症を減少させるから",
        explanation: "胸部硬膜外鎮痛は、体性痛と交感神経の両方を強力にブロックし、オピオイド使用量を削減しながら有効な鎮痛を提供し、術後呼吸機能の維持に貢献します。",
        page: 495
    },
    {
        question: "巨大な前縦隔腫瘍を持つ患者で、仰臥位になると呼吸困難や失神（仰臥位低血圧症候群）が出現するメカニズムは何ですか？",
        options: ["迷走神経反射", "腫瘍による気管および心臓・大血管の圧迫", "横隔膜の弛緩"],
        answer: "腫瘍による気管および心臓・大血管の圧迫",
        explanation: "仰臥位では重力により腫瘍が後方に移動し、気管や肺動脈、上大静脈などを圧迫することで、気道閉塞や心拍出量の著しい低下を引き起こします。",
        page: 495
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

    window.location.href = 'c27_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
