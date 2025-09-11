const quizData = [
    {
        question: "重症大動脈弁狭窄症(AS)患者に対する脊髄くも膜下麻酔で、最も懸念される血行動態の変動は何ですか？",
        options: ["急激な心拍数の増加", "全身血管抵抗(SVR)の急激な低下", "肺血管抵抗(PVR)の上昇"],
        answer: "全身血管抵抗(SVR)の急激な低下",
        explanation: "重症AS患者は固定心拍出量であり、SVRの急激な低下は代償できず、重篤な低血圧と冠灌流圧低下をきたす危険があります。",
        page: "N/A"
    },
    {
        question: "肥大型閉塞性心筋症(HOCM)患者において、硬膜外麻酔による交感神経遮断が左室流出路閉塞を増悪させる機序は何ですか？",
        options: ["前負荷の増加と後負荷の増加", "前負荷の減少と後負荷の減少", "心収縮力の低下"],
        answer: "前負荷の減少と後負荷の減少",
        explanation: "前負荷の減少（心室内容量の減少）と後負荷の減少（SVR低下）は、いずれも左室流出路の圧較差を増大させ、閉塞を悪化させます。",
        page: "N/A"
    },
    {
        question: "胸部傍脊椎ブロック(TPVB)が心臓手術の術後鎮痛に有用とされる理由は何ですか？",
        options: ["交感神経を遮断し、冠血管を拡張させるため", "片側の胸壁の知覚神経を広範囲に遮断し、オピオイド使用量を減らせるため", "呼吸機能への影響が全くないため"],
        answer: "片側の胸壁の知覚神経を広範囲に遮断し、オピオイド使用量を減らせるため",
        explanation: "TPVBは片側の複数の肋間神経と交感神経をブロックし、優れた鎮痛効果を提供します。これによりオピオイドの使用量が減り、早期抜管や呼吸器合併症の減少に繋がります。",
        page: "N/A"
    },
    {
        question: "心機能が低下した患者への区域麻酔で、フェニレフリンとエフェドリンの使い分けについて、より適切なのはどちらですか？",
        options: ["徐脈を伴う低血圧にはエフェドリン", "頻脈を伴う低血圧にはフェニレフリン", "どちらも同じように使用できる"],
        answer: "徐脈を伴う低血圧にはエフェドリン",
        explanation: "エフェドリンはβ作用により心拍数と心収縮力を増加させます。フェニレフリンは純粋なα作用薬で血管収縮作用のみで、反射性徐脈をきたす可能性があります。",
        page: "N/A"
    },
    {
        question: "抗血小板薬2剤併用療法(DAPT)中の患者に対する神経軸麻酔（脊髄くも膜下・硬膜外）の実施は、現在のガイドラインでどのように推奨されていますか？",
        options: ["禁忌である", "アスピリンを中止すれば実施可能", "プラスグレルをクロピドグレルに変更すれば実施可能"],
        answer: "禁忌である",
        explanation: "DAPT中の患者に対する神経軸麻酔は、脊髄硬膜外血腫のリスクが非常に高いため、原則禁忌とされています。",
        page: "N/A"
    },
    {
        question: "心臓移植後の患者に硬膜外麻酔を行う際の注意点として正しいものはどれですか？",
        options: ["除神経心であるため、テストドーズのアドレナリンによる頻脈は起こらない", "除神経心であるため、局所麻酔薬の心毒性は起こらない", "免疫抑制剤との相互作用はない"],
        answer: "除神経心であるため、テストドーズのアドレナリンによる頻脈は起こらない",
        explanation: "移植心は迷走神経支配を失っているため、アドレナリンの血管内投与による典型的な頻脈反応は期待できません。直接作用による血圧上昇などを観察する必要があります。",
        page: "N/A"
    },
    {
        question: "局所麻酔薬の心毒性が最も強いとされるのはどの薬物ですか？",
        options: ["リドカイン", "ブピバカイン", "メピバカイン"],
        answer: "ブピバカイン",
        explanation: "ブピバカインは脂溶性が高く、心筋のナトリウムチャネルへの親和性が強いため、他の局所麻酔薬に比べて心毒性が高いことで知られています。",
        page: "N/A"
    },
    {
        question: "Fontan手術後の患者に区域麻酔を行う際、特に注意すべき血行動態のパラメータは何ですか？",
        options: ["体血管抵抗(SVR)", "肺血管抵抗(PVR)", "左室収縮能"],
        answer: "肺血管抵抗(PVR)",
        explanation: "Fontan循環では、肺血流は心室の駆出によらず、中心静脈圧に依存します。PVRの上昇は肺血流を著しく妨げ、循環破綻につながるため、厳密な管理が必要です。",
        page: "N/A"
    },
    {
        question: "ワーファリン内服中の患者で、硬膜外カテーテルを抜去する際に推奨されるPT-INRの値はどれくらいですか？",
        options: ["2.0未満", "1.8未満", "1.5未満"],
        answer: "1.5未満",
        explanation: "多くのガイドラインでは、硬膜外カテーテルの抜去時の安全なPT-INRの閾値を1.5未満としています。",
        page: "N/A"
    },
    {
        question: "区域麻酔と全身麻酔の併用が、心臓手術において単独の全身麻酔より優れているとされる点は何ですか？",
        options: ["手術時間を短縮できる", "ストレス反応を抑制し、術後合併症を減少させる可能性がある", "術中の輸液量を減らせる"],
        answer: "ストレス反応を抑制し、術後合併症を減少させる可能性がある",
        explanation: "区域麻酔の併用は、手術侵襲によるストレス反応（カテコラミン放出など）を抑制し、術後の不整脈や心筋虚血、鎮痛改善などの利点が報告されています。",
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

    window.location.href = 'c17_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
