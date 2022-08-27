export interface User {
    AllowedTwoFactorTypes?: string;
    CompanyName?: string;
    Email: string;
    Features: any[];
    FirstName?: string;
    LastLocationId?: number;
    LastName?: string;
    Locations?: any[];
    Message?: string;
    Permissions: any[];
    Preferences: any[];
    RefreshToken: string;
    Status: number;
    TimeZoneInfo?: string;
    Token: string;
    TwoFactorType?: string;
    UserType?: string;
}
