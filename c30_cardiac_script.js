const quizData = [
    {
        question: "頸動脈内膜剥離術(CEA)中に頸動脈洞を刺激すると、どのような血行動態変化が起こりやすいですか？",
        options: ["頻脈と高血圧", "徐脈と低血圧", "心拍出量の増加"],
        answer: "徐脈と低血圧",
        explanation: "頸動脈洞は圧受容体であり、外科的操作による刺激は舌咽神経を介して迷走神経反射を引き起こし、著明な徐脈と低血圧をきたすことがあります。",
        page: 544
    },
    {
        question: "くも膜下出血後の心筋障害（たこつぼ型心筋症など）の主な原因と考えられているのは何ですか？",
        options: ["冠動脈の閉塞", "急激なカテコラミン放出による心筋への直接的な毒性作用", "電解質異常"],
        answer: "急激なカテコラミン放出による心筋への直接的な毒性作用",
        explanation: "くも膜下出血は強烈な交感神経系の活性化を引き起こし、大量のカテコラミン放出が心筋に直接的なダメージを与え、気絶心筋（myocardial stunning）の状態を引き起こします。",
        page: 543
    },
    {
        question: "脳動脈瘤コイル塞栓術中に意図的低血圧を作成する際、冠動脈疾患を合併する患者で特に注意すべきことは何ですか？",
        options: ["拡張期血圧を維持し、冠灌流圧を保つこと", "収縮期血圧を80mmHg以下にすること", "心拍数を100回/分以上に保つこと"],
        answer: "拡張期血圧を維持し、冠灌流圧を保つこと",
        explanation: "冠動脈の灌流は主に拡張期に起こります。意図的低血圧の際に拡張期血圧が過度に低下すると、冠灌流不全から心筋虚血を誘発するリスクが非常に高くなります。",
        page: 543
    },
    {
        question: "座位での脳外科手術中に奇異性脳空気塞栓症のリスクが最も高くなるのはどのような状況ですか？",
        options: ["右房内圧が左房内圧より高い場合", "卵円孔開存(PFO)があり、右房内圧が左房内圧より高い場合", "動脈管開存がある場合"],
        answer: "卵円孔開存(PFO)があり、右房内圧が左房内圧より高い場合",
        explanation: "PFOが存在する患者で、静脈空気塞栓により右房圧が左房圧を上回ると、気泡が右心系から左心系へ直接流入し、脳や冠動脈の塞栓を引き起こす可能性があります。",
        page: 541
    },
    {
        question: "重症心疾患を合併した脳腫瘍患者の麻酔で、脳灌流圧(CPP)と冠灌流圧(CoPP)の双方を維持するために、どのような血圧管理が求められますか？",
        options: ["高い平均動脈圧と低い中心静脈圧", "低い平均動脈圧と高い心拍数", "適切な平均動脈圧と、低すぎない拡張期血圧の維持"],
        answer: "適切な平均動脈圧と、低すぎない拡張期血圧の維持",
        explanation: "CPP (MAP-ICP)とCoPP (DBP-LVEDP)を同時に維持するには、MAPを確保しつつ、拡張期血圧(DBP)が過度に低下しないように管理することが重要です。",
        page: 534
    },
    {
        question: "脳死判定後の臓器提供ドナー管理において、循環虚脱（交感神経嵐の後の血管拡張期）に対する第一選択の昇圧薬は何ですか？",
        options: ["ドブタミン", "バソプレシン", "アドレナリン"],
        answer: "バソプレシン",
        explanation: "脳死により下垂体からのバソプレシン分泌が停止し、血管拡張性ショックを呈します。そのため、バソプレシンの補充が理にかなった第一選択の治療となります。",
        page: 532
    },
    {
        question: "頸動脈ステント留置術(CAS)中にステントを拡張する際、しばしば見られる重篤な合併症は何ですか？",
        options: ["高血圧", "頸動脈洞反射による著明な徐脈や心停止", "気管支攣縮"],
        answer: "頸動脈洞反射による著明な徐脈や心停止",
        explanation: "ステント拡張による頸動脈洞への機械的刺激は、重篤な迷走神経反射を引き起こし、高度な徐脈や心停止に至ることがあります。一時的ペーシングの準備が必要です。",
        page: 544
    },
    {
        question: "脳動脈瘤手術でアデノシンを用いて一時的心停止を行う際、最も注意すべき副作用は何ですか？",
        options: ["高血圧", "気管支攣縮", "遷延する心静止や房室ブロック"],
        answer: "遷延する心静止や房室ブロック",
        explanation: "アデノシンは房室結節伝導を強力に抑制します。半減期は非常に短いですが、時に遷延性の徐脈やブロックが起こる可能性があり、体外式ペーシングの準備が必要です。",
        page: 543
    },
    {
        question: "重度の虚血性心疾患を持つ患者の脳外科手術で、揮発性麻酔薬が持つとされる心筋保護効果（プレコンディショニング）と、脳血管拡張作用のバランスをどう考えますか？",
        options: ["心筋保護効果が優先されるため、高濃度で使用する", "脳血管拡張作用によるICP上昇のリスクがあるため、使用は禁忌である", "低濃度(0.5 MAC程度)で使用し、静脈麻酔薬と併用することで両者の利点を生かす"],
        answer: "低濃度(0.5 MAC程度)で使用し、静脈麻酔薬と併用することで両者の利点を生かす",
        explanation: "低濃度の揮発性麻酔薬は心筋保護効果を発揮しつつ、ICPへの影響を最小限にできます。プロポフォールなどと組み合わせることで、脳と心臓の両方に対してバランスの取れた管理が可能です。",
        page: 536
    },
    {
        question: "脳神経外科手術中に心電図で急激なST上昇が見られた場合、心筋虚血以外に鑑別すべきことは何ですか？",
        options: ["電解質異常", "静脈空気塞栓による右室ストレインや冠動脈空気塞栓", "麻酔深度が浅いこと"],
        answer: "静脈空気塞栓による右室ストレインや冠動脈空気塞栓",
        explanation: "特に座位手術では、VAEによる右心系の急激な圧負荷や、奇異性塞栓による冠動脈閉塞が心筋虚血様のST変化を引き起こす可能性があります。",
        page: 541
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

    window.location.href = 'c30_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
