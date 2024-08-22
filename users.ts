import type { registred } from './types/core';
import { Role } from './types/core';

export const users:Map<string, registred> = new Map([
    [
        '3lAndY', {
            password: '4343',
            role: Role.OWNER 
        }
    ],
]);