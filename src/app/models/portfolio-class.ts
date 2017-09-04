import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export class PortfolioClass {
    id: number;
    type: string;       // {sell/buy}
    owner: UserClass;
    land: LandClass;
    quantity: number;
    value: number; // total value of land;
    status: string; 

    constructor(_id: number, _type: string, _owner: UserClass,
                _land: LandClass, _quantity: number, _value: number, _status: string,) {
        this.id = _id;
        this.type = _type;
        this.owner = _owner;
        this.land = _land;
        this.quantity = _quantity;
        this.value = _value;
        this.status = _status;
    }
/*
    getAllOrders(): OrderClass {
        // return baale.getAllOrders();
    }
*/

}
