//Big O introduction

const nemo = ['nemo']
const more = ['sam', 'tom', 'libby', 'ma', 'pa']
const large = new Array(1000).fill('nemo')


function findNemo(array){
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found NEMO!')
        } else {
            console.log('unfound')
        }
    }
    let t1 = performance.now();
    console.log('Time ' + (t1-t0)+'ms')
}

findNemo(large);