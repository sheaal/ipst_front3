function longestWord() {
    const input = prompt("Введите строку:");

    if (input === null) {
        console.log("Операция отменена.");
        return;
    }

    const words = input.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    console.log("Самое длинное слово:", longest);
}

longestWord();