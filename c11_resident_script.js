document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 筋弛緩薬は作用機序によって2つに大別される。その分類は何か？",
            options: ["即効性と遅効性", "脱分極性と非脱分極性", "アミノステロイド系とベンジルイソキノリニウム系"],
            answer: "脱分極性と非脱分極性",
            explanation: "筋弛緩薬は、アセチルコリン受容体に対する作用機序から、アセチルコリンと同様に受容体を活性化させる「脱分極性」と、アセチルコリンの結合を競合的に阻害する「非脱分極性」に分類されます。",
            page: 160
        },
        {
            question: "問2: 現在臨床で使用されている唯一の脱分極性筋弛緩薬は何か？",
            options: ["ロクロニウム", "ベクロニウム", "サクシニルコリン（スキサメトニウム）"],
            answer: "サクシニルコリン（スキサメトニウム）",
            explanation: "サクシニルコリンは、臨床現場で使用されている唯一の脱分極性筋弛緩薬であり、その非常に速い作用発現と短い作用時間から、迅速導入気管挿管などに用いられます。",
            page: 160
        },
        {
            question: "問3: 非脱分極性筋弛緩薬の作用機序は何か？",
            options: ["アセチルコリンの遊離を抑制する", "アセチルコリンエステラーゼを阻害する", "神経筋接合部のシナプス後膜にあるアセチルコリン受容体を競合的に遮断する"],
            answer: "神経筋接合部のシナプス後膜にあるアセチルコリン受容体を競合的に遮断する",
            explanation: "非脱分極性筋弛緩薬は、アセチルコリン受容体のαサブユニットに競合的に結合し、アセチルコリンの結合を妨げることで、筋の脱分極と収縮を防ぎます。",
            page: 163
        },
        {
            question: "問4: 筋弛緩モニターにおけるTOF（四連刺激）法とはどのような刺激法か？",
            options: ["50Hzの刺激を5秒間与える", "2Hzの刺激を4回与える", "1Hzの刺激を10秒間与える"],
            answer: "2Hzの刺激を4回与える",
            explanation: "TOF法は、2Hz（0.5秒間隔）の電気刺激を4回与え、その際の筋収縮の反応を評価する方法です。4番目の収縮（T4）と1番目の収縮（T1）の比（T4/T1比）が筋弛緩の指標となります。",
            page: 173
        },
        {
            question: "問5: サクシニルコリン投与後に見られる一過性の筋収縮を何と呼ぶか？",
            options: ["テタニー刺激", "線維束性収縮（Fasciculation）", "ミオクローヌス"],
            answer: "線維束性収縮（Fasciculation）",
            explanation: "サクシニルコリンによる持続的な脱分極は、投与初期に一過性の不規則な筋収縮（線維束性収縮）を引き起こします。これは術後の筋肉痛の原因となることがあります。",
            page: 165
        },
        {
            question: "問6: 非脱分極性筋弛緩薬の作用を拮抗させるために用いられる、アセチルコリンエステラーゼ阻害薬はどれか？",
            options: ["スガマデクス", "アトロピン", "ネオスチグミン"],
            answer: "ネオスチグミン",
            explanation: "ネオスチグミンはアセチルコリンエステラーゼを阻害し、神経筋接合部のアセチルコリン濃度を高めることで、非脱分極性筋弛緩薬の競合的遮断を打ち消し、筋弛緩からの回復を促進します。",
            page: 178
        },
        {
            question: "問7: アミノステロイド系筋弛緩薬（ロクロニウム、ベクロニウム）に特異的な拮抗薬は何か？",
            options: ["ネオスチグミン", "スガマデクス", "フィゾスチグミン"],
            answer: "スガマデクス",
            explanation: "スガマデクスは、アミノステロイド系筋弛緩薬を血漿中で直接包み込んで不活性化する、選択的弛緩薬結合剤（SRBA）と呼ばれる新しいタイプの拮抗薬です。",
            page: 180
        },
        {
            question: "問8: サクシニルコリンの作用時間が著しく延長する原因となる、遺伝性の酵素異常は何か？",
            options: ["真性コリンエステラーゼ欠損症", "異型偽性コリンエステラーゼ", "グルコース-6-リン酸脱水素酵素欠損症"],
            answer: "異型偽性コリンエステラーゼ",
            explanation: "サクシニルコリンは血漿中の偽性コリンエステラーゼで代謝されます。この酵素の遺伝的変異（異型）を持つ患者では、代謝が著しく遅延し、筋弛緩作用が数時間に及ぶことがあります。",
            page: 166
        },
        {
            question: "問9: 熱傷や長期臥床、神経損傷のある患者にサクシニルコリンを投与すると、生命を脅かす高カリウム血症を引き起こすことがある。この原因は何か？",
            options: ["腎臓からのカリウム排泄が低下するため", "細胞膜が破壊されカリウムが漏出するため", "神経筋接合部以外にアセチルコリン受容体（脱JUNCTIONAL受容体）が増加し、カリウムの流出が増大するため"],
            answer: "神経筋接合部以外にアセチルコリン受容体（脱JUNCTIONAL受容体）が増加し、カリウムの流出が増大するため",
            explanation: "不動化や神経損傷などにより、筋膜全体に脱JUNCTIONAL受容体が増加します。この受容体は開口時間が長く、サクシニルコリン投与時に過剰なカリウム流出を引き起こし、重篤な高カリウム血症をきたします。",
            page: 163
        },
        {
            question: "問10: アトラクリウムの代謝経路として特徴的なものは何か？",
            options: ["主に肝臓で代謝される", "主に腎臓で排泄される", "ホフマン分解と非特異的エステラーゼによる加水分解"],
            answer: "ホフマン分解と非特異的エステラーゼによる加水分解",
            explanation: "アトラクリウムは、生理的なpHと温度で自発的に分解されるホフマン分解と、血漿中の非特異的エステラーゼによる加水分解という、肝臓や腎臓に依存しない独自の代謝経路を持ちます。",
            page: 172
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
        localStorage.setItem('c11_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c11_resident_results.html';
    });

    loadQuestion();
});
