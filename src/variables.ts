import { generarId } from "./funciones"
import type { Cita } from './types'

let editando = {
    value: false
}

// Objeto de Cita
const citaObj : Cita = {
    id: generarId(),
    paciente: '',
    acompanante: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}
