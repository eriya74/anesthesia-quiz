const quizData = [
    {
        question: "ASAの気道確保困難アルゴリズムにおいて、「換気も挿管もできない(Cannot Intubate, Cannot Ventilate: CICV)」状況で推奨される最終的な気道確保手技は何ですか？",
        options: ["声門上器具の挿入", "気管支ファイバーによる挿管", "緊急輪状甲状膜切開"],
        answer: "緊急輪状甲状膜切開",
        explanation: "CICVは生命を脅かす緊急事態であり、他の全ての気道確保手段が失敗した場合、輪状甲状膜切開による外科的気道確保が最終手段となります。",
        page: "N/A"
    },
    {
        question: "覚醒下気管挿管(Awake Fiberoptic Intubation)の最も重要な適応は何ですか？",
        options: ["飽食胃の患者", "重篤な心疾患を持つ患者", "麻酔導入後に気道確保が極めて困難と予測される患者"],
        answer: "麻酔導入後に気道確保が極めて困難と予測される患者",
        explanation: "意識を保ったまま気道を確保することで、麻酔導入後の無換気状態を回避できます。解剖学的な異常や頸部可動域制限が著しい症例などが適応です。",
        page: "N/A"
    },
    {
        question: "気管チューブ交換器（エアウェイスワップカテーテル）を使用する際の最も注意すべき合併症は何ですか？",
        options: ["気胸・気縦隔", "声帯損傷", "食道内挿管"],
        answer: "気胸・気縦隔",
        explanation: "先端が硬いため、無理な操作は気管・気管支損傷を引き起こし、気胸や気縦隔などの重篤な合併症につながる危険があります。",
        page: "N/A"
    },
    {
        question: "逆行性気管挿管を行う際に、輪状甲状膜を穿刺してガイドワイヤーを挿入する方向はどちらですか？",
        options: ["尾側（気管方向）", "頭側（咽頭方向）", "食道方向"],
        answer: "頭側（咽頭方向）",
        explanation: "輪状甲状膜から頭側に向けてガイドワイヤーを進め、口腔または鼻腔からワイヤーを誘導し、それに沿って気管チューブを挿入します。",
        page: "N/A"
    },
    {
        question: "小児の気道における解剖学的特徴として、成人と異なる点はどれですか？",
        options: ["喉頭の位置が成人に比べて低い", "喉頭が漏斗状で、最も狭い部位が輪状軟骨レベルである", "舌が相対的に小さい"],
        answer: "喉頭が漏斗状で、最も狭い部位が輪状軟骨レベルである",
        explanation: "小児の喉頭は成人の円筒状と異なり漏斗状で、声門レベルではなく輪状軟骨レベルが最も狭いため、カフなしチューブが使用されることがあります。",
        page: "N/A"
    },
    {
        question: "気管支ファイバースコープを用いた挿管で、視野が赤くなる「レッドアウト」の原因として最も考えられることは何ですか？",
        options: ["スコープの先端が気管壁に接触している", "スコープの光源が弱い", "患者が咳き込んでいる"],
        answer: "スコープの先端が気管壁に接触している",
        explanation: "レッドアウトは、スコープ先端が粘膜に密着し、光が反射して視野が赤一色になる現象です。少しスコープを引くことで視野が回復します。",
        page: "N/A"
    },
    {
        question: "声門上器具(SGA)使用中の換気で、カプノグラムの波形が徐々に小さくなり、最終的に消失した場合、まず何を疑いますか？",
        options: ["SGAの位置異常または閉塞", "悪性高熱症", "肺塞栓症"],
        answer: "SGAの位置異常または閉塞",
        explanation: "SGA使用中の換気トラブルでは、まず器具の位置異常や捻れ、分泌物による閉塞などを疑い、再挿入や位置調整を試みる必要があります。",
        page: "N/A"
    },
    {
        question: "甲状頤間距離(TMD)が6cm未満の場合、何が予測されますか？",
        options: ["開口障害", "喉頭展開困難", "頸部伸展制限"],
        answer: "喉頭展開困難",
        explanation: "TMDは下顎のスペースを評価する指標で、6cm未満では喉頭展開時に舌を収納するスペースが不足し、喉頭展開が困難になる可能性が高いです。",
        page: "N/A"
    },
    {
        question: "分離肺換気のためのダブルルーメンチューブ(DLT)で、左用が一般的に使用される理由は何ですか？",
        options: ["左気管支の方が太いため", "右気管支は上葉枝の分岐が早く、気管支カフで閉塞するリスクがあるため", "左肺の方が大きいため"],
        answer: "右気管支は上葉枝の分岐が早く、気管支カフで閉塞するリスクがあるため",
        explanation: "右主気管支は短く、すぐに右上葉枝が分岐するため、右用DLTでは気管支カフによって右上葉の換気が妨げられるリスクが高くなります。",
        page: "N/A"
    },
    {
        question: "レーザー手術中の気道管理で、気管チューブの引火リスクを低減させるための対策として適切でないものはどれですか？",
        options: ["レーザー耐性チューブを使用する", "カフ内を生理食塩水で満たす", "酸素濃度を可能な限り高く維持する"],
        answer: "酸素濃度を可能な限り高く維持する",
        explanation: "酸素は支燃性ガスのため、引火リスクを低減するにはFIO2を可能な限り低く（理想的には30%未満に）維持することが重要です。",
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

    window.location.href = 'c18_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
