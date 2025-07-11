document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: ブピバカインの心毒性が、そのR(+)鏡像異性体とS(-)鏡像異性体で異なるのはなぜか？",
            options: ["代謝速度が異なるため", "タンパク結合率が異なるため", "心筋のナトリウムチャネルに対する親和性と解離速度が立体異性体間で異なるため"],
            answer: "心筋のナトリウムチャネルに対する親和性と解離速度が立体異性体間で異なるため",
            explanation: "R(+)ブピバカインはS(-)体（レボブピバカイン）よりも心筋Na+チャネルへの結合が強く、解離が遅いため、心毒性がより強く現れます。この立体選択性が心毒性の差の主な原因です。",
            page: 155
        },
        {
            question: "問2: 大動脈弁狭窄症（AS）患者への脊髄くも膜下麻酔がハイリスクとされる主な血行動態学的理由は何か？",
            options: ["心拍出量が固定されており、急激な前負荷の増加に対応できないため", "心拍出量が固定されており、急激な後負荷（全身血管抵抗）の低下による冠灌流圧低下に対応できないため", "不整脈を誘発しやすいため"],
            answer: "心拍出量が固定されており、急激な後負荷（全身血管抵抗）の低下による冠灌流圧低下に対応できないため",
            explanation: "重症ASでは心拍出量が固定されているため、脊髄くも膜下麻酔による急激な血管拡張と血圧低下は、冠動脈の灌流圧を致命的に低下させる危険があります。",
            page: 296
        },
        {
            question: "問3: 局所麻酔薬中毒（LAST）による心停止の際、ACLSプロトコルに変更を加えるべき点としてASRAが推奨していることは何か？",
            options: ["カルシウムチャネル遮断薬を第一選択とする", "バソプレシン、カルシウムチャネル遮断薬、β遮断薬の使用を避け、アドレナリンの少量分割投与を考慮する", "アミオダロンの代わりにリドカインを使用する"],
            answer: "バソプレシン、カルシウムチャネル遮断薬、β遮断薬の使用を避け、アドレナリンの少量分割投与を考慮する",
            explanation: "LAST時の蘇生では、心筋抑制を増悪させる可能性がある薬剤（Ca拮抗薬、β遮断薬）を避け、アドレナリンも不整脈誘発リスクから少量投与が推奨されます。",
            page: 152
        },
        {
            question: "問4: 脊髄くも膜下麻酔後に起こるBezold-Jarisch反射の機序として考えられているものは何か？",
            options: ["脳幹部の虚血による交感神経の興奮", "心室壁の機械受容器が、著しい前負荷低下による心室の収縮状態を感知し、迷走神経を介して徐脈と血圧低下を引き起こす", "圧受容器反射の亢進"],
            answer: "心室壁の機械受容器が、著しい前負荷低下による心室の収縮状態を感知し、迷走神経を介して徐脈と血圧低下を引き起こす",
            explanation: "脊髄くも膜下麻酔による急激な静脈還流量の減少は、心室の充満を低下させます。この状態が心臓の機械受容器を刺激し、逆説的に迷走神経活動を亢進させ、徐脈や血圧低下を招くのがBezold-Jarisch反射です。",
            page: 295
        },
        {
            question: "問5: 胸部硬膜外麻酔が心筋酸素需給バランスに与える有益な効果は何か？",
            options: ["心拍数を増加させる", "心臓交感神経（T1-T4）を遮断し、心拍数、心収縮力、前負荷、後負荷を減少させる", "冠動脈を直接拡張させる"],
            answer: "心臓交感神経（T1-T4）を遮断し、心拍数、心収縮力、前負荷、後負荷を減少させる",
            explanation: "高位胸部硬膜外麻酔は心臓交感神経を遮断することで、心拍数と心筋収縮力を抑制し、同時に末梢血管拡張により前後負荷を軽減するため、心筋の酸素需要を減少させます。",
            page: 295
        },
        {
            question: "問6: 局所麻酔薬の全身投与（リドカイン持続静注など）が術後痛や慢性神経障害性疼痛に効果を示すことがある。その作用機序として考えられていることは何か？",
            options: ["強力な鎮静作用による", "中枢神経系におけるNa+チャネル遮断を介した抗炎症作用や抗痛覚過敏作用", "末梢神経の完全な遮断"],
            answer: "中枢神経系におけるNa+チャネル遮断を介した抗炎症作用や抗痛覚過敏作用",
            explanation: "局所麻酔薬の全身投与は、末梢での伝導ブロックを起こす濃度よりはるかに低い血中濃度で効果を発揮します。これは中枢神経系（特に脊髄後角）のNa+チャネルを修飾し、中枢感作や神経炎症を抑制するためと考えられています。",
            page: 156
        },
        {
            question: "問7: 硬膜外腔に注入された局所麻酔薬が、脊髄くも膜下腔へ移行する主な経路は何か？",
            options: ["血管経由での再分布", "硬膜袖（dural cuff）領域からの拡散", "リンパ系を介した輸送"],
            answer: "硬膜袖（dural cuff）領域からの拡散",
            explanation: "硬膜外腔の局所麻酔薬は、神経根が硬膜を貫通する部分である硬膜袖（dural sleeve）を介して、くも膜下腔へ最も効率的に拡散すると考えられています。",
            page: 294
        },
        {
            question: "Tumescent局所麻酔法で高用量のリドカインが安全に使用できる主な薬物動態学的理由は何か？",
            options: ["リドカインが皮下で速やかに代謝されるため", "大量の希釈液とアドレナリンの併用により、皮下組織からの吸収が著しく遅延するため", "肥満患者にのみ使用されるため"],
            answer: "大量の希釈液とアドレナリンの併用により、皮下組織からの吸収が著しく遅延するため",
            explanation: "Tumescent法では、非常に希釈した局所麻酔薬を大量の生理食塩水と共に皮下脂肪層に注入します。これにより薬物濃度が低下し、またアドレナリンの血管収縮作用と相まって、全身への吸収が極めて緩徐になり、高い総投与量でも血中濃度は安全域に保たれます。",
            page: 156
        },
        {
            question: "問9: 脊髄くも膜下麻酔において、リドカインがブピバカインよりも一過性神経症状（TNS）を引き起こしやすいとされるが、その神経毒性の機序として考えられていることは何か？",
            options: ["ミトコンドリア機能障害と細胞内Ca2+濃度の上昇", "高浸透圧による神経細胞の脱水", "アレルギー反応"],
            answer: "ミトコンドリア機能障害と細胞内Ca2+濃度の上昇",
            explanation: "リドカインによる神経毒性は、ミトコンドリアの呼吸鎖を阻害し、細胞内カルシウムホメオスタシスを破綻させることで、アポトーシスを誘導する可能性が基礎研究で示唆されています。",
            page: 154
        },
        {
            question: "問10: 硬膜穿刺後頭痛（PDPH）に対する硬膜外血液パッチ（EBP）の作用機序として最も有力な説は何か？",
            options: ["血液凝固塊が硬膜の穴を物理的に塞ぐ（パッチ効果）", "硬膜外腔に注入された血液の容積効果により、髄液圧が上昇し脳の沈下を防ぐ", "血液中の炎症性サイトカインが硬膜の修復を促進する"],
            answer: "硬膜外腔に注入された血液の容積効果により、髄液圧が上昇し脳の沈下を防ぐ",
            explanation: "EBPの即時的な効果は、注入された血液が硬膜外腔の圧力を高め、髄液腔を圧迫することで髄液の漏出を抑制し、脳の沈下を防ぐ「容積効果」によるものと考えられています。凝血塊によるパッチ効果は二次的なものとされます。",
            page: 312
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
        localStorage.setItem('c10_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c10_cardiac_results.html';
    });

    loadQuestion();
});
