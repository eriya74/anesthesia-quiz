document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 全身麻酔と区域麻酔を併用する主な利点は何か？",
            options: ["手術時間を短縮できる", "術後の優れた鎮痛効果により、オピオイド使用量を削減し、呼吸器合併症を減少させる可能性がある", "麻酔導入がより迅速になる"],
            answer: "術後の優れた鎮痛効果により、オピオイド使用量を削減し、呼吸器合併症を減少させる可能性がある",
            explanation: "区域麻酔の併用は、特に開胸・開腹手術において、術後の強力な鎮痛を提供し、オピオイドの使用量を減らすことで、早期離床を促し、呼吸器合併症のリスクを低減します。",
            page: 223
        },
        {
            question: "問2: モニター下麻酔管理（MAC）と鎮静の最も重要な違いは何か？",
            options: ["使用する薬剤が異なる", "MACは麻酔科医による特定の麻酔サービスであり、必要に応じて全身麻酔への移行準備が含まれる", "MACでは心電図モニターが不要である"],
            answer: "MACは麻酔科医による特定の麻酔サービスであり、必要に応じて全身麻酔への移行準備が含まれる",
            explanation: "MACは単なる鎮静ではなく、麻酔科医が患者の生命維持機能を継続的に監視し、至適な状態を維持し、必要であればいつでも全身麻酔に移行できる体制を整えている包括的な麻酔管理を指します。",
            page: 222
        },
        {
            question: "問3: 迅速導入気管挿管（RSI）において、輪状軟骨圧迫の有効性について近年のエビデンスはどう評価しているか？",
            options: ["誤嚥防止に極めて有効であると確認された", "喉頭展開を容易にすることが主な目的であるとされた", "誤嚥防止効果は明確ではなく、気道確保を困難にする可能性も指摘されている"],
            answer: "誤嚥防止効果は明確ではなく、気道確保を困難にする可能性も指摘されている",
            explanation: "輪状軟骨圧迫は伝統的に行われてきましたが、その誤嚥防止効果を支持する質の高いエビデンスは乏しく、不適切な圧迫は喉頭展開を妨げ、気道確保を困難にするリスクも指摘されています。",
            page: 225
        },
        {
            question: "問4: Multimodal General Anesthesia（多角的全身麻酔）の基本的な概念は何か？",
            options: ["単一の強力な麻酔薬を使用すること", "作用機序の異なる複数の薬剤を組み合わせ、相乗効果を利用して各薬剤の投与量を減らし、副作用を軽減すること", "オピオイドを完全に使用しない麻酔法であること"],
            answer: "作用機序の異なる複数の薬剤を組み合わせ、相乗効果を利用して各薬剤の投与量を減らし、副作用を軽減すること",
            explanation: "このアプローチは、バランス麻酔の概念をさらに発展させ、オピオイド、鎮静薬、局所麻酔薬、α2作動薬などを組み合わせて、より少ない副作用で効果的な麻酔状態を達成することを目指します。",
            page: 226
        },
        {
            question: "問5: 区域麻酔が全身麻酔単独と比較して、術後長期的な予後（死亡率など）を有意に改善するという強力なエビデンスはあるか？",
            options: ["はい、すべての手術で死亡率が低下する", "いいえ、近年の大規模なメタ解析では、30日死亡率に有意な差は認められていない", "はい、心臓手術においてのみ死亡率が低下する"],
            answer: "いいえ、近年の大規模なメタ解析では、30日死亡率に有意な差は認められていない",
            explanation: "区域麻酔は呼吸器合併症などの短期的な合併症を減らす可能性がありますが、死亡率などの長期的なアウトカムを改善するという一貫した強力なエビデンスは、現在のところ確立されていません。",
            page: 223
        },
        {
            question: "問6: 困難気道が予想される患者の気管挿管において、吸入麻酔による緩徐導入を選択する最大の利点は何か？",
            options: ["作用発現が最も速い", "自発呼吸を温存したまま気道確保を試みることができる", "循環動態が最も安定する"],
            answer: "自発呼吸を温存したまま気道確保を試みることができる",
            explanation: "吸入麻酔による緩徐導入では、患者の自発呼吸を維持したまま徐々に麻酔深度を深めることができます。これにより、「挿管も換気もできない」という最悪の事態を回避できる可能性が高まります。",
            page: 224
        },
        {
            question: "問7: 帝王切開における脊髄くも膜下麻酔で、局所麻酔薬にオピオイド（フェンタニルなど）を少量添加する主な目的は何か？",
            options: ["運動神経ブロックを強化するため", "術中・術後の鎮痛の質を向上させ、局所麻酔薬の投与量を減らすため", "作用時間を延長するため"],
            answer: "術中・術後の鎮痛の質を向上させ、局所麻酔薬の投与量を減らすため",
            explanation: "少量のオピオイドは、局所麻酔薬と相乗的に作用し、内臓痛などを含む術中の鎮痛を強化します。これにより、局所麻酔薬の投与量を減らし、血圧低下などの副作用を軽減できます。",
            page: 223
        },
        {
            question: "問8: ロボット支援下手術における急峻な頭低位（Steep Trendelenburg）がもたらす、麻酔管理上の最も大きな課題は何か？",
            options: ["術後痛の増強", "気道内圧の上昇と顔面・気道浮腫のリスク", "術中覚醒のリスク"],
            answer: "気道内圧の上昇と顔面・気道浮腫のリスク",
            explanation: "急峻な頭低位では、腹腔内臓器が横隔膜を圧迫し、肺コンプライアンスが著しく低下します。また、上半身の静脈還流がうっ滞し、顔面や気道の浮腫を引き起こし、抜管後の気道閉塞のリスクとなります。",
            page: 339
        },
        {
            question: "問9: 区域麻酔が適応とならない絶対的禁忌は何か？",
            options: ["患者の不安", "術前の抗凝固薬内服", "患者の拒否、穿刺部位の感染"],
            answer: "患者の拒否、穿刺部位の感染",
            explanation: "患者の明確な拒否は、いかなる医療行為においても絶対的な禁忌です。また、穿刺部位に感染がある場合、中枢神経系への感染波及のリスクがあるため、これも絶対禁忌とされます。",
            page: 296
        },
        {
            question: "問10: MAC-BARとは何を意味するか？",
            options: ["50%の患者が意識を失う最小肺胞濃度", "50%の患者で圧受容器反射が消失する最小肺胞濃度", "50%の患者で外科的切開に対する交感神経応答（血圧上昇・頻脈）が抑制される最小肺胞濃度"],
            answer: "50%の患者で外科的切開に対する交感神経応答（血圧上昇・頻脈）が抑制される最小肺胞濃度",
            explanation: "MAC-BARは、不動化を得るためのMACよりも高く、麻酔の要素の一つである「自律神経反射の抑制」を定量化する指標です。通常、MACの約1.5倍とされています。",
            page: 226
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
        localStorage.setItem('c14_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c14_general_results.html';
    });

    loadQuestion();
});
