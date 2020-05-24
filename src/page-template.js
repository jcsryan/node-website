// deconstruct templateData into each object, Manager, Engineer, Intern by calling them at their index
// and assigning a new variable to that call. Then returns the HTML layout for the webpage with those key
//value pairs called to dynamically populate the HTML framework.

module.exports = templateData => {
  const { projects, about, ...header } = templateData;
  managerObj = templateData[0]
  engineerObj = templateData[1]
  engineerObj2 = templateData[2]
  internObj = templateData[3]

  console.log(templateData)


  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">OOP project</h1>
    <p class="lead">A simple node generated layout with objects and jest testing</p>
  </div>
</div>

  <body>

<div class="container">
<div class="row">

  <div class="col-md-3">
  <div class="card text-center border-primary mb-3 bg-info" style="width: 18rem;">
      <div class="card-header">Name: ${managerObj.name}</div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managerObj.id}</li>
        <li class="list-group-item">Office Num:${managerObj.officeNum}</li>
        
        <li class="list-group-item"><a href="mailto:${managerObj.email}">${managerObj.email}</a></li>
      </ul>
      </div>
  </div>
  </div>

  <div class="col-md-3">
  <div class="card text-center border-primary mb-3 bg-info" style="width: 18rem;">
      <div class="card-header">Name: ${engineerObj.name}</div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerObj.id}</li>
        <li class="list-group-item">Github: ${engineerObj.github}</li>
        
        <li class="list-group-item"><a href="mailto:${engineerObj.email}">${engineerObj.email}</a></li>
      </ul>
      </div>
  </div>
  </div>


  <div class="col-md-3">
  <div class="card text-center border-primary mb-3 bg-info" style="width: 18rem;">
      <div class="card-header">Name: ${engineerObj2.name}</div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerObj2.id}</li>
        <li class="list-group-item">Github: ${engineerObj2.github}</li>
        
        <li class="list-group-item"><a href="mailto:${engineerObj2.email}">${engineerObj2.email}</a></li>
      </ul>
      </div>
  </div>
  </div>
  

  <div class="col-md-3">
  <div class="card text-center border-primary mb-3 bg-info" style="width: 18rem;">
      <div class="card-header">Name: ${internObj.name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internObj.id}</li>
        <li class="list-group-item">School: ${internObj.school}</li>
        <li class="list-group-item"><a href="mailto:${internObj.email}">${internObj.email}</a></li>
      </ul>
  </div>
  </div>


 

  </div>
  </div>
   <p>${new Date().getFullYear()} by ${managerObj.name}</p>
  
  </body>
  </html>
  `;
};

