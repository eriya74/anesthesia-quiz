document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: プロポフォール、バルビツール酸系、ベンゾジアゼピン系、エトミデートに共通する主な作用機序は何か？",
            options: ["NMDA受容体の遮断", "GABAA受容体の活性化", "α2アドレナリン受容体の刺激"],
            answer: "GABAA受容体の活性化",
            explanation: "これらの静脈麻酔薬は、主要な抑制性神経伝達物質であるGABAの受容体（GABAA受容体）に作用し、その機能を増強することで麻酔作用を発揮します。",
            page: 109
        },
        {
            question: "問2: 静脈麻酔薬を単回急速静注した後、作用が速やかに消失する主な理由は何か？",
            options: ["肝臓での速やかな代謝", "腎臓からの速やかな排泄", "脳から血流の少ない組織（筋肉や脂肪）への再分布"],
            answer: "脳から血流の少ない組織（筋肉や脂肪）への再分布",
            explanation: "脂溶性の高い静脈麻酔薬は、まず血流の豊富な脳に分布して作用を発現しますが、その後、血流の少ない筋肉や脂肪組織へ再分布することで脳内濃度が低下し、作用が消失します。",
            page: 108
        },
        {
            question: "問3: プロポフォールが他の静脈麻酔薬と比較して、特に優れているとされる臨床的特徴は何か？",
            options: ["強力な鎮痛作用", "循環動態への影響が全くない", "強力な気道反射抑制作用と制吐作用"],
            answer: "強力な気道反射抑制作用と制吐作用",
            explanation: "プロポフォールは気道反射を強く抑制するため、ラリンジアルマスクなどの声門上器具の挿入に適しています。また、術後悪心・嘔吐を抑制する作用も持ちます。",
            page: 112
        },
        {
            question: "問4: ケタミンの主な作用機序と、それによってもたらされる特徴的な麻酔状態は何か？",
            options: ["GABAA受容体活性化による鎮静麻酔", "NMDA受容体遮断による解離性麻酔", "オピオイド受容体刺激による鎮痛麻酔"],
            answer: "NMDA受容体遮断による解離性麻酔",
            explanation: "ケタミンは主に興奮性神経伝達物質であるグルタミン酸のNMDA受容体を遮断し、「解離性麻酔」と呼ばれる、開眼したままの独特な麻酔状態を引き起こします。",
            page: 118
        },
        {
            question: "問5: エトミデートが麻酔導入薬として選択されることがある最大の理由は何か？",
            options: ["鎮痛作用が最も強いから", "循環動態への影響が最も少ないから", "健忘作用が最も強いから"],
            answer: "循環動態への影響が最も少ないから",
            explanation: "エトミデートは、他の静脈麻酔薬と比較して血圧や心拍数への影響が非常に少なく、循環動態が不安定な患者の麻酔導入において優れた選択肢となります。",
            page: 120
        },
        {
            question: "問6: ベンゾジアゼピン系薬物（ミダゾラムなど）の作用を特異的に拮抗する薬剤は何か？",
            options: ["ナロキソン", "スガマデクス", "フルマゼニル"],
            answer: "フルマゼニル",
            explanation: "フルマゼニルはベンゾジアゼピン受容体に競合的に結合し、ミダゾラムなどのベンゾジアゼピン系薬物の鎮静作用や呼吸抑制作用を拮抗します。",
            page: 115
        },
        {
            question: "問7: プロポフォールを急速静注した際に最も顕著にみられる循環器系への副作用は何か？",
            options: ["著しい頻脈", "著しい血圧上昇", "著しい血管拡張による血圧低下"],
            answer: "著しい血管拡張による血圧低下",
            explanation: "プロポフォールは強力な動脈および静脈の血管拡張作用を持ち、特に急速投与や循環血液量が少ない患者では著しい血圧低下を引き起こす可能性があります。",
            page: 111
        },
        {
            question: "問8: バルビツール酸系薬物（チオペンタールなど）の溶液がアルカリ性であるため、混合してはならない酸性の薬剤の例は何か？",
            options: ["オピオイド", "非脱分極性筋弛緩薬（ロクロニウムなど）", "局所麻酔薬"],
            answer: "非脱分極性筋弛緩薬（ロクロニウムなど）",
            explanation: "アルカリ性のバルビツール酸溶液は、酸性である筋弛緩薬などと混合すると沈殿を生じ、静脈ラインを閉塞させる危険があります。",
            page: 114
        },
        {
            question: "問9: デクスメデトミジンがα2受容体を刺激することで得られる、他の鎮静薬と異なる特徴的な作用は何か？",
            options: ["強力な呼吸抑制", "協力的な鎮静状態と鎮痛作用", "著しい健忘作用"],
            answer: "協力的な鎮静状態と鎮痛作用",
            explanation: "デクスメデトミジンは、呼吸抑制が少なく、呼びかけに応じられるような協力的な鎮静状態（cooperative sedation）と、鎮痛作用を併せ持つのが特徴です。",
            page: 121
        },
        {
            question: "問10: ケタミンが他の静脈麻酔薬と異なり、一般的に循環器系を刺激する（血圧・心拍数を上昇させる）機序は何か？",
            options: ["心筋を直接刺激するため", "中枢性の交感神経刺激作用とノルエピネフリン再取り込み阻害のため", "副交感神経を抑制するため"],
            answer: "中枢性の交感神経刺激作用とノルエピネフリン再取り込み阻害のため",
            explanation: "ケタミンは中枢を介して交感神経系を活性化させ、さらに神経終末でのノルエピネフリン再取り込みを阻害することで、血圧と心拍数を上昇させます。",
            page: 119
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
        localStorage.setItem('c8_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c8_resident_results.html';
    });

    loadQuestion();
});
