
function App() {
 
  //Snack 1
  let data : unknown

  if(typeof data === "string"){
    console.log(data.toUpperCase())
  }else if(typeof data === "number"){
    const res : number = data * 2;
    console.log(res)
  }else if(typeof data === "boolean"){
    if (data === true){
      console.log("Si")
    }else if(data === false){
      console.log("No")
    }
  }else{
    console.log("Tipo non supportato")
  }

  //Snack 2
  type Dipendente = {
    nome : string;
    cognome : string;
    annoNascita : number;
    sesso : "m" | "f"
    anniDiServizio: number[]
  }

  //Snack 3
  type Developer = Dipendente & {
    livelloEsperienza : "Junior" | "Mid" | "Senior",
    linguaggi? : string[],
    certificazioni : string[]
  }

  type ProjectManager = Dipendente & {
    teamSize : number | null,
    budgetGestito?: number,
    stakeholderPrincipali : string[]
  }


  return (
    <>
      
    </>
  )
}

export default App
