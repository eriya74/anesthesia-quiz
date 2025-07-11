document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 全身麻酔の4つの要素として一般的に挙げられるものは何か？",
            options: ["鎮静、筋弛緩、循環抑制、呼吸抑制", "意識消失、健忘、不動化、有害刺激に対する自律神経反射の抑制", "鎮痛、鎮静、健忘、筋弛緩"],
            answer: "意識消失、健忘、不動化、有害刺激に対する自律神経反射の抑制",
            explanation: "現代の全身麻酔は、意識消失（催眠）、健忘、不動化（無動）、そして侵害刺激に対する自律神経反射の抑制という4つの要素を、複数の薬剤を組み合わせて達成することを目的としています。",
            page: 221
        },
        {
            question: "問2: ASAが定義する鎮静の連続性において、「呼びかけや軽い触覚刺激に合目的に反応する」状態はどのレベルの鎮静か？",
            options: ["最小鎮静（抗不安）", "中等度鎮静／鎮痛（意識下鎮静）", "深鎮静"],
            answer: "中等度鎮静／鎮痛（意識下鎮静）",
            explanation: "中等度鎮静では、意識レベルは低下していますが、患者はまだ言語的または軽い物理的刺激に対して合目的な反応（指示に従うなど）を示すことができます。",
            page: 222
        },
        {
            question: "問3: 全身麻酔の導入前に、100%酸素を投与する「前酸素化（preoxygenation）」の主な目的は何か？",
            options: ["患者をリラックスさせるため", "肺の機能的残気量（FRC）内の窒素を酸素に置き換え、無呼吸時間を延長するため", "吸入麻酔薬の導入を速めるため"],
            answer: "肺の機能的残気量（FRC）内の窒素を酸素に置き換え、無呼吸時間を延長するため",
            explanation: "前酸素化は、肺を酸素のリザーバーとすることで、麻酔導入後の無呼吸や気道確保困難時に、動脈血酸素飽和度が低下するまでの時間を延長し、安全マージンを確保する重要な手技です。",
            page: 224
        },
        {
            question: "問4: 迅速導入気管挿管（RSI）が適応となる患者はどのような状態か？",
            options: ["気道確保困難が予想される患者", "胃内容物による誤嚥のリスクが高い患者", "心機能が低下している患者"],
            answer: "胃内容物による誤嚥のリスクが高い患者",
            explanation: "RSIは、胃が空虚でない（フルストマック）患者や、胃食道逆流症が重度な患者など、胃内容物の逆流・誤嚥のリスクが高い場合に、意識消失から気管挿管までの時間を最短にする目的で行われます。",
            page: 225
        },
        {
            question: "問5: 迅速導入気管挿管（RSI）の際に輪状軟骨圧迫（Sellick法）を行う主な目的は何か？",
            options: ["喉頭展開を容易にするため", "食道を圧迫し、胃内容物の逆流を防ぐため", "血圧の上昇を抑えるため"],
            answer: "食道を圧迫し、胃内容物の逆流を防ぐため",
            explanation: "輪状軟骨を後方の頸椎に押し付けることで、その間にある食道を閉塞させ、受動的な逆流による誤嚥を防ぐことが目的とされています（ただし、その有効性には議論があります）。",
            page: 225
        },
        {
            question: "問6: 全身麻酔の維持において、単一の麻酔薬を高濃度で使用するのではなく、複数の薬剤（例：吸入麻酔薬＋オピオイド）を少量ずつ組み合わせる方法を何と呼ぶか？",
            options: ["TIVA（完全静脈麻酔）", "バランス麻酔（Balanced Anesthesia）", "低流量麻酔"],
            answer: "バランス麻酔（Balanced Anesthesia）",
            explanation: "バランス麻酔は、作用機序の異なる複数の薬剤を組み合わせることで、各薬剤の副作用を最小限に抑えつつ、麻酔の各要素（鎮静、鎮痛、筋弛緩など）をバランス良く達成する管理方法です。",
            page: 226
        },
        {
            question: "問7: 区域麻酔（脊髄くも膜下麻酔や硬膜外麻酔）が全身麻酔と比較して、特に術後合併症を減少させる可能性があるとされているのはどの領域か？",
            options: ["心血管系合併症", "呼吸器系合併症", "腎機能障害"],
            answer: "呼吸器系合併症",
            explanation: "特に開胸・開腹手術後において、硬膜外鎮痛などの区域麻酔は優れた鎮痛効果により呼吸運動を改善し、無気肺や肺炎などの術後呼吸器合併症を減少させるというエビデンスがあります。",
            page: 223
        },
        {
            question: "問8: 鎮静下で処置を行う「モニター下麻酔管理（MAC）」において、麻酔科医が最も注意すべき合併症は何か？",
            options: ["高血圧", "鎮静薬による呼吸抑制", "悪心・嘔吐"],
            answer: "鎮静薬による呼吸抑制",
            explanation: "MACでは、鎮静薬の過量投与による上気道閉塞、換気低下、低酸素血症といった呼吸抑制が最も危険な合併症であり、常に気道確保や全身麻酔への移行準備が必要です。",
            page: 227
        },
        {
            question: "問9: 肥満患者の麻酔導入時に、頭部を高くし、耳と胸骨切痕が同じ高さになるようにする「Ramped position」をとる利点は何か？",
            options: ["血圧を安定させる", "無呼吸時間を延長し、喉頭展開の視野を改善する", "筋弛緩薬の作用を増強する"],
            answer: "無呼吸時間を延長し、喉頭展開の視野を改善する",
            explanation: "Ramped positionは、機能的残気量を増やして前酸素化の効果を高め、無呼吸時間を延長します。また、気道の軸を一直線に近づけることで、喉頭展開を容易にします。",
            page: 262
        },
        {
            question: "問10: ERAS（術後回復強化）プロトコルにおいて、術後鎮痛の基本的な考え方は何か？",
            options: ["オピオイドを積極的に使用する", "硬膜外麻酔のみで管理する", "複数の鎮痛薬や鎮痛法を組み合わせる（Multimodal analgesia）ことで、オピオイドの使用量を減らす"],
            answer: "複数の鎮痛薬や鎮痛法を組み合わせる（Multimodal analgesia）ことで、オピオイドの使用量を減らす",
            explanation: "ERASでは、アセトアミノフェン、NSAIDs、局所麻酔薬、神経ブロックなどを組み合わせる多角的鎮痛法により、オピオイドの副作用（イレウス、嘔気など）を避け、早期離床と経口摂取の再開を目指します。",
            page: 225
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
        localStorage.setItem('c14_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c14_resident_results.html';
    });

    loadQuestion();
});
