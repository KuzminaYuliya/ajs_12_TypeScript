import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        return this.items.reduce((acc, item) => acc + Number(item.price), 0);
    }

    discount(discountAmount: number): number {
        return this.totalSum() * discountAmount / 100;
    }

    finalTotalSum(discountValue: number): number {
        return this.totalSum() - this.discount(discountValue);
    }

    delete(id: number): void {
        const index = this._items.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}
