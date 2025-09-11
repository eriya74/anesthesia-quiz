const quizData = [
    {
        question: "血液型がO型の患者（レシピエント）に輸血可能な赤血球製剤の血液型は何ですか？",
        options: ["A型", "B型", "O型"],
        answer: "O型",
        explanation: "O型の患者は血漿中に抗A抗体と抗B抗体を持つため、A抗原もB抗原も持たないO型の赤血球しか輸血できません。",
        page: 446
    },
    {
        question: "緊急時に患者の血液型が不明な場合に使用される「ユニバーサルドナー」の赤血球製剤の血液型は何ですか？",
        options: ["O型Rh陽性", "O型Rh陰性", "AB型Rh陰性"],
        answer: "O型Rh陰性",
        explanation: "O型Rh陰性の赤血球は、主要な抗原（A, B, Rh）を持たないため、どの血液型の患者にも比較的安全に輸血できます。",
        page: 447
    },
    {
        question: "濃厚赤血球(PRBCs)の標準的な保存可能期間は、保存液にもよりますが最大で何日間ですか？",
        options: ["21日間", "35日間", "42日間"],
        answer: "42日間",
        explanation: "リン酸、ブドウ糖、アデニンなどを含む保存液を使用することで、赤血球は最大42日間保存可能です。",
        page: 448
    },
    {
        question: "新鮮凍結血漿(FFP)の主な適応は何ですか？",
        options: ["貧血の治療", "複数の凝固因子欠乏による出血", "血小板減少症の治療"],
        answer: "複数の凝固因子欠乏による出血",
        explanation: "FFPは血小板を除く全ての凝固因子を含んでいるため、PTやaPTTが基準値の1.5倍以上に延長した出血患者などが主な適応となります。",
        page: 449
    },
    {
        question: "クリオプレシピテートに豊富に含まれ、フォン・ヴィレブランド病や低フィブリノゲン血症の治療に用いられる成分は何ですか？",
        options: ["アルブミンとグロブリン", "第V因子と第XI因子", "第VIII因子、フィブリノゲン、vWF、第XIII因子"],
        answer: "第VIII因子、フィブリノゲン、vWF、第XIII因子",
        explanation: "クリオプレシピテートはFFPを低温で融解した際に生じる沈殿物で、これらの凝固因子が濃縮されています。",
        page: 449
    },
    {
        question: "Patient Blood Management (PBM)の3つの柱に含まれないものはどれですか？",
        options: ["赤血球量の最適化", "出血と失血の最小化", "常にヘモグロビン値を10g/dL以上に保つこと"],
        answer: "常にヘモグロビン値を10g/dL以上に保つこと",
        explanation: "PBMの3本柱は①赤血球量の最適化、②失血の最小化、③貧血への生理的予備能の最適化です。画一的な輸血閾値ではなく、個々の患者の状態に応じた対応を目指します。",
        page: 449
    },
    {
        question: "輸血関連の死亡原因として、近年最も報告が多いものはどれですか？",
        options: ["HIVや肝炎ウイルスの感染", "輸血関連急性肺障害(TRALI)と輸血関連循環過負荷(TACO)", "溶血性輸血副作用"],
        answer: "輸血関連急性肺障害(TRALI)と輸血関連循環過負荷(TACO)",
        explanation: "感染症のリスクが激減した現在、TRALIとTACOが輸血関連死の主要な原因となっています。",
        page: 451
    },
    {
        question: "保存血の輸血に伴う代謝性異常として、クエン酸のキレート作用によって引き起こされる電解質異常は何ですか？",
        options: ["高カリウム血症", "低カルシウム血症", "高マグネシウム血症"],
        answer: "低カルシウム血症",
        explanation: "保存血中の抗凝固剤であるクエン酸がレシピエントのイオン化カルシウムと結合（キレート）するため、大量輸血では低カルシウム血症をきたす可能性があります。",
        page: 452
    },
    {
        question: "溶血性輸血副作用が疑われた場合に、麻酔科医が最初に行うべきことは何ですか？",
        options: ["利尿薬を投与する", "直ちに輸血を中止する", "ステロイドを投与する"],
        answer: "直ちに輸血を中止する",
        explanation: "溶血性輸血副作用を疑った場合、原因となっている可能性のある血液製剤の投与を直ちに中止することが最優先です。",
        page: 454
    },
    {
        question: "術中血液回収（セルサルベージ）で回収された血液の特徴として正しいものはどれですか？",
        options: ["凝固因子と血小板が豊富に含まれる", "洗浄・濃縮の過程で凝固因子と血小板はほとんど除去される", "細菌汚染のリスクはない"],
        answer: "洗浄・濃縮の過程で凝固因子と血小板はほとんど除去される",
        explanation: "セルサルベージで回収されるのは洗浄赤血球であり、血漿成分（凝固因子）や血小板は除去されます。そのため、大量返血時には希釈性凝固障害に注意が必要です。",
        page: 454
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

    window.location.href = 'c25_resident_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
