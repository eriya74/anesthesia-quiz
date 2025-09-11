const quizData = [
    {
        question: "局所麻酔薬の作用機序として最も正確なものはどれですか？",
        options: ["電位依存性カリウムチャネルの遮断", "電位依存性ナトリウムチャネルの遮断", "神経終末からのアセチルコリン放出抑制"],
        answer: "電位依存性ナトリウムチャネルの遮断",
        explanation: "局所麻酔薬は神経細胞膜の電位依存性ナトリウムチャネルを可逆的に遮断し、活動電位の発生と伝導を抑制することで効果を発揮します。",
        page: "N/A"
    },
    {
        question: "局所麻酔薬のpKaと作用発現時間の関係について正しい記述はどれですか？",
        options: ["pKaが高いほど作用発現が速い", "pKaが低いほど作用発現が速い", "pKaは作用発現時間と関係ない"],
        answer: "pKaが低いほど作用発現が速い",
        explanation: "pKaが低い薬物ほど、生理的pHで非イオン型（脂溶性）の割合が高くなり、神経細胞膜を透過しやすくなるため、作用発現が速くなります。",
        page: "N/A"
    },
    {
        question: "局所麻酔薬の全身毒性(LAST)の治療において、第一選択とされる薬物はどれですか？",
        options: ["プロポフォール", "20%脂肪乳剤", "アドレナリン"],
        answer: "20%脂肪乳剤",
        explanation: "LAST、特に心毒性が発現した場合には、20%脂肪乳剤の静脈内投与が第一選択の治療となります。「リピッド・レスキュー」として知られています。",
        page: "N/A"
    },
    {
        question: "脊髄くも膜下麻酔における局所麻酔薬の広がり（麻酔高）に最も影響を与える因子はどれですか？",
        options: ["薬液の比重と患者の体位", "薬液の注入速度", "薬液の温度"],
        answer: "薬液の比重と患者の体位",
        explanation: "脳脊髄液に対する薬液の比重（高比重、等比重、低比重）と、注入後の患者の体位が、麻酔高を決定する最も重要な要因です。",
        page: "N/A"
    },
    {
        question: "硬膜外腔にカテーテルを留置する際、生理食塩水を用いた抵抗消失法(LOR)で偽の抵抗消失が起こる原因として考えられるものはどれですか？",
        options: ["黄色靱帯が非常に厚い", "傍正中アプローチでの穿刺", "硬膜外腔の脂肪組織が多い"],
        answer: "硬膜外腔の脂肪組織が多い",
        explanation: "硬膜外腔の脂肪組織が多い場合や、筋肉内などに針先がある場合に、偽の抵抗消失を感じることがあります。",
        page: "N/A"
    },
    {
        question: "大腿神経ブロックで遮断される神経とその支配領域の組み合わせで正しいものはどれですか？",
        options: ["大腿神経 - 大腿前面と下腿内側の知覚", "坐骨神経 - 大腿後面の知覚", "閉鎖神経 - 下腿外側の知覚"],
        answer: "大腿神経 - 大腿前面と下腿内側の知覚",
        explanation: "大腿神経は大腿四頭筋の運動と、大腿前面および伏在神経を介して下腿内側の知覚を支配します。",
        page: "N/A"
    },
    {
        question: "超音波ガイド下神経ブロックにおいて、'in-plane'アプローチとはどのような手技ですか？",
        options: ["超音波ビームと穿刺針を直交させる", "超音波ビームと穿刺針を平行にし、針全体を描出する", "神経の短軸像を描出する"],
        answer: "超音波ビームと穿刺針を平行にし、針全体を描出する",
        explanation: "In-planeアプローチでは、プローブの長軸方向に針を穿刺し、針の先端からシャフトまで全体を描出するため、安全性が高いとされています。",
        page: "N/A"
    },
    {
        question: "抗凝固薬を内服中の患者に区域麻酔を行う際、最もリスクが高いとされる手技はどれですか？",
        options: ["末梢神経ブロック", "脊髄くも膜下麻酔", "硬膜外カテーテル留置・抜去"],
        answer: "硬膜外カテーテル留置・抜去",
        explanation: "硬膜外腔は血管が豊富であり、カテーテル留置・抜去は出血のリスクが最も高く、脊髄硬膜外血腫の危険性が懸念されます。",
        page: "N/A"
    },
    {
        question: "区域麻酔後のTNS (一過性神経症状) の特徴として正しいものはどれですか？",
        options: ["永続的な神経障害である", "主に腕神経叢ブロック後に見られる", "臀部や下肢への放散痛が特徴で、通常は数日以内に自然軽快する"],
        answer: "臀部や下肢への放散痛が特徴で、通常は数日以内に自然軽快する",
        explanation: "TNSは主に脊髄くも膜下麻酔後に見られ、感覚異常や運動麻痺を伴わない放散痛が特徴です。予後は良好で、後遺症を残すことは稀です。",
        page: "N/A"
    },
    {
        question: "TAP (腹横筋膜面) ブロックで目標とされる局所麻酔薬の注入層はどこですか？",
        options: ["外腹斜筋と内腹斜筋の間", "内腹斜筋と腹横筋の間", "腹横筋と腹膜の間"],
        answer: "内腹斜筋と腹横筋の間",
        explanation: "TAPブロックは、内腹斜筋と腹横筋の間の筋膜面（腹横筋膜面）に局所麻酔薬を投与し、そこを走行する胸腹神経をブロックする手技です。",
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

    window.location.href = 'c17_general_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
