document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 心臓手術を受ける高齢患者において、術後せん妄（delirium）のリスクを低減させるために、周術期管理で特に重要とされることは何か？",
            options: ["高用量のオピオイドを使用する", "デクスメデトミジン鎮静を選択し、ベンゾジアゼピンを避ける", "術中体温を35℃以下に保つ"],
            answer: "デクスメデトミジン鎮静を選択し、ベンゾジアゼピンを避ける",
            explanation: "高齢者の心臓手術後にはせん妄が高頻度に発生します。デクスメデトミジンは、ベンゾジアゼピン系薬剤と比較してせん妄の発生率を低下させる可能性が複数の研究で示唆されています。",
            page: 122
        },
        {
            question: "問2: 脳血流自己調節能が障害されている患者（例：慢性高血圧）の麻酔管理において、特に注意すべき点は何か？",
            options: ["脳血流が血圧の変動に依存しやすくなるため、厳格な血圧管理が求められる", "麻酔薬による脳血管拡張作用がなくなるため、高濃度でも安全である", "脳酸素代謝が亢進するため、高濃度酸素投与が必要である"],
            answer: "脳血流が血圧の変動に依存しやすくなるため、厳格な血圧管理が求められる",
            explanation: "自己調節能が障害されると、脳血流は血圧に直接依存するようになります。そのため、術中のわずかな血圧低下でも脳虚血を引き起こすリスクが高まり、厳密な血圧維持が極めて重要となります。",
            page: 94
        },
        {
            question: "問3: 新生児の心臓手術において、低体温療法が脳保護的に働く主な機序は何か？",
            options: ["脳血管を強力に収縮させる", "脳酸素代謝率（CMRO2）を低下させ、虚血時のエネルギー需要を減らす", "神経伝達物質の放出を促進する"],
            answer: "脳酸素代謝率（CMRO2）を低下させ、虚血時のエネルギー需要を減らす",
            explanation: "低体温は脳の代謝活動を著しく低下させます。これにより、人工心肺中などの虚血状態における酸素需要が減少し、神経細胞がエネルギー枯渇による障害から保護されます。",
            page: 191
        },
        {
            question: "問4: 揮発性麻酔薬による心筋プレコンディショニング効果が期待される臨床状況は何か？",
            options: ["出血性ショック", "冠動脈バイパス術（CABG）などの虚血再灌流が生じる手術", "敗血症"],
            answer: "冠動脈バイパス術（CABG）などの虚血再灌流が生じる手術",
            explanation: "プレコンディショニングは、致死的な虚血に先立つ短時間の虚血刺激が心筋を保護する現象です。揮発性麻酔薬はこの効果を薬理学的に模倣し、CABGなどの虚血再灌流障害から心筋を保護する可能性が期待されています。",
            page: 95
        },
        {
            question: "問5: 脳外科手術で意図的に低血圧麻酔を行う際、神経保護の観点から脳波（EEG）モニタリングで目標とされる状態は何か？",
            options: ["脳波の平坦化（isoelectric EEG）", "バーストサプレッション（burst suppression）", "β波の優位な状態"],
            answer: "バーストサプレッション（burst suppression）",
            explanation: "バーストサプレッションは、脳の代謝を最大限に抑制しつつ、完全な平坦化（脳死に近い状態）は避けるレベルであり、脳保護目的で麻酔深度の一つの指標とされます。",
            page: 111
        },
        {
            question: "問6: 心臓手術後の患者において、術後認知機能障害（POCD）のリスク評価で、手術要因以外に特に重要な患者側因子は何か？",
            options: ["年齢と術前の認知機能", "血液型", "身長"],
            answer: "年齢と術前の認知機能",
            explanation: "高齢であること、そして術前から軽度の認知機能低下が存在することは、POCDの最も強力な危険因子であることが多くの研究で示されています。",
            page: 100
        },
        {
            question: "問7: 頸動脈内膜剥離術（CEA）など、脳血流のモニタリングが重要な手術において、脳酸素飽和度（rSO2）が低下した場合に考慮すべき最初の介入は何か？",
            options: ["輸血を開始する", "平均動脈圧を上昇させる", "麻酔深度を浅くする"],
            answer: "平均動脈圧を上昇させる",
            explanation: "rSO2の低下は脳の酸素需給バランスの悪化を示唆します。まず脳灌流圧を改善するために、平均動脈圧を上昇させることが一般的な初期対応となります。",
            page: 375
        },
        {
            question: "問8: 動物実験において、麻酔薬による神経毒性はGABA作動薬とNMDA拮抗薬の両方で報告されている。このことから示唆される共通のメカニズムは何か？",
            options: ["ミトコンドリア機能障害", "正常な興奮性・抑制性神経伝達のバランスを崩すこと", "アセチルコリン系の障害"],
            answer: "正常な興奮性・抑制性神経伝達のバランスを崩すこと",
            explanation: "GABA作動薬は抑制を強め、NMDA拮抗薬は興奮を弱めます。どちらも正常な神経活動のバランスを大きく崩すことが、発達期の神経細胞にとってストレスとなり、アポトーシスを誘導する一因と考えられています。",
            page: 185
        },
        {
            question: "問9: 心臓手術における体外循環離脱後の低心拍出量症候群（LCOS）の管理において、TEE（経食道心エコー）が提供する最も重要な情報は何か？",
            options: ["心拍数", "心室の充満状態、壁運動、弁機能の直接的な評価", "心電図変化"],
            answer: "心室の充満状態、壁運動、弁機能の直接的な評価",
            explanation: "TEEは、LCOSの原因（容量不足、心筋収縮力低下、弁逆流、タンポナーデなど）をリアルタイムで直接的に評価できるため、原因に基づいた的確な治療（輸液、強心薬、血管拡張薬など）の選択を可能にします。",
            page: 374
        },
        {
            question: "問10: 脳死患者からの臓器摘出術における麻酔管理の主な目的は何か？",
            options: ["患者の意識レベルを評価すること", "交感神経反射や血行動態の変動を抑制し、提供される臓器の灌流を最適に保つこと", "筋弛緩を得ること"],
            answer: "交感神経反射や血行動態の変動を抑制し、提供される臓器の灌流を最適に保つこと",
            explanation: "脳死状態でも脊髄反射などにより、手術侵襲に対して血圧上昇や頻脈などの交感神経反射が起こり得ます。これを抑制し、各臓器への血流を安定させることが、移植臓器の機能を保つ上で極めて重要です。",
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
        localStorage.setItem('c12_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c12_cardiac_results.html';
    });

    loadQuestion();
});
