document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 交感神経系の節前線維の神経伝達物質は何か？",
            options: ["ノルエピネフリン", "アセチルコリン", "ドーパミン"],
            answer: "アセチルコリン",
            explanation: "交感神経・副交感神経ともに、神経節における節前線維から節後線維への情報伝達は、アセチルコリン（ACh）を介して行われます。",
            page: 71
        },
        {
            question: "問2: エピネフリンの低用量投与(1-2 μg/min)で主に刺激される受容体と、その結果生じる作用は何か？",
            options: ["α1受容体、血管収縮", "β1受容体、心拍数増加", "β2受容体、気管支拡張"],
            answer: "β2受容体、気管支拡張",
            explanation: "エピネフリンは投与量によって作用が異なります。低用量ではβ2受容体刺激が優位となり、気道抵抗の低下や血管拡張がみられます。",
            page: 72
        },
        {
            question: "問3: フェニレフリンが主に作用するアドレナリン受容体はどれか？",
            options: ["α1受容体", "β1受容体", "β2受容体"],
            answer: "α1受容体",
            explanation: "フェニレフリンは選択的なα1受容体作動薬であり、末梢血管を収縮させることで血圧を上昇させます。",
            page: 76
        },
        {
            question: "問4: β遮断薬の主な禁忌（あるいは慎重投与）となる疾患はどれか？",
            options: ["高血圧", "狭心症", "気管支喘息"],
            answer: "気管支喘息",
            explanation: "非選択的β遮断薬はβ2受容体も遮断するため、気管支収縮を誘発・増悪させる可能性があり、喘息患者には禁忌です。",
            page: 78
        },
        {
            question: "問5: アトロピンやスコポラミンなど、抗コリン薬の一般的な副作用は何か？",
            options: ["流涎（よだれ）", "徐脈", "口渇、散瞳"],
            answer: "口渇、散瞳",
            explanation: "抗コリン薬はムスカリン受容体を遮断し、副交感神経の作用を抑制するため、唾液分泌の抑制（口渇）や瞳孔括約筋の弛緩（散瞳）などが起こります。",
            page: 79
        },
        {
            question: "問6: ネオスチグミンやピリドスチグミンが分類される薬物は何か？",
            options: ["ムスカリン作動薬", "コリンエステラーゼ阻害薬", "ニコチン受容体遮断薬"],
            answer: "コリンエステラーゼ阻害薬",
            explanation: "これらの薬剤は、アセチルコリンを分解する酵素であるコリンエステラーゼを阻害することで、シナプス間隙のACh濃度を高め、作用を増強します。",
            page: 80
        },
        {
            question: "問7: 交感神経系の節後線維から放出される主要な神経伝達物質は何か？（例外を除く）",
            options: ["アセチルコリン", "ノルエピネフリン", "セロトニン"],
            answer: "ノルエピネフリン",
            explanation: "交感神経の末端（効果器との接合部）では、主にノルエピネフリンが放出され、アドレナリン受容体に作用します。汗腺への線維は例外です。",
            page: 71
        },
        {
            question: "問8: 副交感神経系の起始部となるのは、脳神経と脊髄のどの部分か？",
            options: ["胸髄と腰髄 (T1-L3)", "脳幹と仙髄 (S1-S4)", "頸髄のみ"],
            answer: "脳幹と仙髄 (S1-S4)",
            explanation: "副交感神経は、脳幹（動眼神経、顔面神経、舌咽神経、迷走神経）と仙髄から出ており、頭蓋仙骨系と呼ばれます。",
            page: 72
        },
        {
            question: "問9: エフェドリンの昇圧作用の機序として正しいものはどれか？",
            options: ["α受容体への直接作用のみ", "β受容体への直接作用のみ", "直接作用と、内因性ノルエピネフリン遊離促進による間接作用"],
            answer: "直接作用と、内因性ノルエピネフリン遊離促進による間接作用",
            explanation: "エフェドリンはアドレナリン受容体への直接作用に加え、神経終末からのノルエピネフリン遊離を促進する間接作用を併せ持ちます。",
            page: 76
        },
        {
            question: "問10: β遮断薬の過量投与による重篤な徐脈や心不全の治療に用いられることがある薬剤はどれか？",
            options: ["フェニレフリン", "グルカゴン", "アトロピンのみで十分"],
            answer: "グルカゴン",
            explanation: "グルカゴンはβ受容体を介さずに心筋のcAMPを増加させ、心収縮力と心拍数を増加させるため、β遮断薬の過量投与時に有効な場合があります。",
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
        localStorage.setItem('c6_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c6_resident_results.html';
    });

    loadQuestion();
});
