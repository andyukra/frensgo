export const enum Role {
    GUEST = 'guest',
    USER = 'user',
    MODERATOR = 'moderator',
    ADMIN = 'administrator',
    OWNER = 'owner',
}

export type User = {
    username:string;
    role:Role;
    ws:any;
    avatar: string|null;
}

export type WsData = {
    nick: string|null;
    room: string|null;
    id: number;
    role: Role,
    as: (ws:any) => void;
    avatar: string|null;
  };

  export type Room = {
    name: string,
    value: string,
    maxUsers: number,
    connectedUsers: number
  }

  //R E G I S T R E D  U S E R S
  export type registred = {
    password: string,
    role: Role
  }