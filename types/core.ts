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
}

export type WsData = {
    nick: string;
    room: string;
    id: number;
    as: () => (ws:any) => void;
  };

  export type Room = {
    name: string,
    value: string,
    maxUsers: number,
    connectedUsers: number
  }