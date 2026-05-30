const prompt = require('prompt-sync')();

const Vector = {
    balance: 10000,
    infrastructure: 'VISA',
    limitCard: 30000,
    amount: 0,

    helloScreen: function() {
        let processBank = ["1-) Withdraw Money", "2-) Deposit Money", "3-) Cash Advance"]
        console.log(`Hello! This is your mini bank app. Please specify the action you wish to perform using a number?`)
        console.log(processBank)
    },

    checkSelection: function() {
        let answer;
        console.log(`Which do process you want?`)

        while (answer !== '1' && answer !== '2' && answer !== '3') {
            answer = prompt(`Your choice: `)

            if (answer === '1') {
                console.log(`You are being redirected to the "WITHDRAW MONEY" process, please wait a few seconds...`)
                setTimeout(() => {
                    this.numberOne()
                }, 3000)
                return;
            }

            else if (answer === '2') {
                console.log(`You are being redirected to the "DEPOSIT MONEY" process, please wait a few seconds...`)
                setTimeout(() => {
                    this.numberTwo()
                }, 3000)
                return;
            }

            else if (answer === '3') {
                console.log(`You are being redirected to the "CASH ADVANCE" process, please wait a few seconds...`)
                setTimeout(() => {
                    this.numberThree()
                }, 3000)
                return;
            }

            else {
                console.log(`An error has occurred, please try again!`)
            }
        }
    },

    /* -------------------------------------------THREE OPERATING ZONES--------------------------------------------------- */

    numberOne: function () {
        console.log(`How much money do you want to withdraw?`)

        while (true) {
            this.amount = Number(prompt(`Amount: `))

            if (this.amount !== Number(this.amount)) {
                console.log(`Please enter only a numerical value!`)
            }

            else if (this.balance < this.amount || this.amount <= 0) {
                console.log(`Your balance does not match the amount you entered, please enter a lower amount!`)
            }

            else {
                console.log(`Your withdrawal request for ${this.amount} is being processed, please wait...`)
                setTimeout(() => {
                    this.resultOne()
                }, 3000)
                return;
            }
        }
    },

    numberTwo: function() {
        console.log(`WARNİNG! You can only deposit amounts between 10 and 50,000 💰`)
        console.log(`How much money do you want to deposit?`)

        while (this.amount < 10 || this.amount > 50000 || this.amount !== Number(this.amount)) {
            this.amount = Number(prompt(`Amount: `))

            if (this.amount !== Number(this.amount)) {
                console.log(`Please enter only a numerical value!`)
            }

            else if (this.amount < 10 || this.amount > 50000) {
                console.log(`You can only deposit amounts between 10 and 50,000`)
            }

            else {
                console.log(`Your deposit request for ${this.amount} is being processed, please wait...`)
                setTimeout(() => {
                    this.resultTwo()
                }, 3000)
                return;
            }
        }
    },

    numberThree: function() {
        console.log(`WARNING! You can only withdraw a maximum of your card limit as a cash advance.`)
        console.log(`How much cash advance do you want to receive?`)

        while (this.amount < this.limitCard || this.amount > this.limitCard || this.amount !== Number(this.amount)) {
            this.amount = Number(prompt(`Amount: `))

            if (this.amount !== Number(this.amount)) {
                console.log(`Please enter only a numerical value!`)
            }

            else if (this.amount > this.limitCard || this.amount <= 0) {
                console.log(`Please enter only an amount that matches your card limit!`)
            }

            else {
                console.log(`Your cash advance request for ${this.amount} is being processed, please wait...`)
                setTimeout(() => {
                    this.resultThree()
                }, 3000)
                return;
            }
        }
    },

    /* ---------------------------------------------THREE RESULT ZONES---------------------------------------------------- */

    resultOne: function() {
        this.balance -= this.amount;
        console.log(`Your withdrawal request of ${this.amount} has been successfully processed!`)
        console.log(`Your balance now is: ${this.balance}`)
    },

    resultTwo: function() {
        this.balance += this.amount;
        console.log(`Your deposit request of ${this.amount} has been successfully processed!`)
        console.log(`Your balance now is: ${this.balance}`)
    },

    resultThree: function() {
        this.limitCard -= this.amount;
        console.log(`\nYour cash advance request of ${this.amount} has been successfully processed!`)
        console.log(`Your limit of your card now is: ${this.limitCard}`)
    }
}

console.log(`\nYour Balance: ${Vector.balance}`)
console.log(`Your Infrastructure: ${Vector.infrastructure}`)
console.log(`Limit of Your Card: ${Vector.limitCard} \n`)
Vector.helloScreen()
console.log(`\n`)
Vector.checkSelection()