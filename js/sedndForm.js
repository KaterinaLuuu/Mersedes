//собираем нужные данные
const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {  //событие отправки
  event.preventDefault() //что бы страница не перезагружалась после отправки формы

  let data ={} //создали куда будет собираться данные

  for(let {name, value} of form.elements) {  //собираем данные 
    
    if(name) {
      data[name] = value
    }
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {  //адресс куда нужно отправлять данные
    method: 'POST',
    body: JSON.stringify(data)
  })
      .then(response => {
        if(response.status === 200 || response.status === 201) {
          return response.json()
        }    else {
          throw new Error(response.status)
        }
      })
      .then(data => {
        alert('Данные успешно сохранены!')
        form.reset()
      })
     .catch(erroe => {
        console.dir(error);
     })
})