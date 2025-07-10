document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: ノルエピネフリンの再取り込み(Uptake-1)を阻害する薬物はどれか？",
            options: ["フェノキシベンザミン", "三環系抗うつ薬、コカイン", "MAO阻害薬"],
            answer: "三環系抗うつ薬、コカイン",
            explanation: "三環系抗うつ薬やコカインは、シナプス前神経終末へのノルエピネフリンの再取り込みを阻害し、シナプス間隙のノルエピネフリン濃度を上昇させ、交感神経作用を増強します。",
            page: 71
        },
        {
            question: "問2: フェノルドパムがナトリウム利尿を促進する機序は何か？",
            options: ["輸出細動脈を選択的に拡張させるため", "腎臓のD1受容体を刺激し、腎血流量を増加させるため", "レニン分泌を抑制するため"],
            answer: "腎臓のD1受容体を刺激し、腎血流量を増加させるため",
            explanation: "フェノルドパムは選択的D1受容体作動薬であり、腎血管を拡張して腎血流量と糸球体濾過量を増加させ、ナトリウム利尿を促進します。",
            page: 76
        },
        {
            question: "問3: 褐色細胞腫の患者にβ遮断薬を単独で投与してはならない理由は何か？",
            options: ["腫瘍の増大を招くため", "α受容体が遮断されずにβ2受容体による血管拡張作用が抑制され、急激な血圧上昇（hypertensive crisis）をきたすため", "頻脈を悪化させるため"],
            answer: "α受容体が遮断されずにβ2受容体による血管拡張作用が抑制され、急激な血圧上昇（hypertensive crisis）をきたすため",
            explanation: "β遮断薬を単独投与すると、末梢血管のβ2受容体による血管拡張作用が抑制されます。その結果、過剰なカテコラミンによるα受容体刺激作用が優位となり、重篤な高血圧発作を引き起こす危険があります。",
            page: 78
        },
        {
            question: "問4: 選択的α1A受容体遮断薬（タムスロシンなど）が、前立腺肥大症の治療において非選択的α1遮断薬（プラゾシンなど）より起立性低血圧を起こしにくい理由は何か？",
            options: ["作用時間が短いため", "前立腺や膀胱頸部に多く分布するα1A受容体への選択性が高く、血管平滑筋に多いα1B受容体への作用が弱いため", "中枢性の作用を持つため"],
            answer: "前立腺や膀胱頸部に多く分布するα1A受容体への選択性が高く、血管平滑筋に多いα1B受容体への作用が弱いため",
            explanation: "血管収縮に関与するのは主にα1B受容体です。タムスロシンは前立腺に多いα1A受容体への選択性が高いため、血管への影響が少なく、低血圧を起こしにくいです。",
            page: 78
        },
        {
            question: "問5: イソプロテレノールが心臓移植後の患者の洞機能不全に対して用いられることがあるのはなぜか？",
            options: ["純粋なβ1作動薬であるため", "間接作用により内因性カテコラミンを放出するため", "除神経された移植心に対して、β受容体を直接刺激し強力な変時・変力作用を示すため"],
            answer: "除神経された移植心に対して、β受容体を直接刺激し強力な変時・変力作用を示すため",
            explanation: "心臓移植後の心臓は自己の自律神経支配を失っています。イソプロテレノールはβ受容体を直接刺激するため、除神経心に対しても確実に心拍数と収縮力を増加させることができます。",
            page: 74
        },
        {
            question: "問6: ラベタロールのβ遮断作用とα遮断作用の比率（静脈内投与時）はどの程度か？",
            options: ["β:α = 1:1", "β:α = 1:7", "β:α = 7:1"],
            answer: "β:α = 7:1",
            explanation: "ラベタロールは静脈内投与時、β遮断作用がα遮断作用よりも強く、その比はおよそ7:1です。経口投与ではこの比が変化します（約3:1）。",
            page: 79
        },
        {
            question: "問7: プロプラノロールが甲状腺機能亢進症の症状緩和に有効な理由の一つは何か？",
            options: ["甲状腺ホルモンの産生を抑制する", "末梢でのT4から活性型のT3への変換を阻害する", "甲状腺への血流を減少させる"],
            answer: "末梢でのT4から活性型のT3への変換を阻害する",
            explanation: "プロプラノロールはβ遮断による交感神経症状の緩和に加え、末梢組織におけるT4からより強力なT3への変換を阻害する作用を持ち、甲状腺クリーゼなどの治療に用いられます。",
            page: 79
        },
        {
            question: "問8: 妊婦高血圧の治療において、エフェドリンよりもフェニレフリンが推奨されるようになった理由は何か？",
            options: ["フェニレフリンの方が母体の血圧をより強力に上昇させるため", "エフェドリン使用時に胎児アシドーシスのリスクが高いことが示されたため", "エフェドリンは子宮血流を著しく減少させるため"],
            answer: "エフェドリン使用時に胎児アシドーシスのリスクが高いことが示されたため",
            explanation: "エフェドリンは胎盤を通過し、胎児のβ受容体を刺激して代謝を亢進させ、アシドーシスを引き起こす可能性があります。そのため、現在では純粋なα作動薬であるフェニレフリンが第一選択とされています。",
            page: 76
        },
        {
            question: "問9: コリンエステラーゼ阻害薬であるフィゾスチグミンが、アトロピンやスコポラミンによる中枢性抗コリン作用（せん妄など）の治療に有効な理由は何か？",
            options: ["最も強力なコリンエステラーゼ阻害作用を持つため", "第三級アミンであり、血液脳関門を通過できるため", "ムスカリン受容体への直接作用を持つため"],
            answer: "第三級アミンであり、血液脳関門を通過できるため",
            explanation: "フィゾスチグミンは脂溶性の高い第三級アミンであるため、血液脳関門を通過して中枢神経系に到達し、アセチルコリン濃度を上昇させることで中枢性の抗コリン症状を拮抗できます。",
            page: 80
        },
        {
            question: "問10: 慢性心不全に対するβ遮断薬療法が長期的に心機能改善をもたらす機序（心室リモデリングの抑制など）に関与しないものはどれか？",
            options: ["心拍数の減少による心筋酸素消費量の低下", "レニン-アンジオテンシン系の抑制", "カテコラミンによる心筋毒性の軽減", "急性期の陽性変力作用"],
            answer: "急性期の陽性変力作用",
            explanation: "β遮断薬は急性期には心収縮力を抑制する陰性変力作用を持ちます。長期的な心機能改善効果は、心筋保護作用や神経体液性因子の正常化によるものであり、急性期の作用とは異なります。",
            page: 78
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
        localStorage.setItem('c6_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c6_cardiac_results.html';
    });

    loadQuestion();
});
