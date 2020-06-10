const canvas= document.getElementById("Podloga");
const ctx = canvas.getContext("2d");
const VelicinaKvadrata = 10;
const Redovi = canvas.height / VelicinaKvadrata;
const Kolone = canvas.width / VelicinaKvadrata; 

var Kevin;
var boba;
document.getElementById("gumb").addEventListener("click",function() {
    Kevin = new kevinZmija();
    boba = new Hrana();
    boba.OdaberiLokaciju();

    Kevin.prikaz();

    window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        boba.Prikaz();
        Kevin.update();
        Kevin.prikaz();

        if(Kevin.pojede(boba)){
            boba.OdaberiLokaciju();
        }
    }, 250)
    document.getElementById("gumb").disabled = true;
});

window.addEventListener('keydown', ((evt)=> {
    const putanja = evt.key.replace('Arrow', '');
    Kevin.promijeniPutanju(putanja);
}))