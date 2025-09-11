const quizData = [
    {
        question: "Starlingの法則における毛細血管内外の水分移動を決定する4つの力（Starling force）に含まれないものはどれですか？",
        options: ["毛細血管静水圧", "間質静水圧", "血漿膠質浸透圧", "細胞内浸透圧"],
        answer: "細胞内浸透圧",
        explanation: "Starling力は、毛細血管静水圧(Pc)、間質静水圧(Pi)、血漿膠質浸透圧(πp)、間質膠質浸透圧(πi)の4つで構成され、細胞内圧は直接関与しません。",
        page: 437
    },
    {
        question: "「バランス」晶質液（例：乳酸リンゲル液）が「アンバランス」な生理食塩水と比較して生理的とされる主な理由は何ですか？",
        options: ["電解質組成が血漿に近く、高クロール性アシドーシスを起こしにくい", "浸透圧が血漿より低い", "カリウムを含まない"],
        answer: "電解質組成が血漿に近く、高クロール性アシドーシスを起こしにくい",
        explanation: "バランス液はクロール濃度が低く、重炭酸の前駆体を含むため、大量投与時の高クロール性アシドーシスのリスクが低減されます。",
        page: 439
    },
    {
        question: "中心静脈圧(CVP)が輸液反応性の指標として信頼性が低いとされる主な理由は何ですか？",
        options: ["測定が困難であるため", "静的指標であり、心機能や静脈コンプライアンスなど多くの要因に影響されるため", "常に肺動脈楔入圧を反映するため"],
        answer: "静的指標であり、心機能や静脈コンプライアンスなど多くの要因に影響されるため",
        explanation: "CVPは前負荷の静的な指標であり、輸液に対する心拍出量の応答（輸液反応性）を正確に予測できないことが多くの研究で示されています。",
        page: 441
    },
    {
        question: "受動的下肢挙上試験（Passive Leg Raise test）が輸液反応性を予測する原理は何ですか？",
        options: ["下肢の筋肉を収縮させることで静脈還流を増やす", "下肢から約300mLの血液を自己輸血として中心循環に戻し、前負荷を増加させる", "迷走神経を刺激して心拍数を低下させる"],
        answer: "下肢から約300mLの血液を自己輸血として中心循環に戻し、前負荷を増加させる",
        explanation: "PLRは、下肢を挙上することで静脈還流を一時的に増やし（自己輸液）、それによる心拍出量の変化をみることで、外からの輸液に対する反応性を予測します。",
        page: 441
    },
    {
        question: "Goal-Directed Fluid Therapy (GDFT)の主な目的は何ですか？",
        options: ["尿量を1mL/kg/hr以上に維持すること", "一回拍出量(SV)や心拍出量(CO)などの動的指標を最適化し、組織灌流を改善すること", "術中の輸液量を可能な限り少なくすること"],
        answer: "一回拍出量(SV)や心拍出量(CO)などの動的指標を最適化し、組織灌流を改善すること",
        explanation: "GDFTは、SVなどのフロー指標を目標に輸液や血管作動薬を投与し、酸素供給を最適化することで、術後合併症を減らすことを目的とした戦略です。",
        page: 442
    },
    {
        question: "重症敗血症患者において、アルブミン投与が晶質液と比較して死亡率を改善しなかった大規模臨床試験は何ですか？",
        options: ["SAFE study", "CHEST study", "ALBIOS study"],
        answer: "ALBIOS study",
        explanation: "ALBIOS試験では、重症敗血症患者において、晶質液に加えてアルブミンを投与し血清アルブミン値を3g/dL以上に維持しても、28日および90日死亡率は改善しませんでした。",
        page: 441
    },
    {
        question: "低張液（例：5%ブドウ糖液）の急速投与が危険となりうる病態はどれですか？",
        options: ["高ナトリウム血症", "頭蓋内圧亢進", "糖尿病性ケトアシドーシス"],
        answer: "頭蓋内圧亢進",
        explanation: "低張液は血管内から細胞内へ水分をシフトさせます。頭蓋内圧亢進のある患者では、脳細胞への水分シフトが脳浮腫を悪化させる危険があります。",
        page: 440
    },
    {
        question: "Plasma-Lyteのような酢酸を含む輸液を大量に投与する際に、モニタリングが推奨される電解質は何ですか？",
        options: ["カリウム", "イオン化カルシウム", "マグネシウム"],
        answer: "イオン化カルシウム",
        explanation: "酢酸はカルシウムとキレートを形成する作用があるため、大量投与時にはイオン化カルシウムが低下する可能性があり、モニタリングが推奨されます。",
        page: 439
    },
    {
        question: "輸液反応性の指標である脈圧変動(PPV)の信頼性が低下する臨床状況として適切でないものはどれですか？",
        options: ["開胸手術中", "一回換気量 8mL/kg以上での調節換気中", "腹腔鏡手術による気腹中"],
        answer: "一回換気量 8mL/kg以上での調節換気中",
        explanation: "PPVは、一回換気量8mL/kg以上の安定した調節換気下で最も信頼性が高くなります。開胸や気腹は胸腔内圧の変動パターンを変化させるため、信頼性が低下します。",
        page: 441
    },
    {
        question: "近年の大規模臨床試験(RELIEF studyなど)で、待機的腹部大手術における制限輸液群と自由輸液群を比較した結果、制限輸液群で増加した合併症は何ですか？",
        options: ["縫合不全", "急性腎障害(AKI)", "肺炎"],
        answer: "急性腎障害(AKI)",
        explanation: "RELIEF試験では、制限輸液群で術後の急性腎障害の発生率が有意に高いことが示され、過度な輸液制限の潜在的リスクが明らかになりました。",
        page: 442
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

    window.location.href = 'c24_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
