const quizData = [
    {
        question: "脳灌流圧(CPP)の計算式として正しいものはどれですか？",
        options: ["平均動脈圧(MAP) - 中心静脈圧(CVP)", "平均動脈圧(MAP) - 頭蓋内圧(ICP)", "平均動脈圧(MAP) - (ICPまたはCVPの高い方)"],
        answer: "平均動脈圧(MAP) - (ICPまたはCVPの高い方)",
        explanation: "CPPは脳への血流を駆動する圧較差であり、MAPから頭蓋内の抵抗圧（通常はICP）を引いて計算されます。CVPがICPより高い場合はCVPを用います。",
        page: 534
    },
    {
        question: "正常な脳血流自動調節能が機能している場合、血圧が変動しても脳血流(CBF)が一定に保たれるのはなぜですか？",
        options: ["脳血管が血圧変動に反応して血管径を能動的に変化させるため", "頭蓋内圧が代償性に変化するため", "心拍出量が一定に保たれるため"],
        answer: "脳血管が血圧変動に反応して血管径を能動的に変化させるため",
        explanation: "脳血流自動調節能とは、CPPの変動に対して脳血管が収縮または拡張することで、脳血流を一定に保つ生理的なメカニズムです。",
        page: 534
    },
    {
        question: "動脈血二酸化炭素分圧(PaCO2)が脳血流(CBF)に与える影響として正しいものはどれですか？",
        options: ["PaCO2が上昇するとCBFは減少する", "PaCO2が上昇するとCBFは増加する", "PaCO2はCBFに影響しない"],
        answer: "PaCO2が上昇するとCBFは増加する",
        explanation: "CO2は強力な脳血管拡張物質です。PaCO2が上昇すると脳血管が拡張し、CBFはPaCO2 1mmHgあたり約2%増加します。",
        page: 535
    },
    {
        question: "揮発性吸入麻酔薬が脳血流(CBF)と脳代謝率(CMRO2)に与える影響の組み合わせとして正しいものはどれですか？",
        options: ["CBF増加、CMRO2増加", "CBF減少、CMRO2減少", "CBF増加、CMRO2減少"],
        answer: "CBF増加、CMRO2減少",
        explanation: "揮発性麻酔薬は脳血管を直接拡張させてCBFを増加させる一方、脳の活動を抑制してCMRO2を減少させます。これをuncoupling（脱共役）と呼びます。",
        page: 536
    },
    {
        question: "頭蓋内圧(ICP)亢進の治療として、マンニトールを投与する主な目的は何ですか？",
        options: ["脳血管を収縮させるため", "血液脳関門を介した浸透圧勾配を作り、脳組織から水分を除去するため", "脳脊髄液の産生を抑制するため"],
        answer: "血液脳関門を介した浸透圧勾配を作り、脳組織から水分を除去するため",
        explanation: "マンニトールは浸透圧利尿薬であり、血漿浸透圧を上昇させることで脳組織の自由水を血管内に引き込み、脳浮腫を軽減させます。",
        page: 537
    },
    {
        question: "脳神経外科手術の座位で行う際に、最も感度が高い静脈空気塞栓症(VAE)のモニターは何ですか？",
        options: ["心電図", "経食道心エコー(TEE)", "呼気終末二酸化炭素濃度(ETCO2)"],
        answer: "経食道心エコー(TEE)",
        explanation: "TEEは心臓内の微小な気泡を直接画像で検出できるため、VAEに対して最も感度の高いモニターです。次いで経胸壁ドップラーが感度が高いとされています。",
        page: 541
    },
    {
        question: "脳動脈瘤クリッピング術の麻酔管理における最も重要な血圧管理の目標は何ですか？",
        options: ["常に低血圧を維持する", "動脈瘤の破裂を防ぐため、血圧の急激な上昇を避ける", "脳血流を増加させるため、高血圧を維持する"],
        answer: "動脈瘤の破裂を防ぐため、血圧の急激な上昇を避ける",
        explanation: "動脈瘤壁にかかる圧（経壁圧）の急上昇は、術中破裂の最大のリスクです。特に麻酔導入や手術操作時には厳密な血圧コントロールが求められます。",
        page: 543
    },
    {
        question: "頭蓋内圧(ICP)が亢進している患者の麻酔導入で、鎮静薬やオピオイドの投与に注意が必要な理由は何ですか？",
        options: ["薬剤が直接ICPを上昇させるため", "呼吸抑制による高炭酸ガス血症がICPを上昇させる可能性があるため", "アレルギー反応のリスクが高いため"],
        answer: "呼吸抑制による高炭酸ガス血症がICPを上昇させる可能性があるため",
        explanation: "鎮静薬やオピオイドによる呼吸抑制はPaCO2を上昇させ、脳血管拡張を介してICPをさらに悪化させる危険があります。",
        page: 538
    },
    {
        question: "脳外科手術後の患者の覚醒が遅延している場合、まず除外すべき原因は何ですか？",
        options: ["麻酔薬の残存効果", "術後頭蓋内出血や脳浮腫", "低体温"],
        answer: "術後頭蓋内出血や脳浮腫",
        explanation: "覚醒遅延や神経学的所見の悪化が見られた場合、まずは緊急CTなどで外科的な合併症を除外することが最優先です。",
        page: 541
    },
    {
        question: "頸動脈内膜剥離術(CEA)で頸動脈を遮断している間の脳保護を目的として、一般的に行われる血圧管理はどれですか？",
        options: ["意図的低血圧", "平常値よりやや高めの血圧を維持する", "血圧は変動させない"],
        answer: "平常値よりやや高めの血圧を維持する",
        explanation: "頸動脈遮断中はウィリス動脈輪を介した側副血行路に脳血流が依存します。この側副血行を確保するため、意図的に血圧を平常時より高めに維持することが推奨されます。",
        page: 544
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

    window.location.href = 'c30_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
