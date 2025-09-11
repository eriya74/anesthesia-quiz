const quizData = [
    {
        question: "肺高血圧を伴う重症COPD患者の麻酔管理において、バソプレシンが昇圧薬として有用な場合があるのはなぜですか？",
        options: ["強力な心収縮作用があるため", "肺血管抵抗(PVR)に影響を与えずに全身血管抵抗(SVR)を選択的に上昇させるため", "気管支拡張作用を併せ持つため"],
        answer: "肺血管抵抗(PVR)に影響を与えずに全身血管抵抗(SVR)を選択的に上昇させるため",
        explanation: "バソプレシンは、他の多くのカテコラミンと異なり、PVRを上昇させることなくSVRを上昇させることができます。これにより、右室後負荷を増やすことなく体血圧を維持できます。",
        page: 484
    },
    {
        question: "肺切除術、特に肺摘除術後の輸液管理を慎重に行うべき最も重要な理由は何ですか？",
        options: ["術後出血のリスクが高いから", "残存した肺循環の血管床が減少し、輸液過負荷による肺水腫のリスクが非常に高いから", "腎機能が悪化しやすいため"],
        answer: "残存した肺循環の血管床が減少し、輸液過負荷による肺水腫のリスクが非常に高いから",
        explanation: "肺切除後は、全心拍出量が残存肺の血管床を通過するため、過剰な輸液は肺血管静水圧を容易に上昇させ、致死的な肺水腫を引き起こすリスクがあります。",
        page: 493
    },
    {
        question: "左側臥位での片肺換気中、心拍出量が低下するとシャント率はどうなる傾向がありますか？",
        options: ["増加する", "減少する", "変化しない"],
        answer: "増加する",
        explanation: "心拍出量が低下すると、混合静脈血酸素飽和度が低下します。同じシャント血流量でも、より低酸素の血液が動脈血に混入するため、結果としてPaO2は低下し、計算上のシャント率は増加します。",
        page: 490
    },
    {
        question: "右用ダブルルーメンチューブ(DLT)の右上葉気管支換気孔が、気管支鏡で適切な位置にあることを確認する際の最も重要なランドマークは何ですか？",
        options: ["気管分岐部（カリーナ）", "右上葉気管支の3つの枝が見えること", "気管膜様部"],
        answer: "右上葉気管支の3つの枝が見えること",
        explanation: "右用DLTを正しく留置するには、気管支鏡を換気孔から覗き、右上葉気管支の3つの分枝（前枝、後枝、尖枝）がすべて開存していることを確認することが不可欠です。",
        page: 489
    },
    {
        question: "胸部食道癌手術で、片肺換気と縦隔操作が心機能に与える影響として最も懸念されることは何ですか？",
        options: ["左室前負荷の増加", "右室後負荷の増大と外科的操作による心臓圧迫", "冠動脈攣縮"],
        answer: "右室後負荷の増大と外科的操作による心臓圧迫",
        explanation: "片肺換気による低酸素性肺血管攣縮は右室後負荷を増大させます。それに加え、縦隔操作による直接的な心臓圧迫や静脈還流の妨げが、急激な血行動態破綻を引き起こす可能性があります。",
        page: 485
    },
    {
        question: "肺移植手術において、移植肺の再灌流後に生じる急性の循環不全（再灌流障害）の主な原因は何ですか？",
        options: ["左心不全", "炎症性メディエーターの放出と急激な右心不全", "出血性ショック"],
        answer: "炎症性メディエーターの放出と急激な右心不全",
        explanation: "保存されていた肺から炎症性サイトカインが全身に放出され、肺血管抵抗が急上昇し、右心室に急激な圧負荷がかかることが主な原因です。",
        page: 485
    },
    {
        question: "胸部大動脈瘤による気管圧迫がある患者の分離肺換気で、気管支ブロッカーがDLTより好まれることがあるのはなぜですか？",
        options: ["ブロッカーの方が安価だから", "DLTの硬いチューブが、圧迫され脆弱になった気管壁を損傷するリスクを回避するため", "ブロッカーの方が肺の虚脱が速いため"],
        answer: "DLTの硬いチューブが、圧迫され脆弱になった気管壁を損傷するリスクを回避するため",
        explanation: "DLTは太く硬いため、気管が外部から圧迫されている症例では、挿入時に気管損傷や穿孔を引き起こすリスクがあります。より柔軟な気管支ブロッカーが安全な選択肢となることがあります。",
        page: 487
    },
    {
        question: "心臓手術後の胸骨正中切開創感染による縦隔炎で、縦隔洗浄ドレナージ術を行う際の麻酔管理上の最大の懸念事項は何ですか？",
        options: ["術後疼痛", "敗血症性ショックとそれに伴う循環虚脱", "気道確保困難"],
        answer: "敗血症性ショックとそれに伴う循環虚脱",
        explanation: "縦隔炎は重篤な感染症であり、しばしば敗血症性ショックを伴います。麻酔導入や外科的操作による血行動態の急激な悪化に備える必要があります。",
        page: 495
    },
    {
        question: "肺動静脈瘻を持つ患者に、中心静脈カテーテルを留置する際に特に注意すべき合併症は何ですか？",
        options: ["気胸", "奇異性脳塞栓", "カテーテル関連血流感染症"],
        answer: "奇異性脳塞栓",
        explanation: "肺動静脈瘻があると、静脈系に混入した空気や血栓が肺毛細血管床をバイパスして直接動脈系に流入し、脳梗塞などの奇異性塞栓を引き起こすリスクが非常に高いです。",
        page: 477
    },
    {
        question: "胸部外科手術後の心房細動の発生リスクを増加させる因子として、最も関連が強いものはどれですか？",
        options: ["手術時間", "肺切除の範囲（特に肺葉切除以上）", "麻酔方法（吸入麻酔か静脈麻酔か）"],
        answer: "肺切除の範囲（特に肺葉切除以上）",
        explanation: "肺切除の範囲が広いほど、炎症反応や交感神経系の活性化が強く、心房への機械的刺激も大きくなるため、術後心房細動のリスクが高まります。",
        page: 486
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

    window.location.href = 'c27_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
