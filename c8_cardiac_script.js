document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: プロポフォールは心筋収縮性に対してどのような影響を与えるか？",
            options: ["直接的な心筋抑制作用を持つ", "臨床的な濃度では心筋収縮性に影響を与えない", "直接的な心筋刺激作用を持つ"],
            answer: "臨床的な濃度では心筋収縮性に影響を与えない",
            explanation: "プロポフォールは主に血管拡張によって血圧を低下させ、臨床使用濃度では心筋収縮性への直接的な影響は少ないとされています。",
            page: 111
        },
        {
            question: "問2: 肥満患者へのプロポフォール投与量を計算する際に、総体重（TBW）ではなく除脂肪体重（LBW）を用いるべき理由は何か？",
            options: ["過剰な呼吸抑制を避けるため", "過剰な鎮痛効果を避けるため", "過度の血圧低下を避けるため"],
            answer: "過度の血圧低下を避けるため",
            explanation: "プロポフォールの分布容積は除脂肪体重とより相関します。総体重で計算すると過量投与となり、特に循環器系への影響（血圧低下）が強く現れる可能性があります。",
            page: 113
        },
        {
            question: "問3: 心タンポナーデや重度の心筋症患者において、プロポフォールによる血圧低下が特に顕著になる理由は何か？",
            options: ["これらの患者ではプロポフォールの代謝が遅延するため", "末梢血管拡張に対する代償的な心拍出量増加の能力が限られているため", "プロポフォールがこれらの患者で特に強い心筋抑制作用を示すため"],
            answer: "末梢血管拡張に対する代償的な心拍出量増加の能力が限られているため",
            explanation: "心タンポナーデや心筋症の患者は、前負荷や後負荷の変化に対して心拍出量を適切に維持する予備能が乏しいため、プロポフォールの血管拡張作用による血圧低下が著しくなります。",
            page: 112
        },
        {
            question: "問4: バルビツール酸系薬物が脳保護作用を示すと考えられている機序は何か？",
            options: ["脳血流量を増加させることによる", "脳酸素代謝率（CMRO2）を抑制することによる", "NMDA受容体を遮断することによる"],
            answer: "脳酸素代謝率（CMRO2）を抑制することによる",
            explanation: "バルビツール酸系薬物は、脳波が平坦になるまで用量依存的にCMRO2を低下させます。この代謝抑制作用が、虚血時のエネルギー需給バランスを改善し、脳を保護すると考えられています。",
            page: 114
        },
        {
            question: "問5: ケタミンが心筋抑制作用を持つにもかかわらず、心疾患患者への使用で血圧が上昇することがあるのはなぜか？",
            options: ["冠動脈を拡張させるため", "中枢性の交感神経刺激作用が心筋抑制作用を上回るため", "腎臓からのレニン分泌を促進するため"],
            answer: "中枢性の交感神経刺激作用が心筋抑制作用を上回るため",
            explanation: "ケタミンは心筋への直接的な抑制作用を持ちますが、通常はそれを上回る強力な中枢性交感神経刺激作用により、血圧や心拍数は上昇します。ただし、予備能のない心臓では抑制作用が顕在化することもあります。",
            page: 119
        },
        {
            question: "問6: 大動脈弁狭窄症（AS）患者の麻酔導入において、エトミデートがプロポフォールより安全な選択肢となりうる理由は何か？",
            options: ["エトミデートの方が鎮静作用が強いため", "エトミデートは後負荷（全身血管抵抗）を維持し、血圧変動が少ないため", "エトミデートは心拍数を増加させないため"],
            answer: "エトミデートは後負荷（全身血管抵抗）を維持し、血圧変動が少ないため",
            explanation: "重症AS患者では、後負荷の急激な低下は冠動脈灌流圧の低下と循環虚脱につながるため、血管拡張作用の少ないエトミデートは血行動態を安定させやすいです。",
            page: 121
        },
        {
            question: "問7: 敗血症性ショックの患者にエトミデートの持続投与が推奨されない主な理由は何か？",
            options: ["深刻な呼吸抑制を引き起こすため", "可逆的な副腎皮質機能抑制を引き起こし、死亡率を増加させる可能性があるため", "腎機能を悪化させるため"],
            answer: "可逆的な副腎皮質機能抑制を引き起こし、死亡率を増加させる可能性があるため",
            explanation: "エトミデートはコルチゾール産生を阻害し、副腎皮質機能を抑制します。ストレス下にある敗血症患者では、この作用が予後を悪化させる可能性が指摘されています。",
            page: 120
        },
        {
            question: "問8: デクスメデトミジンのボーラス投与時に一過性の血圧上昇と反射性徐脈がみられることがあるのはなぜか？",
            options: ["中枢性の交感神経刺激作用のため", "末梢血管のα2受容体刺激による血管収縮のため", "心筋のβ1受容体を直接刺激するため"],
            answer: "末梢血管のα2受容体刺激による血管収縮のため",
            explanation: "デクスメデトミジンのボーラス投与では、中枢での交感神経抑制作用が発現する前に、末梢血管のα2B受容体が刺激され、一過性の血管収縮とそれに伴う血圧上昇、反射性徐脈が起こることがあります。",
            page: 122
        },
        {
            question: "問9: 心臓手術後のせん妄予防において、プロポフォールやベンゾジアゼピンよりもデクスメデトミジンが有利である可能性を示唆する研究結果の根拠は何か？",
            options: ["デクスメデトミジンがより深い鎮静をもたらすため", "デクスメデトミジンがより自然な睡眠様の鎮静状態を誘導し、抗炎症作用も持つため", "デクスメデトミジンが脳血流を増加させるため"],
            answer: "デクスメデトミジンがより自然な睡眠様の鎮静状態を誘導し、抗炎症作用も持つため",
            explanation: "デクスメデトミジンは、生理的な睡眠に近い鎮静状態を誘導し、またストレス応答や炎症を抑制する作用を持つことから、術後せん妄のリスクを低減する可能性が複数の研究で示されています。",
            page: 122
        },
        {
            question: "問10: TIVA（完全静脈麻酔）が吸入麻酔と比較して、がん手術後の予後を改善する可能性が議論されている背景にある理論は何か？",
            options: ["TIVAの方が術中の血圧を高く維持できるため", "プロポフォールが免疫抑制作用を持たない、あるいは免疫能を維持する可能性があるため", "吸入麻酔薬が直接的な発がん性を持つため"],
            answer: "プロポフォールが免疫抑制作用を持たない、あるいは免疫能を維持する可能性があるため",
            explanation: "揮発性麻酔薬が免疫機能を抑制する可能性があるのに対し、プロポフォールは免疫抑制が少ない、あるいは抗腫瘍効果を持つ可能性が基礎研究で示唆されており、がんの再発率に影響を与えるか議論されています。",
            page: 113
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
        localStorage.setItem('c8_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c8_cardiac_results.html';
    });

    loadQuestion();
});
