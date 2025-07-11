document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 麻酔器の始業点検において、毎日必ず確認すべきバックアップ機器は何か？",
            options: ["予備の気化器", "予備の気管支ファイバー", "自己膨張式バッグと、麻酔器とは別の酸素ボンベ"],
            answer: "自己膨張式バッグと、麻酔器とは別の酸素ボンベ",
            explanation: "麻酔器の完全な故障や中央配管の供給停止といった緊急事態に備え、独立した換気・酸素化手段を確保しておくことは最も重要な安全確認項目です。",
            page: 249
        },
        {
            question: "問2: 麻酔回路の二酸化炭素（CO2）吸収剤が消耗した際に、麻酔器モニターで観察される最も直接的な所見は何か？",
            options: ["吸気酸素濃度（FiO2）の低下", "カプノグラム波形のベースラインの上昇（吸気CO2濃度の上昇）", "気道内圧の上昇"],
            answer: "カプノグラム波形のベースラインの上昇（吸気CO2濃度の上昇）",
            explanation: "CO2吸収剤が消耗すると、呼出されたCO2が除去されずに再呼吸されます。これにより、吸気ガス中にCO2が含まれるようになり、カプノグラムのベースラインが0から上昇します。",
            page: 251
        },
        {
            question: "問3: 酸素ボンベの色は国際的に緑色と定められているが、日本の笑気ボンベの色は何色か？",
            options: ["黄色", "青色", "黒色"],
            answer: "青色",
            explanation: "医療ガスのボンベは、内容物を識別するために色分けされています。日本では酸素が黒、笑気が青、空気が灰色（現在は国際規格に合わせ白と黒のツートン）と定められています。",
            page: 233
        },
        {
            question: "問4: 多くの麻酔器に搭載されている、低酸素ガス混合物の供給を防ぐための安全機構は何か？",
            options: ["酸素フラッシュバルブ", "酸素-笑気比例制御装置", "気化器インターロック機構"],
            answer: "酸素-笑気比例制御装置",
            explanation: "この機構は、笑気の流量を増加させると自動的に酸素流量も増加させ、酸素濃度が一定（例：25%）以下にならないように機械的にまたは電子的に制御する安全装置です。",
            page: 234
        },
        {
            question: "問5: デスフルランの気化器が、他の揮発性麻酔薬の気化器と異なり加熱・加圧機構を必要とする理由は何か？",
            options: ["分子量が大きいため", "沸点が室温に近く、蒸気圧が非常に高いため", "化学的に不安定なため"],
            answer: "沸点が室温に近く、蒸気圧が非常に高いため",
            explanation: "デスフルランは沸点が22.8℃と低く、室温で容易に沸騰します。そのため、加熱・加圧して一定の蒸気圧を保ち、正確な濃度で供給する特殊な気化器が必要です。",
            page: 237
        },
        {
            question: "問6: 麻酔回路のリークテストを行う際、陽圧をかける一般的な圧力はどのくらいか？",
            options: ["10 cmH2O", "30 cmH2O", "60 cmH2O"],
            answer: "30 cmH2O",
            explanation: "回路のリークテストでは、通常30 cmH2O程度の陽圧をかけ、圧力が10秒以上維持されることを確認します。これは、通常の換気圧よりやや高い圧力を想定しています。",
            page: 251
        },
        {
            question: "問7: 中央配管の酸素供給が停止した際、麻酔器の酸素ボンベを開放してもガスが流れないことがある。この場合、どのような操作が必要か？",
            options: ["気化器をOFFにする", "酸素フラッシュバルブを押す", "壁の配管ホースを麻酔器から外す"],
            answer: "壁の配管ホースを麻酔器から外す",
            explanation: "麻酔器は、圧力が高い中央配管からのガス供給を優先する設計になっています。配管内の圧力が残っているとボンベからのガスが流れないため、配管ホースを外す必要があります。",
            page: 232
        },
        {
            question: "問8: Mapleson A回路（Magill回路）が、自発呼吸下で最も効率的にCO2を排出できる理由は何か？",
            options: ["新鮮ガス流入口が患者側に近いため", "呼気弁が患者側に近いため", "呼気の大部分が回路から排出され、死腔ガスが次の吸気で再呼吸されるため"],
            answer: "呼気の大部分が回路から排出され、死腔ガスが次の吸気で再呼吸されるため",
            explanation: "自発呼吸では、呼気休止期に新鮮ガスが死腔ガスを押し出し、肺胞ガスが呼気弁から排出されます。これにより、少ない新鮮ガス流量でも再呼吸を防ぐことができます。",
            page: 243
        },
        {
            question: "問9: 閉鎖式回路麻酔（クローズドサーキット）の利点は何か？",
            options: ["麻酔深度の調節が容易である", "麻酔薬の消費量と医療廃棄物を最小限に抑え、加温・加湿に優れる", "回路内圧が安定する"],
            answer: "麻酔薬の消費量と医療廃棄物を最小限に抑え、加温・加湿に優れる",
            explanation: "閉鎖式回路は、呼出ガスをすべて再利用するため、麻酔薬と医療ガスの消費を極限まで減らし、環境負荷とコストを削減できます。また、呼気の熱と水分が保たれる利点もあります。",
            page: 242
        },
        {
            question: "問10: 酸素ボンベ（E-cylinder）が満タンの時の内圧は約2200 psigであるが、笑気ボンベが満タンの時の内圧は約750 psigである。この圧力が、ガスがなくなる直前まで一定なのはなぜか？",
            options: ["ボンベ内に圧力調整器があるため", "笑気が圧縮液体として充填されており、気化熱により圧力が一定に保たれるため", "笑気が圧縮液体として充填されており、気相の圧力が液相の蒸気圧と等しくなるため"],
            answer: "笑気が圧縮液体として充填されており、気相の圧力が液相の蒸気圧と等しくなるため",
            explanation: "笑気はボンベ内で液体と気体が共存しています。ガスが消費されると液体が気化して圧力を補充するため、液体がなくなるまで圧力はほぼ一定（飽和蒸気圧）に保たれます。",
            page: 232
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
        localStorage.setItem('c15_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c15_resident_results.html';
    });

    loadQuestion();
});
