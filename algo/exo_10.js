for(let i = 0; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log('foobar')
    } 

    if(i % 5 === 0) {
        console.log('bar')
    }

    if(i % 3 === 0) {
        console.log('foo')
    }
}