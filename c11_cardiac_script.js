document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: サクシニルコリン投与後に見られる徐脈や接合部調律は、初回投与よりも2回目投与で起こりやすい。この原因として考えられる代謝物は何か？",
            options: ["コリン", "サクシニルモノコリン", "コハク酸"],
            answer: "サクシニルモノコリン",
            explanation: "サクシニルコリンの代謝物であるサクシニルモノコリンが、心臓のムスカリン受容体を感作し、2回目のサクシニルコリン投与時に徐脈などの迷走神経反射を誘発しやすくすると考えられています。",
            page: 166
        },
        {
            question: "問2: パンクロニウムが頻脈や血圧上昇を引き起こす主な薬理作用は何か？",
            options: ["交感神経節の刺激作用", "ヒスタミン遊離作用", "心臓のムスカリン受容体に対する選択的な遮断作用"],
            answer: "心臓のムスカリン受容体に対する選択的な遮断作用",
            explanation: "パンクロニウムは、特に洞房結節に存在する心臓ムスカリン受容体を遮断する（迷走神経遮断様）作用を持ち、これにより心拍数と心拍出量を増加させます。",
            page: 171
        },
        {
            question: "問3: 腎不全患者において、ベクロニウムを反復投与すると作用が遷延することがある。その主な原因は何か？",
            options: ["ベクロニウム自体の腎排泄が遅延するため", "活性代謝物である3-デサセチルベクロニウムが腎排泄であり、蓄積するため", "血漿タンパク結合率が変化するため"],
            answer: "活性代謝物である3-デサセチルベクロニウムが腎排泄であり、蓄積するため",
            explanation: "ベクロニウムの代謝物である3-デサセチルベクロニウムは、親化合物と同程度の筋弛緩作用を持ち、主に腎臓から排泄されます。そのため、腎不全患者ではこの活性代謝物が蓄積し、作用遷延の原因となります。",
            page: 171
        },
        {
            question: "問4: 筋弛緩薬に対するアレルギー反応（アナフィラキシー）において、交差反応性が問題となるのはどの組み合わせか？",
            options: ["アミノステロイド系とベンジルイソキノリニウム系", "サクシニルコリンと非脱分極性筋弛緩薬", "アミノステロイド系薬物間（例：ロクロニウムとベクロニウム）"],
            answer: "アミノステロイド系薬物間（例：ロクロニウムとベクロニウム）",
            explanation: "筋弛緩薬によるアナフィラキシーは、第四級アンモニウムイオン構造が抗原決定基と考えられています。特に構造が類似しているアミノステロイド系薬物間では高い交差反応性が報告されています。",
            page: 170
        },
        {
            question: "問5: 揮発性麻酔薬が非脱分極性筋弛緩薬の作用を増強する。この増強効果の機序として考えられていないものはどれか？",
            options: ["シナプス後膜のアセチルコリン受容体の感受性変化", "シナプス前膜からのアセチルコリン遊離の抑制", "筋弛緩薬の代謝促進"],
            answer: "筋弛緩薬の代謝促進",
            explanation: "揮発性麻酔薬は、神経筋接合部においてシナプス前後の両方に作用し、筋弛緩薬の効果を増強します。筋弛緩薬の代謝を促進する作用はありません。",
            page: 163
        },
        {
            question: "問6: 重症筋無力症の患者に非脱分極性筋弛緩薬を投与する際に、特に注意すべき点は何か？",
            options: ["筋弛緩薬に対する抵抗性を示す", "シナプス後膜のアセチルコリン受容体が減少しており、筋弛緩薬への感受性が著しく高い", "サクシニルコリンに対して異常反応を示す"],
            answer: "シナプス後膜のアセチルコリン受容体が減少しており、筋弛緩薬への感受性が著しく高い",
            explanation: "重症筋無力症は、自己抗体によりアセチルコリン受容体が破壊・減少し、数が不足している病態です。そのため、非脱分極性筋弛緩薬に対して非常に高い感受性を示し、通常量でも遷延性の麻痺を引き起こす危険があります。",
            page: 169
        },
        {
            question: "問7: Lambert-Eaton筋無力症候群の患者が、脱分極性および非脱分極性筋弛緩薬の両方に高い感受性を示すのはなぜか？",
            options: ["アセチルコリン受容体の数が減少しているため", "シナプス前膜の電位依存性カルシウムチャネルの障害により、アセチルコリンの遊離が減少しているため", "アセチルコリンエステラーゼの活性が低下しているため"],
            answer: "シナプス前膜の電位依存性カルシウムチャネルの障害により、アセチルコリンの遊離が減少しているため",
            explanation: "この疾患では、神経終末からのアセチルコリン放出が障害されています。そのため、サクシニルコリン（作動薬）にも非脱分極性薬（拮抗薬）にも高い感受性を示します。",
            page: 169
        },
        {
            question: "問8: スガマデクスによる筋弛緩拮抗後に、再度筋弛緩が必要となった。再クラーレ化（recurarization）のリスクを避けるために、ロクロニウムを再投与する場合の投与量に関する考え方として適切なものはどれか？",
            options: ["通常量のロクロニウムを投与する", "スガマデクスと結合しなかったロクロニウムが残存するため、少量から投与する", "スガマデクスが血中に残存するため、結合を飽和させるために通常より大量のロクロニウムが必要となる"],
            answer: "スガマデクスが血中に残存するため、結合を飽和させるために通常より大量のロクロニウムが必要となる",
            explanation: "スガマデクス投与後は、血中に遊離のスガマデクス分子が残存しています。再度ロクロニウムを投与する場合、この遊離スガマデクスと結合する分を見越して、通常よりも多い投与量が必要となります。",
            page: 182
        },
        {
            question: "問9: サクシニルコリン投与による心停止のリスクが特に高いとされる小児の筋疾患は何か？",
            options: ["重症筋無力症", "デュシェンヌ型筋ジストロフィー", "先天性ミオパチー"],
            answer: "デュシェンヌ型筋ジストロフィー",
            explanation: "デュシェンヌ型などの筋ジストロフィーでは、診断がつく前から筋細胞膜の脆弱性が存在します。サクシニルコリン投与は著しい横紋筋融解と高カリウム血症を引き起こし、心停止に至る危険性が非常に高いです。",
            page: 166
        },
        {
            question: "問10: スガマデクス投与後に重篤な徐脈や心停止が報告されているが、その機序として考えられていることは何か？",
            options: ["迷走神経の直接刺激", "ヒスタミン遊離によるアナフィラキシー反応", "明確な機序は不明であるが、アレルギー反応や内因性分子との結合などが推測されている"],
            answer: "明確な機序は不明であるが、アレルギー反応や内因性分子との結合などが推測されている",
            explanation: "スガマデクスによる徐脈の正確な機序は解明されていません。心臓移植後の患者でも報告があることから、迷走神経を介したものではないと考えられており、アレルギー反応や他の分子との相互作用などが可能性として挙げられています。",
            page: 182
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
        localStorage.setItem('c11_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c11_cardiac_results.html';
    });

    loadQuestion();
});
