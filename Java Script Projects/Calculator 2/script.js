function add (num){
    let input =  document.getElementById('output')
    console.log(num)
    input.value += num
}
function equals (){
    let input =  document.getElementById('output').value
    if(input.indexOf("+")!= -1){
       let plus = parseInt(input.split("+")[0]) + parseInt(input.split("+")[1])
       console.log(plus.toString())
       var add = document.getElementById('output')
       add.value = plus.toString()
    }
    if(input.indexOf("-")!= -1){
       let plus = parseInt(input.split("-")[0]) - parseInt(input.split("-")[1])
       console.log(plus.toString())
       var add = document.getElementById('output')
       add.value = plus.toString()
    }
    if(input.indexOf("*")!= -1){
       let plus = parseInt(input.split("*")[0]) * parseInt(input.split("*")[1])
       console.log(plus.toString())
       var add = document.getElementById('output')
       add.value = plus.toString()
    }
    if(input.indexOf("/")!= -1){
       let plus = parseInt(input.split("/")[0]) / parseInt(input.split("/")[1])
       console.log(plus.toString())
       var add = document.getElementById('output')
       add.value = plus.toString()
    }
    if(input.indexOf("**")!= -1){
       let plus = parseInt(input.split("**")[0]) ** parseInt(input.split("**")[1])
       console.log(plus.toString())
       var add = document.getElementById('output')
       add.value = plus.toString()
    }
}
function AC (){
    let input =  document.getElementById('output')
    input.value = ""
}

function log (){
    let input =  document.getElementById('output')
    input.value += "Math.log10("
}