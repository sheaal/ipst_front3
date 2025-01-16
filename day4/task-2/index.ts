type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};

type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];

function aggregateUsersWithGadgets(users: UserWithGadget[]): UserWithGadgets[] {
    const userMap: {[key:string]: UserWithGadgets[]} = {};

    users.forEach(user => {
        const {id, name, gadget} = user;

        if(!userMap[id]) {
            userMap[id] = {
                id,
                name,
                gadgets: [],
            };
        }
        userMap[id].gadgets.push(gadget);
    });

    return Object.values(userMap);
}

const output: UserWithGadgets[] = aggregateUsersWithGadgets(input);
console.log(output);