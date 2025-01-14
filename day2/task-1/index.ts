const countFilledValues = (obj: Record<string, unknown>, key?: string): number => {
    let count = 0;

    for(key in obj){
        if(obj[key] !== null && obj[key] !== "" && obj[key] !== undefined){
            count++;
        }

    }
    return count;
};

const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "alice@example.com",
    notes: null,
};

console.log(countFilledValues(data));