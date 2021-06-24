export class Store {
    _check:Boolean;
    public get(){
        return this._check;
    }

    public set(thecheck: Boolean) {
        this._check = thecheck;
    }

}
