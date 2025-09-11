const quizData = [
    {
        question: "Goal-Directed Fluid Therapy (GDFT)において、輸液反応性を評価するために用いられる動的指標でないものはどれですか？",
        options: ["一回拍出量変動 (SVV)", "脈圧変動 (PPV)", "中心静脈圧 (CVP)"],
        answer: "中心静脈圧 (CVP)",
        explanation: "CVPは静的指標であり、輸液反応性を正確に予測しないことが示されています。SVVやPPVなどの動的指標がGDFTでは重視されます。",
        page: "N/A"
    },
    {
        question: "膠質液（コロイド）が晶質液に比べて血管内皮グリコカリックスを保護する可能性があるとされる理由は何ですか？",
        options: ["ナトリウム濃度が低いため", "分子量が大きく、血管内腔に留まりやすいため", "カリウムを含まないため"],
        answer: "分子量が大きく、血管内腔に留まりやすいため",
        explanation: "アルブミンなどの膠質液は血管内に留まり、血管内皮グリコカリックス層の破壊を防ぎ、血管透過性亢進を抑制する効果が期待されています。",
        page: "N/A"
    },
    {
        question: "輸血関連急性肺障害(TRALI)の病態として最も考えられるものはどれですか？",
        options: ["循環血液量の過負荷による静水圧性肺水腫", "ドナー血漿中の抗白血球抗体による免疫介在性の肺障害", "IgA欠損患者における抗IgA抗体によるアナフィラキシー"],
        answer: "ドナー血漿中の抗白血球抗体による免疫介在性の肺障害",
        explanation: "TRALIは、ドナー血液中の抗HLA抗体や抗好中球抗体がレシピエントの白血球を活性化し、肺毛細血管の透過性を亢進させることで発症します。",
        page: "N/A"
    },
    {
        question: "濃厚血小板(PC)製剤の保管温度として適切なのはどれですか？",
        options: ["4℃で冷蔵保存", "20-24℃で振盪しながら室温保存", "-20℃で冷凍保存"],
        answer: "20-24℃で振盪しながら室温保存",
        explanation: "血小板は低温で機能が低下するため、20-24℃の室温で、凝集を防ぐために振盪しながら保存する必要があります。",
        page: "N/A"
    },
    {
        question: "ABO血液型不適合輸血による急性溶血性副作用の主な原因は何ですか？",
        options: ["レシピエント血漿中の同種抗体によるドナー赤血球の破壊", "ドナー血漿中の抗体によるレシピエント赤血球の破壊", "温度差による赤血球の物理的破壊"],
        answer: "レシピエント血漿中の同種抗体によるドナー赤血球の破壊",
        explanation: "レシピエントの抗A抗体や抗B抗体が、輸血された不適合の赤血球を攻撃し、補体を介した血管内溶血を引き起こします。",
        page: "N/A"
    },
    {
        question: "術中セルサルベージ（自己血回収装置）で回収された血液を再輸血する際の注意点は何ですか？",
        options: ["凝固因子や血小板はほとんど含まれない", "細菌汚染のリスクはない", "ヘモグロビン濃度が非常に高い"],
        answer: "凝固因子や血小板はほとんど含まれない",
        explanation: "洗浄・濃縮の過程で血漿成分（凝固因子）や血小板は除去されるため、大量に返血した場合は凝固障害に注意が必要です。",
        page: "N/A"
    },
    {
        question: "乏尿（Oliguria）に対する輸液負荷（Fluid Challenge）が有効かどうかを判断するために、最も信頼性の高い評価項目はどれですか？",
        options: ["尿量の増加", "血圧の上昇", "一回拍出量(SV)または心拍出量(CO)の増加"],
        answer: "一回拍出量(SV)または心拍出量(CO)の増加",
        explanation: "輸液負荷の目的は循環血液量を増やし、心拍出量を増加させることです。SVやCOが10-15%以上増加すれば「輸液反応性あり」と判断されます。",
        page: "N/A"
    },
    {
        question: "Restrictive（制限的）輸血戦略が多くの臨床研究で推奨されている理由は何ですか？",
        options: ["コスト削減のため", "輸血に伴う免疫抑制や炎症反応などの副作用を回避するため", "血液製剤の不足に対応するため"],
        answer: "輸血に伴う免疫抑制や炎症反応などの副作用を回避するため",
        explanation: "不必要な輸血は感染症、免疫変調、TRALIなどのリスクを伴います。Hb 7-8 g/dLといった低めの閾値を設定する制限的戦略は、予後を悪化させずにこれらのリスクを減らせることが示されています。",
        page: "N/A"
    },
    {
        question: "フィブリノゲン製剤の投与が最も効果的な病態はどれですか？",
        options: ["血友病A", "産科危機的出血などによる後天性低フィブリノゲン血症", "ビタミンK欠乏"],
        answer: "産科危機的出血などによる後天性低フィブリノゲン血症",
        explanation: "フィブリノゲンは凝固カスケードの最終段階でフィブリン塊を形成する重要な因子であり、大量出血やDICで消費された場合に補充することで止血効果が期待できます。",
        page: "N/A"
    },
    {
        question: "等張性低ナトリウム血症（偽性低Na血症）の原因となる病態はどれですか？",
        options: ["高血糖", "高脂血症や高蛋白血症", "心不全"],
        answer: "高脂血症や高蛋白血症",
        explanation: "著しい高脂血症や高蛋白血症では、血漿中の水分比率が低下するため、測定されるナトリウム濃度が見かけ上低くなりますが、血漿浸透圧は正常です。",
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

    window.location.href = 'c19_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
