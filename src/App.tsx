
function App() {
 
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

  return (
    <>
      
    </>
  )
}

export default App
