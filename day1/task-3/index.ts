function indexOf(mainString: string, subString: string): number {
    const mainLength = mainString.length;
    const subLength = subString.length;

    if (subLength === 0) return 0;

    for (let i = 0; i <= mainLength - subLength; i++) {
        let j;

        for (j = 0; j < subLength; j++) {
            if (mainString[i + j] !== subString[j]) { 
                break;
            }
        }
       
        if (j === subLength) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf("Клякса", "кря"));
console.log(indexOf("abcd", "efg"));
console.log(indexOf("hello world", "world"));
console.log(indexOf("hello", ""));