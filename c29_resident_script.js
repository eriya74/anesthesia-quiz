const quizData = [
    {
        question: "肥満患者の麻酔導入時に、無呼吸後の酸素飽和度低下が速い主な理由は何ですか？",
        options: ["酸素消費量が少ないため", "機能的残気量(FRC)が減少しているため", "心拍出量が少ないため"],
        answer: "機能的残気量(FRC)が減少しているため",
        explanation: "肥満患者では、脂肪組織による胸郭・腹部の圧迫によりFRCが減少し、体内の酸素リザーブが少ないため、無呼吸時の低酸素血症が速く進行します。",
        page: 516
    },
    {
        question: "メタボリックシンドロームの診断基準に含まれないものはどれですか？",
        options: ["腹部肥満", "高血圧", "低HDLコレステロール血症", "低血糖"],
        answer: "低血糖",
        explanation: "メタボリックシンドロームの診断基準には、腹部肥満、脂質異常症（高中性脂肪または低HDL）、高血圧、高血糖（耐糖能異常）が含まれます。",
        page: 516
    },
    {
        question: "重度の低栄養患者に急激な栄養補給を開始した際に起こりうる「リフィーディング症候群」の最も特徴的な電解質異常は何ですか？",
        options: ["高リン血症", "低リン血症", "高カリウム血症"],
        answer: "低リン血症",
        explanation: "急激な糖質投与によるインスリン分泌が、リン、カリウム、マグネシウムの細胞内への移動を促進するため、血清中の濃度が急激に低下します。特に低リン血症が特徴的です。",
        page: 518
    },
    {
        question: "胃食道逆流症(GERD)患者の麻酔導入で、胃内容物の誤嚥リスクを低減させるために行う手技は何ですか？",
        options: ["緩徐導入", "迅速導入気管挿管 (RSII)", "マスク換気を十分に行う"],
        answer: "迅速導入気管挿管 (RSII)",
        explanation: "RSIIは、鎮静薬投与から気管チューブのカフ膨張までの時間を最短にし、その間のマスク換気を省略することで、誤嚥のリスクを最小化する手技です。",
        page: 521
    },
    {
        question: "2型糖尿病の治療薬であるメトホルミンの主な作用機序は何ですか？",
        options: ["インスリン分泌を促進する", "肝臓での糖新生を抑制し、組織のインスリン感受性を改善する", "尿中への糖排泄を促進する"],
        answer: "肝臓での糖新生を抑制し、組織のインスリン感受性を改善する",
        explanation: "メトホルミンはビグアナイド薬に分類され、主に肝臓での糖産生を抑制し、末梢組織でのインスリン感受性を高めることで血糖を低下させます。",
        page: 522
    },
    {
        question: "甲状腺機能低下症の患者で、手術前に甲状腺ホルモン補充療法を行い、臨床的にeuthyroid（甲状腺機能正常）の状態にすることが推奨される理由は何ですか？",
        options: ["麻酔薬に対する感受性が亢進しているため", "術後の創傷治癒を促進するため", "循環抑制や低体温、麻酔からの遷延性覚醒のリスクを減らすため"],
        answer: "循環抑制や低体温、麻酔からの遷延性覚醒のリスクを減らすため",
        explanation: "重度の甲状腺機能低下症は、心機能抑制、代謝低下、呼吸ドライブ低下などを引き起こし、周術期のリスクを増大させます。",
        page: 524
    },
    {
        question: "甲状腺クリーゼ（thyroid storm）と悪性高熱症を鑑別する上で、悪性高熱症に特徴的な所見はどれですか？",
        options: ["頻脈と高体温", "筋硬直と呼吸性アシドーシス", "意識障害"],
        answer: "筋硬直と呼吸性アシドーシス",
        explanation: "両者は高代謝状態を呈し似ていますが、筋硬直とそれに伴う急激なCO2産生増加による呼吸性アシドーシスは、悪性高熱症に特徴的な所見です。",
        page: 525
    },
    {
        question: "原発性アルドステロン症の患者に見られる典型的な電解質異常と血圧の状態はどれですか？",
        options: ["高カリウム血症と低血圧", "低カリウム血症性アルカローシスと高血圧", "高ナトリウム血症と高血圧"],
        answer: "低カリウム血症性アルカローシスと高血圧",
        explanation: "アルドステロンの過剰分泌により、腎臓でのナトリウムと水の再吸収が亢進し高血圧に、カリウムと水素イオンの排泄が促進され低カリウム血症性アルカローシスになります。",
        page: 526
    },
    {
        question: "褐色細胞腫の術前管理で、α遮断薬をβ遮断薬より先に投与する理由は何ですか？",
        options: ["β遮断薬は効果が弱いため", "β遮断薬を先に投与すると、α作用が優位になり危険な高血圧を引き起こすため", "α遮断薬の方が半減期が短いため"],
        answer: "β遮断薬を先に投与すると、α作用が優位になり危険な高血圧を引き起こすため",
        explanation: "β2受容体による血管拡張作用が遮断されると、α受容体による血管収縮作用が相対的に優位となり、急激な血圧上昇（高血圧クリーゼ）をきたす危険があります。",
        page: 528
    },
    {
        question: "カルチノイド症候群の患者で、術中に急激な血圧低下や気管支攣縮（カルチノイドクリーゼ）が起きた場合の治療薬として第一選択となるのは何ですか？",
        options: ["アドレナリン", "オクトレオチド", "抗ヒスタミン薬"],
        answer: "オクトレオチド",
        explanation: "オクトレオチドはソマトスタチンアナログであり、腫瘍からのセロトニンなどの血管作動性物質の放出を抑制することで、カルチノイドクリーゼの症状を改善します。",
        page: 530
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

    window.location.href = 'c29_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
