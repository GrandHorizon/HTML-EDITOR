const allButtons = document.querySelectorAll('button');
textField.document.designMode = "On";
let show = false;


for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', () => {
    let cmd = allButtons[i].getAttribute('data-cmd');
    if (cmd == "insertImage" || cmd == "createLink") {
      let url = prompt("Enter the link here: ");
      textField.document.execCommand(cmd, false, url);

      if (cmd == "insertImage") {
        const imgs = textField.document.querySelectorAll('img');
        imgs.forEach(item => {
          item.style.maxWidth = "500px";

        })
      } else {
        const links = textField.document.querySelectorAll('a');
        links.forEach(item => {
          item.target = "_blank";
          item.addEventListener('mouseover', () => {
            textField.document.designMode = "Off";
          });
          item.addEventListener('mouseout', () => {
            textField.document.designMode = "On";
          })
        })
      }
    } else {
      textField.document.execCommand(cmd, false, null)
    }

    if(cmd === "showCode"){
      const textBody = textField.document.querySelector('body');
      if (show) {
        textBody.innerHTML = textBody.textContent;
        show = false;
      }
      else {
        textBody.textContent = textBody.innerHTML;
        show = true;
      }
    }
    
  })
}