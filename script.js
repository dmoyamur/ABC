const img=document.getElementById("galeria")

function colorAleatorio(img) {
  const colores = ["green", "blue", "red"];
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}
function colorfondo(c){
    c.style.background=colorAleatorio();
    c.style.background=colorAleatorio();
    c.style.border=colorAleatorio();
}
const t=document.getElementById("titulo")
t.addEventListener("click",()=>{
    colorfondo(t);
})
const imagen = document.querySelectorAll('#galeria img');
imagen.forEach((img) => {
    img.addEventListener('click', () => {
        img.style.borderColor = colorAleatorio();
        img.style.boxShadow = `0 0 18px ${colorAleatorio()}`;
    });
})