document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 全身麻酔薬や区域麻酔の多くが全身血管抵抗(SVR)に与える影響は何か？",
            options: ["SVRを増加させる", "SVRを減少させる", "SVRに影響を与えない"],
            answer: "SVRを減少させる",
            explanation: "多くの全身麻酔薬や神経軸麻酔は血管を拡張させ、SVRを低下させる作用があります。これが麻酔中の血圧低下の一因となります。",
            page: 52
        },
        {
            question: "問2: 心拍出量(CO)は、心拍数(HR)と何の積で定義されるか？",
            options: ["駆出率(EF)", "一回拍出量(SV)", "拡張末期容積(EDV)"],
            answer: "一回拍出量(SV)",
            explanation: "心拍出量(CO)は、心臓が1分間に送り出す血液量であり、1回ごとの拍出量(SV)と心拍数(HR)の積で計算されます (CO = HR × SV)。",
            page: 52
        },
        {
            question: "問3: オキシヘモグロビン解離曲線において、P50が意味するものは何か？",
            options: ["ヘモグロビン飽和度が50%になる時の動脈血酸素分圧", "ヘモグロビン飽和度が50%になる時の静脈血酸素分圧", "ヘモグロビン飽和度が50%になる時の酸素分圧"],
            answer: "ヘモグロビン飽和度が50%になる時の酸素分圧",
            explanation: "P50は、ヘモグロビンが酸素で50%飽和したときの酸素分圧を示し、酸素とヘモグロビンの親和性の指標となります。正常値は約26.8 mmHgです。",
            page: 58
        },
        {
            question: "問4: 肺におけるガス交換の基本単位である肺胞と毛細血管の間の酸素移動は何によって行われるか？",
            options: ["能動輸送", "拡散", "浸透"],
            answer: "拡散",
            explanation: "肺胞内の高い酸素分圧と、肺毛細血管内の低い酸素分圧の差（分圧較差）によって、酸素は拡散の原理に従って血液中に移動します。",
            page: "59, Fig. 5.7"
        },
        {
            question: "問5: 呼吸回路のCO2吸収剤が枯渇した場合、患者に何が起こるか？",
            options: ["低酸素血症", "高炭酸ガス血症（再呼吸による）", "低血圧"],
            answer: "高炭酸ガス血症（再呼吸による）",
            explanation: "CO2吸収剤が枯渇すると、呼気中のCO2が除去されずに再度吸入（再呼吸）され、動脈血中のCO2濃度が上昇し、高炭酸ガス血症を引き起こします。",
            page: 62
        },
        {
            question: "問6: 機能的残気量(FRC)とは何か？",
            options: ["最大吸気後に肺に残る空気量", "通常の呼気後に肺に残る空気量", "最大呼気後に肺に残る空気量"],
            answer: "通常の呼気後に肺に残る空気量",
            explanation: "FRCは、安静時の通常の呼気の終わりに肺内に残っている空気の量です。肺が虚脱しようとする力と胸郭が拡大しようとする力が釣り合う点です。",
            page: 64
        },
        {
            question: "問7: 気道抵抗が主に発生するのは気道のどの部分か？",
            options: ["気管と主気管支", "細気管支", "肺胞"],
            answer: "気管と主気管支",
            explanation: "気道の断面積は末梢に行くほど合計で大きくなるため、抵抗は主に中枢側の太い気道（気管や気管支）で発生します。",
            page: 64
        },
        {
            question: "問8: 呼吸リズムの生成と調節を行っている中枢はどこにあるか？",
            options: ["大脳皮質", "小脳", "脳幹"],
            answer: "脳幹",
            explanation: "呼吸の基本的なリズムは、脳幹（特に延髄と橋）にある呼吸中枢によって自動的に生成・調節されています。",
            page: 65
        },
        {
            question: "問9: オピオイドによる呼吸抑制に対して、最も特異的な拮抗薬はどれか？",
            options: ["フルマゼニル", "ナロキソン", "スガマデクス"],
            answer: "ナロキソン",
            explanation: "ナロキソンはオピオイド受容体に競合的に結合し、オピオイドの作用を拮抗することで、呼吸抑制などの副作用を改善します。",
            page: 66
        },
        {
            question: "問10: 組織への酸素供給量(DO2)を決定する2つの主要な因子は何か？",
            options: ["心拍出量(CO)と動脈血酸素含量(CaO2)", "心拍数(HR)とヘモグロビン濃度", "全身血管抵抗(SVR)と動脈血酸素飽和度(SaO2)"],
            answer: "心拍出量(CO)と動脈血酸素含量(CaO2)",
            explanation: "酸素供給量(DO2)は、心臓が送り出す血液量（心拍出量）と、その血液に含まれる酸素の量（動脈血酸素含量）の積で決まります (DO2 = CO × CaO2)。",
            page: 67
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
        localStorage.setItem('residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c5_resident_results.html';
    });

    loadQuestion();
});
