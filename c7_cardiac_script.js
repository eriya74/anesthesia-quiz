document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 心筋虚血プレコンディショニングにおいて、揮発性麻酔薬が保護的な役割を果たすと考えられているが、その作用機序として提唱されているものは何か？",
            options: ["ミトコンドリアのATP感受性K+チャネルの開口", "冠動脈の強力な血管拡張作用", "心筋の酸素消費量の大幅な抑制"],
            answer: "ミトコンドリアのATP感受性K+チャネルの開口",
            explanation: "揮発性麻酔薬によるプレコンディショニング効果は、ミトコンドリアのKATPチャネルを開口させ、虚血再灌流障害時の細胞内カルシウム過負荷を抑制することなどが機序として考えられています。",
            page: 95
        },
        {
            question: "問2: 右心不全や肺高血圧のある患者において、笑気（亜酸化窒素）の使用を避けるべきとされる主な理由は何か？",
            options: ["心収縮力を抑制するため", "肺血管抵抗を上昇させるため", "全身血管抵抗を低下させるため"],
            answer: "肺血管抵抗を上昇させるため",
            explanation: "笑気は肺血管抵抗を上昇させる作用があり、既存の肺高血圧や右心不全を悪化させる可能性があるため、心臓麻酔領域では使用に注意が必要です。",
            page: 94
        },
        {
            question: "問3: 揮発性麻酔薬はQT時間を延長させる可能性があるが、特にどの薬剤でその傾向が強いとされているか？",
            options: ["デスフルラン", "イソフルラン", "セボフルラン"],
            answer: "セボフルラン",
            explanation: "すべての揮発性麻酔薬はQT時間を延長させる可能性がありますが、特にセボフルランはその作用が比較的強いと報告されており、QT延長症候群の患者には注意が必要です。",
            page: 94
        },
        {
            question: "問4: 冠動脈疾患患者において、麻酔導入・維持中の急激な頻脈が心筋虚血を誘発する最大の理由は何か？",
            options: ["心筋酸素供給が増加するため", "拡張期時間が短縮し、冠血流が減少するため", "後負荷が増大するため"],
            answer: "拡張期時間が短縮し、冠血流が減少するため",
            explanation: "冠動脈の血流は主に拡張期に供給されます。頻脈になると心周期における拡張期の割合が著しく短縮し、心筋への酸素供給が不足し虚血に陥ります。",
            page: 94
        },
        {
            question: "問5: ハロタンがカテコラミンに対する心筋の感受性を高めることで、不整脈を誘発しやすいとされるメカニズムは何か？",
            options: ["カルシウムチャネルの遮断", "カリウムチャネルの開口", "リエントリー回路の形成促進"],
            answer: "リエントリー回路の形成促進",
            explanation: "ハロタンは心筋の伝導速度を不均一に抑制し、有効不応期を短縮させることで、カテコラミン刺激下でリエントリー性の心室性不整脈を発生させやすくします。",
            page: 94
        },
        {
            question: "問6: 心機能が低下した患者において、揮発性麻酔薬による心拍出量の低下が最も顕著なのはどの薬剤か？",
            options: ["デスフルラン", "イソフルラン", "ハロタン"],
            answer: "ハロタン",
            explanation: "ハロタンは他の揮発性麻酔薬と比較して、心筋収縮抑制作用が最も強く、用量依存的に心拍出量を低下させます。",
            page: 94
        },
        {
            question: "問7: ENIGMA-II trialが、心疾患リスクの高い患者における笑気の使用について示した結論は何か？",
            options: ["笑気は心筋梗塞のリスクを有意に増加させる", "笑気の使用は、主要な心血管イベントのリスクを増加させない", "笑気は脳卒中のリスクを減少させる"],
            answer: "笑気の使用は、主要な心血管イベントのリスクを増加させない",
            explanation: "大規模臨床試験であるENIGMA-II trialでは、FIO2を統一した条件下で、心疾患リスクの高い患者に笑気を使用しても、心筋梗塞、脳卒中、死亡のリスクは増加しないことが示されました。",
            page: 97
        },
        {
            question: "問8: 揮発性麻酔薬は脳血流自己調節能を障害するが、その影響が最も少ないとされるのはどの薬剤か？",
            options: ["ハロタン", "イソフルラン", "セボフルラン"],
            answer: "セボフルラン",
            explanation: "セボフルランは、他の揮発性麻酔薬と比較して、脳血流の自己調節能を比較的保つとされており、脳神経外科手術において利点となる可能性があります。",
            page: 94
        },
        {
            question: "問9: 肝移植手術において、揮発性麻酔薬が肝血流に与える影響として正しいものはどれか？",
            options: ["門脈血流と肝動脈血流の両方を増加させる", "門脈血流を減少させるが、肝動脈血流は維持または増加させる", "門脈血流と肝動脈血流の両方を減少させる"],
            answer: "門脈血流を減少させるが、肝動脈血流は維持または増加させる",
            explanation: "揮発性麻酔薬は心拍出量の低下に伴い門脈血流を減少させますが、代償的な肝動脈血流の増加（Hepatic Artery Buffer Response）や直接的な血管拡張作用により、肝動脈血流は保たれる傾向にあります。",
            page: 96
        },
        {
            question: "問10: 揮発性麻酔薬が非脱分極性筋弛緩薬の作用を増強する度合いが最も強いのはどの薬剤か？",
            options: ["セボフルラン", "イソフルラン", "デスフルラン"],
            answer: "デスフルラン",
            explanation: "筋弛緩薬の作用増強効果は、デスフルラン＞セボフルラン＞イソフルラン＞ハロタン・TIVAの順で強いとされています。",
            page: 96
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
        localStorage.setItem('c7_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c7_cardiac_results.html';
    });

    loadQuestion();
});
