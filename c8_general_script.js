document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: プロポフォールのクリアランスが肝血流量を超えるという事実が示唆するものは何か？",
            options: ["プロポフォールは主に腎臓で代謝される", "プロポフォールは肝臓以外の組織でも代謝される", "プロポフォールの代謝には個人差がない"],
            answer: "プロポフォールは肝臓以外の組織でも代謝される",
            explanation: "プロポフォールの血漿クリアランスは肝血流量を上回るため、肝臓だけでなく肺や腎臓、小腸など肝外組織での代謝が重要な役割を果たしていることが示唆されます。",
            page: 110
        },
        {
            question: "問2: context-sensitive half-time（文脈依存性半減期）が、持続静注後の薬物動態を評価する上で重要な指標である理由は何か？",
            options: ["薬物の最大効果濃度を示すから", "薬物の投与開始から効果発現までの時間を示すから", "持続投与を中止してから血中濃度が50%に低下するまでの時間を示し、覚醒の予測に有用だから"],
            answer: "持続投与を中止してから血中濃度が50%に低下するまでの時間を示し、覚醒の予測に有用だから",
            explanation: "文脈依存性半減期は、投与時間（文脈）に依存して変化する薬剤の蓄積性を反映し、持続投与後の回復時間を予測するための重要な薬物動態学的指標です。",
            page: 110
        },
        {
            question: "問3: プロポフォール注入症候群（PRIS）を疑うべき臨床徴候は何か？",
            options: ["高血圧、頻脈、高血糖", "予期せぬ不整脈や心電図変化、代謝性アシドーシス、横紋筋融解症", "呼吸抑制、低体温、低カリウム血症"],
            answer: "予期せぬ不整脈や心電図変化、代謝性アシドーシス、横紋筋融解症",
            explanation: "PRISは、特に高用量のプロポフォールを長時間投与した際に発症しうる稀で致死的な合併症で、代謝性アシドーシス、横紋筋融解症、高カリウム血症、不整脈などが特徴です。",
            page: 113
        },
        {
            question: "問4: メトヘキシタールが電気けいれん療法（ECT）の麻酔にしばしば用いられる理由は何か？",
            options: ["最も強力な鎮静作用を持つため", "けいれん発作の閾値を下げ、発作を誘発しやすくするため", "循環抑制が最も少ないため"],
            answer: "けいれん発作の閾値を下げ、発作を誘発しやすくするため",
            explanation: "メトヘキシタールは他のバルビツール酸薬と異なり、てんかん焦点を活性化させる作用があるため、ECTにおいて十分な長さのけいれん発作を得る目的で使用されます。",
            page: 114
        },
        {
            question: "問5: ベンゾジアゼピン系薬物がGABAA受容体に作用する際、プロポフォールやバルビツール酸系と異なる点は何か？",
            options: ["受容体の細胞内ドメインに結合する", "GABAが存在しなくても単独でチャネルを開口できる", "GABAのチャネル開口作用を増強するが、単独ではチャネルを開口できない"],
            answer: "GABAのチャネル開口作用を増強するが、単独ではチャネルを開口できない",
            explanation: "ベンゾジアゼピンはGABAA受容体の細胞外ドメインに結合し、GABAの親和性を高めてその作用を増強しますが、プロポフォールなどとは異なり、GABA非存在下で直接チャネルを開くことはできません。",
            page: 115
        },
        {
            question: "問6: 肝機能障害のある患者において、ロラゼパムが他のベンゾジアゼピン系薬物より代謝への影響が少ないと考えられる理由は何か？",
            options: ["主に腎臓で排泄されるため", "酸化的な代謝（チトクロームP450系）を受けず、グルクロン酸抱合のみで代謝されるため", "タンパク結合率が低いため"],
            answer: "酸化的な代謝（チトクロームP450系）を受けず、グルクロン酸抱合のみで代謝されるため",
            explanation: "ロラゼパムは、多くの薬物や肝疾患の影響を受けやすいP450系による酸化代謝を経ずに、直接グルクロン酸抱合を受けて不活性化されるため、肝機能障害時の動態変化が少ないです。",
            page: 116
        },
        {
            question: "問7: ケタミンが心機能の低下した重症患者において、時に血圧低下を引き起こすことがあるのはなぜか？",
            options: ["強力な血管拡張作用を持つため", "ケタミンの直接的な心筋抑制作用が、代償的な交感神経刺激作用を上回るため", "副交感神経を強力に刺激するため"],
            answer: "ケタミンの直接的な心筋抑制作用が、代償的な交感神経刺激作用を上回るため",
            explanation: "ケタミンは直接的な心筋抑制作用を持ちますが、通常は中枢性の交感神経刺激作用によってマスクされます。しかし、交感神経予備能が枯渇した重症患者では、心筋抑制作用が顕在化し血圧が低下することがあります。",
            page: 119
        },
        {
            question: "問8: エトミデートの単回投与後にアドレノコルチカル抑制が遷延する機序は何か？",
            options: ["下垂体からのACTH分泌を抑制する", "コレステロールからコルチゾールへの変換に必要な11β-水酸化酵素を阻害する", "副腎皮質を破壊する"],
            answer: "コレステロールからコルチゾールへの変換に必要な11β-水酸化酵素を阻害する",
            explanation: "エトミデートは、コルチゾール合成経路の最終段階を触媒する11β-水酸化酵素を可逆的に、かつ用量依存的に阻害し、副腎皮質機能抑制を引き起こします。",
            page: 120
        },
        {
            question: "問9: 新しい超短時間作用型ベンゾジアゼピンであるレミマゾラムが、ミダゾラムと比較して速やかな代謝を示す理由は何か？",
            options: ["腎排泄が非常に速いため", "分子内にエステル結合を持ち、組織エステラーゼによって速やかに加水分解されるため", "肺での初回通過効果が大きいため"],
            answer: "分子内にエステル結合を持ち、組織エステラーゼによって速やかに加水分解されるため",
            explanation: "レミマゾラムはレミフェンタニルと同様にエステル結合を有し、非特異的な組織エステラーゼによって速やかに代謝されるため、非常に短い作用時間と文脈依存性半減期を示します。",
            page: 118
        },
        {
            question: "問10: デクスメデトミジンが脳波モニタリング下でのてんかん焦点のマッピング手術に有用な理由は何か？",
            options: ["脳波を完全に平坦化するため", "てんかん性のスパイク波形を抑制しないため", "脳血流を増加させるため"],
            answer: "てんかん性のスパイク波形を抑制しないため",
            explanation: "デクスメデトミジンは鎮静作用を持つ一方で、てんかん焦点から発生する異常脳波を抑制しないため、焦点同定を目的とする手術において有用な鎮静薬です。",
            page: 122
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
        localStorage.setItem('c8_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c8_general_results.html';
    });

    loadQuestion();
});
