document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 収縮期圧-容積関係(systolic pressure–volume relationship)は何を反映する指標か？",
            options: ["前負荷(Preload)", "後負荷(Afterload)", "心筋固有の収縮性(Inotropic state)"],
            answer: "心筋固有の収縮性(Inotropic state)",
            explanation: "収縮期圧-容積関係は、負荷条件から独立した心筋の収縮性を反映します。異なる前負荷条件下での曲線の族から構築されます。",
            page: "54, Fig. 5.3"
        },
        {
            question: "問2: 左室拡張末期圧(LVEDP)の上昇が冠動脈灌流に与える影響は何か？",
            options: ["冠灌流圧を増加させる。", "冠灌流圧を低下させる。", "冠灌流圧に影響を与えない。"],
            answer: "冠灌流圧を低下させる。",
            explanation: "左心室の灌流圧は「拡張期血圧 - LVEDP」で決まります。LVEDPが上昇すると、有効な下流圧が上昇し、灌流圧が低下するため心筋虚血のリスクが高まります。",
            page: 56
        },
        {
            question: "問3: Westの肺区域(zones of the lung)において、Zone 1が臨床的に発生しやすい状況はどれか？",
            options: ["肺高血圧症", "左心不全", "陽圧換気下での低血圧・出血"],
            answer: "陽圧換気下での低血圧・出血",
            explanation: "Zone 1は肺胞圧が肺動脈圧および肺静脈圧を上回る状態で、血流がありません。陽圧換気や低血圧時に発生しやすくなります。",
            page: 57
        },
        {
            question: "問4: 肺動脈カテーテルで測定した肺動脈楔入圧(PCWP)が左房圧(LAP)を正確に反映しない病態はどれか？",
            options: ["僧帽弁閉鎖不全症", "肺静脈閉塞性疾患", "大動脈弁狭窄症"],
            answer: "肺静脈閉塞性疾患",
            explanation: "PCWPがLAPを反映するには、カテーテル先端と左房の間に閉塞がないことが前提です。肺静脈の閉塞があると、PCWPはLAPより高値となります。",
            page: 53
        },
        {
            question: "問5: 収縮性心膜炎や心タンポナーデで見られる、吸気時の収縮期血圧の著明な低下を何と呼ぶか？",
            options: ["Pulsus alternans (交互脈)", "Pulsus paradoxus (奇脈)", "Pulsus bisferiens (二峰性脈)"],
            answer: "Pulsus paradoxus (奇脈)",
            explanation: "奇脈は吸気時に心室充満が障害されることで生じ、収縮期血圧が10mmHg以上低下する現象です。心タンポナーデの徴候として重要です。",
            page: 54
        },
        {
            question: "問6: 低心拍出量(low CO)が存在するにも関わらず、混合静脈血酸素飽和度(SvO2)が高値を示すことがある病態はどれか？",
            options: ["心原性ショック", "敗血症性ショック(Sepsis)", "出血性ショック"],
            answer: "敗血症性ショック(Sepsis)",
            explanation: "敗血症では、末梢での酸素利用障害により、組織が酸素を十分に抽出できず、結果としてSvO2が高値を示すことがあります。",
            page: 61
        },
        {
            question: "問7: 右心室(RV)の灌流が主に起こるのは心周期のどの時期か？",
            options: ["収縮期のみ", "拡張期のみ", "収縮期と拡張期の両方"],
            answer: "収縮期と拡張期の両方",
            explanation: "右心室は壁内圧が低いため、左心室とは異なり、収縮期と拡張期の両方で灌流されます。",
            page: 56
        },
        {
            question: "問8: 陽圧換気が左心室(LV)の後負荷に与える影響は何か？",
            options: ["LV後負荷を増加させる。", "LV後負荷を減少させる。", "LV後負荷に影響を与えない。"],
            answer: "LV後負荷を減少させる。",
            explanation: "陽圧換気は胸腔内圧を上昇させ、心臓に対する外圧を高めることで、LVの壁応力を減少させ、結果的にLV後負荷を軽減します。",
            page: 68
        },
        {
            question: "問9: 肺塞栓症によって急激に増大する死腔はどれか？",
            options: ["解剖学的死腔", "肺胞死腔", "装置死腔"],
            answer: "肺胞死腔",
            explanation: "肺塞栓症では、血流が途絶えた換気領域（肺胞）が生じます。これがガス交換に関与しない肺胞死腔となり、全体の死腔を増大させます。",
            page: 63
        },
        {
            question: "問10: 心臓手術後の患者で、一回換気量チャレンジ(tidal volume challenge)が有用な評価は何か？",
            options: ["肺コンプライアンスの評価", "輸液反応性(Fluid responsiveness)の予測", "気道抵抗の評価"],
            answer: "輸液反応性(Fluid responsiveness)の予測",
            explanation: "低い一回換気量での換気中、一時的に一回換気量を増やすことで生じる脈圧変動(PPV)やSV変動(SVV)の変化は、輸液反応性をより確実に予測するのに役立ちます。",
            page: 54
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
        localStorage.setItem('cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'cardiac_results.html';
    });

    loadQuestion();
});
