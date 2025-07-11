document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 発達期の脳において、GABA作動薬が抑制性ではなく興奮性に作用することがある。その主なイオン機構的基盤は何か？",
            options: ["未熟なNa+/K+ポンプの機能", "未熟なクロライドトランスポーター（NKCC1優位）による細胞内クロライド濃度の上昇", "グルタミン酸受容体の未発達"],
            answer: "未熟なクロライドトランスポーター（NKCC1優位）による細胞内クロライド濃度の上昇",
            explanation: "発達初期の神経細胞では、クロライドを細胞内に取り込むNKCC1が優位なため、細胞内Cl-濃度が高くなっています。そのため、GABAA受容体が開口するとCl-が流出し、脱分極（興奮）が起こります。",
            page: 186
        },
        {
            question: "問2: 動物実験モデルにおいて、麻酔薬による神経細胞アポトーシスを軽減する効果が示されているα2作動薬は何か？",
            options: ["クロニジン", "フェントラミン", "デクスメデトミジン"],
            answer: "デクスメデトミジン",
            explanation: "デクスメデトミジンは、細胞生存シグナル伝達経路を活性化することにより、イソフルランなどが誘発する神経アポトーシスや行動障害を軽減する効果が動物実験で示されています。",
            page: 188
        },
        {
            question: "問3: MASK studyなどの近年の大規模コホート研究で、複数回の麻酔曝露を受けた小児に認められた軽微な神経認知機能の領域はどこか？",
            options: ["全般的なIQの低下", "運動機能の遅延", "処理速度や特定の行動に関する領域"],
            answer: "処理速度や特定の行動に関する領域",
            explanation: "MASK studyでは、複数回麻酔曝露群において全般的なIQに有意差はなかったものの、二次解析では処理速度や内在化・外在化行動などの特定の領域で軽微な差が認められました。",
            page: 188
        },
        {
            question: "問4: 高齢者の術後認知機能障害（POCD）の発生機序として、麻酔薬や手術侵襲が引き起こす可能性のある神経病理学的変化は何か？",
            options: ["ドーパミン作動性ニューロンの変性", "神経炎症、タウタンパク質のリン酸化亢進、アミロイドβペプチドの増加", "アセチルコリンエステラーゼの過剰発現"],
            answer: "神経炎症、タウタンパク質のリン酸化亢進、アミロイドβペプチドの増加",
            explanation: "POCDの機序として、手術侵襲や麻酔薬が神経炎症カスケードを活性化し、アルツハイマー病に関連するタウやアミロイドβの病理的変化を促進する可能性が研究されています。",
            page: 100
        },
        {
            question: "問5: 周術期の脳機能を保護する観点から、ASAのBrain Health Initiativeが推奨する管理目標に含まれないものはどれか？",
            options: ["年齢調整MACをモニターし、適切な麻酔深度を維持する", "術後せん妄予防のため、ベンゾジアゼピン系薬剤を積極的に使用する", "相対的低血圧を避ける"],
            answer: "術後せん妄予防のため、ベンゾジアゼピン系薬剤を積極的に使用する",
            explanation: "Brain Health Initiativeでは、術後せん妄のリスクを考慮し、ベンゾジアゼピン系や抗コリン作用のある薬剤の使用は慎重に行うか、避けることが推奨されています。",
            page: 100
        },
        {
            question: "問6: 麻酔薬誘発性神経発達毒性（AIDN）の動物実験モデルと、ヒトの臨床状況との間の最も大きな乖離（ギャップ）は何か？",
            options: ["使用する麻酔薬の種類", "麻酔曝露時間", "動物の性別"],
            answer: "麻酔曝露時間",
            explanation: "動物実験の多くは4時間以上の長時間麻酔曝露ですが、ヒトの小児における単回手術の麻酔時間は通常それより短いです。この曝露時間の違いが、結果の解釈を難しくしています。",
            page: 188
        },
        {
            question: "問7: 発達期の脳において、神経細胞の移動やシナプス形成の足場として重要な役割を担い、麻酔薬の影響を受ける可能性がある細胞は何か？",
            options: ["ミクログリア", "アストロサイトなどのグリア細胞", "血管内皮細胞"],
            answer: "アストロサイトなどのグリア細胞",
            explanation: "アストロサイトは、神経栄養因子（BDNFなど）を放出し、神経細胞の生存や発達をサポートします。イソフルランはアストロサイトからのBDNF放出を妨げ、神経発達に影響を与える可能性が示されています。",
            page: 187
        },
        {
            question: "問8: 周術期の高酸素濃度が新生児や乳児の脳に酸化的ストレスを与え、アポトーシスを誘導する可能性がある。この脆弱性の背景にある生理学的特徴は何か？",
            options: ["脳血流量が多いこと", "抗酸化酵素系（スーパーオキシドジスムターゼなど）が未熟であること", "血液脳関門が未熟であること"],
            answer: "抗酸化酵素系（スーパーオキシドジスムターゼなど）が未熟であること",
            explanation: "新生児、特に早産児は、活性酸素種を無毒化する抗酸化酵素系の能力が未熟なため、高濃度酸素による酸化的ストレスに対して脆弱です。",
            page: 190
        },
        {
            question: "問9: 脊髄への麻酔薬の神経毒性を評価した動物実験で、ケタミンとブピバカインのくも膜下投与を比較した結果、どのような違いが見られたか？",
            options: ["両薬剤とも同程度の神経毒性を示した", "ケタミンはアポトーシスを増加させたが、ブピバカインは増加させなかった", "ブピバカインのみがアポトーシスを増加させた"],
            answer: "ケタミンはアポトーシスを増加させたが、ブピバカインは増加させなかった",
            explanation: "新生仔ラットへのくも膜下投与実験では、NMDA受容体拮抗薬であるケタミンは脊髄でのアポトーシスを増加させましたが、Na+チャネル遮断薬であるブピバカインはそのような作用を示しませんでした。",
            page: 187
        },
        {
            question: "問10: PANDA study（片側性の鼠径ヘルニア手術を受けた幼児とその兄弟を比較した研究）の主な結論は何か？",
            options: ["単回の全身麻酔曝露は、後の神経認知機能に有意な差をもたらさない", "複数回の麻酔曝露はIQを有意に低下させる", "男児のみが麻酔による影響を受ける"],
            answer: "単回の全身麻酔曝露は、後の神経認知機能に有意な差をもたらさない",
            explanation: "PANDA studyは、3歳未満での単回の全身麻酔曝露が、後の神経認知機能（IQを含む）に、麻酔を受けていない兄弟と比較して有意な悪影響を与えないことを示しました。",
            page: 189
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
        localStorage.setItem('c12_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c12_general_results.html';
    });

    loadQuestion();
});
