const quizData = [
    {
        question: "心臓手術を受ける患者の術前貧血管理に関するPatient Blood Management (PBM)の観点から、最も推奨されるアプローチはどれですか？",
        options: ["術直前に濃厚赤血球を輸血する", "鉄剤やエリスロポエチンを用いて術前に貧血を治療する", "手術を延期せず、術中の輸血に備える"],
        answer: "鉄剤やエリスロポエチンを用いて術前に貧血を治療する",
        explanation: "PBMでは、術前に貧血を同定し治療することで、術中の同種血輸血の必要性を減らし、患者予後を改善することが重要視されています。",
        page: 449
    },
    {
        question: "濃厚赤血球製剤の保存期間が長くなるにつれて生じる変化（storage lesion）で、臨床的に最も問題となる可能性があるものはどれですか？",
        options: ["2,3-DPGの低下による酸素親和性の上昇", "カリウム濃度の上昇", "pHの低下"],
        answer: "2,3-DPGの低下による酸素親和性の上昇",
        explanation: "保存期間が長い血液では2,3-DPGが低下し、ヘモグロビンの酸素親和性が増大します。これにより、輸血された赤血球が末梢組織で酸素を放出しにくくなる可能性が懸念されます。",
        page: 448
    },
    {
        question: "心臓手術後の大量出血に対して、1:1:1の比率（濃厚赤血球：新鮮凍結血漿：血小板）での輸血が推奨される理論的根拠は何ですか？",
        options: ["失われた全血に近い組成で補充し、希釈性・消費性凝固障害を防ぐため", "各製剤の副作用を最小限にするため", "血液製剤の在庫を均等に消費するため"],
        answer: "失われた血液の組成に近い形で補充し、希釈性・消費性凝固障害を防ぐため",
        explanation: "この比率での輸血は、大量出血時に凝固因子や血小板が希釈・消費されるのを防ぎ、生理的な止血機能を維持することを目的としています。",
        page: 449
    },
    {
        question: "輸血関連循環過負荷(TACO)と輸血関連急性肺障害(TRALI)を鑑別する上で、TACOに特徴的な所見はどれですか？",
        options: ["発熱を伴うことが多い", "BNP（脳性ナトリウム利尿ペプチド）の上昇", "ドナー血漿中に抗白血球抗体が存在する"],
        answer: "BNP（脳性ナトリウム利尿ペプチド）の上昇",
        explanation: "TACOは循環血液量の過負荷による心原性肺水腫であり、心室壁の伸展を反映してBNPが上昇します。TRALIは非心原性であり、BNPは通常上昇しません。",
        page: 451
    },
    {
        question: "心臓手術中に希釈式自己血輸血(ANH)を行う主な目的は何ですか？",
        options: ["術中の出血量を減らすこと", "術中の同種血輸血の必要性を減らすこと", "術後貧血を予防すること"],
        answer: "術中の同種血輸血の必要性を減らすこと",
        explanation: "ANHは、術前に患者自身の血液を採取・保存し、晶質液などで循環血液量を維持します。術中の出血は希釈された血液となり、術後に保存血を戻すことで同種血輸血を回避・削減します。",
        page: 454
    },
    {
        question: "血小板輸血不応（platelet refractoriness）の原因として、免疫学的な要因で最も多いものは何ですか？",
        options: ["ABO血液型不適合", "HLA（ヒト白血球抗原）に対する抗体の存在", "脾機能亢進"],
        answer: "HLA（ヒト白血球抗原）に対する抗体の存在",
        explanation: "過去の輸血や妊娠により産生された抗HLA抗体が、輸血された血小板を破壊することが、免疫学的血小板輸血不応の主な原因です。この場合、HLA適合血小板の輸血が必要となります。",
        page: 422
    },
    {
        question: "心臓手術後の患者で、ヘモグロビン値が8 g/dLの際に輸血を開始するかどうかの判断で、最も重視すべき臨床所見はどれですか？",
        options: ["年齢", "心筋虚血の徴候（心電図変化や心機能低下）", "術後日数"],
        answer: "心筋虚血の徴候（心電図変化や心機能低下）",
        explanation: "輸血の決定は単一のHb値ではなく、患者の生理的状態に基づいて行われます。特に心筋虚血の徴候は、酸素供給が需要を下回っていることを示す重要なサインです。",
        page: 450
    },
    {
        question: "緊急手術でO型濃厚赤血球を2単位以上輸血したA型の患者に対し、A型の血液が利用可能になった場合、どうするのが最も適切ですか？",
        options: ["直ちにA型の血液に切り替える", "そのままO型の輸血を続ける", "FFPを投与してからA型に切り替える"],
        answer: "直ちにA型の血液に切り替える",
        explanation: "古典的にはO型血漿中の抗A,B抗体による溶血が懸念されましたが、現在の推奨では、患者自身の血液型が利用可能になり次第、速やかにそちらに切り替えることが一般的です。",
        page: 447
    },
    {
        question: "心臓手術で一般的に行われる「制限的輸血戦略」とは、どのようなものですか？",
        options: ["ヘモグロビン値が10 g/dLを下回ったら輸血する", "ヘモグロビン値が7-8 g/dLといった、より低い閾値を下回るまで輸血を控える", "術中の輸血を一切行わない"],
        answer: "ヘモグロビン値が7-8 g/dLといった、より低い閾値を下回るまで輸血を控える",
        explanation: "多くの臨床研究で、より低いHb閾値（7-8 g/dL）を用いる制限的輸血戦略が、予後を悪化させることなく輸血量を減らし、合併症を減少させることが示されています。",
        page: 450
    },
    {
        question: "濃厚血小板製剤の輸血後に発熱した場合、細菌汚染による敗血症を疑うべき理由は何ですか？",
        options: ["血小板製剤はウイルスに汚染されやすいため", "血小板製剤は室温で保存されるため、細菌が増殖しやすいから", "アレルギー反応の頻度が高いため"],
        answer: "血小板製剤は室温で保存されるため、細菌が増殖しやすいから",
        explanation: "血小板は機能を保つために室温（20-24℃）で保存されるため、赤血球製剤などと比べて細菌汚染・増殖のリスクが高く、敗血症の重要な原因となり得ます。",
        page: 452
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

    window.location.href = 'c25_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
