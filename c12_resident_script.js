document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 動物実験において、多くの全身麻酔薬が発達期の脳に引き起こすとされる主な病理学的変化は何か？",
            options: ["神経細胞の壊死", "神経細胞のアポトーシスの亢進", "グリア細胞の増殖"],
            answer: "神経細胞のアポトーシスの亢進",
            explanation: "麻酔薬誘発性神経発達毒性（AIDN）の最も特徴的な所見は、プログラムされた細胞死であるアポトーシスが、特に脳の発達段階で加速されることです。",
            page: 186
        },
        {
            question: "問2: ほとんどの静脈麻酔薬と揮発性吸入麻酔薬が共通して作用する、主要な抑制性神経伝達物質の受容体は何か？",
            options: ["ドパミン受容体", "セロトニン受容体", "GABAA受容体"],
            answer: "GABAA受容体",
            explanation: "プロポフォールやセボフルランなど、多くの麻酔薬はGABAA受容体の機能を増強することで中枢神経系を抑制し、麻酔作用を発揮します。",
            page: 185
        },
        {
            question: "問3: 人間の脳において、シナプス形成が最も活発で、麻酔薬への感受性が最も高いと考えられる期間はいつか？",
            options: ["思春期", "妊娠最後の3ヶ月から生後3〜4歳まで", "成人期"],
            answer: "妊娠最後の3ヶ月から生後3〜4歳まで",
            explanation: "ヒトの脳の成長スパートは、胎生後期から幼児期にかけて起こります。この時期はシナプス形成が最も盛んであり、麻酔薬などの外的要因による影響を最も受けやすいと考えられています。",
            page: 186
        },
        {
            question: "問4: GAS study（乳児期の全身麻酔と区域麻酔を比較した大規模臨床試験）が示した主な結論は何か？",
            options: ["1時間程度のセボフルラン麻酔は、2歳および5歳時点での神経発達に悪影響を及ぼさない", "すべての全身麻酔は小児のIQを低下させる", "区域麻酔は全身麻酔より常に安全である"],
            answer: "1時間程度のセボフルラン麻酔は、2歳および5歳時点での神経発達に悪影響を及ぼさない",
            explanation: "GAS studyは、乳児期の1時間程度の単回セボフルラン麻酔が、その後の神経認知機能に悪影響を与えないという重要なエビデンスを提供しました。",
            page: 189
        },
        {
            question: "問5: 高齢者の術後認知機能障害（POCD）について、現在のところ最も確実な結論は何か？",
            options: ["全身麻酔がPOCDの唯一の原因である", "硬膜外麻酔はPOCDを完全に予防する", "麻酔、手術、患者自身の要因などが複雑に関与しており、単一の原因を特定するのは困難である"],
            answer: "麻酔、手術、患者自身の要因などが複雑に関与しており、単一の原因を特定するのは困難である",
            explanation: "POCDの発生機序は多因子性であり、麻酔薬の種類、手術侵襲、術前の認知機能、併存疾患などが複雑に絡み合っていると考えられています。",
            page: 100
        },
        {
            question: "問6: 周術期の低血圧が脳の灌流を低下させ、神経細胞に障害を与える可能性がある。脳灌流圧（CPP）を維持するために、麻酔科医が管理すべき主なパラメータは何か？",
            options: ["心拍数と体温", "平均動脈圧（MAP）と頭蓋内圧（ICP）", "ヘモグロビン値と血糖値"],
            answer: "平均動脈圧（MAP）と頭蓋内圧（ICP）",
            explanation: "脳灌流圧は「平均動脈圧 - 頭蓋内圧」で定義されます。適切な脳血流を維持するためには、MAPを保ち、ICPの上昇を避けることが重要です。",
            page: 190
        },
        {
            question: "問7: 周術期の低二酸化炭素血症（過換気）が脳に与える主な影響は何か？",
            options: ["脳血管を拡張させ、脳血流を増加させる", "脳血管を収縮させ、脳血流を減少させる", "脳酸素代謝を亢進させる"],
            answer: "脳血管を収縮させ、脳血流を減少させる",
            explanation: "低CO2血症は脳血管を収縮させ、脳血流を減少させます。これにより脳虚血や神経細胞障害のリスクが高まる可能性があるため、特に新生児や乳児では過換気を避けるべきです。",
            page: 190
        },
        {
            question: "問8: デクスメデトミジンが、他の麻酔薬による神経細胞アポトーシスを軽減する可能性があるとして研究されている。その作用機序として考えられていることは何か？",
            options: ["NMDA受容体を遮断する", "細胞生存シグナル伝達経路を誘導する", "強力な抗酸化作用を持つ"],
            answer: "細胞生存シグナル伝達経路を誘導する",
            explanation: "デクスメデトミジンは、α2受容体を介して細胞生存に関わるシグナル伝達経路を活性化することで、他の麻酔薬による神経毒性を軽減する神経保護作用を持つ可能性が示唆されています。",
            page: 188
        },
        {
            question: "問9: 動物実験において、麻酔薬による神経発達への悪影響を軽減する可能性が示されている非薬理学的な介入は何か？",
            options: ["術後の暗闇環境", "術後の刺激の多い豊かな環境（environmental enrichment）", "術後の運動制限"],
            answer: "術後の刺激の多い豊かな環境（environmental enrichment）",
            explanation: "動物実験では、麻酔曝露後に玩具や社会的な交流など、刺激の多い環境で飼育することが、神経行動学的な障害を軽減することが示されています。",
            page: 188
        },
        {
            question: "問10: 2016年に米国FDAが発表した、小児麻酔に関する安全性情報はどのような内容か？",
            options: ["すべての麻酔薬は3歳未満の小児に安全である", "3歳未満の小児や妊娠後期の妊婦への反復または長時間の全身麻酔は、脳の発達に影響を与える可能性がある", "プロポフォールは小児に安全に使用できる唯一の麻酔薬である"],
            answer: "3歳未満の小児や妊娠後期の妊婦への反復または長時間の全身麻酔は、脳の発達に影響を与える可能性がある",
            explanation: "FDAは、動物実験の結果に基づき、3歳未満の小児や妊娠第三期の妊婦に対する反復または長時間の麻酔薬・鎮静薬の使用が、脳の発達に影響を及ぼす可能性があるという警告を発表しました。",
            page: 185
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
        localStorage.setItem('c12_residentQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c12_resident_results.html';
    });

    loadQuestion();
});
