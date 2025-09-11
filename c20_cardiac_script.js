const quizData = [
    {
        question: "開胸手術中の脈圧変動(PPV)や一回拍出量変動(SVV)の解釈において、最も注意すべき点は何ですか？",
        options: ["常に信頼性が高い", "開胸により胸腔内圧の変動が変化し、信頼性が低下する可能性がある", "心拍数が80回/分以上でないと無効である"],
        answer: "開胸により胸腔内圧の変動が変化し、信頼性が低下する可能性がある",
        explanation: "PPV/SVVは心肺相互作用に基づく指標です。開胸すると、陽圧換気による胸腔内圧の変動が心臓に伝わりにくくなるため、これらの指標の輸液反応性予測能は低下します。",
        page: "N/A"
    },
    {
        question: "大動脈弁閉鎖不全(AR)が重度な患者において、動脈圧波形に基づく心拍出量モニターの測定値はどうなる傾向がありますか？",
        options: ["過小評価される", "過大評価される", "影響を受けない"],
        answer: "過大評価される",
        explanation: "重度のARでは、拡張期に大動脈から左室への逆流が生じ、脈圧が大きくなります。多くのパルスコンツアー法は脈圧を基に一回拍出量を計算するため、実際の値より過大評価される傾向があります。",
        page: "N/A"
    },
    {
        question: "肺動脈カテーテル(PAC)を用いずに、右室機能を評価できる低侵襲モニターの指標はどれですか？",
        options: ["経食道心エコー(TEE)による右室径や三尖弁輪収縮期移動距離(TAPSE)", "脳酸素飽和度(rSO2)", "BISモニター"],
        answer: "経食道心エコー(TEE)による右室径や三尖弁輪収縮期移動距離(TAPSE)",
        explanation: "TEEは低侵襲（あるいは中侵襲）モニターとされ、右室のサイズ、壁運動、TAPSE、弁逆流などを直接評価でき、PACよりも詳細な右心機能の情報を提供します。",
        page: "N/A"
    },
    {
        question: "敗血症性ショックでノルアドレナリンを大量投与中の患者で、パルス色素密度法による心拍出量(PiCCO)の血管外肺水分量(EVLW)を解釈する際の注意点は何ですか？",
        options: ["常に正確である", "肺血管透過性が変化するため、EVLWが肺水腫の重症度を過小評価する可能性がある", "末梢血管の過度な収縮が、測定の信頼性を低下させる可能性がある"],
        answer: "末梢血管の過度な収縮が、測定の信頼性を低下させる可能性がある",
        explanation: "PiCCOは熱希釈法と脈圧波形解析を組み合わせますが、高度な血管収縮は脈圧波形の形状を変化させ、キャリブレーション間の心拍出量推定の精度を低下させる可能性があります。",
        page: "N/A"
    },
    {
        question: "心房細動(Af)の患者において、SVVやPPVの信頼性が低下する主な理由は何ですか？",
        options: ["心拍数が速すぎるため", "心拍のリズムが不整で、一回拍出量そのものが拍動ごとに変動するため", "抗不整脈薬の影響"],
        answer: "心拍のリズムが不整で、一回拍出量そのものが拍動ごとに変動するため",
        explanation: "Afでは拡張期充満時間が拍動ごとに異なり、一回拍出量が大きく変動します。この内因性の変動が呼吸性変動をマスクするため、SVV/PPVの解釈が困難になります。",
        page: "N/A"
    },
    {
        question: "呼吸性変動指数(Pleth Variability Index, PVI)が、輸液反応性の指標として限界を持つ状況はどれですか？",
        options: ["自発呼吸の存在", "一回換気量が8mL/kg以上", "心拍数が60-100回/分"],
        answer: "自発呼吸の存在",
        explanation: "PVIも他の動的指標と同様に、心肺相互作用に基づいています。自発呼吸があると、呼吸の様式や強さが不規則になり、胸腔内圧の変動が一定でなくなるため、信頼性が低下します。",
        page: "N/A"
    },
    {
        question: "大動脈内バルーンパンピング(IABP)使用中の患者で、観血的動脈圧波形から平均動脈圧を正確に得るためにはどうすべきですか？",
        options: ["モニターが表示する数値をそのまま用いる", "拡張期増強圧を収縮期圧として代用する", "モニターの計算アルゴリズムをIABPモードに設定するか、手動で面積積分から計算する"],
        answer: "モニターの計算アルゴリズムをIABPモードに設定するか、手動で面積積分から計算する",
        explanation: "IABP使用中は動脈圧波形が非生理的な形になるため、標準のアルゴリズムでは平均圧が不正確になります。IABP対応のアルゴリズムを使用するか、波形を面積積分して時間で割る必要があります。",
        page: "N/A"
    },
    {
        question: "体外式膜型人工肺(ECMO)のV-A ECMO管理中に、左心室の負荷を評価するのに有用な低侵襲モニターはどれですか？",
        options: ["パルスオキシメータ", "観血的動脈圧ラインの脈圧", "経食道心エコー(TEE)"],
        answer: "経食道心エコー(TEE)",
        explanation: "V-A ECMOでは左室の後負荷が増大し、心筋酸素需給バランスが悪化するリスクがあります。TEEは左室の拡大度、大動脈弁の開放、自発的な心収縮の有無を直接評価でき、左室負荷の評価に不可欠です。",
        page: "N/A"
    },
    {
        question: "カプノグラム波形で、呼気終末CO2濃度(ETCO2)が急激に低下または消失した場合、心停止以外に心臓血管系で考慮すべき緊急事態は何ですか？",
        options: ["重度の気管支攣縮", "肺塞栓症", "悪性高熱症"],
        answer: "肺塞栓症",
        explanation: "広範な肺塞栓は、肺血流を急激に途絶させ、CO2の運搬を妨げるため、死腔換気が増大しETCO2が急激に低下します。これは心停止に準じる緊急事態です。",
        page: "N/A"
    },
    {
        question: "心臓手術後に見られる血管拡張性ショック（vasoplegic shock）の血行動態の特徴を最もよく表しているのはどれですか？",
        options: ["高SVR、低CO", "低SVR、高CO", "低SVR、低CO"],
        answer: "低SVR、高CO",
        explanation: "血管拡張性ショックは、人工心肺などの影響による全身性炎症反応が原因で、末梢血管が著しく拡張しSVRが低下します。心機能が保たれていれば、代償的に心拍出量(CO)は増加（または正常）します。",
        page: "N/A"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let i = 0; i < currentQuestion.options.length; i++) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${i}">
                    ${currentQuestion.options[i]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
    const userAnswers = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswerNode = (answerContainer.querySelector(selector) || {});
        const userAnswerIndex = parseInt(userAnswerNode.value);
        const correctAnswerIndex = currentQuestion.options.indexOf(currentQuestion.answer);

        userAnswers.push({
            question: currentQuestion.question,
            userAnswer: currentQuestion.options[userAnswerIndex],
            correctAnswer: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            page: currentQuestion.page,
            isCorrect: userAnswerIndex === correctAnswerIndex
        });

        if (userAnswerIndex === correctAnswerIndex) {
            score++;
        }
    });

    localStorage.setItem('quizResults', JSON.stringify({
        score: score,
        total: quizData.length,
        userAnswers: userAnswers
    }));

    window.location.href = 'c20_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
