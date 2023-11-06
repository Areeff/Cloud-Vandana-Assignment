
function ReverseEachWord(s) {
    //using spread operator converted string to array
    let chars = [...s];
    let start = 0;

    for (let i = 0; i < chars.length; i++) {
        //conditions where we can find two pointers to reverse the array
        if (chars[i] === ' ' || i === chars.length - 1) {
            let end = (i === chars.length - 1 && chars[i] !== ' ') ? i: i-1;
            //reversing array;
            while (start < end) {
                let temp=chars[start];
                chars[start]=chars[end];
                chars[end]=temp;
                start++;
                end--;
            }
            start = i + 1;
        }
    }
    return chars.join('');  
};

//user input
let str="stay strong";
console.log(ReverseEachWord(str));


//Time Complexity:O(n);
//Space Complexity:O(n);