export type ResponsiveType = {
    base: string | number;
    md: string | number;
    lg?: string | number;
}

export interface ContactType {
    firstName:string,
    lastName:string,
    email: string,
    phone: string,
    subject:string,
    message:string,
}