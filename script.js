const result = document.querySelector(".result")

const humanScore = document.querySelector(".human-score")

const alexaScore = document.querySelector(".alexa-score")

const GAME_OPTIONS = {
    PEDRA: 'rock',
    PAPEL: 'paper',
    tesoura: 'scissors'
}

let humanScoreNanber = 0

let alexaScoreNanber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, alexa())
}

const alexa = () => {
    const choice = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.tesoura]
    const remdonNunber = Math.floor(Math.random() * 3)

    return choice[remdonNunber]
}

const playTheGame = (human, alexa) => {
    console.log('humano:' + human, 'maquina:' + alexa)

    if (human === alexa) {
        result.innerHTML = "empate😎"
    }


    else if (
        (human === GAME_OPTIONS.PAPEL && alexa === GAME_OPTIONS.PEDRA) ||
        (human ===GAME_OPTIONS.PEDRA && alexa ===GAME_OPTIONS.tesoura) ||
        (human ===GAME_OPTIONS.tesoura && alexa === GAME_OPTIONS.PAPEL)) {



        humanScoreNanber++
        humanScore.innerHTML = humanScoreNanber
        result.innerHTML = "😀voce ganho"
    }


    else {
        alexaScoreNanber++
        alexaScore.innerHTML = alexaScoreNanber
        result.innerHTML = "david ganhou😡"
    }
}