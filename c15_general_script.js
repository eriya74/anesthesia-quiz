document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: Pin Index Safety System (PISS) は、どの接続における誤接続を防止するための安全機構か？",
            options: ["中央配管と麻酔器", "気化器と麻酔器", "ガスボンベと麻酔器のヨーク"],
            answer: "ガスボンベと麻酔器のヨーク",
            explanation: "PISSは、各医療ガスボンベのバルブに固有のピン配置の穴を設け、対応する麻酔器のヨークにしか接続できないようにすることで、ガスボンベの誤接続を物理的に防ぎます。",
            page: 231
        },
        {
            question: "問2: 乾燥したCO2吸収剤（特に水酸化カリウムや水酸化ナトリウムを含むもの）と揮発性麻酔薬が反応して生成される、最も危険な物質は何か？",
            options: ["コンパウンドA", "ホルムアルデヒド", "一酸化炭素（CO）"],
            answer: "一酸化炭素（CO）",
            explanation: "乾燥した強アルカリ性の吸収剤は、特にデスフルランやイソフルランと反応して、臨床的に有意な濃度の一酸化炭素を生成する可能性があり、重篤なCO中毒を引き起こす危険があります。",
            page: 241
        },
        {
            question: "問3: 現代の麻酔器人工呼吸器に備わっている、新鮮ガス流量の変動が設定一回換気量に影響を与えるのを防ぐ機構は何か？",
            options: ["気化器インターロック", "新鮮ガスデカップリング機構または流量補正機能", "酸素フラッシュバルブ"],
            answer: "新鮮ガスデカップリング機構または流量補正機能",
            explanation: "旧式の呼吸器では、吸気相に流入する新鮮ガスが設定換気量に加算されていましたが、現代の呼吸器は、吸気相中に新鮮ガスを回路から隔離（デカップリング）するか、流量センサーで実測して補正する機能を持ちます。",
            page: 247
        },
        {
            question: "問4: 昇順ベローズ（standing bellows）が、降順ベローズ（hanging bellows）よりも安全とされる主な理由は何か？",
            options: ["より正確な換気量を提供できるため", "回路からのリークや外れが発生した場合に、ベローズが膨らまず落下するため、視覚的に異常を検知しやすいから", "内部の抵抗が少ないため"],
            answer: "回路からのリークや外れが発生した場合に、ベローズが膨らまず落下するため、視覚的に異常を検知しやすいから",
            explanation: "昇順ベローズは呼気で上昇するため、回路のリークがあると自重で落下し、換気が行われていないことを視覚的に警告します。一方、降順ベローズはリークがあっても自重で下降するため、異常に気づきにくいです。",
            page: 245
        },
        {
            question: "問5: 低流量麻酔中に、吸気酸素濃度（FiO2）が設定した新鮮ガス酸素濃度よりも低くなることがある。この現象の主な原因は何か？",
            options: ["気化器からの麻酔蒸気による希釈", "患者の酸素消費により、呼出ガス中の酸素濃度が低下し、それが再呼吸されるため", "回路内での酸素の化学反応"],
            answer: "患者の酸素消費により、呼出ガス中の酸素濃度が低下し、それが再呼吸されるため",
            explanation: "低流量麻酔では、回路内ガスの大部分が患者の呼出ガスで構成されます。患者が酸素を消費するため、呼出ガスの酸素濃度は吸気より低く、これが再呼吸されることで、結果的に吸気酸素濃度が新鮮ガス濃度より低下します。",
            page: 242
        },
        {
            question: "問6: 可変バイパス式気化器が高地（気圧が低い場所）で使用された場合、気化器のダイヤル設定値と実際の送出濃度（体積%）および分圧の関係はどうなるか？",
            options: ["送出濃度は設定値より低くなり、分圧も低くなる", "送出濃度は設定値より高くなるが、送出される麻酔薬の分圧は海抜ゼロメートル地とほぼ同じになる", "送出濃度も分圧も変化しない"],
            answer: "送出濃度は設定値より高くなるが、送出される麻酔薬の分圧は海抜ゼロメートル地とほぼ同じになる",
            explanation: "気化器は分圧を基準にガスを混合するため、総圧（周囲気圧）が低下すると、同じ分圧を維持するために相対的な濃度（体積%）は高くなります。麻酔効果は分圧で決まるため、臨床的な影響は少ないです。",
            page: 236
        },
        {
            question: "問7: Mapleson D回路を調節呼吸で使用する場合、再呼吸を防ぐために必要な最小新鮮ガス流量は、患者の分時換気量（MV）に対してどの程度か？",
            options: ["MVの約0.5倍", "MVの約1倍", "MVの約1.5〜2倍"],
            answer: "MVの約1.5〜2倍",
            explanation: "Mapleson D回路を調節呼吸で用いる場合、呼気相の初期に肺胞ガスが回路の患者側末端に溜まります。これを次の吸気までに新鮮ガスで洗い出すために、分時換気量の1.5〜2倍程度の高い新鮮ガス流量が必要となります。",
            page: 243
        },
        {
            question: "問8: 自動麻酔器チェックでは検出が困難で、麻酔科医による機能確認が特に重要な呼吸回路の異常は何か？",
            options: ["回路のリーク", "一方向弁の固着や機能不全", "酸素センサーの較正エラー"],
            answer: "一方向弁の固着や機能不全",
            explanation: "多くの自動チェックでは、一方向弁の正常な動きまでは確認できません。弁の固着は重篤な再呼吸や閉塞につながるため、用手的なフローテスト（テスト肺を用いた換気確認）が推奨されます。",
            page: 251
        },
        {
            question: "問9: ピストン式人工呼吸器が、従来のベローズ式と比較して持つ利点は何か？",
            options: ["駆動ガスを必要としないため、ガス消費量が少ない", "より高い気道内圧をかけることができる", "回路のコンプライアンスの影響を受けない"],
            answer: "駆動ガスを必要としないため、ガス消費量が少ない",
            explanation: "ピストン式呼吸器は、圧縮ガスではなく電気モーターでピストンを駆動するため、駆動ガスの消費がありません。これにより、特に酸素ボンベ使用時などのガス供給が限られる状況で有利です。",
            page: 246
        },
        {
            question: "問10: 閉鎖式回路（クローズドサーキット）で麻酔を行う際、吸気麻酔濃度を一定に保つのが難しい。その主な理由は何か？",
            options: ["患者の体温が変動するため", "患者による麻酔薬の取り込み量が時間と共に変化するため", "二酸化炭素吸収剤が麻酔薬を吸収するため"],
            answer: "患者による麻酔薬の取り込み量が時間と共に変化するため",
            explanation: "麻酔導入初期は、組織への麻酔薬の取り込みが大きいため、回路内の麻酔濃度は急速に低下します。時間が経つにつれて取り込みは減少するため、濃度を一定に保つには継続的な調整が必要です。",
            page: 242
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
        localStorage.setItem('c15_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c15_general_results.html';
    });

    loadQuestion();
});
