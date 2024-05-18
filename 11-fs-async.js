const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {  // this is the callaback function
    if (err) {
        console.log(err)
        return
    }
    const first = result; // save the result of this callback function to the constant first
    readFile('./content/second.txt', 'utf-8', (err, result) => { // read the second file
        if (err) {
            console.log(err)
            return
        }
        const second = result // save the result to the constant second
        writeFile(
            './content/result-async.txt',
            `here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task...')
            }
        )
    })
})

// sync vs async:
// sync: everything happens line by line
// async: task is offloaded and the next task begins to execute