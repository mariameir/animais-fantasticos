// Script para exibir tooltip ao passar o mouse sobre as imagens
function initTooltip(){
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
}
initTooltip()


//navegação entra tabs
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');//descricao
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
  
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      });
    });
  }
}
initTabNav()

function initAcordion(){

const accordionList = document.querySelectorAll('.js-accordion dt');

if(accordionList.length){
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion(){
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item)=>{
  item.addEventListener('click', activeAccordion);

});
}
}
initAcordion()