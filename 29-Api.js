async function obtenerDatos(){
    const url = "https://rickandmortyapi.com/api/character/8"
    const request = await fetch(url)
    if(!request.ok){
        throw new Error
    }
    const data = await request.json()
    console.log(data)
    console.log(data.id)
    console.log(data.image)
    console.log(data.location.name)
}
obtenerDatos()
