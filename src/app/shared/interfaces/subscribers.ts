export interface Subscribers {
    Count: number;
    Data: Subscriber[];
}

export interface Subscriber {
    PublicId?: string;
    Area?: string;
    Name: string;
    Email?: string;
    PhoneCodeAndNumber?: string;
    CountryName?: string;
    JobTitle?: string;
    SubscriptionStateDescription?: string;
    CountryCode?: string;
    PhoneCode?: string;
    PhoneNumber?: string;
    Topics?: any[];
}