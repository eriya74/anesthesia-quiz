const quizData = [
    {
        question: "冠動脈疾患(CAD)患者の周術期管理において、心筋虚血を引き起こす最も重要な因子は何ですか？",
        options: ["頻脈", "高血圧", "低血圧"],
        answer: "頻脈",
        explanation: "頻脈は心筋酸素需要を増大させ、同時に拡張期時間を短縮させて冠血流（酸素供給）を減少させるため、最も虚血を誘発しやすい因子です。",
        page: 460
    },
    {
        question: "心筋梗塞(MI)の既往がある患者で、待機的な非心臓手術を延期することが推奨される期間は、MI発症後どのくらいですか？",
        options: ["30日未満", "少なくとも60日", "1年以上"],
        answer: "少なくとも60日",
        explanation: "ACC/AHAガイドラインでは、周術期の再梗塞リスクを考慮し、MI発症後少なくとも60日間は待機手術を延期することが推奨されています。",
        page: 460
    },
    {
        question: "僧帽弁狭窄症(MS)患者の麻酔管理における血行動態の目標として、最も重要なことは何ですか？",
        options: ["頻脈と後負荷の軽減", "徐脈の維持と適切な前負荷の確保", "心収縮力の増強"],
        answer: "徐脈の維持と適切な前負荷の確保",
        explanation: "MSでは左室の拡張期充満が障害されています。徐脈を維持して拡張期時間を確保し、肺うっ血をきたさない範囲で適切な前負荷を保つことが重要です。",
        page: 464
    },
    {
        question: "大動脈弁閉鎖不全症(AR)患者の麻酔管理で、順行性血流を増加させるために望ましい血行動態の変化は何ですか？",
        options: ["心拍数の低下と後負荷の上昇", "正常からやや速めの心拍数と後負荷の低下", "心収縮力の抑制"],
        answer: "正常からやや速めの心拍数と後負荷の低下",
        explanation: "心拍数を少し速めに保ち拡張期を短くすること、そして後負荷を軽減することで、左室から大動脈への逆流量を減らし、順行性の一回拍出量を増やすことができます。",
        page: 466
    },
    {
        question: "重症大動脈弁狭窄症(AS)患者の麻酔管理で、最も避けなければならない血行動態の変動は何ですか？",
        options: ["急激な血圧上昇", "急激な血圧低下", "軽度の頻脈"],
        answer: "急激な血圧低下",
        explanation: "AS患者は固定心拍出量であり、急激な血管拡張による血圧低下は代償できず、冠灌流圧の低下から致死的な心筋虚血に陥る危険が非常に高いです。",
        page: 465
    },
    {
        question: "肥大型閉塞性心筋症(HOCM)で、左室流出路閉塞(LVOTO)を増悪させる因子はどれですか？",
        options: ["前負荷の増加", "後負荷の増加", "心収縮力の増強"],
        answer: "心収縮力の増強",
        explanation: "カテコラミンなどによる心収縮力の増強は、肥大した心室中隔の動きを強め、僧帽弁前尖の収縮期前方運動(SAM)を助長し、LVOTOを悪化させます。",
        page: 470
    },
    {
        question: "肺高血圧症(PH)患者の麻酔管理で、肺血管抵抗(PVR)を上昇させる可能性があるため避けるべき薬剤はどれですか？",
        options: ["セボフルラン", "プロポフォール", "亜酸化窒素（笑気）"],
        answer: "亜酸化窒素（笑気）",
        explanation: "亜酸化窒素はPVRを上昇させる可能性が報告されており、特に既存のPH患者では右心不全を増悪させるリスクがあるため、使用は避けるべきとされています。",
        page: 470
    },
    {
        question: "心タンポナーデの患者に全身麻酔を導入する際に、最も危険な血行動態の変化は何ですか？",
        options: ["血管拡張と静脈還流の減少", "血圧の上昇", "心拍数の低下"],
        answer: "血管拡張と静脈還流の減少",
        explanation: "心タンポナーデの患者は、高い中心静脈圧で心室充満を代償しています。麻酔薬による血管拡張や陽圧換気による静脈還流の減少は、急激な循環虚脱を引き起こす可能性があります。",
        page: 471
    },
    {
        question: "ペースメーカー植え込み患者で、電気メスの使用による電磁干渉(EMI)が最も問題となるのはどのような場合ですか？",
        options: ["ペースメーカー依存の患者で、オーバーセンシングによりペーシングが抑制される場合", "非依存の患者で、アンダーセンシングが起こる場合", "ICD機能が作動する場合"],
        answer: "ペースメーカー依存の患者で、オーバーセンシングによりペーシングが抑制される場合",
        explanation: "ペースメーカー依存の患者では、EMIを心自己活動と誤認識（オーバーセンシング）し、ペーシングが抑制されることで、心静止に至る危険があります。",
        page: 466
    },
    {
        question: "心不全（HFrEF）の治療薬であるβ遮断薬を周術期に継続すべき主な理由は何ですか？",
        options: ["血圧を安定させるため", "急な中止による交感神経系のリバウンド活性化と心不全の悪化を防ぐため", "鎮静作用を期待するため"],
        answer: "急な中止による交感神経系のリバウンド活性化と心不全の悪化を防ぐため",
        explanation: "β遮断薬の急な中止は、β受容体のアップレギュレーションにより、周術期の交感神経刺激に対して過剰な反応を引き起こし、頻脈、高血圧、心筋虚血、心不全の急性増悪をきたすリスクがあります。",
        page: 460
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

    window.location.href = 'c26_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
