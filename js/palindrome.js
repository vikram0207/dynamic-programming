const palindrome = (str) => {
    str1 = str.split('').reverse().join('');    
    // console.log(str, str1);
    return str === str1;
}

console.log(palindrome('aaa ff aaa'));
