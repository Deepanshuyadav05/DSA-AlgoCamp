//LEETCODE:509
//Print the fibonacci series till the nTh value
//fibonacci series is the sum of last and second last value, and it starts from 0 and 1 which are starter value
//eg:     0, 0, 1, 2, 3, 5, 8, 13 ....
//index   0  1  2  3  4  5  6  7 ....
//for more refer to notes

function nThFibonacci(n){

    //here we handel edge case if n===0 then we simply print '0'
    if( n === 0){
        console.log(0)
        return ;
    }

    //here we handel second edge case if n === 1 then we print 'o' and '1'
    if ( n >= 1){
        console.log(0)
        console.log(1)
    }

    //now if n>1 then we create 2 variable to store the last value and secLast value
    let secLastFib = 0;
    let lastFib = 1;

    //now we run a loop from i=2 as we have already dealt with n=0 and n=1
    for(let i = 2; i <= n; i++) {

        //here we store the new fibonacci value in new variable 'ans'
        let ans = lastFib + secLastFib;
        console.log(ans)

        //now we update the secLastFib to the lastFib
        secLastFib = lastFib;

        //now we update the lastFib to the ans(latest fib)
        lastFib = ans;
    }
}
nThFibonacci(7);