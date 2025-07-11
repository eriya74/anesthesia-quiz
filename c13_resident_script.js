document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: ASAの術前回診の基準によると、麻酔科医が術前に必ず行うべき評価項目に含まれないものはどれか？",
            options: ["病歴の聴取と診察", "術前検査のオーダー", "麻酔計画の立案", "家族構成の確認"],
            answer: "家族構成の確認",
            explanation: "ASAの基準では、病歴聴取、診察、必要な検査のオーダー、麻酔計画の立案、インフォームド・コンセントの取得などが求められますが、家族構成の確認は必須項目ではありません。",
            page: 196
        },
        {
            question: "問2: ASAフィジカルステータス（PS）分類において、「軽度の全身性疾患を有する患者」はどのクラスに分類されるか？",
            options: ["ASA 1", "ASA 2", "ASA 3"],
            answer: "ASA 2",
            explanation: "ASA 2は、実質的な機能制限を伴わない軽度の全身性疾患を持つ患者を指します。例として、コントロール良好な高血圧や糖尿病、喫煙、肥満などが挙げられます。",
            page: 214
        },
        {
            question: "問3: 術前の絶食指示（NPOガイドライン）で、清澄水（水、お茶、パルプなしジュースなど）の摂取が許可されるのは、麻酔開始の何時間前までか？",
            options: ["8時間前", "6時間前", "2時間前"],
            answer: "2時間前",
            explanation: "ASAのガイドラインでは、誤嚥リスクを低減するため、清澄水は2時間前まで、軽食は6時間前まで、脂肪分の多い食事は8時間前までの絶食が推奨されています。",
            page: 213
        },
        {
            question: "問4: 術前回診において、患者の機能的能力を評価するために用いられる指標は何か？",
            options: ["BMI（Body Mass Index）", "METs（Metabolic Equivalents）", "RCRI（Revised Cardiac Risk Index）"],
            answer: "METs（Metabolic Equivalents）",
            explanation: "METsは活動時の酸素消費量を表す単位で、患者がどの程度の身体活動を行えるか（例：階段を昇れるか）を評価し、心血管系の予備能を推測するために用いられます。",
            page: 199
        },
        {
            question: "問5: 術前にβ遮断薬を内服している高血圧患者に対する、周術期の服薬管理として最も適切なものはどれか？",
            options: ["手術当日は中止する", "手術当日も継続する", "手術1週間前から中止する"],
            answer: "手術当日も継続する",
            explanation: "β遮断薬の急な中止は、リバウンド現象による頻脈や高血圧を引き起こす危険があるため、周術期を通して継続することが推奨されています。",
            page: 202
        },
        {
            question: "問6: 術前回診で、過去の麻酔で悪性高熱症の家族歴を聴取した場合、最も重要な対応は何か？",
            options: ["硬膜外麻酔を選択する", "揮発性吸入麻酔薬とサクシニルコリンの使用を避ける", "術前にダントロレンを予防投与する"],
            answer: "揮発性吸入麻酔薬とサクシニルコリンの使用を避ける",
            explanation: "悪性高熱症は揮発性吸入麻酔薬とサクシニルコリンによって誘発される遺伝性疾患です。家族歴がある場合は、これらの誘因薬物を完全に避けた麻酔計画を立てる必要があります。",
            page: 196
        },
        {
            question: "問7: 術前検査に関するASAの推奨（Choosing Wiselyキャンペーンなど）の基本的な考え方は何か？",
            options: ["全例にルーチンの術前検査を行うべきである", "低リスク手術を受ける無症状の健常患者には、ルーチンの術前検査は不要である", "年齢に基づいて一律に検査を行うべきである"],
            answer: "低リスク手術を受ける無症状の健常患者には、ルーチンの術前検査は不要である",
            explanation: "近年のガイドラインでは、病歴や身体所見から必要性が判断されない限り、低侵襲手術前のルーチン検査は推奨されていません。選択的検査が原則です。",
            page: 210
        },
        {
            question: "問8: 感染性心内膜炎（IE）の予防的抗菌薬投与が推奨される歯科処置前の心疾患として、リスクが最も高いものはどれか？",
            options: ["僧帽弁逸脱症", "心房中隔欠損症", "人工弁置換術後"],
            answer: "人工弁置換術後",
            explanation: "AHAガイドラインでは、IE発症時の予後が極めて不良となるハイリスク群（人工弁、IE既往、特定の先天性心疾患など）に限り、予防的抗菌薬投与が推奨されています。",
            page: 209
        },
        {
            question: "問9: 術前の気道評価において、Mallampati分類 Class IIIとはどのような所見か？",
            options: ["軟口蓋、口蓋垂、口蓋弓、扁桃がすべて見える", "軟口蓋、口蓋垂の基部が見える", "軟口蓋が見えない"],
            answer: "軟口蓋、口蓋垂の基部が見える",
            explanation: "Mallampati分類 Class IIIでは、舌の相対的な大きさにより、見える範囲が軟口蓋と口蓋垂の基部に限定されます。これは気管挿管困難の一つの予測因子です。",
            page: 259
        },
        {
            question: "問10: 術前のインフォームド・コンセントにおいて、麻酔科医が患者に説明すべき内容として最も重要なことは何か？",
            options: ["麻酔薬の正確な化学式", "麻酔計画、そのリスクとベネフィット、および代替案", "麻酔器の機種名"],
            answer: "麻酔計画、そのリスクとベネフィット、および代替案",
            explanation: "インフォームド・コンセントの核心は、患者が自己の治療について十分な情報を得た上で、自律的な意思決定を下せるようにすることです。そのためには、計画、リスク、利益、代替案の説明が不可欠です。",
            page: 215
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
        localStorage.setItem('c13_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c13_resident_results.html';
    });

    loadQuestion();
});
