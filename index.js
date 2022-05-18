// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];

    for (let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        
    }
    return messages

}

function countDown() {
for (let countDown = 10; countDown >= 0; countDown--) 
    console.log(countDown);
}