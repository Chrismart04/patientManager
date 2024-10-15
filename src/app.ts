import './style.css'
import { pacienteInput, acompananteInput, emailInput, fechaInput, sintomasInput, formulario } from './selectores'
import { datosCita, submitCita } from './funciones'

// Eventos
pacienteInput.addEventListener('change', datosCita)
acompananteInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)
formulario.addEventListener('submit', submitCita)