// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `

  ${aboutText}
 
  `;
};


const generateProjects = projectsArr => {
  return `
  
      ${projectsArr.filter(({ feature }) => feature)
        .map(({ name, description, languages, link, feature }) => {
          return `

  <div class="col-md-3">
    <div class="card text-center border-primary mb-3" style="width: 18rem;">
        <div class="card-header">${name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${languages.join(', ')}</li>
          <li class="list-group-item">${description}</li>
          <li class="list-group-item">${link}</li>
          <li class="list-group-item"><a href="mailto:${feature}">${feature}</a></li>
        </ul>
    </div>
    </div>

        `;
        })
        .join('')}

  `;
};


module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

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
    <p class="lead">A simple node generated layout</p>
  </div>
</div>

  <body>

<div class="container">
<div class="row">

  <div class="col-md-3">
  <div class="card text-center border-primary mb-3" style="width: 18rem;">
      <div class="card-header">${header.name}</div>
      <div class="card-body>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${header.position}</li>
        <li class="list-group-item">${header.id}</li>
        <li class="list-group-item">${header.github}</li>
        <li class="list-group-item"><a href="mailto:${header.email}">${header.email}</a></li>
      </ul>
      </div>
  </div>
  </div>

   
    ${generateProjects(projects)}


  </div>
  </div>
   <p>${new Date().getFullYear()} by ${header.name}</p>
  
  </body>
  </html>
  `;
};

