type TUserUserName=string;
type TUserID=number;


export interface IUser{
    username:TUserUserName;
    id:TUserID;
}

export interface IUserSchema{
    authData?:IUser;
    _inited:boolean
}