document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 非脱分極性筋弛緩薬によるTOF（四連刺激）でのfade現象を説明する主な機序は何か？",
            options: ["シナプス後膜受容体の脱感作", "シナプス前膜のニコチン性ACh受容体の遮断によるACh動員の障害", "アセチルコリンエステラーゼの活性化"],
            answer: "シナプス前膜のニコチン性ACh受容体の遮断によるACh動員の障害",
            explanation: "Fade現象は、非脱分極性筋弛緩薬がシナプス前膜のnAChRを遮断し、高頻度刺激時のAChの補充（動員）を妨げることで、放出されるAChが徐々に減少するために生じます。",
            page: 162
        },
        {
            question: "問2: サクシニルコリン投与後に見られる第II相ブロックの特徴は何か？",
            options: ["脱分極が持続している状態", "シナプス後膜が再分極しているにもかかわらず、アセチルコリンに正常に反応しない状態", "アセチルコリン遊離が完全に抑制された状態"],
            answer: "シナプス後膜が再分極しているにもかかわらず、アセチルコリンに正常に反応しない状態",
            explanation: "第II相ブロックは、脱感作ブロックとも呼ばれ、膜は再分極していますが受容体がアセチルコリンに応答しなくなっている状態です。この状態では、非脱分極性筋弛緩薬と同様のfade現象が見られます。",
            page: 165
        },
        {
            question: "問3: 異型偽性コリンエステラーゼの診断に用いられるジブカイン数とは何を測定しているか？",
            options: ["血中の酵素の量", "酵素がサクシニルコリンを分解する速度", "ジブカインによる酵素活性の阻害率"],
            answer: "ジブカインによる酵素活性の阻害率",
            explanation: "ジブカイン数は、正常な酵素がジブカインによってどの程度阻害されるか（正常は約80%）をパーセンテージで示したものです。これは酵素の「質」を評価する指標であり、「量」ではありません。",
            page: 166
        },
        {
            question: "問4: ロクロニウムの作用発現が、より強力なベクロニウムよりも速いのはなぜか？",
            options: ["ロクロニウムの方が脂溶性が高いため", "ロクロニウムの方が力価が低いため、同等の効果を得るためにより多くの分子を投与する必要があり、結果として効果部位への到達が速くなるため", "ロクロニウムはタンパク結合率が低いため"],
            answer: "ロクロニウムの方が力価が低いため、同等の効果を得るためにより多くの分子を投与する必要があり、結果として効果部位への到達が速くなるため",
            explanation: "筋弛緩薬の作用発現時間は、その力価と逆相関します。力価の低いロクロニウムは、力価の高い薬剤（ベクロニウムなど）よりも多くの分子量を投与するため、血漿中から神経筋接合部への拡散勾配が大きくなり、作用発現が速くなります。",
            page: 169
        },
        {
            question: "問5: アトラクリウムとシスアトラクリウムの代謝に関与するホフマン分解とは、どのような化学反応か？",
            options: ["肝臓の酵素による酸化的分解", "血漿エステラーゼによる加水分解", "生理的なpHと温度下で起こる、非酵素的な自発的分解"],
            answer: "生理的なpHと温度下で起こる、非酵素的な自発的分解",
            explanation: "ホフマン分解は、特定の化学構造を持つ第四級アンモニウム化合物が、生体内の生理的条件下（pH 7.4, 37℃）で酵素の介在なしに自然に分解される化学反応です。",
            page: 172
        },
        {
            question: "問6: 筋弛緩モニターにおいて、横隔膜や喉頭筋が四肢の筋（下顎内転筋など）よりも筋弛緩薬に抵抗性を示す。この違いが臨床的に意味することは何か？",
            options: ["喉頭筋の動きで筋弛緩を評価すれば、四肢の筋弛緩は十分である", "四肢の筋（下顎内転筋）のTOFカウントが0でも、横隔膜は動いている可能性がある", "横隔膜の回復は四肢の筋より遅れる"],
            answer: "四肢の筋（下顎内転筋）のTOFカウントが0でも、横隔膜は動いている可能性がある",
            explanation: "横隔膜は筋弛緩薬への感受性が低く、回復が速い。そのため、末梢の筋（下顎内転筋）で深い筋弛緩が確認されていても、横隔膜の動き（しゃっくりなど）が残存していることがあります。",
            page: 177
        },
        {
            question: "問7: 定量的な筋弛緩モニター（加速度筋弛緩モニターなど）で、安全な抜管の指標とされるTOF比の閾値はいくつか？",
            options: ["TOF比 > 0.5", "TOF比 > 0.7", "TOF比 ≧ 0.9"],
            answer: "TOF比 ≧ 0.9",
            explanation: "TOF比が0.9未満では、咽頭機能の障害や誤嚥のリスク、低酸素換気応答の低下などが残存することが示されており、安全な抜管のためにはTOF比が0.9以上であることが推奨されます。",
            page: 173
        },
        {
            question: "問8: ネオスチグミンによる筋弛緩拮抗作用には「天井効果」が存在する。これは何を意味するか？",
            options: ["一定量以上の投与で拮抗作用が頭打ちになる", "高用量では筋弛緩作用を示す", "作用時間が用量に依存しない"],
            answer: "一定量以上の投与で拮抗作用が頭打ちになる",
            explanation: "ネオスチグミンはアセチルコリンエステラーゼを阻害しますが、酵素が最大に阻害されると、それ以上投与してもアセチルコリン濃度は上がらず、拮抗効果は増強されません。これが天井効果です。",
            page: 179
        },
        {
            question: "問9: スガマデクス投与後に再度筋弛緩が必要になった場合、ベンジルイソキノリニウム系（アトラクリウムなど）が推奨される理由は何か？",
            options: ["作用発現が速いため", "スガマデクスがベンジルイソキノリニウム系薬物を不活性化しないため", "アレルギー反応のリスクが低いため"],
            answer: "スガマデクスがベンジルイソキノリニウム系薬物を不活性化しないため",
            explanation: "スガマデクスはアミノステロイド系筋弛緩薬を特異的に捕捉します。そのため、スガマデクス投与後に筋弛緩が必要な場合は、捕捉されないベンジルイソキノリニウム系薬物を使用する必要があります。",
            page: 182
        },
        {
            question: "問10: 集中治療室（ICU）における長期の筋弛緩薬投与が、遷延性筋力低下（ICU-AW）のリスクとなりうる。この病態の名称は何か？",
            options: ["悪性高熱症", "重症筋無力症クリーゼ", "クリティカル・イルネス・ミオパチー/ポリニューロパチー"],
            answer: "クリティカル・イルネス・ミオパチー/ポリニューロパチー",
            explanation: "重症患者における長期の不動や、筋弛緩薬・ステロイドの使用は、びまん性の筋力低下や多発神経障害を引き起こすことがあり、これをクリティカル・イルネス・ミオパチー/ポリニューロパチーと呼びます。",
            page: 170
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
        localStorage.setItem('c11_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c11_general_results.html';
    });

    loadQuestion();
});
