const quizData = [
    {
        question: "血液のpHが7.35未満の状態を何と呼びますか？",
        options: ["アシドーシス (acidosis)", "アシデミア (acidemia)", "アルカレミア (alkalemia)"],
        answer: "アシデミア (acidemia)",
        explanation: "アシデミアは血液のpHが7.35未満である状態を指します。アシドーシスはその状態を引き起こすプロセスを指します。",
        page: 400
    },
    {
        question: "Base Excess (BE)が負の値（塩基欠乏）である場合、どのような酸塩基平衡障害が示唆されますか？",
        options: ["代謝性アシドーシス", "呼吸性アシドーシス", "代謝性アルカローシス"],
        answer: "代謝性アシドーシス",
        explanation: "BEは酸塩基平衡障害の非呼吸性（代謝性）要素を反映します。負の値は代謝性アシドーシスの存在を示唆します。",
        page: 401
    },
    {
        question: "血液中で最も重要な緩衝系はどれですか？",
        options: ["重炭酸緩衝系", "ヘモグロビン緩衝系", "リン酸緩衝系"],
        answer: "重炭酸緩衝系",
        explanation: "重炭酸緩衝系は、腎臓による重炭酸イオンの調節と肺による二酸化炭素の調節が組み合わさることで、体内で最も重要な緩衝系として機能します。",
        page: 401
    },
    {
        question: "代謝性アシドーシスに対する体の代償反応として、数分以内に起こるのはどれですか？",
        options: ["腎臓による酸の排泄増加", "肺胞換気の増加", "ヘモグロビンによる緩衝"],
        answer: "肺胞換気の増加",
        explanation: "代謝性アシドーシスによるpH低下は末梢および中枢化学受容器を刺激し、数分以内に換気を増加させてPaCO2を低下させます。",
        page: 401
    },
    {
        question: "呼吸性アシドーシスの原因として適切でないものはどれですか？",
        options: ["悪性高熱症", "オピオイドの過量投与", "不安や痛み"],
        answer: "不安や痛み",
        explanation: "不安や痛みは分時換気量を増加させ、呼吸性アルカローシスの原因となります。悪性高熱症はCO2産生増加、オピオイドは換気抑制により呼吸性アシドーシスをきたします。",
        page: 405
    },
    {
        question: "アニオンギャップが開大する代謝性アシドーシスの原因はどれですか？",
        options: ["下痢", "乳酸アシドーシス", "尿細管性アシドーシス"],
        answer: "乳酸アシドーシス",
        explanation: "乳酸アシドーシスでは、測定されないアニオンである乳酸が増加するため、アニオンギャップが開大します。下痢ではクロールが代償性に増加するため、アニオンギャップは正常です。",
        page: 406
    },
    {
        question: "代謝性アルカローシスに対する呼吸性の代償は、なぜ不完全になりがちなのですか？",
        options: ["中枢化学受容器の反応が鈍いため", "低換気が進行すると低酸素血症が生じ、それが呼吸を刺激するため", "腎臓の反応が速いため"],
        answer: "低換気が進行すると低酸素血症が生じ、それが呼吸を刺激するため",
        explanation: "代償的な低換気はPaO2の低下を招きます。この低酸素血症が末梢化学受容器を刺激し、それ以上の低換気を抑制するため、代償は不完全になります。",
        page: 402
    },
    {
        question: "低体温の患者の血液ガスを37℃で測定した場合（α-stat）、実際の体温でのpH（pH-stat）と比較してどうなりますか？",
        options: ["pHは低くなる", "pHは高くなる", "pHは変わらない"],
        answer: "pHは低くなる",
        explanation: "血液を37℃に加温して測定すると、ガスの分圧が上昇し、計算上のpHは実際の体温でのpHよりも低くなります。低体温では血液はよりアルカリ性になります。",
        page: 403
    },
    {
        question: "Fickの式を用いて心拍出量を推定する際に必要な3つの値は何ですか？",
        options: ["動脈血酸素含量(CaO2)、混合静脈血酸素飽和度(SvO2)、ヘモグロビン濃度", "酸素消費量(VO2)、動脈血酸素含量(CaO2)、混合静脈血酸素含量(CvO2)", "心拍数、一回拍出量、体表面積"],
        answer: "酸素消費量(VO2)、動脈血酸素含量(CaO2)、混合静脈血酸素含量(CvO2)",
        explanation: "Fickの原理によれば、心拍出量 = 酸素消費量 / (動脈血酸素含量 - 混合静脈血酸素含量) で計算できます。",
        page: 411
    },
    {
        question: "A-a勾配（肺胞気動脈血酸素分圧較差）が増大する原因として適切でないものはどれですか？",
        options: ["シャント", "換気血流不均等", "低換気"],
        answer: "低換気",
        explanation: "純粋な低換気では、PAO2とPaO2がともに低下するため、A-a勾配は正常範囲に留まります。シャントやV/QミスマッチはA-a勾配を増大させます。",
        page: 410
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

    window.location.href = 'c22_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
