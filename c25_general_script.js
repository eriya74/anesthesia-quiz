const quizData = [
    {
        question: "「致死的トライアド」と呼ばれる、外傷患者の予後不良因子である3つの要素は何ですか？",
        options: ["低体温、アシドーシス、凝固障害", "高血圧、頻脈、高血糖", "低酸素症、高炭酸ガス血症、低血圧"],
        answer: "低体温、アシドーシス、凝固障害",
        explanation: "重症外傷では、低体温、アシドーシス、凝固障害が悪循環を形成し、致死的な状態に至るため、この3つは「死の三徴」とも呼ばれます。",
        page: 445
    },
    {
        question: "電子交差試験（Electronic crossmatching）が可能となるための条件として、最も重要なことは何ですか？",
        options: ["患者が過去に輸血歴がないこと", "患者の抗体スクリーンが陰性であること", "緊急手術であること"],
        answer: "患者の抗体スクリーンが陰性であること",
        explanation: "電子交差試験は、不規則抗体が陰性であることが確認されている場合に、コンピュータシステム上で適合性を確認する方法です。これにより迅速な血液の供給が可能になります。",
        page: 447
    },
    {
        question: "濃厚血小板製剤が室温（20-24℃）で振盪しながら保存される主な理由は何ですか？",
        options: ["低温では細菌が増殖しやすいため", "低温では血小板の機能が不可逆的に低下するため", "振盪しないと凝固するため"],
        answer: "低温では血小板の機能が不可逆的に低下するため",
        explanation: "血小板は低温に曝されると形態変化を起こし、機能が著しく低下します。そのため、機能を維持するために室温で保存されます。",
        page: 448
    },
    {
        question: "一般的に、待機手術患者において濃厚赤血球の輸血がほとんど必要ないとされるヘモグロビン値の閾値はどれくらいですか？",
        options: ["8 g/dL以上", "10 g/dL以上", "12 g/dL以上"],
        answer: "10 g/dL以上",
        explanation: "多くのガイドラインでは、Hb 10 g/dL以上の患者では輸血の利益がリスクを上回ることは稀であるとされています。",
        page: 450
    },
    {
        question: "輸血関連急性肺障害(TRALI)の病態として最も考えられているメカニズムは何ですか？",
        options: ["ドナー血漿中の抗白血球抗体がレシピエントの白血球を活性化させる", "循環血液量の過負荷による静水圧性肺水腫", "IgA欠損患者における抗IgA抗体によるアナフィラキシー"],
        answer: "ドナー血漿中の抗白血球抗体がレシピエントの白血球を活性化させる",
        explanation: "TRALIの主な原因は、ドナー血液中の抗HLA抗体や抗好中球抗体がレシピエントの白血球を活性化し、肺毛細血管の透過性を亢進させることによる非心原性肺水腫です。",
        page: 452
    },
    {
        question: "輸血関連免疫修飾(TRIM)が臨床的に問題となるのは、どのような合併症のリスクを増加させる可能性があるからですか？",
        options: ["術後感染症", "血栓塞栓症", "急性腎障害"],
        answer: "術後感染症",
        explanation: "同種血輸血はレシピエントの免疫系を抑制する方向に働く可能性があり、術後の感染症リスクや癌の再発率を増加させるという報告があります。",
        page: 452
    },
    {
        question: "保存血中の赤血球で2,3-DPGが減少すると、ヘモグロビンの酸素親和性はどのように変化しますか？",
        options: ["酸素親和性は上昇する（酸素解離曲線が左方移動）", "酸素親和性は低下する（酸素解離曲線が右方移動）", "酸素親和性は変化しない"],
        answer: "酸素親和性は上昇する（酸素解離曲線が左方移動）",
        explanation: "2,3-DPGはヘモグロビンの酸素親和性を低下させる働きがあります。保存によりこれが減少すると、ヘモグロビンは酸素を放しにくくなり、組織への酸素供給が非効率になる可能性があります。",
        page: 452
    },
    {
        question: "急性溶血性輸血副作用の治療において、腎機能保護のために最も重要なことは何ですか？",
        options: ["ステロイドの大量投与", "尿のアシド化", "十分な輸液による尿量確保と利尿薬の使用"],
        answer: "十分な輸液による尿量確保と利尿薬の使用",
        explanation: "溶血により放出されたヘモグロビンが尿細管を閉塞し急性腎不全に至るのを防ぐため、十分な循環血液量を維持し、利尿を確保することが最も重要です。",
        page: 454
    },
    {
        question: "自己血輸血の方法のうち、術前に複数回採血しておく方法を何と呼びますか？",
        options: ["術中血液回収", "希釈式自己血輸血", "貯血式自己血輸血 (PAD)"],
        answer: "貯血式自己血輸血 (PAD)",
        explanation: "Predeposited Autologous Donation (PAD)は、待機手術の前に患者自身の血液を採血・保存しておき、術中に使用する方法です。",
        page: 454
    },
    {
        question: "外傷における大量輸血プロトコルで、濃厚赤血球：新鮮凍結血漿：血小板を1:1:1に近い比率で投与する目的は何ですか？",
        options: ["コストを削減するため", "失われた血液の組成に近い形で補充し、希釈性凝固障害を防ぐため", "高カリウム血症を予防するため"],
        answer: "失われた血液の組成に近い形で補充し、希釈性凝固障害を防ぐため",
        explanation: "この方法は「ダメージコントロール蘇生」の一部であり、全血に近い組成で補充することで、大量輸液による希釈性凝固障害や消費性凝固障害の進行を防ぐことを目的としています。",
        page: 449
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

    window.location.href = 'c25_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
