document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 2014 ACC/AHA周術期心血管評価ガイドラインにおいて、冠動脈血行再建術（PCIまたはCABG）を術前に行うことが推奨されるのはどのような状況か？",
            options: ["安定冠動脈疾患を有するすべての患者", "術前に行われた非侵襲的評価で、広範な虚血が示唆された場合", "機能的能力が4METs未満のすべての患者"],
            answer: "術前に行われた非侵襲的評価で、広範な虚血が示唆された場合",
            explanation: "ガイドラインでは、ルーチンの予防的血行再建は推奨されていません。血行再建が考慮されるのは、通常の診療指針に基づき適応があると判断された場合、特に負荷試験で広範囲の虚血が示された症例です。",
            page: 199
        },
        {
            question: "問2: 僧帽弁機械弁置換後で心房細動を合併している患者は、周術期の血栓塞栓症リスクにおいてどのカテゴリーに分類されるか？",
            options: ["低リスク", "中リスク", "高リスク"],
            answer: "高リスク",
            explanation: "機械弁、特に僧帽弁位のものは血栓塞栓症のリスクが非常に高いです。さらに心房細動を合併している場合、ACCPガイドラインでは高リスクに分類され、抗凝固療法の中断には慎重な管理（ブリッジングなど）が求められます。",
            page: 203
        },
        {
            question: "問3: 直接経口抗凝固薬（DOAC）内服中の患者において、手術のための休薬期間を決定する際に最も重要な2つの因子は何か？",
            options: ["患者の年齢と体重", "手術の出血リスクと患者の腎機能（クレアチニンクリアランス）", "DOACの種類と内服期間"],
            answer: "手術の出血リスクと患者の腎機能（クレアチニンクリアランス）",
            explanation: "DOACの多くは腎排泄性であるため、腎機能によって半減期が大きく変動します。そのため、手術の出血リスクと個々の患者の腎機能を考慮して、安全な休薬期間を設定する必要があります。",
            page: 203
        },
        {
            question: "問4: 待機的非心臓手術を受ける患者で、周術期にACE阻害薬やARBを継続するか中止するかは議論がある。中止を考慮する主な理由は何か？",
            options: ["術後の高血圧リスクを低減するため", "麻酔導入後の難治性低血圧のリスクを低減するため", "術後の腎機能障害を予防するため"],
            answer: "麻酔導入後の難治性低血圧のリスクを低減するため",
            explanation: "ACE阻害薬やARBはレニン・アンジオテンシン系を抑制するため、麻酔薬による血管拡張と相まって、昇圧薬に反応しにくい難治性の低血圧を引き起こす可能性があります。",
            page: 202
        },
        {
            question: "問5: 脆弱性（Frailty）を有する高齢者が手術を受ける場合、周術期死亡率や合併症率が高いことが知られている。Frailtyの評価に含まれないものはどれか？",
            options: ["意図しない体重減少", "易疲労感", "血清アルブミン値"],
            answer: "血清アルブミン値",
            explanation: "Frailtyは、体重減少、易疲労感、身体活動量の低下、歩行速度の低下、握力の低下といった5つの要素で評価される臨床症候群であり、特定の検査値は含まれません。",
            page: 209
        },
        {
            question: "問6: 冠動脈ステント（特に第一世代DES）留置後の患者において、抗血小板薬の中止がステント血栓症という致死的な合併症を引き起こすリスクが最も高い期間はいつか？",
            options: ["留置後24時間以内", "留置後30日以内", "留置後6ヶ月から1年以内"],
            answer: "留置後30日以内",
            explanation: "ステント留置後、内皮化が完了するまでの期間は血栓形成のリスクが最も高く、特に最初の30日間はDAPTの中止が致命的なステント血栓症を引き起こす危険性が極めて高いです。",
            page: 205
        },
        {
            question: "問7: 術後肺合併症（PPC）のリスクを低減させるための術中管理として、中等度のエビデンスがあるとされるものは何か？",
            options: ["高濃度酸素の使用", "肺保護換気戦略（低一回換気量、PEEP、リクルートメント）", "筋弛緩薬の積極的な使用"],
            answer: "肺保護換気戦略（低一回換気量、PEEP、リクルートメント）",
            explanation: "ARDS患者で有効性が示された肺保護換気戦略は、一般の開腹手術などを受ける患者においても、術後肺合併症を減少させる可能性があるという中等度のエビデンスがあります。",
            page: 208
        },
        {
            question: "問8: 肥大型閉塞性心筋症（HOCM）患者の麻酔管理において、左室流出路閉塞を増悪させる可能性がある血行動態の変化は何か？",
            options: ["前負荷の増加", "後負荷の増加", "心収縮力の増強と前負荷の減少"],
            answer: "心収縮力の増強と前負荷の減少",
            explanation: "HOCMでは、心収縮力の増強（カテコラミン投与など）や、前負荷の減少（脱水、血管拡張薬）により、収縮期の僧帽弁前方運動（SAM）が助長され、左室流出路閉塞が悪化します。",
            page: 198
        },
        {
            question: "問9: 術前評価クリニック（Preoperative evaluation clinic）の導入が、病院システム全体にもたらす最も大きな利点は何か？",
            options: ["手術時間の短縮", "不適切な術前準備による手術キャンセル率の低下と医療費の削減", "麻酔科医の満足度向上"],
            answer: "不適切な術前準備による手術キャンセル率の低下と医療費の削減",
            explanation: "術前評価クリニックは、患者の状態を早期に評価・最適化し、不要な検査を削減することで、直前の手術キャンセルを防ぎ、結果として医療経済的にも大きな利益をもたらします。",
            page: 216
        },
        {
            question: "問10: 慢性腎臓病（CKD）患者の術前評価において、DOACs（直接経口抗凝固薬）の休薬期間を決定する際に、なぜクレアチニン値だけでなくクレアチニンクリアランス（CrCl）の評価が重要なのか？",
            options: ["CrClの方が測定が容易だから", "高齢者などでは、血清クレアチニン値が正常範囲でも腎機能が低下していることがあるため", "DOACsはクレアチニン値を上昇させるため"],
            answer: "高齢者などでは、血清クレアチニン値が正常範囲でも腎機能が低下していることがあるため",
            explanation: "高齢者や筋肉量の少ない患者では、腎機能が低下していても血清クレアチニン値が正常範囲内に留まることがあります。DOACsの排泄は腎機能に依存するため、より正確な腎機能評価であるCrClに基づいて休薬期間を決定する必要があります。",
            page: 203
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
        localStorage.setItem('c13_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c13_cardiac_results.html';
    });

    loadQuestion();
});
