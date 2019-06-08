// Set html output container
const container = document.querySelector("#container")

// converts message value to html str
const createHTML = (objectFromDataSource) => {
  let htmlString = `
    <div>
      <p>${objectFromDataSource.commitMessage}</p>
    </div>`

  return htmlString
}

// Loop through array of gitObjects
for (let gitObject of githubData){
  
  // Output the commit message for the push event with an id of 8030403992.
  if(gitObject.id ==="8030403992") {
    
    // Add new paramater "commitMessage"
    gitObject.commitMessage = "Commit message for #8030403992: </br>"

    gitObject.commitMessage += gitObject.payload.commits[0].message
    
    // Apply that to the DOM
    container.innerHTML += createHTML(gitObject)
  }
}
