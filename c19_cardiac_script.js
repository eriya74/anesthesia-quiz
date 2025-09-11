const quizData = [
    {
        question: "人工心肺(CPB)中の血液希釈において、目標ヘマトクリット値を20-25%に設定する主な理由は何ですか？",
        options: ["血液粘稠度を低下させ、微小循環を改善するため", "輸血製剤の使用を節約するため", "免疫反応を抑制するため"],
        answer: "血液粘稠度を低下させ、微小循環を改善するため",
        explanation: "低体温下での血液粘稠度上昇を防ぎ、臓器灌流を維持することが血液希釈の主な目的です。これにより臓器保護効果が期待されます。",
        page: "N/A"
    },
    {
        question: "人工心肺離脱後のプロタミン投与による血圧低下（プロタミン反応）の機序として考えられていないものはどれですか？",
        options: ["ヒスタミン放出", "IgE介在性のアナフィラキシー", "直接的な心筋抑制作用"],
        answer: "直接的な心筋抑制作用",
        explanation: "プロタミン反応は主にヒスタミン放出による血管拡張や、稀に真のアナフィラキシーによって起こります。直接的な心筋抑制作用は主な機序ではありません。",
        page: "N/A"
    },
    {
        question: "心臓手術における大量出血時の凝固障害に対し、Viscoelastic testing (VETs) 、例えばROTEMやTEGが有用な理由は何ですか？",
        options: ["リアルタイムで凝固能を総合的に評価し、標的指向型の治療を可能にするため", "血小板数を正確に測定できるため", "従来の凝固検査より迅速に結果が出るため"],
        answer: "リアルタイムで凝固能を総合的に評価し、標的指向型の治療を可能にするため",
        explanation: "VETsは凝固開始から線溶までのプロセスを視覚的に評価でき、フィブリノゲン、血小板、凝固因子など、どの成分が不足しているかを迅速に判断し、的確な補充療法を導きます。",
        page: "N/A"
    },
    {
        question: "ヘパリン起因性血小板減少症(HIT)の既往がある患者の心臓手術で、人工心肺の抗凝固薬として使用される薬物はどれですか？",
        options: ["低分子ヘパリン", "アルガトロバンなどの直接トロンビン阻害薬", "ワルファリン"],
        answer: "アルガトロバンなどの直接トロンビン阻害薬",
        explanation: "HIT患者にはヘパリン類は使用禁忌です。アルガトロバンやビバリルジンなどの直接トロンビン阻害薬が代替薬として用いられます。",
        page: "N/A"
    },
    {
        question: "自己心膜パッチなどを用いた心臓手術後、線溶亢進型の出血が疑われる場合に投与を考慮すべき薬剤は何ですか？",
        options: ["ヘパリン", "トラネキサム酸", "新鮮凍結血漿(FFP)"],
        answer: "トラネキサム酸",
        explanation: "トラネキサム酸はプラスミノゲンのプラスミンへの変換を阻害し、フィブリン分解（線溶）を抑制することで、線溶亢進型の出血に対して止血効果を発揮します。",
        page: "N/A"
    },
    {
        question: "心臓手術後の心タンポナーデを疑う徴候として、輸液負荷に対する反応はどうなりますか？",
        options: ["血圧が著明に上昇する", "一回拍出量(SV)が増加する", "CVPのみが上昇し、血圧はほとんど変化しないか低下する"],
        answer: "CVPのみが上昇し、血圧はほとんど変化しないか低下する",
        explanation: "心タンポナーデでは心室の拡張が物理的に制限されているため、輸液をしても心室はそれ以上充満できず、SVは増加しません。結果としてCVPだけが上昇します。",
        page: "N/A"
    },
    {
        question: "濃厚赤血球(RCC)製剤に放射線照射を行う主な目的は何ですか？",
        options: ["細菌やウイルスを不活化するため", "保存期間を延長するため", "輸血後移植片対宿主病(GVHD)を予防するため"],
        answer: "輸血後移植片対宿主病(GVHD)を予防するため",
        explanation: "放射線照射は、製剤中のリンパ球を不活化し、免疫不全患者などで起こりうる致死的な合併症である輸血後GVHDを予防するために行われます。",
        page: "N/A"
    },
    {
        question: "右心不全を合併した患者の輸液管理で特に注意すべきことは何ですか？",
        options: ["急速な大量輸液は避けるべきである", "膠質液（コロイド）の使用は禁忌である", "常にCVPを15mmHg以上に保つべきである"],
        answer: "急速な大量輸液は避けるべきである",
        explanation: "右心不全患者では、過剰な輸液は右室の容量負荷を増大させ、心室中隔の左方偏位を介して左室充満を障害し、心拍出量をかえって低下させる危険があります。",
        page: "N/A"
    },
    {
        question: "4因子プロトロンビン複合体製剤(4F-PCC)に含まれないビタミンK依存性凝固因子はどれですか？",
        options: ["第II因子", "第VII因子", "第V因子"],
        answer: "第V因子",
        explanation: "4F-PCCはビタミンK依存性凝固因子である第II, VII, IX, X因子と、プロテインC, Sを含みます。第V因子は含まれません。",
        page: "N/A"
    },
    {
        question: "心臓手術における「Zero-Balance Ultrafiltration (Z-BUF)」の主な目的は何ですか？",
        options: ["循環血液量を増加させること", "電解質バランスを補正すること", "希釈された血液を濃縮し、炎症性サイトカインを除去すること"],
        answer: "希釈された血液を濃縮し、炎症性サイトカインを除去すること",
        explanation: "Z-BUFは、人工心肺離脱前に血液を濃縮し、体液バランスを調整すると同時に、炎症性メディエーターを除去して全身性炎症反応を軽減することを目的とします。",
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

    window.location.href = 'c19_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
