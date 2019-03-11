var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

var familyBankValues = {
    familyMembers: {
        Mother: {
            "account number": 8096291,
            accountBalance: 10000000
        },
        Father: {
            "account number": 8096292,
            accountBalance: 9999999
        },
        Sister: {
            "account number": 8096293,
            accountBalance: 10000
        },
        "Step Brother": {
            "account number": 8096292,
            accountBalance: 15000
        }
    }
}

//1)
console.log(asia.countries.India.Mumbai.population)

//2)
console.log(asia.countries.China.Beijing.population)

//3)
console.log(asia.countries.China['Hong Kong'].population)

//4)
console.log(familyBankValues.familyMembers.Mother['account number'])

//5)
console.log(familyBankValues.familyMembers.Father.accountBalance)

//6)
let stepBrother = [familyBankValues.familyMembers['Step Brother'].accountBalance, familyBankValues.familyMembers['Step Brother']['account number']]
console.log(stepBrother);

let accountDetails = [];

accountDetails.push(familyBankValues.familyMembers['Step Brother'].accountBalance);
accountDetails.push(familyBankValues.familyMembers['Step Brother']['account number']);
console.log(accountDetails);