// const {readFileSync} = require('fs')

const fs = require('fs')

const { readFile, writeFile} = fs

console.log('start')

readFile('./content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err)
        return
    }

    const first = res
    readFile('./content/second.txt', 'utf-8', (err,res) => {
        if(err){
            console.log(err)
            return
        }
    
        const second = res
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second} \n`,
            (err, res) => {
                if(err){
                    console.log(err)
                    return
                }

                console.log('done with this task')
            })
    })
})

console.log('starting new task')

