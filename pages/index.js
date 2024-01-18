import { useEffect, useState } from "react"

export default function Home() {

  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    let alumnosAux = getAlumnos()
    getAlumnos(alumnosAux)
  }, [])



  return (
    <>
      <div>
        <h1>Somos GOD</h1>
      </div>

      <div>
        {
          alumnos.map(alumno => {
            return <AlumnoInfoComponent key={alumno.id} nombreAlumno={alumno.nombre}/>
          })
        }
        <AlumnoInfoComponent nombreAlumno={'CodeSpace'} emailAlumno={'codeSpace@codespace.com'}/>
      </div>
    </>
  )
}
