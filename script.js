// Script para exibir tooltip ao passar o mouse sobre as imagens
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const tooltipText = tooltip.querySelector(".tooltiptext");
  tooltip.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    tooltipText.style.top = mouseY + "px";
    tooltipText.style.left = mouseX + "px";
  });
  tooltip.addEventListener("mouseenter", () => {
    tooltipText.style.visibility = "visible";
    tooltipText.style.opacity = "1";
  });
  tooltip.addEventListener("mouseleave", () => {
    tooltipText.style.visibility = "hidden";
    tooltipText.style.opacity = "0";
  });
});

//navegação entra tabs
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');//descricao

function activeTab(index){
  tabContent.forEach((section)=>{
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index)=>{
  itemMenu.addEventListener('click',function(){
    activeTab(index);
  });
});