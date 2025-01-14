function identicalLetters() {
    const str1 = prompt("Введите первую строку:");
    const str2 = prompt("Введите вторую строку:");

    if (str1 === null || str2 === null) {
        console.log("Операция отменена.");
        return;
    }

    const result: string[] = [];
    const set1 = new Set(str1);

    for (const char of str2) {
        if (set1.has(char) && !result.includes(char)) {
            result.push(char);
        }
    }

    console.log("Одинаковые символы:", result.join(''));
}

identicalLetters();