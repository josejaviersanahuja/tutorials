import {useState} from 'react'

export default function useAbrirCerrar() {
    const [open, setOpen] = useState([false, false, false, false, false,false,false,false])

  const abrirCerrar = (n) => {
    let temp = open.map(e => e)
    temp[n] = !temp[n]
    setOpen(temp)
  }
    
    return {open, setOpen, abrirCerrar}
}









