const quizData = [
    {
        question: "腎血流の自動調節能が維持される平均動脈圧の範囲は、正常ではおよそどれくらいですか？",
        options: ["40-100 mmHg", "80-180 mmHg", "120-220 mmHg"],
        answer: "80-180 mmHg",
        explanation: "腎臓は、平均動脈圧が80～180mmHgの範囲内であれば、輸入細動脈の血管径を調節することで腎血流と糸球体濾過量を一定に保つ自動調節能を持っています。",
        page: 498
    },
    {
        question: "術前の腎機能評価で、血清クレアチニン値が正常でも腎機能が低下している可能性があるのはどのような患者ですか？",
        options: ["若年の筋肉質な男性", "高齢で筋肉量の少ない女性", "妊娠中の女性"],
        answer: "高齢で筋肉量の少ない女性",
        explanation: "血清クレアチニン値は筋肉量に依存するため、高齢者や筋肉量の少ない患者では、実際のGFRが低下していてもクレアチニン値が正常範囲内に留まることがあります。",
        page: 501
    },
    {
        question: "末期腎不全(ESRD)患者で最も生命を脅かす電解質異常は何ですか？",
        options: ["低ナトリウム血症", "高カリウム血症", "低カルシウム血症"],
        answer: "高カリウム血症",
        explanation: "腎臓からのカリウム排泄が障害されるため、高カリウム血症はESRD患者における最も危険な電解質異常であり、致死性不整脈の原因となります。",
        page: 503
    },
    {
        question: "周術期の乏尿で、腎前性と腎性（急性尿細管壊死）を鑑別する際に、腎前性乏尿を示唆する尿検査所見はどれですか？",
        options: ["尿中ナトリウム濃度 > 40 mEq/L", "尿比重 < 1.010", "尿中ナトリウム濃度 < 20 mEq/L、尿浸透圧 > 400 mOsm/L"],
        answer: "尿中ナトリウム濃度 < 20 mEq/L、尿浸透圧 > 400 mOsm/L",
        explanation: "腎前性乏尿では、腎臓は体液を保持しようとナトリウムと水を最大限再吸収するため、尿は濃縮され、尿中ナトリウムは低くなります。",
        page: 504
    },
    {
        question: "肝臓への血液供給は二重支配を受けています。門脈と肝動脈の血流量の比率はおよそどのくらいですか？",
        options: ["門脈 50% : 肝動脈 50%", "門脈 70% : 肝動脈 30%", "門脈 30% : 肝動脈 70%"],
        answer: "門脈 70% : 肝動脈 30%",
        explanation: "肝臓への血流の約70%は門脈から、残りの約30%は肝動脈から供給されますが、酸素供給の割合はそれぞれ約50%ずつです。",
        page: 505
    },
    {
        question: "肝硬変患者で認められる循環動態の特徴は何ですか？",
        options: ["高心拍出量、低全身血管抵抗", "低心拍出量、高全身血管抵抗", "正常心拍出量、高血圧"],
        answer: "高心拍出量、低全身血管抵抗",
        explanation: "肝硬変では、血管拡張物質の産生増加や動静脈シャントの形成により、末梢血管抵抗が低下し、代償的に心拍出量が増加する高循環動態（hyperdynamic circulation）を呈します。",
        page: 508
    },
    {
        question: "肝性脳症の治療にラクツロースが用いられる主な理由は何ですか？",
        options: ["腸管からのアンモニア吸収を減少させるため", "脳浮腫を軽減するため", "肝血流を増加させるため"],
        answer: "腸管からのアンモニア吸収を減少させるため",
        explanation: "ラクツロースは腸内細菌によって分解され、腸管内を酸性化することでアンモニアの吸収を抑制し、また下剤効果によりアンモニアの排泄を促進します。",
        page: 508
    },
    {
        question: "Child-Turcotte-Pugh (CTP)分類で評価される5つの項目のうち、身体所見で評価される2項目は何ですか？",
        options: ["腹水と脳症", "黄疸と腹水", "脳症と栄養状態"],
        answer: "腹水と脳症",
        explanation: "CTP分類は、腹水、脳症の2つの臨床所見と、ビリルビン、アルブミン、プロトロンビン時間の3つの血液検査項目から構成されます。",
        page: 510
    },
    {
        question: "胆道内圧を上昇させる作用があるため、胆道系の手術でオピオイドを使用する際に注意が必要な理由は何ですか？",
        options: ["オッディ括約筋を収縮させるため", "胆汁の産生を抑制するため", "肝血流を減少させるため"],
        answer: "オッディ括約筋を収縮させるため",
        explanation: "モルヒネなどのオピオイドは、十二指腸乳頭部にあるオッディ括約筋を収縮させ、胆道内圧を上昇させる可能性があります。",
        page: 512
    },
    {
        question: "腹腔鏡下胆嚢摘出術で、気腹に二酸化炭素(CO2)が用いられる主な理由は何ですか？",
        options: ["安価であるため", "不燃性で、血液への溶解度が高く、万が一血管内に迷入しても肺塞栓のリスクが低いため", "腹腔内圧を最も高くできるため"],
        answer: "不燃性で、血液への溶解度が高く、万が一血管内に迷入しても肺塞栓のリスクが低いため",
        explanation: "CO2は不燃性で、血液への溶解度が高いため、血管内に吸収されても肺から速やかに排出され、空気塞栓のリスクが低いという安全上の利点があります。",
        page: 513
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

    window.location.href = 'c28_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
