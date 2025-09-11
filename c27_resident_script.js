const quizData = [
    {
        question: "喘息患者の術前評価において、重症度を判断するのに有用な簡易的な指標は何ですか？",
        options: ["努力肺活量 (FVC)", "ピーク呼気流量 (PEF)", "1秒量 (FEV1)"],
        answer: "ピーク呼気流量 (PEF)",
        explanation: "PEFは自宅でも測定可能で、喘息の重症度や治療効果の簡易的な指標として有用です。予測値の50%未満は重症を示唆します。",
        page: 479
    },
    {
        question: "喘息患者の麻酔管理において、気管支攣縮のリスクを減らすために推奨される吸入麻酔薬はどれですか？",
        options: ["デスフルラン", "セボフルラン", "亜酸化窒素"],
        answer: "セボフルラン",
        explanation: "セボフルランなどの揮発性吸入麻酔薬は気管支拡張作用を持ちますが、デスフルランは気道刺激性があるため注意が必要です。",
        page: 480
    },
    {
        question: "COPD患者の術前評価で、安静時のPaCO2が45mmHg以上である（CO2ナルコーシス）かどうかを判断するために必要な検査は何ですか？",
        options: ["スパイロメトリー", "胸部X線", "動脈血液ガス分析"],
        answer: "動脈血液ガス分析",
        explanation: "CO2ナルコーシスの有無は、身体所見やスパイロメトリーだけでは判断できず、動脈血液ガス分析によるPaCO2の測定が必要です。",
        page: 480
    },
    {
        question: "閉塞性睡眠時無呼吸(OSA)の重症度を評価する指標である無呼吸低呼吸指数(AHI)は、何を測定したものですか？",
        options: ["睡眠1時間あたりの無呼吸・低呼吸の回数", "一晩の総無呼吸時間", "最も長かった無呼吸の時間"],
        answer: "睡眠1時間あたりの無呼吸・低呼吸の回数",
        explanation: "AHIは睡眠1時間あたりの無呼吸（10秒以上）と低呼吸の合計回数で、OSAの重症度を客観的に評価する指標です。",
        page: 482
    },
    {
        question: "肺切除術の術前評価で、術後呼吸機能の予測に最も有用な指標は何ですか？",
        options: ["術前のFEV1", "術後予測FEV1 (ppoFEV1)", "術前の努力肺活量(FVC)"],
        answer: "術後予測FEV1 (ppoFEV1)",
        explanation: "ppoFEV1は、術前のFEV1と切除される肺区域の割合から計算され、術後の呼吸予備能を最もよく予測する指標です。",
        page: 485
    },
    {
        question: "分離肺換気を行うための器具として、ダブルルーメンチューブ(DLT)と比較した気管支ブロッカー(BB)の利点は何ですか？",
        options: ["位置の確認が容易である", "術後に気管チューブを交換せずにそのまま人工呼吸管理に移行できる", "肺の虚脱が速やかである"],
        answer: "術後に気管チューブを交換せずにそのまま人工呼吸管理に移行できる",
        explanation: "BBは通常の気管チューブを通して使用するため、術後はBBを抜去するだけでシングルルーメンチューブでの管理に移行できます。",
        page: 487
    },
    {
        question: "左側臥位での片肺換気中、換気されている下側肺のコンプライアンスが低下する理由として適切でないものはどれですか？",
        options: ["横隔膜の頭側移動", "縦隔の圧迫", "肺血管抵抗の上昇"],
        answer: "肺血管抵抗の上昇",
        explanation: "下側肺のコンプライアンス低下は、麻酔による横隔膜の弛緩・頭側移動や、縦隔の重みによる圧迫が主な原因です。肺血管抵抗は血流分布に関与しますが、コンプライアンスの直接的な原因ではありません。",
        page: 490
    },
    {
        question: "片肺換気中に低酸素血症が生じた場合、最初に行うべきことは何ですか？",
        options: ["PEEPを15cmH2Oまで上げる", "気管支鏡でDLTまたはBBの位置を確認する", "手術を中断し、両肺換気に戻す"],
        answer: "気管支鏡でDLTまたはBBの位置を確認する",
        explanation: "片肺換気中の低酸素血症の最も一般的な原因は、チューブの位置異常です。まず気管支鏡で位置を確認し、修正することが最優先です。",
        page: 494
    },
    {
        question: "縦隔鏡検査中の合併症として、右上肢の橈骨動脈圧が低下した場合に最も考えられることは何ですか？",
        options: ["腕頭動脈の圧迫", "左鎖骨下動脈の圧迫", "大量出血"],
        answer: "腕頭動脈の圧迫",
        explanation: "縦隔鏡が腕頭動脈を圧迫すると、その分枝である右鎖骨下動脈や右総頸動脈への血流が途絶し、右上肢の脈拍が触れにくくなります。",
        page: 495
    },
    {
        question: "前縦隔腫瘍を持つ患者の麻酔導入時に、気道や大血管の閉塞による循環虚脱のリスクを回避するために最も安全な方法はどれですか？",
        options: ["迅速導入気管挿管", "自発呼吸を維持したままの覚醒下挿管", "吸入麻酔による緩徐導入"],
        answer: "自発呼吸を維持したままの覚醒下挿管",
        explanation: "麻酔導入や筋弛緩薬投与により、胸腔内圧の変化で腫瘍による圧迫が急激に増悪する危険があります。自発呼吸を維持することが最も安全な選択肢です。",
        page: 496
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

    window.location.href = 'c27_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
