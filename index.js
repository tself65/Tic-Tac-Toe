

StartGame(); 

function StartGame() {

    let board = $(`#board`); 
    let count = 1; 
    let array = new Array(9); 
    let modalReset = $(`#modalReset`); 
    let resetButton = $(`#reset`)
    resetButton.on('click', () => handleReset()); 
    modalReset.on('click', () => handleReset());
    let X = "X"; 
    let O = "O"; 

for (let x = 0; x <= 2; x++) {
    let row = $(`<div class="row w-50 mx-auto">`); 
    for (let y = 0; y <= 2; y++) {
        let square = $(`<div class="col-sm">`); 
        square.text("."); 
        let idNum = count; 
        square.attr("id", idNum); 
        square.on('click', () => handleClick(idNum)); 
        row.append(square); 
        count++; 
        
    }
    board.append(row); 
} 
  
    let firstPlayer = X; 
    let currentPlayer = firstPlayer; 
    $(`.instructions`).text(`${currentPlayer}'s start the Game!`);
    
    let turns = 0; 

    const handleClick = (square) => { 
        if(array[square-1] !== undefined) {
            return;  
        } 
        turns++;
        console.log(turns);  
        let boxToChange = $(`#${square}`); 
        boxToChange.text(currentPlayer);
        array[square -1] = currentPlayer; 
        currentPlayer = currentPlayer === X ? O : X; 

        $(`.instructions`).text(`${currentPlayer} make your move!`); 

        if(playerHasWon() !==false) {
            $(`.instructions`).text(""); 
            currentPlayer = array[square-1] + " is the Winner!"; 
            document.getElementById("winner").innerHTML = currentPlayer; 
            $(`.modal`).modal('show'); 
        }  else if (turns >= 9) {
            $(`.instructions`).text("It's a Draw!"); 
        }
       
  
    } 

  

    const winningCombos = [
        [0,1,2], 
        [3,4,5],
        [6,7,8], 
        [0,3,6],
        [1,4,7], 
        [2,5,8],
        [0,4,8], 
        [2,4,6]
        
    ]

    function playerHasWon() {
        for (const condition of winningCombos) {
            let [a,b,c] = condition

            if(array[a] && (array[a] == array[b] && array[a] == array[c])) {
                return [a,b,c]; 
                
            }
        }
        return false; 
    } 

   
  
    const handleReset = () => {
        window.location.reload(); 
    }

    
}
