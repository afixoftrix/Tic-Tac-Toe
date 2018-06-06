export const initState = {
    users: {
        human: '',
        computer: ' ',
        selectionMade: false
    },
    score: {
        human: 0,
        computer: 0
    },
    winnerIs: "",
    gameover: false,
    turn: "human",
    memory: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    computerChoices: [],
    humanChoices: [],
    winConditions: [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ]
}