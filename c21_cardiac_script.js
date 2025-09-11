const quizData = [
    {
        question: "心臓超音波検査でMモードがBモードに比べて優れている点は何ですか？",
        options: ["空間分解能が高い", "時間分解能が非常に高い", "視野が広い"],
        answer: "時間分解能が非常に高い",
        explanation: "Mモードは単一のビームライン上での動きを時間軸で表示するため、サンプリングレートが非常に高く、僧帽弁の動きのような速い動きの評価に優れています。",
        page: 384
    },
    {
        question: "胸骨傍長軸像(PLAX)で左室機能を評価する際の4つの質問のうち、「僧帽弁前尖が中隔に接触しているか？」という項目（EPSS）は何を示唆しますか？",
        options: ["左室収縮能が良好であること", "僧帽弁狭窄症があること", "左房圧が高いこと"],
        answer: "左室収縮能が良好であること",
        explanation: "正常な左室機能では、僧帽弁は拡張期に大きく開放し、前尖は心室中隔に近づきます。EPSSの増大は左室収縮能低下を示唆します。",
        page: 389
    },
    {
        question: "心尖部四腔像(A4C)で右室機能を評価する際、三尖弁輪の心尖部への動きを評価する指標は何ですか？",
        options: ["右室径", "三尖弁輪平面収縮期移動距離 (TAPSE)", "心室中隔の動き"],
        answer: "三尖弁輪平面収縮期移動距離 (TAPSE)",
        explanation: "TAPSEは右室の長軸方向の収縮能を反映する簡便な指標です。正常な右室では、三尖弁輪は心尖部に向かって活発に動きます。",
        page: 390
    },
    {
        question: "心嚢液貯留の際に、心タンポナーデを示唆する心エコー所見はどれですか？",
        options: ["右房・右室の拡張期虚脱", "左室壁の肥厚", "大動脈弁の早期閉鎖"],
        answer: "右房・右室の拡張期虚脱",
        explanation: "心嚢内圧が上昇すると、拡張期に圧の低い右心系（右房、次いで右室）が圧迫されて虚脱します。これは心タンポナーデの重要な徴候です。",
        page: 387
    },
    {
        question: "胃超音波検査で胃前庭部の断面積(CSA)を測定する体位とその意義について正しいものはどれですか？",
        options: ["仰臥位で測定し、固形物の量を推定する", "右側臥位で測定し、液体の量を推定する", "左側臥位で測定し、ガスの量を推定する"],
        answer: "右側臥位で測定し、液体の量を推定する",
        explanation: "右側臥位にすることで胃内の液体が前庭部に集まり、CSAを測定することで胃内液体量を推定し、誤嚥リスクを定量的に評価できます。",
        page: 399
    },
    {
        question: "肺超音波検査で、多数のBラインが融合して見える「ホワイトラング」所見は何を示唆しますか？",
        options: ["気胸", "正常な肺", "重度の間質性・肺胞性浮腫"],
        answer: "重度の間質性・肺胞性浮腫",
        explanation: "Bラインが多数出現し、互いに融合して画面全体が白く見える所見は、肺胞まで浮腫が及んでいる重篤な状態を示唆します。",
        page: 391
    },
    {
        question: "POCUSで下大静脈(IVC)と大動脈を鑑別する際、大動脈に特徴的な所見はどれですか？",
        options: ["呼吸性変動がある", "壁が厚く、拍動性である", "肝静脈が流入する"],
        answer: "壁が厚く、拍動性である",
        explanation: "大動脈は厚い筋層を持つため壁が厚く拍動性に見えます。一方、IVCは壁が薄く、呼吸性の径変化を示し、肝静脈が流入するのが特徴です。",
        page: 389
    },
    {
        question: "胸骨傍短軸像(PSAX)で乳頭筋レベルを描出した際、左室壁の動きが均一に中心に向かっていない場合、何を疑いますか？",
        options: ["左室肥大", "局所壁運動異常（心筋虚血など）", "弁膜症"],
        answer: "局所壁運動異常（心筋虚血など）",
        explanation: "正常な左室は均一に収縮しますが、特定の冠動脈領域に虚血があると、その領域の壁運動が低下（hypokinesis）または消失（akinesis）します。",
        page: 390
    },
    {
        question: "POCUSの限界として、術者が認識すべき最も重要なことは何ですか？",
        options: ["常に確定診断が可能であること", "画質不良やアーチファクト、不完全なデータにより診断精度が損なわれる場合があること", "全ての病態を描出できること"],
        answer: "画質不良やアーチファクト、不完全なデータにより診断精度が損なわれる場合があること",
        explanation: "POCUSは迅速な評価に有用ですが、その限界を理解し、不確実な場合は専門家による正式な検査をためらわないことが重要です。",
        page: 399
    },
    {
        question: "ショック状態の患者の評価（RUSH examなど）で、心エコー、肺エコー、腹部エコーを統合して評価する目的は何ですか？",
        options: ["各臓器の形態異常を詳細に調べるため", "ショックの原因（心原性、循環血液量減少性、閉塞性、分布性）を迅速に鑑別するため", "悪性腫瘍のスクリーニングのため"],
        answer: "ショックの原因（心原性、循環血液量減少性、閉塞性、分布性）を迅速に鑑別するため",
        explanation: "複数の部位を系統的に評価することで、心機能、ボリューム、閉塞の有無などを総合的に判断し、ショックの病態生理を迅速に特定することを目指します。",
        page: 391
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

    window.location.href = 'c21_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
