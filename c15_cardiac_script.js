document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 心臓手術中のように、高い気道内圧が必要な状況でベローズ式人工呼吸器を使用する場合、駆動ガスとして酸素ではなく空気を使用することが推奨されることがある。その理由は何か？",
            options: ["空気の方がベローズを動かす力が強いから", "酸素を駆動ガスとして使用すると、その消費量が非常に多くなり、緊急時に酸素ボンベが枯渇するリスクが高まるから", "空気の方が回路内圧を正確に制御できるから"],
            answer: "酸素を駆動ガスとして使用すると、その消費量が非常に多くなり、緊急時に酸素ボンベが枯渇するリスクが高まるから",
            explanation: "ベローズ式の駆動ガス消費量は、患者の分時換気量にほぼ等しくなります。酸素を駆動ガスに用いると、患者への供給分と合わせて大量の酸素が消費され、ボンベ使用時の持続時間が極端に短くなります。",
            page: 246
        },
        {
            question: "問2: 低流量麻酔において、吸入麻酔薬の取り込みが大きい導入初期に、目標とする吸気麻酔濃度を迅速に達成するための操作として適切なものは何か？",
            options: ["新鮮ガス流量を一時的に高く設定する", "二酸化炭素吸収剤を新しいものに交換する", "呼吸回路の加温加湿器を作動させる"],
            answer: "新鮮ガス流量を一時的に高く設定する",
            explanation: "導入初期は患者による麻酔薬の取り込みが大きいため、回路内濃度が希釈されます。新鮮ガス流量を一時的に高くすることで、回路内ガスを迅速に新鮮ガスで置換し、目標濃度への到達を早めることができます。",
            page: 242
        },
        {
            question: "問3: デスフルラン気化器（Tec 6など）が、高地（低気圧環境）で使用される際に、ダイヤル設定値通りの分圧を供給できない。これを補正するために必要な操作は何か？",
            options: ["気化器の温度をさらに上げる", "ダイヤル設定値を、海抜ゼロメートル地での気圧に対する比率で増加させる", "新鮮ガス流量を減らす"],
            answer: "ダイヤル設定値を、海抜ゼロメートル地での気圧に対する比率で増加させる",
            explanation: "Tec 6気化器は設定された体積%でガスを供給しますが、麻酔効果は分圧に依存します。気圧が低い高地では、同じ分圧を得るために、ダイヤル設定値を（760 / 現地気圧）の比率で高く設定する必要があります。",
            page: 237
        },
        {
            question: "問4: 陽圧換気中に酸素フラッシュバルブを操作することが、圧外傷（barotrauma）を引き起こす特に高いリスクとなるのはなぜか？",
            options: ["酸素が冷たいから", "酸素フラッシュは気化器をバイパスし、35-75L/minという非常に高い流量のガスを直接呼吸回路に送り込むため", "酸素フラッシュは回路の安全弁を無効にするため"],
            answer: "酸素フラッシュは気化器をバイパスし、35-75L/minという非常に高い流量のガスを直接呼吸回路に送り込むため",
            explanation: "吸気相中にこの高流量ガスが回路に送り込まれると、APLバルブや呼吸器の圧リリーフ機構が間に合わず、急激な気道内圧の上昇をきたし、肺の圧外傷を引き起こす危険性が非常に高いです。",
            page: 233
        },
        {
            question: "問5: 心臓手術で経食道心エコー（TEE）を装着している患者の換気において、気道内圧が上昇することがある。TEEプローブが気道に与える影響として考えられることは何か？",
            options: ["気管を後方から圧迫し、内径を狭める可能性がある", "声帯の動きを妨げる", "気管支を刺激し、攣縮を誘発する"],
            answer: "気管を後方から圧迫し、内径を狭める可能性がある",
            explanation: "大きなTEEプローブは、食道を介して隣接する気管膜様部を後方から圧迫し、気管の内腔を狭窄させることがあります。これにより気道抵抗が増加し、気道内圧が上昇する可能性があります。",
            page: 374
        },
        {
            question: "問6: カプノグラムのII相（呼気上昇相）の傾きが緩やかになる「シャークフィン」様の波形は、心臓手術患者においてどのような病態を示唆するか？",
            options: ["肺水腫", "気管支攣縮またはCOPDの増悪", "肺塞栓"],
            answer: "気管支攣縮またはCOPDの増悪",
            explanation: "この波形は、肺胞からのCO2排出が不均一で遅延していることを示し、気管支攣縮やCOPDなどによる末梢気道の閉塞性換気障害を強く示唆します。",
            page: 358
        },
        {
            question: "問7: 肺動脈カテーテル（PAC）で測定される圧波形において、右室圧から肺動脈圧へ移行する際に特徴的な変化は何か？",
            options: ["収縮期圧が低下する", "拡張期圧が上昇する（diastolic step-up）", "平均圧が低下する"],
            answer: "拡張期圧が上昇する（diastolic step-up）",
            explanation: "カテーテルが肺動脈弁を通過すると、弁の閉鎖により拡張期の逆流がなくなるため、拡張期圧が右室拡張末期圧（数mmHg）から肺動脈拡張期圧（約10mmHg）へと段階的に上昇します。",
            page: 373
        },
        {
            question: "問8: 心停止時の蘇生において、カプノグラフィのETCO2値が非常に低い（例：<10 mmHg）場合、それは臨床的に何を意味するか？",
            options: ["気管挿管が成功している", "質の高い胸骨圧迫が行われている", "心拍出量が極めて低く、有効な肺血流がほとんどない"],
            answer: "心拍出量が極めて低く、有効な肺血流がほとんどない",
            explanation: "ETCO2は肺血流（心拍出量）を鋭敏に反映します。心停止中のETCO2が極端に低い場合は、胸骨圧迫による心拍出量が不十分であることを示唆しており、蘇生の質の指標となります。",
            page: 362
        },
        {
            question: "問9: 動脈圧ラインの波形が「なまった（overdamped）」状態になる原因として考えられるものは何か？",
            options: ["トランスデューサーの位置が高すぎる", "回路内に気泡が混入している、またはカテーテルが屈曲している", "チューブが長すぎる"],
            answer: "回路内に気泡が混入している、またはカテーテルが屈曲している",
            explanation: "回路内の気泡や血栓、カテーテルの屈曲、接続部の緩みなどは、圧波形の伝達を妨げ、振動を減衰（damp）させます。これにより、収縮期圧は低く、拡張期圧は高く表示される「なまり」波形となります。",
            page: 370
        },
        {
            question: "問10: 駆動ガスに酸素を使用するベローズ式呼吸器で、1L/minの酸素流量、分時換気量8L/minで麻酔を行っている場合、酸素ボンベからの総酸素消費量はおよそ何L/minになるか？",
            options: ["1 L/min", "8 L/min", "9 L/min"],
            answer: "9 L/min",
            explanation: "このタイプの呼吸器では、患者に供給される新鮮ガス流量（1L/min）に加えて、ベローズを駆動するためのガス（分時換気量とほぼ同量、8L/min）も消費されます。したがって、総消費量はおよそ9L/minとなります。",
            page: 246
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
        localStorage.setItem('c15_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c15_cardiac_results.html';
    });

    loadQuestion();
});
