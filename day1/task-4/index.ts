function runLengthEncoding(input: string): string {
    let encoded = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            encoded += input[i] + count;
            count = 1;
        }
    }

    return encoded;
}

function runLengthDecoding(encoded: string): string {
    let decoded = '';

    for (let i = 0; i < encoded.length; i++) {
        const char = encoded[i];
        let countStr = '';

        while (i + 1 < encoded.length && !isNaN(Number(encoded[i + 1]))) {
            countStr += encoded[++i];
        }

        const count = parseInt(countStr);
        decoded += char.repeat(count);
    }

    return decoded;
}

const originalString = "ааааллляляляляяя";
const encodedString = runLengthEncoding(originalString);
console.log("Закодированная строка:", encodedString);

const decodedString = runLengthDecoding(encodedString);
console.log("Декодированная строка:", decodedString);