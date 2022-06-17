const firstRect = document.getElementsByClassName("color-1")

document.getElementById("color-form").addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event)
    // const colorCode = document.getElementById("color-code").value("
    let colorCode = document.getElementById("hex-code").value
    console.log(colorCode)
    let colorCodeArr = colorCode.split("")
    console.log(colorCodeArr)
    let badElem = colorCodeArr.shift()
    console.log(colorCodeArr)
    // colorCodeArr = colorCodeArr.shift()
    // console.log(colorCodeArr)
    colorCode = colorCodeArr.join('')
    console.log(colorCode)




    const mode = document.getElementById("mode").value
    // const data = {
    //     colorCode: colorCode
    // }
    const options = {
        method: "GET"
    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&count=5&mode=${mode}`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < 5; i++){
                console.log(data.colors[i].hex.value)
                document.getElementById(`color-${i}`).style.background = data.colors[i].hex.value;
                let cleanHexName= data.colors[i].hex.clean;
                document.getElementById(`color-${i}`).innerHTML = `
                <h1>${cleanHexName}</h1>
                `
            }
        })
    

})