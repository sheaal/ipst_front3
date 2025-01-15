function fakeApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const data = [
                {
                    id: "1",
                    name: "Alice Smith",
                    phone: "+1234567890",
                    email: "alice@example.com",
                    location: "New York",
                    status: "active",
                },
                {
                    id: "2",
                    name: "Pip Osha",
                    phone: "+0987654321",
                    email: "pip@example.com",
                    location: "Los Angeles",
                    status: "active",
                },
                {
                    id: "3",
                    name: "Bobr Keku",
                    phone: "+1122334455",
                    email: "bobr@example.com",
                    location: "Chicago",
                    status: "delete",
                },
            ];

            resolve(data);
        }, 2000);
    });
}

function fetchFakeApi() {
    return fakeApi().then((data) => {
        return {
            ok: true,
            json: () => Promise.resolve(data),
        };
    });
}

async function getData() {
    try {
        const response = await fetchFakeApi();
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

getData()
    .then((data) => {
        console.log("Полученные данные:", data);
    })
    .catch((error) => {
        console.error("Ошибка:", error);
    });