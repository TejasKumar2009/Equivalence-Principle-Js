
box1 = document.getElementById("box1")
box2 = document.getElementById("box2")
list = document.getElementById("list")
result = document.getElementById("result")



function selectedOption(selectedOptionName) {
    console.log("HHHH")
    
fetch('data.json')
.then(response => response.json())
.then(data => {
    data.PandS.forEach(element => {
        if (element.name == selectedOptionName.id){
            console.log(element)
            
            box2.style.display = "flex"

            result.innerHTML = `The acceleration due to gravity (g) on ${element.name} is ${element.gravity} m/s² By Equivalence principle if a spaceship will accelerate with ${element.gravity} m/s² in the space, the apparent gravitational acceleration will be same as the ${element.gravity} m/s². Simply, the apparent gravitational force will be same in this spaceship as that of the ${selectedOptionName.id} for short distances.`

            return;
            
        }
    });

})
.catch(error => console.log(error));
    
}


function setListContent(listData, listElement) {
    listData.forEach(listItem => {
        
        listElement.innerHTML = `${listElement.innerHTML}<li  class="dropdown-item" id="${listItem.name}" onclick="{selectedOption(${listItem.name})}">${listItem.name}</li>`
    });
}

fetch('data.json')
  .then(response => response.json())
  .then(data =>{ setListContent(data.PandS, list)
})
  .catch(error => console.error('Error loading JSON:', error));




