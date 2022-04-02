function greeting(name){
    alert('hello ' + name)
}

function processUserInput(callback){
    var name = prompt('Please enter your name: ')
    callback(name)
}

processUserInput(greeting)