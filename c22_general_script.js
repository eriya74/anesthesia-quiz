const quizData = [
    {
        question: "Henderson-Hasselbalchの式におけるpKaは何を意味しますか？",
        options: ["緩衝液の最大能力を示すpH", "酸が50%解離するpH", "酸の溶解度を示す定数"],
        answer: "酸が50%解離するpH",
        explanation: "pKaは、酸とその共役塩基の濃度が等しくなる、すなわち酸が50%プロトン化（非解離）し、50%脱プロトン化（解離）する時点のpHを示します。",
        page: 401
    },
    {
        question: "Haldane効果とは何ですか？",
        options: ["脱酸素化ヘモグロビンの方が酸素化ヘモグロビンよりも多くのCO2を運搬できる効果", "CO2がヘモグロビンの酸素親和性を低下させる効果", "pH低下がヘモグロビンの酸素親和性を低下させる効果"],
        answer: "脱酸素化ヘモグロビンの方が酸素化ヘモグロビンよりも多くのCO2を運搬できる効果",
        explanation: "末梢組織で酸素を放出した脱酸素化ヘモグロビンは、CO2に対する親和性が高まり、効率的なCO2運搬を可能にします。これがHaldane効果です。",
        page: 402
    },
    {
        question: "慢性呼吸性アシドーシスにおいて、pHを代償するために腎臓で起こる変化は何ですか？",
        options: ["重炭酸イオン(HCO3-)の排泄増加", "水素イオン(H+)の分泌増加とHCO3-の再吸収増加", "アンモニア産生の減少"],
        answer: "水素イオン(H+)の分泌増加とHCO3-の再吸収増加",
        explanation: "慢性的な高CO2状態に対し、腎臓はH+を尿中に排泄し、HCO3-を血中に再吸収することで血漿HCO3-濃度を上昇させ、pHを正常に近づけようとします。",
        page: 402
    },
    {
        question: "アニオンギャップを計算する際に、血清アルブミン値が低い場合に考慮すべきことは何ですか？",
        options: ["アニオンギャップは影響を受けない", "見かけ上のアニオンギャップは実際より高くなる", "見かけ上のアニオンギャップは実際より低くなるため、補正が必要である"],
        answer: "見かけ上のアニオンギャップは実際より低くなるため、補正が必要である",
        explanation: "アニオンギャップの大部分は負に荷電したアルブミンで構成されています。低アルブミン血症では、このためアニオンギャップが偽性低値を示すため補正が必要です。",
        page: 406
    },
    {
        question: "StewartアプローチにおけるStrong Ion Difference (SID)が減少すると、どのような酸塩基平衡障害が生じますか？",
        options: ["代謝性アシドーシス", "代謝性アルカローシス", "呼吸性アシドーシス"],
        answer: "代謝性アシドーシス",
        explanation: "SIDは強カチオンと強アニオンの差です。SIDの減少（例：高クロール血症）は、電気的中性を保つためにH+濃度の上昇を招き、代謝性アシドーシスを引き起こします。",
        page: 406
    },
    {
        question: "重篤なアシデミア(pH < 7.2)が心血管系に与える主な影響は何ですか？",
        options: ["心筋収縮力の増強", "カテコラミンに対する心筋の反応性低下と心筋収縮力低下", "末梢血管抵抗の著しい上昇"],
        answer: "カテコラミンに対する心筋の反応性低下と心筋収縮力低下",
        explanation: "軽度のアシデミアではカテコラミン放出が代償しますが、pHが7.2を下回ると心筋のカテコラミンへの反応性が鈍化し、心筋抑制と低血圧が顕著になります。",
        page: 404
    },
    {
        question: "Winterの式 [PCO2 = (1.5 × HCO3-) + 8] は、どの酸塩基平衡障害における呼吸性代償を評価するために用いられますか？",
        options: ["代謝性アシドーシス", "代謝性アルカローシス", "呼吸性アシドーシス"],
        answer: "代謝性アシドーシス",
        explanation: "Winterの式は、代謝性アシドーシスにおいて予測される代償的なPaCO2の低下レベルを計算するために使用されます。",
        page: 409
    },
    {
        question: "白血病などで白血球数が著しく増加している患者の血液ガス分析で、「白血球盗（leukocyte larceny）」と呼ばれる現象が起こると、どのような誤差が生じますか？",
        options: ["PaO2が偽性高値となる", "PaO2が偽性低値となる", "PaCO2が偽性低値となる"],
        answer: "PaO2が偽性低値となる",
        explanation: "検体中の白血球が代謝により酸素を消費するため、分析が遅れると、実際の値よりも低いPaO2が測定されることがあります。",
        page: 403
    },
    {
        question: "P/F比（PaO2/FIO2比）がARDSの重症度分類に用いられる理由は何ですか？",
        options: ["計算がA-a勾配より複雑だから", "FIO2の値に影響されにくいから", "シャント率を直接計算できるから"],
        answer: "FIO2の値に影響されにくいから",
        explanation: "P/F比は、特に高いFIO2設定下でA-a勾配よりも安定しており、酸素化障害の程度を評価するのに適しているため、ARDSの重症度分類に採用されています。",
        page: 411
    },
    {
        question: "敗血症性ショックの患者で混合静脈血酸素飽和度(SvO2)が高値を示すことがあります。その理由として考えられることは何ですか？",
        options: ["組織での酸素需要が増大しているため", "末梢でのシャントや細胞の酸素利用障害により、組織での酸素抽出が低下しているため", "心拍出量が著しく低下しているため"],
        answer: "末梢でのシャントや細胞の酸素利用障害により、組織での酸素抽出が低下しているため",
        explanation: "敗血症では、末梢血管の拡張によるシャントやミトコンドリア機能障害により、組織が酸素を有効に利用できず、結果として静脈血の酸素飽和度が高くなります。",
        page: 412
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

    window.location.href = 'c22_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
