type SourceData = {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
};

type TargetData = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
};

const source: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

const transformData = (source: SourceData): TargetData => {
    return{
        id: source.user_id,
        name: source.full_name,
        phone: source.contact.phone,
        email: `[${source.contact.email}](<mailto:${source.contact.email}>)`,
        location: `${source.address.city}, ${source.address.zip}`,
        status: source.is_active ? "active" : "inactive",
    };
};

const target: TargetData = transformData(source);

console.log(target);