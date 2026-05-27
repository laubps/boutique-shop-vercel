// Validación del formulario de contacto
const form = document.querySelector('.contact-form')

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nombre = document.getElementById('nombre')
    const correo = document.getElementById('correo')
    const mensaje = document.getElementById('mensaje')
    let valid = true

    ;[nombre, correo, mensaje].forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = '#e05555'
        valid = false
      } else {
        field.style.borderColor = '#6abf6a'
      }
    })

    if (valid) {
      alert('¡Mensaje enviado! Nos pondremos en contacto pronto.')
      form.reset()
      ;[nombre, correo, mensaje].forEach((f) => (f.style.borderColor = ''))
    }
  })
}
