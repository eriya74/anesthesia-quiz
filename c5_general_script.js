document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 平均動脈圧(MAP)を決定する主要な生理学的要素の組み合わせとして正しいものはどれか？",
            options: ["心拍出量(CO)と心拍数(HR)", "全身血管抵抗(SVR)と心拍出量(CO)", "一回拍出量(SV)と全身血管抵抗(SVR)"],
            answer: "全身血管抵抗(SVR)と心拍出量(CO)",
            explanation: "MAPはSVRとCOの積で表されます。低血圧の評価では、どちらが主要な原因かを考慮することが重要です。",
            page: 52
        },
        {
            question: "問2: Frank-Starling機構において、前負荷の増大が心拍出量を最も効果的に増加させるのは、心機能曲線のどの部分か？",
            options: ["曲線の平坦な部分", "曲線の急な部分", "曲線の下降する部分"],
            answer: "曲線の急な部分",
            explanation: "心機能曲線の急な部分では、前負荷のわずかな増加がSVとCOを劇的に増加させます（容量反応性）。",
            page: 53
        },
        {
            question: "問3: 後負荷が心機能に与える影響として正しいものはどれか？",
            options: ["後負荷が高いと、一回拍出量(SV)は増加する。", "後負荷が低いと、心室充満圧は上昇する。", "後負荷が高いと、心臓は完全には空にならず、SV、EF、COが低下する。"],
            answer: "後負荷が高いと、心臓は完全には空にならず、SV、EF、COが低下する。",
            explanation: "高いSVR（後負荷）は心臓の駆出を妨げ、SV、EF、COを低下させ、心充満圧を上昇させる可能性があります。",
            page: 54
        },
        {
            question: "問4: 左心室の心筋が主に灌流されるのは心周期のどの時期か？",
            options: ["収縮期", "拡張期", "収縮期と拡張期の両方"],
            answer: "拡張期",
            explanation: "収縮期には心筋壁の張力により血流が停止するため、左心室は主に拡張期に灌流されます。",
            page: 56
        },
        {
            question: "問5: 低酸素性肺血管攣縮(HPV)に関する記述で正しいものはどれか？",
            options: ["全身的な肺胞低酸素は、肺動脈圧を低下させる。", "換気の悪い領域から血流を遠ざけ、ガス交換を改善する適応反応である。", "吸入麻酔薬はHPVを増強する。"],
            answer: "換気の悪い領域から血流を遠ざけ、ガス交換を改善する適応反応である。",
            explanation: "HPVは、換気の悪い肺領域への血流を減少させ、シャント率を低下させることでガス交換を改善する重要な生理的メカニズムです。",
            page: 57
        },
        {
            question: "問6: 酸素解離曲線が右方移動する原因はどれか？",
            options: ["低体温", "アルカローシス", "アシドーシス"],
            answer: "アシドーシス",
            explanation: "アシドーシス、高炭酸ガス血症、体温上昇は酸素解離曲線を右方へ移動させ、組織での酸素放出を促進します。",
            page: 58
        },
        {
            question: "問7: 100%酸素を投与しても改善しない低酸素血症の最も重要な原因は何か？",
            options: ["換気血流不均衡", "拡散障害", "肺内シャント"],
            answer: "肺内シャント",
            explanation: "肺内シャントでは、静脈血が肺胞ガスに曝されずに循環するため、100%酸素投与でも低酸素血症は完全には是正されません。",
            page: 61
        },
        {
            question: "問8: PaCO2を決定する式 `PaCO2 = k * (V̇CO2 / V̇A)` において、V̇Aは何を表すか？",
            options: ["分時換気量", "肺胞換気量", "死腔換気量"],
            answer: "肺胞換気量",
            explanation: "PaCO2は、CO2産生量（V̇CO2）と肺胞換気量（V̇A）のバランスで決まります。肺胞換気量が半減するとPaCO2は倍増します。",
            page: 62
        },
        {
            question: "問9: 陽圧換気中に高い気道内圧が観察された場合、気道抵抗成分と静的コンプライアンス成分を区別するために有用な操作は何か？",
            options: ["一回換気量を増やす", "吸気ホールド（吸気ポーズ）", "呼吸回数を増やす"],
            answer: "吸気ホールド（吸気ポーズ）",
            explanation: "吸気ホールドを行うと、ガスフローが停止し抵抗成分が消失するため、プラトー圧が得られ、静的コンプライアンスを評価できます。",
            page: 65
        },
        {
            question: "問10: オピオイドが呼吸に与える主な影響は何か？",
            options: ["末梢化学受容体を刺激する。", "低酸素換気応答を増強する。", "高炭酸ガス換気応答の傾きを低下させ、無呼吸閾値を上昇させる。"],
            answer: "高炭酸ガス換気応答の傾きを低下させ、無呼吸閾値を上昇させる。",
            explanation: "オピオイドは中枢性に呼吸を抑制し、CO2に対する換気応答を鈍化させ、無呼吸を起こしやすくします。",
            page: 66
        }
    ];

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });

        nextBtn.style.display = 'none';
        if (currentQuestionIndex === quizData.length - 1) {
            finishBtn.style.display = 'none';
        }
    }

    function selectOption(button, selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        userAnswers[currentQuestionIndex] = {
            question: currentQuestion.question,
            selected: selectedOption,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect,
            explanation: currentQuestion.explanation,
            page: currentQuestion.page
        };

        Array.from(optionsContainer.children).forEach(btn => {
            btn.disabled = true;
            if (btn.innerText === currentQuestion.answer) {
                btn.classList.add('correct');
            } else if (btn.innerText === selectedOption) {
                btn.classList.add('incorrect');
            }
        });

        if (currentQuestionIndex < quizData.length - 1) {
            nextBtn.style.display = 'block';
        } else {
            finishBtn.style.display = 'block';
        }
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    finishBtn.addEventListener('click', () => {
        localStorage.setItem('quizResults', JSON.stringify(userAnswers));
        window.location.href = 'c5_general_results.html';
    });

    loadQuestion();
});
