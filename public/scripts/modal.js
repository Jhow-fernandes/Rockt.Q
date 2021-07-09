export default function Modal(){

  const modalWapper =  document.querySelector('.modal-wrapper');
  const cancelButton = document.querySelector(".button.cancel");

  cancelButton.addEventListener("click", close);

  function open(){
    //FUNCIONALIDADE DE ATRIBUIR A CALSSE ACTIVE PARA A MODAL
    modalWapper.classList.add("active");
  }
  function close(){
    // FUNCIONALIDADE DE REMOVER A CALSSE ACTIVE DO MODAL
    modalWapper.classList.remove("active");
  }

  return {
    open,
    close
  };
}