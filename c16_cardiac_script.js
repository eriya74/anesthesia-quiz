const quizData = [
    {
        question: "Laplaceの法則に基づくと、心室壁応力に影響を与える3つの主要な因子は何ですか？",
        options: ["心室腔内圧、心室半径、心室壁厚", "心拍数、一回拍出量、全身血管抵抗", "前負荷、後負荷、収縮性"],
        answer: "心室腔内圧、心室半径、心室壁厚",
        explanation: "Laplaceの法則 (壁応力 = P × r / T) によれば、壁応力は心室腔内圧(P)と半径(r)に比例し、壁厚(T)に反比例します。",
        page: 54
    },
    {
        question: "右心室の灌流圧を決定する上で、左心室と異なる点は何ですか？",
        options: ["右心室は収縮期にのみ灌流される", "右心室の灌流は心室内圧の影響をほとんど受けない", "右心室は壁内圧が低いため、収縮期と拡張期の両方で灌流される"],
        answer: "右心室は壁内圧が低いため、収縮期と拡張期の両方で灌流される",
        explanation: "左心室と異なり、右心室は壁内圧が低いため、心周期全体（収縮期および拡張期）を通じて灌流されます。",
        page: 56
    },
    {
        question: "肺動脈カテーテルで測定される肺動脈楔入圧(PCWP)が左房圧(LAP)を正確に反映するための条件は何ですか？",
        options: ["Westのゾーン1の状態であること", "カテーテル先端がWestのゾーン3に位置すること", "重度の僧帽弁狭窄症がないこと"],
        answer: "カテーテル先端がWestのゾーン3に位置すること",
        explanation: "PCWPがLAPを正確に反映するには、カテーテル先端から左房まで途切れない血流の連続性が必要です。これは肺静脈圧が肺胞圧を上回るWestのゾーン3で満たされます。",
        page: 53
    },
    {
        question: "敗血症性ショックのような高心拍出量性の低血圧状態で、経食道心エコー(TEE)で観察される典型的な所見は何ですか？",
        options: ["拡張末期容量(EDV)の増大", "収縮末期容量(ESV)の低下", "駆出率(EF)の低下"],
        answer: "収縮末期容量(ESV)の低下",
        explanation: "敗血症ではSVRが著しく低下するため、心臓はより完全に血液を駆出でき、結果として収縮末期容量(ESV)が小さくなるのが特徴です。",
        page: 55
    },
    {
        question: "重度の肺高血圧症患者において、右心不全が左室充満を障害するメカニズムは何ですか？",
        options: ["心室中隔の左方偏位", "三尖弁逆流の増大", "冠循環の低下"],
        answer: "心室中隔の左方偏位",
        explanation: "過度に充満した右心室により心室中隔が左側に押しやられ、左心室の拡張が物理的に制限され、左室の充満障害を引き起こします。",
        page: 54
    },
    {
        question: "酸素解離曲線の右方シフトが組織への酸素供給を改善する主な理由は何ですか？",
        options: ["肺での酸素取り込みを促進するため", "特定の酸素分圧においてヘモグロビンからの酸素解離を促進するため", "血液の酸素運搬能を高めるため"],
        answer: "特定の酸素分圧においてヘモグロビンからの酸素解離を促進するため",
        explanation: "右方シフトはヘモグロビンの酸素親和性を低下させ、組織レベルの低い酸素分圧下でより多くの酸素を放出させ、組織の酸素化を改善します。",
        page: 58
    },
    {
        question: "混合静脈血酸素飽和度(SvO2)が低下している場合、酸素需給バランスについて何が示唆されますか？",
        options: ["酸素供給が需要を上回っている", "酸素需要が供給を上回っている、または酸素供給が低下している", "組織での酸素抽出が低下している"],
        answer: "酸素需要が供給を上回っている、または酸素供給が低下している",
        explanation: "SvO2の低下は、組織が代謝需要を満たすために血液からより多くの酸素を抽出していることを意味します。これは酸素消費量の増加か、酸素供給量の低下（低心拍出量、貧血、低酸素血症）を示唆します。",
        page: 61
    },
    {
        question: "Bohrの式を用いて計算されるVd/Vt比が増加している場合、臨床的に何を意味しますか？",
        options: ["肺胞コンプライアンスの低下", "気道抵抗の増加", "生理的死腔の割合の増加"],
        answer: "生理的死腔の割合の増加",
        explanation: "Vd/Vt比は1回換気量における生理的死腔の割合を示します。この比率の上昇は、ガス交換に関与しない換気が増えていることを意味し、換気効率の低下を示します。",
        page: 63
    },
    {
        question: "無呼吸中のPaCO2の上昇速度は、最初の1分経過後、およそ毎分何mmHgですか？",
        options: ["約1 mmHg/分", "約3 mmHg/分", "約6 mmHg/分"],
        answer: "約3 mmHg/分",
        explanation: "最初の1分でPaCO2は混合静脈血レベルまで急上昇しますが、その後はCO2産生量に応じて、より緩やかに約3 mmHg/分の速度で上昇します。",
        page: 63
    },
    {
        question: "陽圧換気が左室後負荷に与える影響として正しいものはどれですか？",
        options: ["左室後負荷を増加させる", "左室後負荷を減少させる", "左室後負荷に影響を与えない"],
        answer: "左室後負荷を減少させる",
        explanation: "陽圧換気は胸腔内圧を上昇させ、心臓に対する外圧を高めることで左室の収縮期壁応力を減少させ、結果的に左室後負荷を軽減します。",
        page: 68
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

    window.location.href = 'c16_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
