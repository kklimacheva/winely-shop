const socket = io(window.location.origin);

socket.addEventListener('open', () => {
  console.log('Соединение установлено');
});

socket.on('newProductAdded', (message) => {
  toastr.options.closeButton = true;
  toastr.info(`Wine added with price ${message.price}`, 'New product added');
});

socket.addEventListener('close', (event) => {
  console.log('Соединение закрыто');
});
