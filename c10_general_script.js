document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 局所麻酔薬による神経ブロックの「使用頻度依存性遮断」とはどのような現象か？",
            options: ["神経活動が低いほど遮断効果が強まる", "神経の発火頻度が高いほど、遮断効果が強まる", "薬物の使用回数に応じて効果が減弱する"],
            answer: "神経の発火頻度が高いほど、遮断効果が強まる",
            explanation: "局所麻酔薬は開口状態または不活性化状態のNa+チャネルに親和性が高いため、神経の発火頻度が高く、チャネルが頻繁に開閉するほど遮断効果が増強されます。",
            page: 146
        },
        {
            question: "問2: 局所麻酔薬のpKaが臨床的な作用発現時間に与える影響として正しいものはどれか？",
            options: ["pKaが高いほど作用発現が速い", "pKaが低いほど、生理的pHでの非イオン型分率が高くなり、作用発現が速い", "pKaは作用発現時間と関係ない"],
            answer: "pKaが低いほど、生理的pHでの非イオン型分率が高くなり、作用発現が速い",
            explanation: "局所麻酔薬は非イオン型（塩基）の形で神経膜を透過します。pKaが体液のpHに近い（低い）ほど非イオン型の割合が多くなり、神経内への到達が速くなるため、作用発現が速くなります。",
            page: 146
        },
        {
            question: "問3: 硬膜外麻酔において、局所麻酔薬が作用を発揮する主な部位はどこか？",
            options: ["硬膜外腔内の脂肪組織", "脊髄後角", "硬膜を通過して脊髄神経根および脊髄に到達する"],
            answer: "硬膜を通過して脊髄神経根および脊髄に到達する",
            explanation: "硬膜外腔に投与された局所麻酔薬の一部は、硬膜を拡散性に通過してくも膜下腔に達し、脊髄神経根や脊髄表面に直接作用することで効果を発揮します。",
            page: 294
        },
        {
            question: "問4: 脊髄くも膜下麻酔において、高比重局所麻酔薬の広がりを最も大きく左右する要因は何か？",
            options: ["投与量（薬物量）", "投与速度", "患者の体位と脊柱の弯曲"],
            answer: "患者の体位と脊柱の弯曲",
            explanation: "高比重液は重力に従ってくも膜下腔を移動するため、注入後の患者の体位（坐位、側臥位、トレンデレンブルグ体位など）と脊柱の生理的弯曲が、麻酔高を決定する最も重要な要因となります。",
            page: 299
        },
        {
            question: "問5: 硬膜外麻酔でクロロプロカインを使用した後にブピバカインやオピオイドを追加投与すると、それらの薬剤の効果が減弱することがある。この現象の主な原因として考えられていることは何か？",
            options: ["クロロプロカインによる神経毒性", "クロロプロカインの代謝物がμ受容体を拮抗するため", "クロロプロカイン製剤に含まれる保存料（EDTAなど）の影響"],
            answer: "クロロプロカインの代謝物がμ受容体を拮抗するため",
            explanation: "クロロプロカインの代謝物である2-クロロ-パラ-アミノ安息香酸が、μオピオイド受容体や他の局所麻酔薬の作用部位に対して拮抗的に働く可能性が示唆されています。",
            page: 153
        },
        {
            question: "問6: 脊髄くも膜下麻酔後に見られる一過性神経症状（TNS）の発生率が最も高いとされる局所麻酔薬はどれか？",
            options: ["ブピバカイン", "リドカイン", "クロロプロカイン"],
            answer: "リドカイン",
            explanation: "多くの研究で、脊髄くも膜下麻酔後のTNSの発生率はリドカインが他の局所麻酔薬に比べて有意に高いことが示されており、その使用が減少する一因となっています。",
            page: 154
        },
        {
            question: "問7: 局所麻酔薬の心毒性において、ブピバカインがリドカインより危険とされる主な電気生理学的理由は何か？",
            options: ["ブピバカインの方がNa+チャネルへの結合が速いため", "ブピバカインはNa+チャネルからの解離が非常に遅く、心周期中に蓄積しやすいため", "ブピバカインはK+チャネルをより強力に遮断するため"],
            answer: "ブピバカインはNa+チャネルからの解離が非常に遅く、心周期中に蓄積しやすいため",
            explanation: "ブピバカインは「fast-in, slow-out」の特性を持ち、心筋のNa+チャネルからの解離が遅いため、頻拍時には遮断効果が蓄積し、重篤な伝導障害や不整脈を引き起こしやすいです。",
            page: 155
        },
        {
            question: "問8: 硬膜外カテーテル留置後、テストドーズを投与する主な目的は何か？",
            options: ["麻酔効果の強さを確認するため", "カテーテルの先端が血管内またはくも膜下腔に迷入していないかを確認するため", "患者のアレルギーの有無を確認するため"],
            answer: "カテーテルの先端が血管内またはくも膜下腔に迷入していないかを確認するため",
            explanation: "テストドーズは、少量の局所麻酔薬（＋アドレナリン）を投与し、血管内投与による頻脈やくも膜下投与による急激な脊麻効果が出現しないかを確認し、安全性を高めるために行います。",
            page: 309
        },
        {
            question: "問9: 硬膜外麻酔において、分節的ブロック（特定の支配領域のみを狙ったブロック）が最も行いやすい脊椎レベルはどこか？",
            options: ["腰部", "胸部", "仙骨部"],
            answer: "胸部",
            explanation: "胸部の硬膜外腔は断面積が狭く、脂肪組織が少ないため、投与された局所麻酔薬が上下に広がりにくく、目的の神経根に限局した分節的なブロックが得やすいです。",
            page: 299
        },
        {
            question: "問10: 単一鏡像異性体であるロピバカインやレボブピバカインが、ラセミ体であるブピバカインと比較して心毒性が低いとされる理由は何か？",
            options: ["作用時間が短いため", "S(-)体はR(+)体に比べて心臓のNa+チャネルへの親和性が低く、解離が速いため", "タンパク結合率が低いため"],
            answer: "S(-)体はR(+)体に比べて心臓のNa+チャネルへの親和性が低く、解離が速いため",
            explanation: "局所麻酔薬の心毒性は主にR(+)鏡像異性体によって媒介されると考えられています。S(-)鏡像異性体のみからなるロピバカインやレボブピバカインは、心毒性が軽減されています。",
            page: 155
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
        localStorage.setItem('c10_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c10_general_results.html';
    });

    loadQuestion();
});
