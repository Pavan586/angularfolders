export class ShowPlayers {
    pid:number;
    pemail:string;
    pname:string;
    pcategory:string;
    pcountry:string;
    page:number;
    pbudget:number;

constructor(pid:number,pname:string,pemail:string,pcategory:string,pcountry:string,page:number,pbudget:number) {
    this.pid=pid;
    this.pname=pname;
    this.pemail=pemail;
    this.pcategory=pcategory;
    this.pcountry=pcountry;
    this.page=page;
    this.pbudget=pbudget;
}
}