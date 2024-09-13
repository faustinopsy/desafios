document.addEventListener("DOMContentLoaded", ()=>{
    const historicoCompras = [
        ["notebook", "mouse", "teclado"],
        ["smartphone", "capa de celular", "película"],
        ["notebook", "mochila", "mouse"],
        ["smartphone", "fones de ouvido", "capa de celular"],
        ["teclado", "mouse", "tapete de mouse"]
    ];
    let text ='';
    const main = document.querySelector("main")
    historicoCompras.forEach(listarItem)
    main.innerHTML = text

function listarItem(item, index) {
    text += index + ": " + item + "<br>"; 
}
})