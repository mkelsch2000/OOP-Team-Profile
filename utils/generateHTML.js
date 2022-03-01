// function to iterate over the data array returning each html card


  

module.exports = arrayData => {
  
  let workers = arrayData.join(" ")
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Employees</title>
  </head>

  <body>
    <header>
        <h1 class="headerText">Team Profile</h1>
    </header>
    
    <section class="container mt-4">
      <div class="row justify-content-center">
      ${workers}
      </div>

    </section>
  </body>
  </html>
  `
}