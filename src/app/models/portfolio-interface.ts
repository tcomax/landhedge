import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';
import { OrderClass } from './order-class';

export interface PorfolioInterface {
    id: number;
    type: string;       // {sell/buy}
    owner: UserClass;
    land: LandClass;
    quantity: number;
    value: number; // total value of land;
    status: string; 
}
