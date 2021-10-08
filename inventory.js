export default class Inventory{

    constructor(){
        this._inventory = new Array();
    }

    addProduct(product){
        let pos = this._searchByCode(product.getCode());
        if(pos == -1){
            this._inventory.push(product);
            this._orderProducts();
            return true;
        }

        return false;
    }

    _orderProducts(){
        if(this._inventory.length == 1){
            return;
        }
        let product = this._inventory[this._inventory.length - 1];
        let a;
        for(let i = 0; i < this._inventory.length; i++){
            if(i == this._inventory.length - 1){
                this._inventory[i] = product;
                return;
            }
            if(product.getCode() < this._inventory[i].getCode()){
                a = this._inventory[i];
                this._inventory[i] = product;
                product = a;
            }
        }
    }

    _searchByCode(code){
        for(let i = 0; i < this._inventory.length; i++){
            if(this._inventory[i].getCode() == code){
                return i;
            }
        }

        return -1;
    }

    searchProductByCode(code){
        let pos = this._searchByCode(code);
        if(pos >= 0){
            return this._inventory[pos]
        }

        return null;
    }

    deleteProductByCode(code){
        let pos = this._searchByCode(code);
        if(pos >= 0){
            let product = this._inventory[pos];
            for(let i = pos; i < this._inventory.length; i++){
                if(i == this._inventory.length - 1){
                    this._inventory[i] = product;
                    let deleted = this._inventory.pop();
                    return deleted;
                }
                this._inventory[i] = this._inventory[i+1];
            }
        }

        return null;
    }

    list(){
        if((this._inventory.length - 1) >= 0){
            let list = "<b>Listado de productos: </b>";
            for(let i = 0; i < this._inventory.length; i++){
                console.log(this._inventory);
                list += `<b>${i+1}</b>. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}. `;
            }
            return list;
        }

        return "Inventario vacío.";
    }

    tsil(){
        if((this._inventory.length - 1) >= 0){
            let tsil = "<b>Listado de produtos(inverso): </b>";
            for(let i = (this._inventory.length - 1); i >= 0; i--){
                tsil += `<b>${i+1}</b>. Código:${this._inventory[i].getCode()}. Nombre:${this._inventory[i].getName()}. `;
            }
            return tsil;
        }

        return "Inventario vacío.";
    }

    insertProduct(product, position){
        if(this._inventory.length < position){
            return false;
        }

        let ab;
        for(position; position <= this._inventory.length; position++){
            if(position == this._inventory.length){
                this._inventory.push(product);
                return true;
            }
            ab = this._inventory[position];
            this._inventory[position] = product;
            product = ab;
        }
    }
}