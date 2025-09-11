const quizData = [
    {
        question: "冠動脈ステント（DES）留置後6ヶ月以内に非心臓手術が必要となった患者の周術期抗血小板療法について、最も適切な方針はどれですか？",
        options: ["全て中止する", "アスピリンのみ継続する", "可能であれば二剤抗血小板療法(DAPT)を継続する"],
        answer: "可能であれば二剤抗血小板療法(DAPT)を継続する",
        explanation: "DES留置後早期はステント血栓症のリスクが非常に高いため、出血リスクが許容できる限りDAPTを継続することが推奨されます。",
        page: 462
    },
    {
        question: "重症僧帽弁狭窄症(MS)で肺高血圧を合併している患者において、一酸化窒素(NO)吸入療法が有効な理由は何ですか？",
        options: ["全身血管抵抗を低下させるため", "選択的に肺血管抵抗(PVR)を低下させ、右室後負荷を軽減するため", "心収縮力を増強するため"],
        answer: "選択的に肺血管抵抗(PVR)を低下させ、右室後負荷を軽減するため",
        explanation: "吸入NOは肺血管を選択的に拡張させることでPVRを低下させ、右室の後負荷を軽減し、右心不全の悪化を防ぎます。",
        page: 464
    },
    {
        question: "急性大動脈弁閉鎖不全症(AR)の麻酔管理で、ニカルジピンのような血管拡張薬が有用な理由は何ですか？",
        options: ["心拍数を増加させるため", "後負荷を軽減し、逆流量を減らして順行性血流を増加させるため", "冠血流量を増加させるため"],
        answer: "後負荷を軽減し、逆流量を減らして順行性血流を増加させるため",
        explanation: "急性ARでは左室が代償できていないため、後負荷の急激な軽減が逆流量を減らし、有効な心拍出量を維持するために極めて重要です。",
        page: 466
    },
    {
        question: "圧較差が40mmHg、弁口面積が1.0cm2の重症大動脈弁狭窄症(AS)患者が、敗血症性ショックを合併した場合、血行動態はどうなりますか？",
        options: ["圧較差はさらに増大する", "後負荷が低下するため、圧較差は減少し、重症度を過小評価する危険がある", "血行動態に変化はない"],
        answer: "後負荷が低下するため、圧較差は減少し、重症度を過小評価する危険がある",
        explanation: "敗血症による血管拡張で後負荷が低下すると、左室と大動脈の圧較差は小さくなります。これはASが改善したのではなく、低心拍出量状態（low-flow, low-gradient）に陥っている可能性を示唆します。",
        page: 465
    },
    {
        question: "心不全で左室駆出率が保たれている（HFpEF）患者の麻酔管理で、特に注意すべき点は何ですか？",
        options: ["左室の拡張機能障害があり、輸液過負荷や頻脈に弱い", "左室の収縮機能が低下している", "後負荷の増加に非常に弱い"],
        answer: "左室の拡張機能障害があり、輸液過負荷や頻脈に弱い",
        explanation: "HFpEFの本体は左室の弛緩障害です。心室が硬いため、少しの容量負荷で充満圧が急上昇し肺水腫をきたしやすく、また頻脈による拡張期短縮で充満がさらに障害されます。",
        page: 469
    },
    {
        question: "心臓再同期療法(CRT)デバイスが植え込まれている患者の術中管理で、ペーシングモードを非同期（DOOなど）に変更することがあるのはなぜですか？",
        options: ["電池の消耗を防ぐため", "電気メスのノイズによる不適切なペーシング抑制や同期不全を防ぐため", "心機能評価のため"],
        answer: "電気メスのノイズによる不適切なペーシング抑制や同期不全を防ぐため",
        explanation: "CRTの効果は適切な同期ペーシングに依存します。EMIはセンシングを妨害し、不適切なペーシングやペーシング不全を招く可能性があるため、非同期モードへの変更が考慮されます。",
        page: 466
    },
    {
        question: "プロタミンによるアナフィラキシー反応（Type II反応）のリスクが高い患者背景はどれですか？",
        options: ["魚アレルギー", "NPHインスリンの使用歴", "卵アレルギー"],
        answer: "NPHインスリンの使用歴",
        explanation: "NPHインスリンにはプロタミンが含まれているため、過去の使用歴がある患者は感作されており、プロタミンに対するアナフィラキシーのリスクが高まります。",
        page: 474
    },
    {
        question: "大動脈解離の手術で、降圧療法の目標として、収縮期血圧と心拍数をどのレベルにコントロールすることが推奨されますか？",
        options: ["収縮期血圧 140mmHg以上、心拍数 80回/分以上", "収縮期血圧 100-120mmHg、心拍数 60回/分未満", "収縮期血圧は問わないが、心拍数を50回/分未満にする"],
        answer: "収縮期血圧 100-120mmHg、心拍数 60回/分未満",
        explanation: "解離の進展を防ぐため、左室駆出のずり応力（dP/dt）を低下させることが重要です。そのためには、厳格な血圧コントロールと、β遮断薬による心拍数の低下が目標となります。",
        page: 471
    },
    {
        question: "心肺バイパス（CPB）離脱後に、カテコラミンに反応しない低血圧（vasoplegic syndrome）を呈した場合、第一選択として考慮すべき昇圧薬は何ですか？",
        options: ["アドレナリン", "バソプレシン", "ドブタミン"],
        answer: "バソプレシン",
        explanation: "Vasoplegic syndromeは、血管内皮のNO産生亢進などが関与し、カテコラミンへの反応性が低下しています。バソプレシンは異なる機序（V1受容体刺激）で血管を収縮させるため、しばしば有効です。",
        page: 474
    },
    {
        question: "心電図のV5誘導が左室側壁の虚血検出に優れている理由は何ですか？",
        options: ["右冠動脈の支配領域を反映するため", "左室の前壁から側壁にかけての広範囲な領域の電位を反映するため", "下壁の電位を最もよく反映するため"],
        answer: "左室の前壁から側壁にかけての広範囲な領域の電位を反映するため",
        explanation: "V5誘導は、左前下行枝や回旋枝の支配領域である左室の広範な領域をカバーするため、心筋虚血の検出感度が高い誘導とされています。",
        page: 462
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

    window.location.href = 'c26_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
