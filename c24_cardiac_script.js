const quizData = [
    {
        question: "敗血症性ショックにおける血管内皮グリコカリックス層の障害は、輸液管理にどのような影響を与えますか？",
        options: ["晶質液の血管内保持能力を高める", "アルブミンなどの膠質液が血管内に留まりにくくなり、間質性浮腫を増悪させる", "輸液反応性の評価を容易にする"],
        answer: "アルブミンなどの膠質液が血管内に留まりにくくなり、間質性浮腫を増悪させる",
        explanation: "敗血症ではグリコカリックスが破壊され血管透過性が亢進するため、アルブミンも血管外に漏出しやすくなり、膠質液投与の有効性が低下し、浮腫を助長する可能性があります。",
        page: 437
    },
    {
        question: "心機能が低下している患者において、急速な細胞外液の補充が心不全を増悪させる主な機序は何ですか？",
        options: ["後負荷の急激な上昇", "前負荷の急激な増加による肺うっ血", "心筋収縮力の低下"],
        answer: "前負荷の急激な増加による肺うっ血",
        explanation: "心機能が低下した心臓は、Frank-Starling曲線の平坦な部分で機能しており、前負荷の増加に対応して一回拍出量を増やすことができません。結果として肺うっ血が悪化します。",
        page: 442
    },
    {
        question: "右心不全患者の輸液管理において、中心静脈圧(CVP)を指標とすることの最も大きな問題点は何ですか？",
        options: ["CVPは左室前負荷を正確に反映しない", "CVPの上昇が必ずしも循環血液量増加を意味せず、右室の過負荷を示している可能性がある", "CVPの測定は侵襲的すぎる"],
        answer: "CVPの上昇が必ずしも循環血液量増加を意味せず、右室の過負荷を示している可能性がある",
        explanation: "右心不全では、右室コンプライアンスが低下しているため、少量の輸液でもCVPは大きく上昇します。これは右室の前負荷増加ではなく、むしろ右室の機能不全と過負荷を示唆します。",
        page: 441
    },
    {
        question: "大動脈弁狭窄症のような固定心拍出量の病態で、輸液管理において特に避けるべきことは何ですか？",
        options: ["前負荷の軽度な増加", "前負荷の急激な減少", "後負荷の維持"],
        answer: "前負荷の急激な減少",
        explanation: "固定心拍出量の患者は、心拍出量を増やすことで血圧を代償することができません。前負荷が急激に減少すると、致命的な低血圧に陥る危険があります。",
        page: 442
    },
    {
        question: "心臓手術後のGoal-Directed Fluid Therapy (GDFT)において、一回拍出量(SV)の最適化を目指す輸液戦略が、従来のCVPを指標とした管理より優れているとされる点は何ですか？",
        options: ["輸液量を常に少なくできる点", "フロー（流量）を直接の指標とすることで、組織への酸素供給をより効果的に改善できる点", "低侵襲である点"],
        answer: "フロー（流量）を直接の指標とすることで、組織への酸素供給をより効果的に改善できる点",
        explanation: "GDFTは、圧（CVP）ではなくフロー（SV）を指標とすることで、個々の患者の生理的反応に基づいた最適な循環管理を可能にし、臓器灌流を改善します。",
        page: 442
    },
    {
        question: "人工心肺離脱後の血管拡張性ショック（vasoplegia）に対する輸液管理の考え方として最も適切なものはどれですか？",
        options: ["大量の晶質液を投与して血管内ボリュームを増やす", "輸液反応性を評価しつつ、主に血管収縮薬で血圧を維持する", "膠質液のみを使用して膠質浸透圧を上昇させる"],
        answer: "輸液反応性を評価しつつ、主に血管収縮薬で血圧を維持する",
        explanation: "Vasoplegiaの本体は著しい血管拡張です。輸液のみでは血圧維持が困難で過剰輸液になりやすいため、輸液反応性を確認した上で、ノルアドレナリンやバソプレシンなどの血管収縮薬が治療の中心となります。",
        page: 442
    },
    {
        question: "3%高張食塩水を投与して頭蓋内圧を低下させる際、その効果が一時的である主な理由は何ですか？",
        options: ["ナトリウムがすぐに腎臓から排泄されるため", "時間とともにナトリウムが脳実質内に移行し、浸透圧勾配が消失するため", "代償性の脳脊髄液産生が増加するため"],
        answer: "時間とともにナトリウムが脳実質内に移行し、浸透圧勾配が消失するため",
        explanation: "血液脳関門が障害されている場合などでは、時間経過とともにナトリウムが脳内に移行し、浸透圧勾配が失われ、リバウンド現象として脳浮腫が悪化する可能性があります。",
        page: 440
    },
    {
        question: "心臓手術における「Restrictive」輸液戦略が、特に肺合併症のリスクを低減させる可能性があるのはなぜですか？",
        options: ["気道抵抗を低下させるから", "肺血管透過性を低下させるから", "肺間質への水分貯留を減らし、ガス交換障害を防ぐから"],
        answer: "肺間質への水分貯留を減らし、ガス交換障害を防ぐから",
        explanation: "過剰な輸液は肺血管静水圧を上昇させ、肺水腫を引き起こします。制限的輸液はこれを防ぎ、術後の呼吸機能や酸素化を良好に保つことに寄与する可能性があります。",
        page: 442
    },
    {
        question: "心不全患者において、5%アルブミン製剤と生理食塩水を比較した場合、同じ血管内ボリューム効果を得るために必要な投与量はどうなりますか？",
        options: ["アルブミンの方が少量で済む", "生理食塩水の方が少量で済む", "ほぼ同量である"],
        answer: "アルブミンの方が少量で済む",
        explanation: "アルブミンは膠質液であり、晶質液である生理食塩水よりも血管内に留まりやすいため、同じ血管内増量効果を得るためには、より少ない投与量で済みます。",
        page: 440
    },
    {
        question: "重症患者における晶質液と膠質液の選択に関する大規模臨床試験（CHEST studyなど）から得られた主な結論は何ですか？",
        options: ["膠質液（HES）は晶質液より死亡率を有意に低下させた", "膠質液（HES）は晶質液と比較して、死亡率に差はなかったが、腎代替療法の必要性を増加させた", "晶質液は膠質液より合併症が少なかった"],
        answer: "膠質液（HES）は晶質液と比較して、死亡率に差はなかったが、腎代替療法の必要性を増加させた",
        explanation: "CHEST試験や6S試験などの大規模RCTでは、HES製剤は晶質液と比較して死亡率を改善せず、むしろ急性腎障害や腎代替療法のリスクを増加させることが示されました。",
        page: 441
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

    window.location.href = 'c24_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
