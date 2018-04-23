const promise = require('./promise');

function show(num, time) {
    console.log(`promise操作${num}`);
    return new promise(function(resolve) {
        console.log(`异步操作${num}`);
        setTimeout(function() {
            resolve(num);
            console.log(`异步操作${num}完成`);
        }, time)
    }, num);
}
show(1, 1000).then(v => { console.log(v); return show(2, 1000) }).then(v => console.log(v))