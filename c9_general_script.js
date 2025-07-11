document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: オピオイド受容体が活性化された際に起こる、主な細胞内シグナル伝達は何か？",
            options: ["アデニル酸シクラーゼの活性化とcAMPの増加", "電位依存性Ca2+チャネルの活性化", "Gタンパク質を介した内向き整流K+チャネルの活性化とアデニル酸シクラーゼの抑制"],
            answer: "Gタンパク質を介した内向き整流K+チャネルの活性化とアデニル酸シクラーゼの抑制",
            explanation: "オピオイド受容体はGi/oタンパク質共役型受容体であり、活性化するとK+チャネルを開口させて細胞を過分極させ、Ca2+チャネルとアデニル酸シクラーゼを抑制して神経の興奮性を低下させます。",
            page: 126
        },
        {
            question: "問2: モルヒネの活性代謝物であるモルヒネ-6-グルクロニド（M6G）が、腎不全患者で遷延性の呼吸抑制を引き起こす主な理由は何か？",
            options: ["M6Gがモルヒネよりも強力な鎮痛作用を持つため", "M6Gが腎排泄性であり、腎不全患者では体内に蓄積しやすいため", "M6Gが肝臓での代謝を受けにくいため"],
            answer: "M6Gが腎排泄性であり、腎不全患者では体内に蓄積しやすいため",
            explanation: "M6Gはモルヒネと同等以上の鎮痛・呼吸抑制作用を持つ活性代謝物です。腎臓から排泄されるため、腎機能が低下した患者では血中濃度が上昇し、作用が遷延します。",
            page: 133
        },
        {
            question: "問3: メペリジンの代謝物であるノルメペリジンが、特に腎不全患者で問題となる中枢神経系の副作用は何か？",
            options: ["鎮静と傾眠", "興奮とけいれん発作", "呼吸抑制"],
            answer: "興奮とけいれん発作",
            explanation: "ノルメペリジンは中枢神経興奮作用を持ち、不安、振戦からミオクローヌス、けいれん発作まで引き起こす可能性があります。腎不全患者では排泄が遅延し、毒性が発現しやすくなります。",
            page: 133
        },
        {
            question: "問4: オピオイドと揮発性麻酔薬の併用によるMAC低下作用において、オピオイド濃度を上げてもMACをゼロにできない。この現象が示唆することは何か？",
            options: ["オピオイドには鎮静作用がない", "オピオイドは完全な麻酔薬ではない", "揮発性麻酔薬がオピオイド作用を拮抗する"],
            answer: "オピオイドは完全な麻酔薬ではない",
            explanation: "オピオイドはMACを著しく低下させますが、単独では不動化や意識消失を確実に得ることができません。これはオピオイドが麻酔のすべての要素（鎮静・鎮痛・不動化）を完全には満たさないことを意味します。",
            page: 132
        },
        {
            question: "問5: オピオイド誘発性痛覚過敏（OIH）とオピオイド耐性の違いは何か？",
            options: ["OIHは痛みの閾値を上昇させるが、耐性は低下させる", "OIHは侵害刺激に対する感受性を亢進させる現象であり、耐性は薬物効果の減弱である", "両者に本質的な違いはない"],
            answer: "OIHは侵害刺激に対する感受性を亢進させる現象であり、耐性は薬物効果の減弱である",
            explanation: "耐性は同じ鎮痛効果を得るためにより多くの薬物が必要になる状態ですが、OIHはオピオイド投与によって逆に痛覚が過敏になる逆説的な現象です。",
            page: 132
        },
        {
            question: "問6: ブプレノルフィンがμ受容体に対して持つ特徴的な薬理作用は何か？",
            options: ["完全作動薬", "競合的拮抗薬", "部分作動薬であり、受容体への親和性が非常に高い"],
            answer: "部分作動薬であり、受容体への親和性が非常に高い",
            explanation: "ブプレノルフィンはμ受容体部分作動薬で、天井効果を示します。受容体への結合が非常に強固で解離が遅いため、他のオピオイドの作用を拮抗し、ナロキソンによる拮抗も困難な場合があります。",
            page: 136
        },
        {
            question: "問7: オピオイドによるOddi括約筋の攣縮を部分的に拮抗できる非オピオイド系の薬剤は何か？",
            options: ["アトロピン", "グルカゴン", "ニトログリセリン"],
            answer: "グルカゴン",
            explanation: "グルカゴンは平滑筋弛緩作用を持ち、オピオイドによるOddi括約筋の攣縮を部分的に改善する効果があります。",
            page: 132
        },
        {
            question: "問8: 薬物動態学的に、アルフェンタニルの作用発現がフェンタニルやスフェンタニルより速い主な理由は何か？",
            options: ["脂溶性が最も高いから", "pKaが低く、生理的pHでの非イオン型分率が高いため", "タンパク結合率が最も低いから"],
            answer: "pKaが低く、生理的pHでの非イオン型分率が高いため",
            explanation: "アルフェンタニルはpKaが6.5と低く、生理的pHで非イオン型（血液脳関門を通過しやすい形）の割合が約90%と高いため、効果部位への移行が速く、作用発現が迅速です。",
            page: 126
        },
        {
            question: "問9: オピオイドの鎮痛作用において、脊髄後角での主な作用機序は何か？",
            options: ["運動ニューロンの興奮性を高める", "一次求心性ニューロンからのサブスタンスPなどの興奮性伝達物質の遊離を抑制する", "アストロサイトを活性化する"],
            answer: "一次求心性ニューロンからのサブスタンスPなどの興奮性伝達物質の遊離を抑制する",
            explanation: "オピオイドは脊髄後角のシナプス前終末に作用し、電位依存性Ca2+チャネルを抑制することで、侵害刺激情報を伝達するサブスタンスPなどの遊離を抑制します。",
            page: 127
        },
        {
            question: "問10: biased agonist（バイアス作動薬）であるオリセリジンが、従来のオピオイドと比較して呼吸抑制のリスクが低いとされる理論的根拠は何か？",
            options: ["Gタンパク質共役経路を選択的に活性化するため", "βアレスチン経路を選択的に活性化し、Gタンパク質経路を抑制するため", "鎮痛作用をもたらすGタンパク質経路を活性化する一方、呼吸抑制に関与するβアレスチン経路の活性化が少ないため"],
            answer: "鎮痛作用をもたらすGタンパク質経路を活性化する一方、呼吸抑制に関与するβアレスチン経路の活性化が少ないため",
            explanation: "μ受容体のシグナル伝達にはGタンパク質経路（鎮痛）とβアレスチン経路（副作用）があります。バイアス作動薬はGタンパク質経路に偏って作用するため、鎮痛効果を維持しつつ呼吸抑制などの副作用を軽減できると期待されています。",
            page: 139
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
        localStorage.setItem('c9_generalQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c9_general_results.html';
    });

    loadQuestion();
});
