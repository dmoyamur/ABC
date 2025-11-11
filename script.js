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
const imagen=document.querySelector("galeria img");
imagen.array.forEach((img) => {
    img.style.borderColor=colorAleatorio();
    img.style.boxshadow="0 0 18px ${colorAleatorio()}";
});
