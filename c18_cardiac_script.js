const quizData = [
    {
        question: "経食道心エコー(TEE)プローブ挿入中の気管挿管で、チューブが食道へ迷入するのを防ぐための対策として有効なのはどれですか？",
        options: ["輪状軟骨を圧迫する", "TEEプローブを一時的に引き抜くか、ニュートラルな位置にする", "マックグラスなどのビデオ喉頭鏡を使用する"],
        answer: "TEEプローブを一時的に引き抜くか、ニュートラルな位置にする",
        explanation: "TEEプローブが食道入口部を塞いでいると、チューブが食道に迷入しやすくなります。プローブの位置を調整するか一時的に抜去することで、食道への迷入を防ぎます。",
        page: "N/A"
    },
    {
        question: "大動脈解離などで気管が圧排・偏位している症例の挿管で、第一に考慮すべきデバイスは何ですか？",
        options: ["ビデオ喉頭鏡", "気管支ファイバースコープ", "逆行性挿管セット"],
        answer: "気管支ファイバースコープ",
        explanation: "気管支ファイバーは、屈曲する先端で気管の走行を確認しながらチューブを進めることができるため、気道の解剖学的異常が著しい症例で最も安全な選択肢の一つです。",
        page: "N/A"
    },
    {
        question: "開胸手術中の片肺換気で、術側肺の虚脱が不十分な場合、まず確認すべきことは何ですか？",
        options: ["ダブルルーメンチューブ(DLT)の位置", "麻酔深度", "吸入酸素濃度"],
        answer: "ダブルルーメンチューブ(DLT)の位置",
        explanation: "片肺換気中の問題の多くはDLTの位置異常に起因します。ファイバーで気管支カフの位置やチューブの深さを確認することが最初のステップです。",
        page: "N/A"
    },
    {
        question: "心臓手術後の縦隔血腫による気道閉塞が疑われる場合、最も安全な気道確保戦略は何ですか？",
        options: ["鎮静薬を投与してバッグマスク換気", "迅速導入気管挿管(RSI)", "局所麻酔下での覚醒下挿管"],
        answer: "局所麻酔下での覚醒下挿管",
        explanation: "外部からの圧迫による気道閉塞では、麻酔導入後に気道が完全に閉塞するリスクが非常に高いです。意識下で自発呼吸を温存したままの覚醒下挿管が最も安全です。",
        page: "N/A"
    },
    {
        question: "人工心肺離脱後に重度の肺水腫で換気困難となった場合、気管チューブを通して行える緊急処置は何ですか？",
        options: ["高用量の利尿薬投与", "気管内へのアドレナリン投与", "気管内吸引とPEEPの最適化"],
        answer: "気管内吸引とPEEPの最適化",
        explanation: "まずは気管内の泡沫状の分泌物を吸引し、適切なPEEPをかけることで肺胞の虚脱を防ぎ、酸素化の改善を図ります。",
        page: "N/A"
    },
    {
        question: "左心補助人工心臓(LVAD)装着患者の気道管理において、特に注意すべき点は何ですか？",
        options: ["挿管操作による血圧上昇は避けるべきである", "陽圧換気は右心不全を増悪させる可能性がある", "抜管は通常より早期に行うべきである"],
        answer: "陽圧換気は右心不全を増悪させる可能性がある",
        explanation: "LVAD患者は右心機能が代償の限界にあることが多く、陽圧換気による肺血管抵抗の上昇や静脈還流の減少は、右心不全を容易に引き起こす可能性があります。",
        page: "N/A"
    },
    {
        question: "気管切開術中の気道管理で、外科医が気管を切開する直前に行うべきことは何ですか？",
        options: ["筋弛緩薬を追加投与する", "一時的に換気を停止し、気管チューブのカフを脱気する", "100%酸素での用手換気に切り替える"],
        answer: "100%酸素での用手換気に切り替える",
        explanation: "気管切開の瞬間は無呼吸となるため、その直前に100%酸素で十分に換気し、酸素リザーブを最大化しておくことが重要です。",
        page: "N/A"
    },
    {
        question: "巨大な胸部大動脈瘤を持つ患者の気道確保で、挿管チューブのカフによる気管軟化部の損傷を避けるために考慮すべきことは何ですか？",
        options: ["通常よりワンサイズ小さいチューブを選択する", "カフ圧を低めに設定し、頻繁に確認する", "スタイレットを使用しない"],
        answer: "カフ圧を低めに設定し、頻繁に確認する",
        explanation: "動脈瘤による圧迫で気管軟化症を合併している可能性があり、過大なカフ圧は気管壁の損傷や穿孔のリスクとなるため、慎重なカフ圧管理が求められます。",
        page: "N/A"
    },
    {
        question: "肺移植手術における気道確保で、ダブルルーメンチューブの代わりに気管支ブロッカーが選択されることがあるのはなぜですか？",
        options: ["操作が容易だから", "術後に気管チューブを交換せずにICUへ移送できるから", "コストが安いから"],
        answer: "術後に気管チューブを交換せずにICUへ移送できるから",
        explanation: "気管支ブロッカーは通常のシングルルーメンチューブと併用するため、術後にDLTを抜去して再挿管する手間がなく、そのままICUで術後管理に移行できる利点があります。",
        page: "N/A"
    },
    {
        question: "食道癌手術などでの気管・気管支再建後の気道管理で、最も重要なことは何ですか？",
        options: ["頻回な気管内吸引", "吻合部にチューブ先端やカフが接触しないような位置管理", "高めのPEEP設定"],
        answer: "吻合部にチューブ先端やカフが接触しないような位置管理",
        explanation: "吻合部の血流を妨げたり、機械的な刺激で離開させたりしないよう、気管チューブの深さやカフの位置を慎重に調整し、維持することが最も重要です。",
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

    window.location.href = 'c18_cardiac_results.html';
}

buildQuiz();
submitButton.addEventListener('click', showResults);
