document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: オピオイドによる徐脈は、迷走神経核への直接作用によるものである。この作用を実験的に遮断できる手技は何か？",
            options: ["頸動脈洞へのリドカイン注入", "迷走神経核へのナロキソン微量注入、または末梢での迷走神経切離", "静脈内へのアトロピン大量投与"],
            answer: "迷走神経核へのナロキソン微量注入、または末梢での迷走神経切離",
            explanation: "フェンタニル系薬物による徐脈は、延髄の迷走神経核を直接刺激することによって生じ、この部位へのナロキソン局所投与や迷走神経切離によって遮断されることが実験で示されています。",
            page: 131
        },
        {
            question: "問2: レミフェンタニルの薬物動態において、肥満患者への投与量設定で総体重（TBW）ではなく除脂肪体重（LBM）を指標とすることが推奨される理論的根拠は何か？",
            options: ["レミフェンタニルは脂肪組織に分布しやすいため", "クリアランスなどの薬物動態パラメータが、総体重よりも除脂肪体重と強く相関するため", "肥満患者では肝代謝が亢進しているため"],
            answer: "クリアランスなどの薬物動態パラメータが、総体重よりも除脂肪体重と強く相関するため",
            explanation: "レミフェンタニルの薬物動態は除脂肪体重との相関が高く、総体重で投与量を計算すると、特に肥満患者で過量投与となり、血中濃度が過度に高くなる危険性があります。",
            page: 134
        },
        {
            question: "問3: 心機能が著しく低下している患者において、高用量のオピオイド（特にフェンタニル系）が心拍出量を維持する上で有利に働くことがある。その主な機序は何か？",
            options: ["直接的な陽性変力作用", "血管拡張による後負荷軽減と、徐脈による心筋酸素需給バランスの改善", "冠動脈血流の増加作用"],
            answer: "血管拡張による後負荷軽減と、徐脈による心筋酸素需給バランスの改善",
            explanation: "高用量オピオイドは、血管拡張による後負荷軽減と、心拍数を低下させることによる拡張期時間の延長（冠血流増加）および心筋酸素消費量の抑制により、心機能が低下した心臓の負担を軽減します。",
            page: 137
        },
        {
            question: "問4: 肝移植の無肝期において、レミフェンタニルの薬物動態が他のオピオイドと大きく異なる点は何か？",
            options: ["無肝期には作用が著しく遷延する", "無肝期でも代謝・排泄はほとんど影響を受けない", "無肝期には活性代謝物が蓄積する"],
            answer: "無肝期でも代謝・排泄はほとんど影響を受けない",
            explanation: "レミフェンタニルは肝臓ではなく血漿や組織のエステラーゼで代謝されるため、肝機能が完全に失われる無肝期においても、その薬物動態は健常者とほとんど変わりません。",
            page: 133
        },
        {
            question: "問5: プロポフォールとオピオイドの薬物動態学的相互作用において、プロポフォール持続投与中にオピオイドを投与すると、オピオイドの血中濃度が予測より高くなることがある。この理由として考えられることは何か？",
            options: ["プロポフォールがオピオイドのタンパク結合を阻害するため", "プロポフォールが肝血流量を低下させ、オピオイドのクリアランスを低下させるため", "プロポフォールが腎排泄を抑制するため"],
            answer: "プロポフォールが肝血流量を低下させ、オピオイドのクリアランスを低下させるため",
            explanation: "プロポフォールは心拍出量や肝血流量を減少させる作用があります。これにより、肝臓で代謝されるオピオイドのクリアランスが低下し、結果として血中濃度が上昇する可能性があります。",
            page: 132
        },
        {
            question: "問6: オピオイドによる免疫抑制作用が臨床的に問題となりうる状況は何か？",
            options: ["創傷治癒の遅延、周術期感染、がんの再発", "自己免疫疾患の増悪", "アレルギー反応の増強"],
            answer: "創傷治癒の遅延、周術期感染、がんの再発",
            explanation: "オピオイドは細胞性免疫を抑制することが知られており、これが創傷治癒の遅延や周術期感染のリスク増加、さらにはがんの再発率に影響を与える可能性が懸念されています。",
            page: 132
        },
        {
            question: "問7: 経口オピオイドであるトラマドールが、純粋なμ作動薬と異なるユニークな鎮痛機序は何か？",
            options: ["κ受容体への強力な作動作用", "μ受容体への弱い作動作用に加え、セロトニンおよびノルエピネフリンの再取り込み阻害作用", "NMDA受容体拮抗作用"],
            answer: "μ受容体への弱い作動作用に加え、セロトニンおよびノルエピネフリンの再取り込み阻害作用",
            explanation: "トラマドールはμ受容体への弱い親和性に加え、下行性疼痛抑制系に関与するセロトニンとノルエピネフリンの再取り込みを阻害することで、複合的な鎮痛効果を発揮します。",
            page: 136
        },
        {
            question: "問8: 患者自己調節鎮痛（PCA）において、モルヒネよりもフェンタニルの方が「ドーズスタッキング（効果が発現する前に次の投与が行われること）」のリスクが低いとされる理由は何か？",
            options: ["フェンタニルの方が作用持続時間が短いため", "フェンタニルは効果発現までの時間が短く、典型的なロックアウト時間内にピーク効果に達するため", "フェンタニルの方が鎮痛効果が弱いため"],
            answer: "フェンタニルは効果発現までの時間が短く、典型的なロックアウト時間内にピーク効果に達するため",
            explanation: "フェンタニルは作用発現が速いため、患者は効果を確認してから次の投与を判断できます。一方、作用発現の遅いモルヒネでは、効果が出る前に繰り返し投与してしまい、後に過量投与となる危険性があります。",
            page: 128
        },
        {
            question: "問9: 心臓手術において、高用量オピオイド麻酔が選択されてきた歴史的背景は何か？",
            options: ["強力な筋弛緩作用を期待して", "揮発性麻酔薬による心筋抑制作用を避け、循環動態を安定させるため", "術後鎮痛を完全に得るため"],
            answer: "揮発性麻酔薬による心筋抑制作用を避け、循環動態を安定させるため",
            explanation: "心機能の低下した患者において、揮発性麻酔薬の直接的な心筋抑制や血管拡張作用を避ける目的で、循環動態への影響が比較的少ない高用量のオピオイドが使用されてきました。",
            page: 137
        },
        {
            question: "問10: オピオイド使用障害（OUD）の治療に用いられるブプレノルフィン/ナロキソン合剤を服用中の患者が緊急手術を受ける際、術中鎮痛で最も問題となることは何か？",
            options: ["術中に重篤な呼吸抑制が起こりやすい", "ブプレノルフィンのμ受容体への強力な結合により、他のオピオイド鎮痛薬が効きにくい", "ナロキソンが他のオピオイドを完全に拮抗してしまう"],
            answer: "ブプレノルフィンのμ受容体への強力な結合により、他のオピオイド鎮痛薬が効きにくい",
            explanation: "ブプレノルフィンはμ受容体への親和性が非常に高く、解離が遅い部分作動薬です。そのため、術中に追加投与されるフェンタニルなどの完全作動薬の効果を競合的に阻害し、鎮痛管理を困難にします。",
            page: 136
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
        localStorage.setItem('c9_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c9_cardiac_results.html';
    });

    loadQuestion();
});
