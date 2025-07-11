document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: Meyer-Overtonの相関が示す、吸入麻酔薬の物理化学的性質と麻酔作用の強さの関係は何か？",
            options: ["沸点と麻酔作用は逆相関する", "脂溶性（油/ガス分配係数）と麻酔作用は正の相関がある", "分子量と麻酔作用は正の相関がある"],
            answer: "脂溶性（油/ガス分配係数）と麻酔作用は正の相関がある",
            explanation: "Meyer-Overtonの相関は、吸入麻酔薬の麻酔作用の強さ（MACの逆数）が、その脂溶性（油/ガス分配係数）と強く相関することを示した経験則です。",
            page: 91
        },
        {
            question: "問2: デスフルランの気化器が他の揮発性麻酔薬と異なり、加熱・加圧機構を必要とする主な理由は何か？",
            options: ["血液/ガス分配係数が非常に低いため", "沸点が室温に近く、蒸気圧が非常に高いため", "化学的に不安定で分解しやすいため"],
            answer: "沸点が室温に近く、蒸気圧が非常に高いため",
            explanation: "デスフルランの沸点は24℃と室温に近く、蒸気圧が著しく高いため、従来の気化器では正確な濃度制御が困難です。そのため、加熱・加圧して一定の蒸気圧を保つ特殊な気化器が必要です。",
            page: 84
        },
        {
            question: "問3: 揮発性吸入麻酔薬は、脳血流（CBF）と脳酸素代謝率（CMRO2）にどのような影響を与えるか？",
            options: ["CBFを増加させ、CMRO2を増加させる", "CBFを減少させ、CMRO2を減少させる", "CBFを増加させ、CMRO2を減少させる（Uncoupling）"],
            answer: "CBFを増加させ、CMRO2を減少させる（Uncoupling）",
            explanation: "揮発性吸入麻酔薬は脳血管を直接拡張させてCBFを増加させる一方、神経活動を抑制してCMRO2を減少させます。この血流と代謝の乖離はuncouplingと呼ばれます。",
            page: 94
        },
        {
            question: "問4: 揮発性吸入麻酔薬による低酸素性肺血管収縮（HPV）の抑制が、臨床的に問題となりにくい主な理由は何か？",
            options: ["HPVはガス交換にほとんど寄与しないため", "麻酔薬が肺血管を収縮させる作用も併せ持つため", "片肺換気中でも、その影響は比較的小さく、臨床的に大きなシャント増加には繋がらないため"],
            answer: "片肺換気中でも、その影響は比較的小さく、臨床的に大きなシャント増加には繋がらないため",
            explanation: "揮発性麻酔薬は用量依存的にHPVを抑制しますが、臨床使用濃度（1-1.5 MAC）ではその影響は限定的で、片肺換気などにおける酸素化の悪化は通常臨床的に問題になりません。",
            page: 95
        },
        {
            question: "問5: セボフルランが乾燥した二酸化炭素吸収剤と反応して生成し、腎毒性が懸念される物質は何か？",
            options: ["フッ化物イオン", "一酸化炭素（CO）", "コンパウンドA"],
            answer: "コンパウンドA",
            explanation: "セボフルランは、特に水酸化カリウムや水酸化ナトリウムを含む強アルカリ性のCO2吸収剤と反応して、ビニルエーテル化合物であるコンパウンドAを生成します。",
            page: 101
        },
        {
            question: "問6: MAC-awakeとは何を定義したものか？",
            options: ["50%の患者が外科的切開に反応しなくなる濃度", "50%の患者が口頭命令に応答しなくなる濃度", "50%の患者が口頭命令に応答できるようになる濃度"],
            answer: "50%の患者が口頭命令に応答できるようになる濃度",
            explanation: "MAC-awakeは、麻酔からの覚醒過程において、集団の50%が口頭命令に応答可能となる時点での麻酔薬の肺胞濃度を指し、MACの約1/3とされています。",
            page: 90
        },
        {
            question: "問7: 揮発性吸入麻酔薬の中で、心拍数を最も増加させやすい傾向があるのはどれか？",
            options: ["セボフルラン", "イソフルラン", "デスフルラン"],
            answer: "デスフルラン",
            explanation: "デスフルランは、特に濃度を急激に上昇させた際に、交感神経活動の亢進を介して顕著な頻脈を引き起こすことがあります。",
            page: 94
        },
        {
            question: "問8: 悪性高熱症（MH）感受性患者において、安全に使用できる麻酔法はどれか？",
            options: ["セボフルランとレミフェンタニルの併用", "デスフルランと硬膜外麻酔の併用", "プロポフォールとオピオイドによる完全静脈麻酔（TIVA）"],
            answer: "プロポフォールとオピオイドによる完全静脈麻酔（TIVA）",
            explanation: "悪性高熱症は揮発性吸入麻酔薬とスキサメトニウムによって誘発されます。そのため、これらの誘因薬物を避けた静脈麻酔薬、オピオイド、非脱分極性筋弛緩薬、局所麻酔薬、笑気などを使用します。",
            page: 98
        },
        {
            question: "問9: GAS trialの結果が示した、乳幼児の単回・短時間の麻酔曝露に関する結論は何か？",
            options: ["セボフルラン麻酔は区域麻酔より神経発達に悪影響を及ぼす", "1時間程度のセボフルラン麻酔は、その後の神経認知機能に影響を与えない", "すべての吸入麻酔は乳幼児の脳に永続的な障害を与える"],
            answer: "1時間程度のセボフルラン麻酔は、その後の神経認知機能に影響を与えない",
            explanation: "大規模臨床試験であるGAS trialは、乳児期の1時間程度の単回セボフルラン麻酔が、2歳および5歳時点での神経発達に悪影響を及ぼさないことを示しました。",
            page: 100
        },
        {
            question: "問10: 吸入麻酔薬の環境への影響について、地球温暖化係数（GWP）が最も高いのはどれか？",
            options: ["セボフルラン", "イソフルラン", "デスフルラン"],
            answer: "デスフルラン",
            explanation: "大気中に放出された際の地球温暖化への影響は、デスフルランが最も大きく、次いでイソフルラン、セボフルランの順となります。笑気もGWPが高いガスです。",
            page: 103
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
        localStorage.setItem('c7_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c7_general_results.html';
    });

    loadQuestion();
});
