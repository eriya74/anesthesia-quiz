const quizData = [
    {
        question: "肥満患者の薬物動態において、脂溶性の高い薬剤（フェンタニルなど）の分布容積はどのように変化しますか？",
        options: ["変化しない", "減少する", "増大する"],
        answer: "増大する",
        explanation: "肥満患者では脂肪組織が過剰であるため、フェンタニルやプロポフォールのような脂溶性の高い薬剤の分布容積が増大し、作用時間が遷延する可能性があります。",
        page: 517
    },
    {
        question: "GLIM基準による低栄養の診断には、表現型基準と病因基準が1つずつ必要です。表現型基準に含まれないものはどれですか？",
        options: ["意図しない体重減少", "低いBMI", "食事摂取量の減少または吸収不良"],
        answer: "食事摂取量の減少または吸収不良",
        explanation: "食事摂取量の減少や吸収不良は、病因基準に分類されます。表現型基準は、体重減少、低いBMI、筋肉量の減少の3つです。",
        page: 518
    },
    {
        question: "クローン病(CD)と潰瘍性大腸炎(UC)を鑑別する上で、CDに特徴的な病理学的所見はどれですか？",
        options: ["粘膜層に限局した連続性の炎症", "非乾酪性類上皮細胞肉芽腫を伴う全層性の炎症", "直腸に好発する"],
        answer: "非乾酪性類上皮細胞肉芽腫を伴う全層性の炎症",
        explanation: "CDは消化管壁の全層に及ぶ炎症が特徴で、しばしば肉芽腫を形成します。一方、UCの炎症は粘膜層に限局しています。",
        page: 519
    },
    {
        question: "周術期に血糖値を厳格に正常範囲にコントロールする（intensive insulin therapy）ことの潜在的なリスクは何ですか？",
        options: ["高血糖のリスク", "重篤な医原性低血糖のリスク", "術後感染症のリスク"],
        answer: "重篤な医原性低血糖のリスク",
        explanation: "NICE-SUGAR試験などの大規模研究により、厳格な血糖管理は重篤な低血糖のリスクを増大させ、死亡率を増加させる可能性が示されました。",
        page: 523
    },
    {
        question: "SGLT2阻害薬を服用中の患者で、周術期に「正常血糖ケトアシドーシス」のリスクがあるのはなぜですか？",
        options: ["インスリン分泌を過剰に抑制するため", "尿糖排泄促進作用により、血糖値がそれほど高くなくてもケトン体産生が亢進するため", "肝臓での糖新生を抑制するため"],
        answer: "尿糖排泄促進作用により、血糖値がそれほど高くなくてもケトン体産生が亢進するため",
        explanation: "SGLT2阻害薬は血糖値を下げるため、インスリン分泌が相対的に低下し、脂肪分解とケトン体産生が亢進します。そのため、著明な高血糖を伴わずにケトアシドーシスを発症することがあります。",
        page: 522
    },
    {
        question: "甲状腺手術後の合併症である反回神経麻痺について、片側麻痺と両側麻痺の主な症状の違いは何ですか？",
        options: ["片側麻痺では嗄声、両側麻痺では重篤な気道閉塞", "片側麻痺では無症状、両側麻痺では嗄声", "片側麻痺では嚥下困難、両側麻痺では失声"],
        answer: "片側麻痺では嗄声、両側麻痺では重篤な気道閉塞",
        explanation: "片側麻痺では患側の声帯が正中位で固定されるため嗄声となりますが、両側麻痺では両側の声帯が正中位で固定され、声門が極端に狭くなるため重篤な気道閉塞を引き起こします。",
        page: 525
    },
    {
        question: "原発性副甲状腺機能亢進症の外科的治療（副甲状腺摘出術）中に、術中迅速PTH測定を行う主な目的は何ですか？",
        options: ["術後テタニーを予測するため", "責任腺腫が完全に切除されたことを確認するため", "カルシウム値の変動を予測するため"],
        answer: "責任腺腫が完全に切除されたことを確認するため",
        explanation: "PTHの半減期は非常に短いため、原因となっている腺腫を摘出すると血中PTH値は急激に低下します。術中にこの低下を確認することで、手術の成功を判断できます。",
        page: 525
    },
    {
        question: "長期ステロイド投与を受けている患者の周術期管理で、「ストレス量」のステロイド補充が必要とされる理論的根拠は何ですか？",
        options: ["ステロイドの離脱症状を防ぐため", "視床下部-下垂体-副腎(HPA)系の抑制により、手術侵襲に対する内因性コルチゾール反応が不十分である可能性があるため", "抗炎症作用を期待するため"],
        answer: "視床下部-下垂体-副腎(HPA)系の抑制により、手術侵襲に対する内因性コルチゾール反応が不十分である可能性があるため",
        explanation: "長期ステロイド投与はHPA系を抑制します。手術という大きなストレスに対して十分なコルチゾールを産生できず、急性副腎不全（循環虚脱）に陥るのを防ぐために補充が行われます。",
        page: 526
    },
    {
        question: "褐色細胞腫の手術で、腫瘍摘出後に急激な低血圧が起こる主な原因は何ですか？",
        options: ["出血", "残存するα遮断薬の効果と、カテコラミン産生の急激な停止", "心筋抑制"],
        answer: "残存するα遮断薬の効果と、カテコラミン産生の急激な停止",
        explanation: "腫瘍摘出によりカテコラミンの供給が途絶える一方、術前からのα遮断薬の効果が残存しているため、血管が著しく拡張し、重度の低血圧をきたすことがあります。",
        page: 528
    },
    {
        question: "カルチノイド症候群の患者で、麻酔中にヒスタミン遊離作用のある薬剤（モルヒネ、アトラクリウムなど）を避けるべき理由は何ですか？",
        options: ["薬剤の効果が遷延するため", "ヒスタミンが腫瘍からの血管作動性物質の放出を誘発し、カルチノイドクリーゼを引き起こす可能性があるため", "アレルギー反応のリスクが高いため"],
        answer: "ヒスタミンが腫瘍からの血管作動性物質の放出を誘発し、カルチノイドクリーゼを引き起こす可能性があるため",
        explanation: "ヒスタミンはカルチノイド腫瘍からのセロトニンなどのメディエーター放出の強力なトリガーとなるため、これらの薬剤の使用は避けるべきです。",
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

    window.location.href = 'c29_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
