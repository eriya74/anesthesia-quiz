document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 交感神経終末のシナプス前α2受容体が刺激された場合の効果は何か？",
            options: ["ノルエピネフリン遊離の促進", "ノルエピネフリン遊離の抑制", "アセチルコリン遊離の抑制"],
            answer: "ノルエピネフリン遊離の抑制",
            explanation: "シナプス前α2受容体は自己受容体として機能し、ノルエピネフリンの過剰な遊離を抑制するネガティブフィードバック機構を担っています。",
            page: "71, Fig. 6.3"
        },
        {
            question: "問2: ドーパミンを10 μg/kg/min以上の高用量で投与した際に、腎血流が低下する可能性があるのはなぜか？",
            options: ["D1受容体作用が減弱するため", "β1受容体作用が優位になるため", "α1受容体作用が優位になり、血管収縮がD1受容体による血管拡張効果を上回るため"],
            answer: "α1受容体作用が優位になり、血管収縮がD1受容体による血管拡張効果を上回るため",
            explanation: "ドーパミンは高用量になるとα1受容体刺激作用が顕著になり、腎血管を含む全身の血管を収縮させ、低用量での腎血流増加効果を打ち消してしまいます。",
            page: 74
        },
        {
            question: "問3: 褐色細胞腫の術前管理にフェノキシベンザミンが用いられる主な理由は何か？",
            options: ["β受容体を可逆的に遮断するため", "α受容体を非可逆的に遮断し、術中の血圧変動を抑制するため", "カテコラミン合成を阻害するため"],
            answer: "α受容体を非可逆的に遮断し、術中の血圧変動を抑制するため",
            explanation: "フェノキシベンザミンはα受容体に非可逆的に結合し、強力かつ持続的なα遮断作用を示します。これにより、腫瘍からのカテコラミン放出による急激な昇圧を抑制します。",
            page: 77
        },
        {
            question: "問4: クロニジン離脱症候群による高血圧クライシスの治療薬としてラベタロールが推奨される理由は何か？",
            options: ["純粋なα1遮断薬であるため", "α遮断作用とβ遮断作用を併せ持ち、血管拡張と頻脈抑制を同時に行えるため", "中枢性の交感神経抑制作用が最も強いため"],
            answer: "α遮断作用とβ遮断作用を併せ持ち、血管拡張と頻脈抑制を同時に行えるため",
            explanation: "クロニジン離脱では交感神経活動がリバウンドで亢進します。ラベタロールはα遮断で血管を拡張させ、β遮断で頻脈を抑制するため、病態に適しています。",
            page: 77
        },
        {
            question: "問5: デクスメデトミジンが持つ特徴的な鎮静状態は何か？",
            options: ["刺激を与えても覚醒しにくい深い鎮静", "呼吸抑制を伴わない、刺激により容易に覚醒する協力的な鎮静", "健忘作用が全くない鎮静"],
            answer: "呼吸抑制を伴わない、刺激により容易に覚醒する協力的な鎮静",
            explanation: "デクスメデトミジンはα2受容体刺激により、呼吸抑制が少なく、自然な睡眠に近い鎮静状態をもたらし、会話による覚醒が可能です。",
            page: 77
        },
        {
            question: "問6: POISE試験で示された、周術期にメトプロロールを開始することの問題点は何か？",
            options: ["心筋梗塞の発生率が増加した", "死亡率と脳卒中の発生率が増加した", "術後腎不全のリスクが増加した"],
            answer: "死亡率と脳卒中の発生率が増加した",
            explanation: "POISE試験では、周術期β遮断により非致死性心筋梗塞は減少したものの、低血圧や徐脈を介して死亡率と脳卒中が増加するという結果が示されました。",
            page: 78
        },
        {
            question: "問7: エスモロールが麻酔科領域で特に有用とされる理由は何か？",
            options: ["最も強力なβ1選択性を有するため", "血中エステラーゼにより速やかに代謝され、半減期が極めて短いため", "α遮断作用も併せ持つため"],
            answer: "血中エステラーゼにより速やかに代謝され、半減期が極めて短いため",
            explanation: "エスモロールの半減期は約9分と非常に短く、作用の調節が容易です。そのため、血圧や心拍数の変動が激しい周術期に安全に使用できます。",
            page: 79
        },
        {
            question: "問8: アトロピンと比較したグリコピロレートの薬理学的な特徴は何か？",
            options: ["作用時間が短い", "血液脳関門を通過しやすく、中枢作用が強い", "血液脳関門を通過しにくく、中枢作用がほとんどない"],
            answer: "血液脳関門を通過しにくく、中枢作用がほとんどない",
            explanation: "グリコピロレートは第四級アンモニウム化合物であり、血液脳関門を通過しにくいため、鎮静やせん妄などの中枢性抗コリン作用が少ないのが特徴です。",
            page: 80
        },
        {
            question: "問9: フェニレフリンによる昇圧治療中に起こりうる代償性の心血管反応は何か？",
            options: ["頻脈", "反射性徐脈", "心拍出量の増加"],
            answer: "反射性徐脈",
            explanation: "フェニレフリンによる急激な血圧上昇は、圧受容体反射を介して迷走神経活動を亢進させ、心拍数を減少させる反射性徐脈を引き起こします。",
            page: 76
        },
        {
            question: "問10: 慢性心不全患者において、ドブタミンを3日以上連続投与した場合に注意すべき現象は何か？",
            options: ["作用の増強", "耐性およびタキフィラキシー", "腎機能の悪化"],
            answer: "耐性およびタキフィラキシー",
            explanation: "ドブタミンの持続投与はβアドレナリン受容体のダウンレギュレーションを引き起こし、効果が減弱する耐性やタキフィラキシーが生じることがあります。",
            page: 75
        }
    ];

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });

        nextBtn.style.display = 'none';
        if (currentQuestionIndex === quizData.length - 1) {
            finishBtn.style.display = 'none';
        }
    }

    function selectOption(button, selectedOption) {
        const currentQuestion = quizData[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        userAnswers[currentQuestionIndex] = {
            question: currentQuestion.question,
            selected: selectedOption,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect,
            explanation: currentQuestion.explanation,
            page: currentQuestion.page
        };

        Array.from(optionsContainer.children).forEach(btn => {
            btn.disabled = true;
            if (btn.innerText === currentQuestion.answer) {
                btn.classList.add('correct');
            } else if (btn.innerText === selectedOption) {
                btn.classList.add('incorrect');
            }
        });

        if (currentQuestionIndex < quizData.length - 1) {
            nextBtn.style.display = 'block';
        } else {
            finishBtn.style.display = 'block';
        }
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    finishBtn.addEventListener('click', () => {
        localStorage.setItem('c6_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c6_general_results.html';
    });

    loadQuestion();
});
