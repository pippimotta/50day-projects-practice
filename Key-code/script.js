const insert = document.getElementById('insert')




window.addEventListener('keydown',(e)=> {
  var eventKey = e.key;
  var eventKeyCode = e.keyCode;
  var eventCode = e.code;
  insert.innerHTML = `
  <div class="key">
    ${eventKey}
    <small>event.key</small>
  </div>
    <div class='key'>
      ${eventKeyCode}
      <small>event.keyCode</small>
  </div>
  <div class='key'>
    ${eventCode}
    <small>event.code</small>
  </div> `
})
