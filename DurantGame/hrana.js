function Hrana(){
    this.x;
    this.y;

    this.OdaberiLokaciju = function(){
        this.x = (Math.floor(Math.random()*Redovi - 1)+1)*VelicinaKvadrata;
        this.y = (Math.floor(Math.random()*Kolone - 1)+1)*VelicinaKvadrata;
    }

    this.Prikaz = function(){
        ctx.fillStyle= "#26282A";
        ctx.fillRect(this.x, this.y, VelicinaKvadrata, VelicinaKvadrata);
    }
}