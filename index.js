function adatKezeles(event){
    event.preventDefault()
    let csapatok=document.getElementById("csapatok").value
    document.getElementById("kimenet").innerHTML=`A kedvenc csapatod: ${csapatok}`
}



