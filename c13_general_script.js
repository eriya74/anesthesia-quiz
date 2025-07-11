document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: ACC/AHAガイドラインによる周術期心血管評価のステップワイズアプローチにおいて、緊急手術が必要な患者に対する最初のステップは何か？",
            options: ["心機能評価のための負荷試験を行う", "周術期管理に影響を与えうる臨床的リスク因子を評価し、手術を続行する", "手術を延期し、冠動脈血行再建術を検討する"],
            answer: "周術期管理に影響を与えうる臨床的リスク因子を評価し、手術を続行する",
            explanation: "緊急手術の場合、詳細な心機能評価の時間はなく、既知のリスク因子に基づいて周術期管理戦略を立て、速やかに手術へ進むことが推奨されます。",
            page: 199
        },
        {
            question: "問2: Revised Cardiac Risk Index (RCRI)に含まれる6つのリスク因子のうち、手術の種類に関連するものはどれか？",
            options: ["整形外科手術", "腹腔内、胸腔内、または鼠径上部の血管手術", "頭蓋内手術"],
            answer: "腹腔内、胸腔内、または鼠径上部の血管手術",
            explanation: "RCRIでは、高リスク手術として腹腔内手術、胸腔内手術、および鼠径部より中枢側の血管手術が挙げられています。",
            page: 201
        },
        {
            question: "問3: 機能的能力の評価に用いられるDuke Activity Status Index (DASI)スコアが34点以上であった場合、それは何を意味するか？",
            options: ["心機能が著しく低く、追加の精査が必要である", "心機能の評価が不可能である", "心臓合併症のリスクが低いと判断され、追加の心機能検査は通常不要である"],
            answer: "心臓合併症のリスクが低いと判断され、追加の心機能検査は通常不要である",
            explanation: "DASIスコアが34点（METs > 4に相当）を超える患者は、良好な機能的能力を有すると見なされ、周術期の心血管イベントのリスクが低いと判断されます。",
            page: 200
        },
        {
            question: "問4: 待機手術を受ける高血圧患者で、収縮期血圧が180mmHg以上または拡張期血圧が110mmHg以上の場合、ACC/AHAガイドラインが推奨する対応は何か？",
            options: ["降圧薬を投与し、直ちに手術を開始する", "手術の延期を考慮する", "麻酔導入で降圧できるため、そのまま手術を続行する"],
            answer: "手術の延期を考慮する",
            explanation: "重度の高血圧（ステージ3）は、周術期の血圧変動や心血管イベントのリスクを高めるため、可能であれば手術を延期し、血圧コントロールを優先することが推奨されます。",
            page: 202
        },
        {
            question: "問5: ワルファリン内服中の心房細動患者が待機手術を受ける際、抗凝固療法の中断に伴う血栓塞栓症のリスク評価に用いられるスコアは何か？",
            options: ["HAS-BLEDスコア", "CHADS2スコア（またはCHA2DS2-VAScスコア）", "TIMIリスクスコア"],
            answer: "CHADS2スコア（またはCHA2DS2-VAScスコア）",
            explanation: "CHADS2スコアやCHA2DS2-VAScスコアは、心房細動患者の脳卒中リスクを層別化するために用いられ、周術期の抗凝固療法中断のリスク評価とブリッジング療法の要否判断に役立ちます。",
            page: 203
        },
        {
            question: "問6: BRIDGE試験の結果に基づき、ワルファリン内服中の心房細動患者に対する周術期のブリッジング療法に関する現在の考え方として、最も適切なものはどれか？",
            options: ["全例でブリッジング療法を行うべきである", "血栓塞栓症のリスクに関わらず、ブリッジングは出血リスクを増加させるため避けるべきである", "多くの患者ではブリッジングは不要であり、出血リスクを増加させる可能性がある"],
            answer: "多くの患者ではブリッジングは不要であり、出血リスクを増加させる可能性がある",
            explanation: "BRIDGE試験は、多くの心房細動患者において、周術期のヘパリンブリッジング療法は血栓塞栓症を減らさず、逆に出血性合併症を有意に増加させることを示しました。",
            page: 204
        },
        {
            question: "問7: 薬剤溶出ステント（DES）留置後の患者が非心臓手術を受ける場合、DAPT（二剤抗血小板療法）の中断に関して、ACC/AHAガイドラインが推奨する待機期間はどれくらいか？",
            options: ["最低30日", "至適には6ヶ月", "最低12ヶ月"],
            answer: "至適には6ヶ月",
            explanation: "ステント血栓症のリスクを最小限にするため、DES留置後の待機手術は、可能であれば6ヶ月間延期することが推奨されています。緊急性が高い場合は、リスクとベネフィットを慎重に評価します。",
            page: 205
        },
        {
            question: "問8: 術後呼吸器合併症（PPC）のリスク予測スコア（PERISCOPE-PRF scoreなど）に含まれる手術関連因子は何か？",
            options: ["手術時間と手術部位", "麻酔方法", "術中出血量"],
            answer: "手術時間と手術部位",
            explanation: "PPCのリスクは、手術時間が長いほど、また手術部位が上腹部や胸部であるほど高くなります。これらは多くのリスクスコアで重要な因子として採用されています。",
            page: 208
        },
        {
            question: "問9: 易骨折性の高齢者が緊急手術を受ける場合、術前評価において最も優先すべきことは何か？",
            options: ["詳細な心機能評価のための待機", "生命を脅かす状態の安定化と、手術の遅延を最小限に抑えること", "完全な栄養評価と改善"],
            answer: "生命を脅かす状態の安定化と、手術の遅延を最小限に抑えること",
            explanation: "大腿骨頸部骨折などの緊急手術では、手術の遅延が死亡率を増加させることが知られています。そのため、術前評価は迅速に行い、生命維持に必要な最低限の安定化を図った上で、早期の手術を目指します。",
            page: 217
        },
        {
            question: "問10: Enhanced Recovery After Surgery (ERAS) プロトコルにおいて、術前管理の重要な要素は何か？",
            options: ["長時間の絶食と機械的な腸管処置", "術前の炭水化物ローディングと、可能な限りの経口摂取維持", "予防的な広域抗菌薬の長期投与"],
            answer: "術前の炭水化物ローディングと、可能な限りの経口摂取維持",
            explanation: "ERASでは、術前の絶食時間を短縮し、手術2時間前まで炭水化物飲料を摂取させることで、術後のインスリン抵抗性を軽減し、異化亢進を防ぐことが推奨されています。",
            page: 216
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
        localStorage.setItem('c13_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c13_general_results.html';
    });

    loadQuestion();
});
