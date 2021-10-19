export default class Inventory{

    constructor(){
        this._start = null;
        this._inventory = new Array();
    }

    addProduct(product){
        if(this._start == null){
            this._start = product;
            return true;
        }

        let exist = this._searchByCode(product.getCode());
        if(!exist){
            let last = this._getLast();
            last.setNext(product);
            return true;
        }

        return false;
    }
/*
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
    }*/

    _getLast(){
        let temp = this._start;
        while(temp.next != null){
            temp = temp.next;
        }

        return temp;
    }

    _searchByCode(code){
        let temp = this._start;
        while(temp != null){
            if(temp.getCode() == code){
                return true;
            }

            temp = temp.next;
        }

        return false;
    }

    searchProductByCode(code){
        let exist = this._searchByCode(code);
        if(!exist){
            return null;
        }

        let temp = this._start;
        while(temp.getCode() != code){
            temp = temp.next;
        }

        return temp;
    }

    deleteProductByCode(code){
        let exist = this._searchByCode(code);
        if(!exist){
            return null;
        }

        let temp = this._start;
        if(temp.getCode() == code){
            this._start = temp.next;
            return temp;
        }

        let prev = null;
        while(temp.getCode() != code){
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        temp.next = null;
        return temp;
    }

    list(){
        let temp = this._start;
        if(temp == null){
            return "Inventario vacío.";
        }

        let i = 1;
        let list = "";
        while(temp != null){
            list += `<i>${i}</i>. Código: <b>${temp.getCode()}</b>, nombre: ${temp.getName()}. `;
            temp = temp.next;
            i++;
        }

        return list;
    }

    tsil(){
        let temp = this._start;
        if(temp == null){
            return "Inventario vacío.";
        }

        let i = 1;
        let tsil = "";
        while(temp != null){
            tsil = `<i>${i}</i>. Código: <b>${temp.getCode()}</b>, nombre: ${temp.getName()}. ` + tsil;
            temp = temp.next;
            i++;
        }

        return tsil;
    }
/*
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
    }*/
}