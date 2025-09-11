const quizData = [
    {
        question: "成人の維持輸液量を計算する際に一般的に用いられる「4-2-1ルール」で、体重25kgの患者の1時間あたりの維持輸液量は何mLですか？",
        options: ["45 mL/hr", "65 mL/hr", "85 mL/hr"],
        answer: "65 mL/hr",
        explanation: "最初の10kgに4mL/kg, 次の10kgに2mL/kg, それ以上は1mL/kg。 (10x4)+(10x2)+(5x1) = 40+20+5 = 65 mL/hrとなります。",
        page: "N/A"
    },
    {
        question: "晶質液（クリスタロイド）を投与した際、血管内に留まるのは投与量のおよそ何%ですか？",
        options: ["100%", "50%", "25-30%"],
        answer: "25-30%",
        explanation: "晶質液は自由に血管内外を移動するため、投与後短時間で血管内に残るのは約1/4から1/3程度です。",
        page: "N/A"
    },
    {
        question: "赤血球濃厚液(RCC) 1単位の輸血により、ヘモグロビン値はおよそ何g/dL上昇しますか？",
        options: ["約 1 g/dL", "約 2 g/dL", "約 3 g/dL"],
        answer: "約 1 g/dL",
        explanation: "標準的な成人において、RCC 1単位の輸血はヘモグロビン値を約1 g/dL、ヘマトクリット値を約3%上昇させると期待されます。",
        page: "N/A"
    },
    {
        question: "新鮮凍結血漿(FFP)の輸血が最も適切な適応はどれですか？",
        options: ["循環血液量の補充", "複数の凝固因子の欠乏による出血", "貧血の補正"],
        answer: "複数の凝固因子の欠乏による出血",
        explanation: "FFPは全ての凝固因子を含んでいるため、肝障害やDIC、大量出血時など複数の凝固因子が欠乏している場合の補充に適しています。",
        page: "N/A"
    },
    {
        question: "輸血副作用のうち、最も頻度が高い非溶血性副作用は何ですか？",
        options: ["アナフィラキシーショック", "輸血関連急性肺障害(TRALI)", "発熱性非溶血性輸血副作用(FNHTR)"],
        answer: "発熱性非溶溶血性輸血副作用(FNHTR)",
        explanation: "FNHTRは、血液製剤中の白血球やサイトカインに対する反応で起こる発熱で、最も一般的な輸血副作用です。",
        page: "N/A"
    },
    {
        question: "O型の患者に緊急時に輸血可能な赤血球製剤の血液型は何ですか？",
        options: ["O型のみ", "A型とO型", "AB型"],
        answer: "O型のみ",
        explanation: "O型の患者は血漿中に抗A抗体と抗B抗体を持っているため、O型の赤血球しか輸血できません。",
        page: "N/A"
    },
    {
        question: "術中の許容出血量を計算する際に必要な情報でないものはどれですか？",
        options: ["術前のヘマトクリット値", "患者の循環血液量", "患者の年齢"],
        answer: "患者の年齢",
        explanation: "許容出血量は、循環血液量、術前ヘマトクリット値、許容下限ヘマトクリット値を用いて計算され、年齢は直接の計算式には含まれません。",
        page: "N/A"
    },
    {
        question: "大量輸血時の合併症として適切でないものはどれですか？",
        options: ["低カリウム血症", "低カルシウム血症", "低体温"],
        answer: "低カリウム血症",
        explanation: "保存血中の赤血球からはカリウムが漏出するため、大量輸血では高カリウム血症のリスクがあります。クエン酸によるキレート作用で低カルシウム血症、冷却された血液により低体温が起こりえます。",
        page: "N/A"
    },
    {
        question: "血小板濃厚液(PC)の輸血 показанияとして、手術前に推奨される血小板数の閾値は一般的にどれくらいですか？",
        options: ["10万/μL", "5万/μL", "1万/μL"],
        answer: "5万/μL",
        explanation: "多くの手術では、出血リスクを考慮して血小板数が5万/μL以上であることが望ましいとされています。ただし、神経外科などではより高い値が求められます。",
        page: "N/A"
    },
    {
        question: "高張食塩水（3% NaClなど）の投与が適応となる病態はどれですか？",
        options: ["重度の脱水", "出血性ショック", "症候性の低ナトリウム血症や頭蓋内圧亢進"],
        answer: "症候性の低ナトリウム血症や頭蓋内圧亢進",
        explanation: "高張食塩水は、細胞内から血管内へ水分を移動させることで脳浮腫を軽減したり、重篤な低ナトリウム血症を補正したりする目的で使用されます。",
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

    window.location.href = 'c19_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
