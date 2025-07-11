document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 局所麻酔薬が神経の興奮伝導を遮断する主な作用機序は何か？",
            options: ["カリウムチャネルの開口", "電位依存性ナトリウムチャネルの遮断", "カルシウムチャネルの遮断"],
            answer: "電位依存性ナトリウムチャネルの遮断",
            explanation: "局所麻酔薬は、神経細胞膜の電位依存性ナトリウムチャネルを遮断し、活動電位の発生と伝導を抑制することで麻酔効果を発揮します。",
            page: 144
        },
        {
            question: "問2: 局所麻酔薬は、アミド型とエステル型に大別される。それぞれの主な代謝経路は何か？",
            options: ["両方とも肝臓で代謝される", "アミド型は肝臓、エステル型は血漿中のコリンエステラーゼで代謝される", "アミド型は血漿、エステル型は肝臓で代謝される"],
            answer: "アミド型は肝臓、エステル型は血漿中のコリンエステラーゼで代謝される",
            explanation: "アミド型局所麻酔薬は主に肝臓の酵素で代謝されますが、エステル型は血漿中の偽性コリンエステラーゼによって速やかに加水分解されます。",
            page: 151
        },
        {
            question: "問3: 局所麻酔薬中毒（LAST）の初期症状として典型的なものは何か？",
            options: ["著しい血圧低下", "呼吸停止", "口周囲のしびれ、耳鳴り、めまい"],
            answer: "口周囲のしびれ、耳鳴り、めまい",
            explanation: "LASTは血中濃度の上昇に伴い、まず中枢神経系の症状（口周囲のしびれ、耳鳴り、興奮、けいれん）が現れ、さらに濃度が上昇すると心毒性が出現します。",
            page: 151
        },
        {
            question: "問4: 局所麻酔薬中毒による重篤な心毒性（心停止など）に対する特異的な治療薬として推奨されているものは何か？",
            options: ["アドレナリン", "脂肪乳剤（イントラリピッド）", "炭酸水素ナトリウム"],
            answer: "脂肪乳剤（イントラリピッド）",
            explanation: "脂肪乳剤は、血中の局所麻酔薬を吸収（lipid sink理論）することで遊離薬物濃度を低下させ、心毒性を改善する効果があり、LASTの第一選択治療薬です。",
            page: 152
        },
        {
            question: "問5: 局所麻酔薬に血管収縮薬（アドレナリンなど）を添加する主な目的は何か？",
            options: ["局所麻酔薬の効果を増強するため", "局所からの吸収を遅らせ、作用時間を延長し、血中濃度の上昇を抑えるため", "鎮痛効果を付加するため"],
            answer: "局所からの吸収を遅らせ、作用時間を延長し、血中濃度の上昇を抑えるため",
            explanation: "アドレナリンは局所の血管を収縮させ、局所麻酔薬の吸収を遅延させます。これにより、作用時間が延長し、中毒のリスクが低減します。",
            page: 151
        },
        {
            question: "問6: 局所麻酔薬のアレルギー反応は稀であるが、アミド型とエステル型のどちらでより頻度が高いとされているか？",
            options: ["アミド型", "エステル型", "両者に差はない"],
            answer: "エステル型",
            explanation: "エステル型局所麻酔薬の代謝産物であるパラアミノ安息香酸（PABA）がアレルギー反応の原因となることがあり、アミド型に比べてアレルギーの頻度が高いです。",
            page: 153
        },
        {
            question: "問7: 局所麻酔薬が作用を発揮するためには、神経線維のどの部分に到達する必要があるか？",
            options: ["神経線維の外側にあるミエリン鞘", "細胞膜の細胞質側にあるナトリウムチャネルの結合部位", "細胞核"],
            answer: "細胞膜の細胞質側にあるナトリウムチャネルの結合部位",
            explanation: "局所麻酔薬は、まず非イオン型として細胞膜を通過し、細胞内でイオン型となってナトリウムチャネルの細胞質側に結合してチャネルを遮断します。",
            page: 146
        },
        {
            question: "問8: 感染や炎症部位で局所麻酔薬が効きにくくなる主な理由は何か？",
            options: ["組織のpHがアルカリ性に傾くため", "組織のpHが酸性に傾き、局所麻酔薬のイオン型が増加して膜透過性が低下するため", "神経線維が破壊されるため"],
            answer: "組織のpHが酸性に傾き、局所麻酔薬のイオン型が増加して膜透過性が低下するため",
            explanation: "炎症部位では組織がアシドーシスに傾きます。これにより局所麻酔薬のイオン型が増え、脂溶性の非イオン型が減るため、神経細胞膜を透過しにくくなり効果が減弱します。",
            page: 146
        },
        {
            question: "問9: 脊髄くも膜下麻酔後頭痛（PDPH）の発生リスクを低減させると考えられている手技は何か？",
            options: ["太い穿刺針を使用する", "ペンシルポイント型の穿刺針を使用し、針の先端の穴を硬膜線維と平行に向ける", "穿刺後に急速に体動を開始する"],
            answer: "ペンシルポイント型の穿刺針を使用し、針の先端の穴を硬膜線維と平行に向ける",
            explanation: "カッティングニードルよりもペンシルポイントニードルの方が硬膜の穴を小さくし、髄液の漏出を減らすと考えられています。また、針の向きを工夫することも有効とされます。",
            page: 302
        },
        {
            question: "問10: 表面麻酔薬としてリドカインとプリロカインを混合したEMLAクリームが、健常皮膚に有効な理由は何か？",
            options: ["2剤の相乗効果で強力な麻酔作用が得られるため", "混合することで融点が室温以下になり、油状となって皮膚の角質層を透過しやすくなるため", "皮膚血管を収縮させる作用があるため"],
            answer: "混合することで融点が室温以下になり、油状となって皮膚の角質層を透過しやすくなるため",
            explanation: "EMLAは共融混合物であり、2つの固体が混ざることで液体（油状）となります。これにより、通常は透過しにくい皮膚の角質層への浸透性が高まり、表面麻酔効果を発揮します。",
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
        localStorage.setItem('c10_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c10_resident_results.html';
    });

    loadQuestion();
});
