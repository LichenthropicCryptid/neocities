// @ts-nocheck
/*

Sudoku Widget By 404City. Visit https://404city.neocities.org/ For More!
Copyright 404City All Rights Reserved

*/
(function() {
    const scriptTag = document.currentScript;
    scriptTag.insertAdjacentHTML('beforebegin', "<!--Sudoku Widget By 404City. Visit https://404city.neocities.org/ for more!--><!--Copyright 404City All Rights Reserved-->");
    scriptTag.insertAdjacentHTML('afterend', `
        <div id='sudoku'>
            <span id="sudokuText">Loading...</span>
            <div id='sudokuGrid'></div>
            <div id="sudokuNumButtonPad">
                <button class="sudokuNumButton" data-numbuttonvalue="1" aria-label="1">1</button>
                <button class="sudokuNumButton" data-numbuttonvalue="2" aria-label="2">2</button>
                <button class="sudokuNumButton" data-numbuttonvalue="3" aria-label="3">3</button>
                <button class="sudokuNumButton" data-numbuttonvalue="4" aria-label="4">4</button>
                <button class="sudokuNumButton" data-numbuttonvalue="5" aria-label="5">5</button>
                <button class="sudokuNumButton" data-numbuttonvalue="6" aria-label="6">6</button>
                <button class="sudokuNumButton" data-numbuttonvalue="7" aria-label="7">7</button>
                <button class="sudokuNumButton" data-numbuttonvalue="8" aria-label="8">8</button>
                <button class="sudokuNumButton" data-numbuttonvalue="9" aria-label="9">9</button>
                <button class="sudokuNumButton" data-numbuttonvalue="Delete" aria-label="Delete">X</button>
            </div>
            <div id="sudokuFooter">
                <span id="sudokuTime"><u>Time:</u>0</span>
                <button id="sudokuCheckButton" class="sudokuButton" aria-label="Check">Check</button>
                <button id="sudokuRevealButton" class="sudokuButton" aria-label="Reveal">Reveal</button>
                <button id="sudokuResetButton" class="sudokuButton" aria-label="Reset">Reset</button>
                <button id="sudokuNewButton" class="sudokuButton" aria-label="New">New</button>
            </div>
        </div>
        <style>
            :where(#sudoku, #sudoku *) {margin: 0; padding: 0; box-sizing: border-box;}
            :where(#sudoku) {
                height: 330px;
                width: 260px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
                padding: 0.25em;
                gap: 0.25rem;
                border: 1px solid #000;
            }
            :where(#sudokuGrid) {
                --sudokuBorder: 1px solid #000;
                --sudokuSubBorder: 1px dotted #777;
                display: grid;
                grid-template-columns: repeat(9, 1fr);
                width: 100%;
                border: var(--sudokuBorder);
                border-right: none;
                border-bottom: none;
            }
            :where(.sudokuCell) {
                --numericalHintBackground: #0ff;
                --numericalHintColor: #000;
                width: 100%;
                height: 100%;
                min-width: 0;
                aspect-ratio: 1 / 1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: cell;
                border: none;
                border-right: var(--sudokuSubBorder);
                border-bottom: var(--sudokuSubBorder);
            }
            .sudokuCell[data-cellcol="2"], .sudokuCell[data-cellcol="5"], .sudokuCell[data-cellcol="8"] {border-right: var(--sudokuBorder);}
            .sudokuCell[data-cellrow="2"], .sudokuCell[data-cellrow="5"], .sudokuCell[data-cellrow="8"] {border-bottom: var(--sudokuBorder);}
            :where(.sudokuCell[data-readonlycell="true"]) {
                font-weight: bold;
                user-select: none;
            }
            :where(.sudokuMark) {
                display: none !important;
                visibility: hidden !important;
                line-height: 0.5;
                font-size: 10px;
                pointer-events: none;
                user-select: none;
                place-self: center;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                text-align: center;
                letter-spacing: 0.125rem;
            }
            .sudokuCell[data-cellmark="0"]:not([data-cellvalue="0"])::before {content: attr(data-cellvalue);}
            .sudokuCell:not([data-cellmark="0"]) {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr);
                .sudokuMark {display: flex !important;}
            }
            .sudokuCell[data-cellmark*="1"] .sudokuMark:nth-child(1),
            .sudokuCell[data-cellmark*="2"] .sudokuMark:nth-child(2),
            .sudokuCell[data-cellmark*="3"] .sudokuMark:nth-child(3),
            .sudokuCell[data-cellmark*="4"] .sudokuMark:nth-child(4),
            .sudokuCell[data-cellmark*="5"] .sudokuMark:nth-child(5),
            .sudokuCell[data-cellmark*="6"] .sudokuMark:nth-child(6),
            .sudokuCell[data-cellmark*="7"] .sudokuMark:nth-child(7),
            .sudokuCell[data-cellmark*="8"] .sudokuMark:nth-child(8),
            .sudokuCell[data-cellmark*="9"] .sudokuMark:nth-child(9) {visibility: visible !important;}
            :where(#sudoku:has(.sudokuCell[data-cellvalue="1"]:focus) .sudokuCell[data-cellvalue="1"], #sudoku:has(.sudokuCell[data-cellvalue="1"]:focus) .sudokuCell[data-cellmark*="1"] .sudokuMark:nth-child(1),
            #sudoku:has(.sudokuCell[data-cellvalue="2"]:focus) .sudokuCell[data-cellvalue="2"], #sudoku:has(.sudokuCell[data-cellvalue="2"]:focus) .sudokuCell[data-cellmark*="2"] .sudokuMark:nth-child(2),
            #sudoku:has(.sudokuCell[data-cellvalue="3"]:focus) .sudokuCell[data-cellvalue="3"], #sudoku:has(.sudokuCell[data-cellvalue="3"]:focus) .sudokuCell[data-cellmark*="3"] .sudokuMark:nth-child(3),
            #sudoku:has(.sudokuCell[data-cellvalue="4"]:focus) .sudokuCell[data-cellvalue="4"], #sudoku:has(.sudokuCell[data-cellvalue="4"]:focus) .sudokuCell[data-cellmark*="4"] .sudokuMark:nth-child(4),
            #sudoku:has(.sudokuCell[data-cellvalue="5"]:focus) .sudokuCell[data-cellvalue="5"], #sudoku:has(.sudokuCell[data-cellvalue="5"]:focus) .sudokuCell[data-cellmark*="5"] .sudokuMark:nth-child(5),
            #sudoku:has(.sudokuCell[data-cellvalue="6"]:focus) .sudokuCell[data-cellvalue="6"], #sudoku:has(.sudokuCell[data-cellvalue="6"]:focus) .sudokuCell[data-cellmark*="6"] .sudokuMark:nth-child(6),
            #sudoku:has(.sudokuCell[data-cellvalue="7"]:focus) .sudokuCell[data-cellvalue="7"], #sudoku:has(.sudokuCell[data-cellvalue="7"]:focus) .sudokuCell[data-cellmark*="7"] .sudokuMark:nth-child(7),
            #sudoku:has(.sudokuCell[data-cellvalue="8"]:focus) .sudokuCell[data-cellvalue="8"], #sudoku:has(.sudokuCell[data-cellvalue="8"]:focus) .sudokuCell[data-cellmark*="8"] .sudokuMark:nth-child(8),
            #sudoku:has(.sudokuCell[data-cellvalue="9"]:focus) .sudokuCell[data-cellvalue="9"], #sudoku:has(.sudokuCell[data-cellvalue="9"]:focus) .sudokuCell[data-cellmark*="9"] .sudokuMark:nth-child(9)) {
                background: var(--numericalHintBackground);
                color: var(--numericalHintColor);
            }
            :where(.sudokuCell:focus) {
                outline: none;
                background: #00f;
                color: #fff;
            }
            :where(.sudokuCell.sudokuMistakeHighlight) {
                color: #fff;
                background: #f00;
            }
            :where(#sudokuText) {
                font-size: 14px;
                user-select: none;
                margin-bottom: -0.125rem;
                &.sudokuTextBlink {animation: sudokuTextBlink 1s steps(1) infinite;}
            }
            @keyframes sudokuTextBlink {50% {visibility: hidden;}}
            :where(#sudokuNumButtonPad) {
                display: flex;
                width: 100%;
                border: 1px solid #000;
                border-right: none;
            }
            :where(.sudokuNumButton) {
                appearance: none;
                border: none;
                border-right: 1px solid #000;
                background: #0000;
                font-size: 1em;
                cursor: pointer;
                flex: 1;
                aspect-ratio: 1 / 1;
                box-sizing: content-box;
            }
            :where(#sudokuFooter) {
                width: 100%;
                display: flex;
                align-items: center;
                font-size: 14px;
                gap: 0.25rem;
            }
            :where(#sudokuTime) {
                flex: 1;
                user-select: none;
            }
            :where(.sudokuButton) {
                appearance: none;
                font-size: 1em;
                border: 1px solid #000;
                background: none;
                padding: 0 0.125rem;
                cursor: pointer;
            }
        </style>
        <!--End Of The Sudoku Widget-->
    `);
    for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) document.getElementById("sudokuGrid").insertAdjacentHTML("beforeend", `<div class="sudokuCell" tabindex="0" data-cellrow="${i}" data-cellcol="${j}">
        <div class="sudokuMark">1</div>
        <div class="sudokuMark">2</div>
        <div class="sudokuMark">3</div>
        <div class="sudokuMark">4</div>
        <div class="sudokuMark">5</div>
        <div class="sudokuMark">6</div>
        <div class="sudokuMark">7</div>
        <div class="sudokuMark">8</div>
        <div class="sudokuMark">9</div>
    </div>`);
    var sudokuCells = document.querySelectorAll(".sudokuCell");
    var numButtons = document.querySelectorAll(".sudokuNumButton");
    var level = scriptTag.dataset.difficulty ?? "random", symmetric = (scriptTag.dataset.symmetrical ?? "true") === "true";
    if(level === "random") level = ["easy", "medium", "hard", "expert"][Math.floor(Math.random() * 4)];
    var mainPuzzle = [], resetBoard, time = 0, timer, timeRun = false, focusCell, solutionBoard, letCheck = true;
    var rows = new Int32Array(9), cols = new Int32Array(9), boxes = new Int32Array(9);
    function initBitboards(board) {
        rows.fill(0); cols.fill(0); boxes.fill(0);
        for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) {
            var val = board[i][j];
            if(val > 0) {
                var mask = 1 << (val - 1);
                rows[i] |= mask;
                cols[j] |= mask;
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= mask;
            }
        }
    }
    newPuzzle();
    function newPuzzle() {
        mainPuzzle.length = 0;
        for(var i = 0; i < 9; i++) {
            var row = [];
            for(var j = 0; j < 9; j++) row.push((j + i * 3 + Math.floor(i / 3)) % 9 + 1);
            mainPuzzle.push(row);
        }
        for(var k = 0; k < 9; k += 3) for(var i = k + 2; i >= k; i--) for(var n = 0; n < 2; n++) {
            var j = Math.floor(Math.random() * (i - k + 1)) + k;
            if(n) [mainPuzzle[i], mainPuzzle[j]] = [mainPuzzle[j], mainPuzzle[i]];
            else mainPuzzle.forEach(row => {[row[i], row[j]] = [row[j], row[i]];});
        }
        solutionBoard = structuredClone(mainPuzzle);
        initBitboards(mainPuzzle);
        var puzzleIndices = [];
        for(var i = 0; i < 9; i++) for (var j = 0; j < 9; j++) puzzleIndices.push([i, j]);
        var [minCell, maxCell] = (level == "expert") ? [22, 26] : (level == "hard") ? [26, 30] : (level == "medium") ? [30, 35] : [36, 45];
        var cellCount = Math.floor(Math.random() * (maxCell - minCell + 1)) + minCell;
        var tempPuzzleIndices = structuredClone(puzzleIndices), removedCells = 0;
        while(removedCells < 81 - cellCount && tempPuzzleIndices.length > 0) {
            var removeIndexID = Math.floor(Math.random() * tempPuzzleIndices.length);
            var [r1, c1] = tempPuzzleIndices[removeIndexID];
            var r2 = 8 - r1, c2 = 8 - c1;
            var val1 = mainPuzzle[r1][c1], val2 = mainPuzzle[r2][c2];
            mainPuzzle[r1][c1] = 0;
            if(symmetric) mainPuzzle[r2][c2] = 0;
            initBitboards(mainPuzzle);
            var emptyCells = [], solutions = 0;
            for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) if(mainPuzzle[i][j] === 0) emptyCells.push([i, j]);
            if(countSolutions(0)) {
                mainPuzzle[r1][c1] = val1;
                if(symmetric) mainPuzzle[r2][c2] = val2;
                tempPuzzleIndices.splice(removeIndexID, 1);
                if(symmetric) tempPuzzleIndices.splice(tempPuzzleIndices.length - removeIndexID - 1, 1);
            }
            else {
                puzzleIndices = puzzleIndices.filter(item => !(item[0] === r1 && item[1] === c1) && !(item[0] === r2 && item[1] === c2 && symmetric));
                tempPuzzleIndices = structuredClone(puzzleIndices);
                removedCells += (symmetric && (r1 !== r2 || c1 !== c2)) ? 2 : 1;
            }
        }
        function countSolutions(depth) {
            if (depth === emptyCells.length) {
                solutions++;
                return solutions > 1;
            }
            var [zeroY, zeroX] = emptyCells[depth];
            var blockID = Math.floor(zeroY / 3) * 3 + Math.floor(zeroX / 3);
            var usedMask = rows[zeroY] | cols[zeroX] | boxes[blockID];
            for(var num = 1; num <= 9; num++) {
                var mask = 1 << (num - 1);
                if((usedMask & mask) === 0) {
                    mainPuzzle[zeroY][zeroX] = num, rows[zeroY] |= mask, cols[zeroX] |= mask, boxes[blockID] |= mask;
                    var end = countSolutions(depth + 1);
                    mainPuzzle[zeroY][zeroX] = 0, rows[zeroY] &= ~mask, cols[zeroX] &= ~mask, boxes[blockID] &= ~mask;
                    if(end) return true;
                }
            }
            return false;
        }
        renderBoard();
        resetBoard = structuredClone(mainPuzzle);
    }
    function writeButtonChar(element, button, event) {
        if(element.dataset.readonlycell === "false") {
            if(!timeRun) timer = setInterval(startTime, 1000), timeRun = true;
            if(["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(button)) {
                if(element.dataset.cellvalue === button) element.dataset.cellmark = button, element.dataset.cellvalue = "0";
                else if(element.dataset.cellmark === button) element.dataset.cellmark = "0", element.dataset.cellvalue = button;
                else {
                    if(element.dataset.cellvalue === "0") {
                        if(element.dataset.cellmark === "0") element.dataset.cellvalue = button;
                        else if(element.dataset.cellmark.includes(button)) element.dataset.cellmark = element.dataset.cellmark.replace(button, "");
                        else element.dataset.cellmark += button.toString();
                    }
                    else element.dataset.cellmark = `${element.dataset.cellvalue}${button}`, element.dataset.cellvalue = "0";
                }
                writeCharacter(element);
            }
            if(["Backspace", "Delete"].includes(button)) {
                element.dataset.cellmark = element.dataset.cellvalue = "0";
                writeCharacter(element);
            }
        }
        switch(button) {
            case "ArrowUp": sudokuCells[((Number(element.dataset.cellrow) + 8) % 9) * 9 + Number(element.dataset.cellcol)].focus(); break;
            case "ArrowDown": sudokuCells[((Number(element.dataset.cellrow) + 1) % 9) * 9 + Number(element.dataset.cellcol)].focus(); break;
            case "ArrowLeft": sudokuCells[Number(element.dataset.cellrow) * 9 + ((Number(element.dataset.cellcol) + 8) % 9)].focus(); break;
            case "ArrowRight": sudokuCells[Number(element.dataset.cellrow) * 9 + ((Number(element.dataset.cellcol) + 1) % 9)].focus(); break;
        }
    }
    sudokuCells.forEach((element) => {
        element.addEventListener('focus', (event) => {focusCell = element;});
        element.addEventListener('keydown', (event) => {
            if(event.key !== "Tab") event.preventDefault();
            writeButtonChar(element, event.key);
        });
    });
    numButtons.forEach((element) => {
        element.addEventListener('mousedown', (event) => {
            event.preventDefault();
            if(focusCell) {
                focusCell.focus();
                writeButtonChar(focusCell, element.dataset.numbuttonvalue);
            }
        });
    });
    function defaultText() {
        var zeroCellsLeft = mainPuzzle.flat().filter(item => item === 0).length;
        document.getElementById("sudokuText").innerHTML = `<u><b>${(level === "expert") ? "Expert" : (level === "hard") ? "Hard" : (level === "medium") ? "Medium" : "Easy"} Sudoku</b></u> - ${(zeroCellsLeft === 0) ? "No" : `<b>${zeroCellsLeft}</b>`} empty cell${(zeroCellsLeft === 1) ? "" : "s"} left.`;
    }
    function startTime() {
        time = Math.min(9999, ++time);
        document.getElementById("sudokuTime").innerHTML = `<u>Time:</u>${time}`;
    }
    function writeCharacter(element) {
        mainPuzzle[element.dataset.cellrow][element.dataset.cellcol] = (Number(element.dataset.cellvalue) > 9) ? 0 : Number(element.dataset.cellvalue);
        defaultText();
    }
    function resetTime() {
        clearInterval(timer);
        time = 0, timeRun = false;
        document.getElementById("sudokuTime").innerHTML = "<u>Time:</u>0";
    }
    function renderBoard() {
        for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) {
            var puzzleCell = mainPuzzle[i][j], sudokuCell = sudokuCells[i * 9 + j];
            sudokuCell.dataset.cellvalue = puzzleCell;
            sudokuCell.dataset.cellmark = "0";
            sudokuCell.dataset.readonlycell = (puzzleCell > 0).toString();
        }
        defaultText();
    }
    document.getElementById("sudokuCheckButton").addEventListener('click', (event) => {
        focusCell = null;
        if(letCheck) {
            letCheck = false;
            var mistakeCellCount = 0;
            for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) {
                var tempCell = mainPuzzle[i][j];
                mainPuzzle[i][j] = 0;
                initBitboards(mainPuzzle);
                if(((rows[i] | cols[j] | boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)]) & (1 << (tempCell - 1))) !== 0) {
                    var sudokuCell = sudokuCells[i * 9 + j];
                    sudokuCell.classList.add("sudokuMistakeHighlight");
                    if(sudokuCell.dataset.readonlycell === "false") mistakeCellCount++;
                }
                mainPuzzle[i][j] = tempCell;
            }
            if(mistakeCellCount > 0) {
                document.getElementById("sudokuText").innerHTML = `<b>${mistakeCellCount}</b> mistake${(mistakeCellCount === 1) ? "" : "s"} found and highlighted.`;
                setTimeout(() => {for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) sudokuCells[i * 9 + j].classList.remove("sudokuMistakeHighlight");}, 2000);
                setTimeout(defaultText, 2000);
                setTimeout(() => {letCheck = true;}, 2000);
            }
            else if(JSON.stringify(mainPuzzle) !== JSON.stringify(solutionBoard)) {
                document.getElementById("sudokuText").innerHTML = "No mistakes were found. Continue!";
                setTimeout(defaultText, 2000);
                setTimeout(() => {letCheck = true;}, 2000);
            }
            else {
                document.getElementById("sudokuText").innerHTML = "<b>Congrats! Puzzle is complete!</b>";
                document.getElementById("sudokuText").classList.add("sudokuTextBlink");
                for(var i = 0; i < 9; i++) for(var j = 0; j < 9; j++) {
                    var sudokuCell = sudokuCells[i * 9 + j];
                    sudokuCell.dataset.readonlycell = "true";
                    clearInterval(timer);
                    timeRun = false;
                }
            }
        }
    });
    document.getElementById("sudokuRevealButton").addEventListener('mousedown', (event) => {
        event.preventDefault();
        if(focusCell) {
            focusCell.focus();
            writeButtonChar(focusCell, "Delete");
            writeButtonChar(focusCell, solutionBoard[focusCell.dataset.cellrow][focusCell.dataset.cellcol].toString());
            focusCell.dataset.readonlycell = "true";
        }
    });
    document.getElementById("sudokuResetButton").addEventListener('click', (event) => {
        document.getElementById("sudokuText").classList.remove("sudokuTextBlink");
        resetTime();
        mainPuzzle = structuredClone(resetBoard);
        renderBoard();
        focusCell = null, letCheck = true;;
    });
    document.getElementById("sudokuNewButton").addEventListener('click', (event) => {
        document.getElementById("sudokuText").classList.remove("sudokuTextBlink");
        resetTime();
        level = ["easy", "medium", "hard", "expert"][Math.floor(Math.random() * 4)];
        symmetric = Math.floor(Math.random() * 2);
        newPuzzle();
        focusCell = null, letCheck = true;;
    });
})(); 