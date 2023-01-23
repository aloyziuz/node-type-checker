export function IsNotNullOrUndefined<T>(obj: T | null | undefined): obj is T;
export function IsValidDate(date: any): date is Date;
export function IsValidNumber(num: any): num is number;
export function IsNonEmptyString(str: string | null | undefined): str is string;
