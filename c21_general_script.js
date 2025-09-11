const quizData = [
    {
        question: "高周波プローブと低周波プローブの特性に関する記述で正しいものはどれですか？",
        options: ["高周波プローブは深部描出に優れるが、分解能は低い", "低周波プローブは分解能が高いが、深部描出能は低い", "高周波プローブは分解能が高いが、深部描出能は低い"],
        answer: "高周波プローブは分解能が高いが、深部描出能は低い",
        explanation: "周波数が高いほど波長は短くなり分解能は向上しますが、組織での減衰が大きくなるため深達度は低下します。",
        page: 384
    },
    {
        question: "心尖部四腔像(A4C)を描出する際に「foreshortening」を避けるために最も重要なことは何ですか？",
        options: ["プローブをできるだけ左心尖部に近づけて配置する", "患者を完全な仰臥位にする", "超音波の深度を浅く設定する"],
        answer: "プローブをできるだけ左心尖部に近づけて配置する",
        explanation: "Foreshorteningはビームが真の心尖を通過しない場合に起こります。心尖拍動部を触知し、そこにプローブを置くことがこれを避ける鍵です。",
        page: 387
    },
    {
        question: "胸骨傍短軸像(PSAX)で左室が「D-shape」を呈している場合、どのような病態が示唆されますか？",
        options: ["左室の圧負荷", "右室の圧または容量負荷", "心タンポナーデ"],
        answer: "右室の圧または容量負荷",
        explanation: "右室の圧や容量が増加すると、心室中隔が左室側に圧排され、左室がD型に変形します。肺塞栓症などが原因となり得ます。",
        page: 387
    },
    {
        question: "下大静脈(IVC)径の呼吸性変動を評価して循環血液量を評価する際、心タンポナーデの患者ではどのような所見が見られますか？",
        options: ["IVCは虚脱し、呼吸性変動が大きい", "IVCは拡張し、呼吸性変動が乏しい", "IVC径は正常である"],
        answer: "IVCは拡張し、呼吸性変動が乏しい",
        explanation: "心タンポナーデでは心室の拡張が障害され右房圧が上昇するため、IVCは拡張し呼吸性変動が消失しますが、患者は前負荷依存の状態です。",
        page: 389
    },
    {
        question: "肺超音波検査で胸水を描出する際に認められる、横隔膜より頭側にも椎体が見える所見を何と呼びますか？",
        options: ["シュレッダーサイン", "スパインサイン (spine sign)", "シーショアサイン"],
        answer: "スパインサイン (spine sign)",
        explanation: "通常、肺はエアレーションがあるため椎体は横隔膜より頭側では見えません。胸水があると音響窓となり椎体が見えるようになります。",
        page: 393
    },
    {
        question: "動的気道閉塞（dynamic air bronchogram）が超音波で認められた場合、それは何を示唆する特異的な所見ですか？",
        options: ["無気肺", "肺炎", "肺水腫"],
        answer: "肺炎",
        explanation: "硬化した肺の中の気管支に空気が呼吸性に動いて見える所見で、肺炎に特異性が高いとされています。無気肺では静的な気道閉塞像となります。",
        page: 393
    },
    {
        question: "胃超音波検査で固形物を摂取した直後に見られる、胃前庭部の後壁が不明瞭になる所見を何と呼びますか？",
        options: ["ブルズアイサイン (bull's eye sign)", "スターリーナイトアピアランス (starry night appearance)", "フロストガラスアピアランス (frosted glass appearance)"],
        answer: "フロストガラスアピアランス (frosted glass appearance)",
        explanation: "固形物と一緒に嚥下された空気によって超音波ビームが散乱し、すりガラス様に見える所見です。",
        page: 398
    },
    {
        question: "胃内容量(mL/kg)が1.5 mL/kg以上である場合、誤嚥リスクについてどのように評価されますか？",
        options: ["低リスクである", "ベースラインより高いリスクと関連する", "リスク評価には使用できない"],
        answer: "ベースラインより高いリスクと関連する",
        explanation: "絶食患者の正常な胃内容量は1.5 mL/kg未満とされています。これを超える場合は、胃排出遅延や非絶食状態を示唆し、誤嚥リスクが高いと判断されます。",
        page: 399
    },
    {
        question: "心尖部四腔像(A4C)で、正常な心臓の右室と左室の大きさの比率はどのくらいですか？",
        options: ["右室は左室とほぼ同じ大きさである", "右室は左室のおよそ3分の1の大きさである", "右室は左室のおよそ2倍の大きさである"],
        answer: "右室は左室のおよそ3分の1の大きさである",
        explanation: "正常な状態では、右心室は左心室よりも小さく、その大きさの比はおおよそ1:3です。また、心尖部を形成するのは左心室です。",
        page: 390
    },
    {
        question: "POCUSで左室収縮能を定性的に評価する際に確認すべき4つの項目に含まれないものはどれですか？",
        options: ["心室壁の肥厚", "僧帽弁前尖の動き", "大動脈弁の開放面積"],
        answer: "大動脈弁の開放面積",
        explanation: "PLAX像での左室機能評価では、①心室腔の変化、②心室壁の肥厚、③僧帽弁前尖の動き、④僧帽弁輪の動き、の4点を確認します。大動脈弁の評価はより高度な技術を要します。",
        page: 389
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

    window.location.href = 'c21_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
