interface User{
    name: string;
    email: string;
    isActive: boolean;
}

const cleanUserData = async (users: User[]): Promise<User[]> => {
    if (Math.random() < 0.1) {
        throw new Error("Произошла случайная ошибка при обработке данных.");
    }

    return users
        .filter(user => user.isActive)

        .map(user => ({
            name: user.name.trim().toLowerCase(),
            email: user.email.toLowerCase(),
            isActive: user.isActive
        }));
};

const users: User[] = [
    { name: " Alice ", email: "ALICE@EXAMPLE.COM", isActive: true },
    { name: " Bobr ", email: "bobr@example.com", isActive: false },
    { name: " Pip ", email: "pip@EXAMPLE.COM", isActive: true },
];

(async () => {
    try{
        const cleanedUserData = await cleanUserData(users);
        console.log("Обработанные пользователи:", cleanedUserData);
    } catch(error) {
        console.error("Ошибка:", error.message);
    }
})();