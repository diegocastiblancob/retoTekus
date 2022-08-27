export interface Subscribers {
    Count: number;
    Data: Subscriber[];
}

export interface Subscriber {
    PublicId: string;
    Area: string;
    Name: string;
    Email: string;
    PhoneCodeAndNumber: string;
    CountryName: string;
}