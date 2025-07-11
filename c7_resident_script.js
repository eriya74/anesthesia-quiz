document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 吸入麻酔薬の強さを比較する指標として用いられるMACが意味するものは何か？",
            options: ["50%の患者が痛みを感じなくなる濃度", "50%の患者が外科的切開に対して動かなくなる濃度", "50%の患者が意識を失う濃度"],
            answer: "50%の患者が外科的切開に対して動かなくなる濃度",
            explanation: "最小肺胞濃度（MAC）は、集団の50%において外科的切開という侵害刺激に対する体動を抑制するのに必要な吸入麻酔薬の濃度と定義されます。",
            page: 88
        },
        {
            question: "問2: 血液/ガス分配係数が低い吸入麻酔薬（例：デスフルラン）の特徴は何か？",
            options: ["導入と覚醒が遅い", "導入と覚醒が速い", "鎮痛作用が強い"],
            answer: "導入と覚醒が速い",
            explanation: "血液/ガス分配係数が低い麻酔薬は血液に溶けにくいため、肺胞濃度が速やかに上昇・低下し、結果として導入と覚醒が速くなります。",
            page: 87
        },
        {
            question: "問3: 笑気（亜酸化窒素）を長期間使用した場合に欠乏し、神経障害や巨赤芽球性貧血を引き起こす可能性があるビタミンは何か？",
            options: ["ビタミンC", "ビタミンD", "ビタミンB12"],
            answer: "ビタミンB12",
            explanation: "笑気はメチオニン合成酵素を阻害し、ビタミンB12を不活性化します。これによりホモシステインが蓄積し、DNA合成が障害される可能性があります。",
            page: 97
        },
        {
            question: "問4: 揮発性吸入麻酔薬が心血管系に与える最も一般的な影響は何か？",
            options: ["血圧上昇", "末梢血管抵抗の増加", "全身血管抵抗の低下による血圧低下"],
            answer: "全身血管抵抗の低下による血圧低下",
            explanation: "すべての揮発性吸入麻酔薬は、主に全身の血管を拡張させることにより、用量依存的に血圧を低下させます。",
            page: 94
        },
        {
            question: "問5: 悪性高熱症（MH）の特異的な治療薬は何か？",
            options: ["プロポフォール", "ダントロレン", "スキサメトニウム"],
            answer: "ダントロレン",
            explanation: "ダントロレンは筋小胞体からのカルシウム放出を抑制することで、悪性高熱症の異常な筋収縮と高代謝状態を治療する特異的な薬剤です。",
            page: 98
        },
        {
            question: "問6: 吸入麻酔薬の導入時に、高濃度の笑気を併用すると他の揮発性麻酔薬の肺胞内濃度の上昇が速まる効果を何と呼ぶか？",
            options: ["濃度効果", "セカンドガス効果", "拡散性低酸素症"],
            answer: "セカンドガス効果",
            explanation: "多量の笑気が血液中に急速に取り込まれると肺胞の容積が減少し、残された他のガス（第二ガス）が濃縮され、その取り込みが促進されます。",
            page: 88
        },
        {
            question: "問7: 揮発性吸入麻酔薬が呼吸器系に与える影響として正しいものはどれか？",
            options: ["一回換気量を増加させる", "呼吸数を増加させ、一回換気量を減少させる", "呼吸数を減少させる"],
            answer: "呼吸数を増加させ、一回換気量を減少させる",
            explanation: "揮発性吸入麻酔薬は、呼吸数を増加させる一方で一回換気量を減少させ、結果として分時換気量は用量依存的に減少します。",
            page: 94
        },
        {
            question: "問8: 現代の揮発性吸入麻酔薬（イソフルラン、セボフルラン、デスフルラン）の化学構造上の共通点は何か？",
            options: ["ハロゲン化アルカンである", "ハロゲン化エーテルである", "窒素酸化物である"],
            answer: "ハロゲン化エーテルである",
            explanation: "現在主に使用されている揮発性吸入麻酔薬は、いずれもフッ素や塩素でハロゲン化されたエーテル化合物です。",
            page: 83
        },
        {
            question: "問9: 手術後の悪心・嘔吐（PONV）のリスク因子として正しいものはどれか？",
            options: ["男性", "喫煙者", "PONV/乗り物酔いの既往"],
            answer: "PONV/乗り物酔いの既往",
            explanation: "Apfelスコアで示されるように、女性、非喫煙、PONV/乗り物酔いの既往、術後オピオイド使用がPONVの4大リスク因子です。",
            page: 97
        },
        {
            question: "問10: 吸入麻酔薬による不動化作用（Immobility）は、主に中枢神経系のどの部位への作用によってもたらされるか？",
            options: ["大脳皮質", "視床", "脊髄"],
            answer: "脊髄",
            explanation: "動物実験により、吸入麻酔薬による不動化作用は、脳ではなく主に脊髄レベルでの作用によって媒介されることが強く示唆されています。",
            page: 92
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
        localStorage.setItem('c7_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c7_resident_results.html';
    });

    loadQuestion();
});
