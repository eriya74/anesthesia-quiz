document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "問1: 心臓手術において、全身麻酔と胸部硬膜外麻酔の併用が、全身麻酔単独と比較して死亡率を改善するというエビデンスは確立されているか？",
            options: ["はい、死亡率を有意に低下させることが示されている", "いいえ、死亡率への影響は明確でなく、むしろ心筋梗塞のリスクを増加させる可能性が示唆されている", "いいえ、しかし呼吸器合併症は減少させる可能性がある"],
            answer: "いいえ、死亡率への影響は明確でなく、むしろ心筋梗塞のリスクを増加させる可能性が示唆されている",
            explanation: "近年のメタ解析では、心臓手術における胸部硬膜外麻酔の併用は、死亡率を改善する明確なエビデンスはなく、交感神経遮断による低血圧が心筋梗塞リスクを増加させる可能性も指摘されています。",
            page: 223
        },
        {
            question: "問2: 大動脈弁狭窄症（AS）患者に対する区域麻酔（脊髄くも膜下麻酔など）の選択が特に慎重を要する理由は、どの血行動態パラメータの維持が困難になるためか？",
            options: ["前負荷", "後負荷（全身血管抵抗）", "心拍数"],
            answer: "後負荷（全身血管抵抗）",
            explanation: "重症AS患者は後負荷依存の状態にあり、心拍出量が固定されています。区域麻酔による急激な全身血管抵抗の低下は、冠動脈灌流圧を維持できなくなり、深刻な心筋虚血や循環虚脱を引き起こすため非常に危険です。",
            page: 222
        },
        {
            question: "問3: 肥大型閉塞性心筋症（HOCM）患者の麻酔において、区域麻酔による交感神経遮断が危険となりうる理由は何か？",
            options: ["心収縮力を抑制するため", "前負荷と後負荷をともに低下させ、左室流出路狭窄を増悪させるため", "頻脈を引き起こすため"],
            answer: "前負荷と後負荷をともに低下させ、左室流出路狭窄を増悪させるため",
            explanation: "HOCMでは、前負荷の減少（静脈還流の低下）と後負荷の減少（血管拡張）の両方が、左室流出路の圧較差を増大させ、動的狭窄を悪化させるため、広範な交感神経遮断は避けるべきとされます。",
            page: 222
        },
        {
            question: "問4: 冠動脈疾患患者の非心臓手術において、周術期の心筋虚血を予防するために、麻酔方法の選択（全身麻酔 vs 区域麻酔）は最も重要な因子であると言えるか？",
            options: ["はい、区域麻酔の方が明らかに優れている", "いいえ、麻酔方法の選択よりも、術中の厳密な血行動態管理（心拍数、血圧の維持）の方が重要である", "はい、全身麻酔の方が明らかに優れている"],
            answer: "いいえ、麻酔方法の選択よりも、術中の厳密な血行動態管理（心拍数、血圧の維持）の方が重要である",
            explanation: "特定の麻酔法が周術期の心筋梗塞を減らすという強力なエビデンスはありません。重要なのは、選択した麻酔法を用いて、心筋酸素需給バランスを至適に保つための厳格な血行動態管理を行うことです。",
            page: 223
        },
        {
            question: "問5: 肺高血圧症を有する患者の麻酔管理において、区域麻酔（特に高位の硬膜外麻酔や脊髄くも膜下麻酔）を避けるべき主な理由は何か？",
            options: ["呼吸ドライブを抑制するため", "前負荷の急激な低下が、右心不全を増悪させ循環虚脱をきたすリスクがあるため", "肺血管抵抗を上昇させるため"],
            answer: "前負荷の急激な低下が、右心不全を増悪させ循環虚脱をきたすリスクがあるため",
            explanation: "肺高血圧症患者の右心室は前負荷に依存しています。広範な交感神経遮断による急激な静脈還流量の減少は、右心拍出量を維持できなくなり、重篤な循環虚脱を引き起こす可能性があります。",
            page: 198
        },
        {
            question: "問6: ロボット支援下心臓手術（僧帽弁形成術など）で、片肺換気とCO2気腹、さらに急峻な頭低位が組み合わさった際の、最も懸念すべき生理学的変化は何か？",
            options: ["著しい高血圧", "著しい肺コンプライアンスの低下と高い気道内圧", "著しい徐脈"],
            answer: "著しい肺コンプライアンスの低下と高い気道内圧",
            explanation: "これらの要因が重なると、横隔膜の挙上と縦隔の圧迫により、肺コンプライアンスが極度に低下し、適切な換気を維持するために非常に高い気道内圧が必要となり、圧損傷のリスクが高まります。",
            page: 225
        },
        {
            question: "問7: 心臓手術後の鎮痛法として胸部硬膜外麻酔を選択した場合、その利点と欠点を考慮した上で、最も注意深く監視すべき合併症は何か？",
            options: ["術後悪心・嘔吐", "硬膜外血腫と術後呼吸抑制", "高血糖"],
            answer: "硬膜外血腫と術後呼吸抑制",
            explanation: "心臓手術では術後に抗凝固療法が行われることが多く、硬膜外血腫のリスクが高まります。また、硬膜外オピオイドによる遷延性の呼吸抑制も、特に高齢者や呼吸機能低下患者で注意が必要です。",
            page: 223
        },
        {
            question: "問8: 大血管手術（大動脈瘤置換術など）において、脊髄保護の観点から区域麻酔（硬膜外麻酔など）が持つ理論的な利点は何か？",
            options: ["交感神経遮断による脊髄血流の改善と、局所麻酔薬による神経保護作用", "全身の酸素消費量を減少させること", "手術時間を短縮させること"],
            answer: "交感神経遮断による脊髄血流の改善と、局所麻酔薬による神経保護作用",
            explanation: "硬膜外麻酔による交感神経遮断は、脊髄動脈の血管攣縮を抑制し、血流を改善する可能性があります。また、局所麻酔薬自体にも神経保護作用があると考えられており、脊髄虚血のリスクを低減できると期待されています。",
            page: 223
        },
        {
            question: "問9: 経カテーテル大動脈弁留置術（TAVI）をモニター下麻酔管理（MAC）で行う場合、全身麻酔への移行を判断するべき最も重大な合併症は何か？",
            options: ["穿刺部の出血", "弁周囲逆流（paravalvular leak）や冠動脈閉塞による急激な血行動態の破綻", "一過性の不整脈"],
            answer: "弁周囲逆流（paravalvular leak）や冠動脈閉塞による急激な血行動態の破綻",
            explanation: "TAVI中の弁周囲逆流や冠動脈閉塞は、急激な心不全や心原性ショックを引き起こす致死的な合併症です。このような血行動態の破綻が生じた場合は、速やかに気道を確保し、全身麻酔に移行して循環補助の準備を行う必要があります。",
            page: 222
        },
        {
            question: "問10: 心不全患者に対する非心臓手術において、区域麻酔が全身麻酔よりも有利である可能性を示唆するメタ解析の結果がある。その主な理由は何か？",
            options: ["区域麻酔の方が術後せん妄が少ないため", "区域麻酔による後負荷軽減が、心不全心にとって有利に働く可能性があるため", "区域麻酔の方が鎮痛効果が強いため"],
            answer: "区域麻酔による後負荷軽減が、心不全心にとって有利に働く可能性があるため",
            explanation: "区域麻酔による交感神経遮断は全身血管抵抗（後負荷）を低下させます。これにより、心機能が低下した心臓の仕事量が減少し、心拍出量が改善する可能性があります。ただし、急激な前負荷低下には注意が必要です。",
            page: 223
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
        localStorage.setItem('c14_cardiacQuizResults', JSON.stringify(userAnswers));
        window.location.href = 'c14_cardiac_results.html';
    });

    loadQuestion();
});
