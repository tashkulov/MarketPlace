export type     TUserData={
    username:string;
    password:string;
}

export type TAuthByUserNameSchema=TUserData & {
    isLoading:boolean;
    error:TNullable<string>;
}   