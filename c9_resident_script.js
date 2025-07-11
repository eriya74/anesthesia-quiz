document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 臨床で用いられるオピオイドが作用する主な受容体はどれか？",
            options: ["δ（デルタ）受容体", "κ（カッパ）受容体", "μ（ミュー）受容体"],
            answer: "μ（ミュー）受容体",
            explanation: "オピオイドの鎮痛、鎮静、呼吸抑制などの主な臨床効果は、μオピオイド受容体を介して発現します。",
            page: 127
        },
        {
            question: "問2: オピオイドの最も重篤な副作用は何か？",
            options: ["嘔気・嘔吐", "呼吸抑制", "掻痒感"],
            answer: "呼吸抑制",
            explanation: "オピオイドによる呼吸抑制は、特に術後管理において低酸素脳症や死亡につながる可能性のある最も危険な副作用です。",
            page: 131
        },
        {
            question: "問3: フェンタニル、スフェンタニル、アルフェンタニル、レミフェンタニルが属するオピオイドの化学的分類は何か？",
            options: ["フェナントレン誘導体", "ベンゾモルファン誘導体", "フェニルピペリジン誘導体"],
            answer: "フェニルピペリジン誘導体",
            explanation: "フェンタニル系のオピオイドは、最初の完全合成オピオイドであるメペリジンを基本骨格とするフェニルピペリジン誘導体です。",
            page: 125
        },
        {
            question: "問4: レミフェンタニルが超短時間作用性である理由は、その特異的な代謝経路にある。その代謝はどこで行われるか？",
            options: ["肝臓のチトクロームP450", "血漿および組織中の非特異的エステラーゼ", "腎臓でのグルクロン酸抱合"],
            answer: "血漿および組織中の非特異的エステラーゼ",
            explanation: "レミフェンタニルはエステル結合を持ち、血中や組織の非特異的エステラーゼによって速やかに加水分解されるため、非常に短い作用時間を示します。",
            page: 135
        },
        {
            question: "問5: オピオイドによる呼吸抑制を拮抗するために用いられる純粋なオピオイド拮抗薬は何か？",
            options: ["ペンタゾシン", "ナロキソン", "ブプレノルフィン"],
            answer: "ナロキソン",
            explanation: "ナロキソンはオピオイド受容体への競合的拮抗薬であり、オピオイドによる呼吸抑制などの作用を速やかに改善するために用いられます。",
            page: 136
        },
        {
            question: "問6: オピオイドが引き起こす瞳孔の変化は何か？",
            options: ["散瞳（瞳孔が開く）", "縮瞳（瞳孔が小さくなる）", "変化なし"],
            answer: "縮瞳（瞳孔が小さくなる）",
            explanation: "オピオイドは動眼神経のEdinger-Westphal核を刺激し、瞳孔括約筋を収縮させることで縮瞳を引き起こします。これは耐性が生じにくい作用です。",
            page: 131
        },
        {
            question: "問7: モルヒネを経口投与した場合、静脈内投与に比べて生物学的利用率が低い。この主な理由は何か？",
            options: ["消化管からの吸収が悪い", "肝臓での初回通過効果が大きい", "肺での初回通過効果が大きい"],
            answer: "肝臓での初回通過効果が大きい",
            explanation: "経口投与されたモルヒネは、門脈を経て肝臓で大部分が代謝（初回通過効果）されるため、全身循環に到達する量が減少し、生物学的利用率が低くなります。",
            page: 135
        },
        {
            question: "問8: オピオイドと鎮静薬（プロポフォールや揮発性麻酔薬など）を併用した際に生じる薬力学的な相互作用は何か？",
            options: ["相加作用", "拮抗作用", "相乗作用"],
            answer: "相乗作用",
            explanation: "オピオイドと鎮静薬は、併用することでお互いの作用を著しく増強する相乗作用を示します。これにより、各薬剤の投与量を減らすことができます。",
            page: 132
        },
        {
            question: "問9: コデインが鎮痛効果を発揮するために、体内で代謝されて生成される活性物質は何か？",
            options: ["ヒドロモルフォン", "オキシコドン", "モルヒネ"],
            answer: "モルヒネ",
            explanation: "コデインはプロドラッグであり、肝臓のCYP2D6という酵素によってO-脱メチル化され、活性代謝物であるモルヒネに変換されることで鎮痛効果を発揮します。",
            page: 135
        },
        {
            question: "問10: オピオイドの静脈内投与後に、胸壁や腹壁の筋硬直が起こり、換気が困難になることがある。この現象を何と呼ぶか？",
            options: ["アナフィラキシー", "筋硬直（Muscle rigidity）", "悪性高熱症"],
            answer: "筋硬直（Muscle rigidity）",
            explanation: "特にフェンタニル系オピオイドを高用量で急速投与した際に、著しい筋硬直が起こることがあります。これは声帯の硬直も伴うため、換気困難の原因となります。",
            page: 131
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
        localStorage.setItem('c9_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c9_resident_results.html';
    });

    loadQuestion();
});
