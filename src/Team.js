const makeTeamHtml = (team) => {
  const makeManagerHtml = (manager) => {
    return `
  <div class="col-4">
    <div class="card employee-card m-2">
      <div class="card-header bg-secondary text-light">
        <h2 class="card-title">${manager.getName()}<h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item'>Email:
            <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
          </li>
          <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  };

  const makeEngineerHtml = (engineer) => {
    return `
    <div class="col-4">
      <div class="card employee-card m-2">
        <div class="card-header bg-secondary text-light">
          <h2 class="card-title">${engineer.getName()}<h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item'>Email:
              <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </li>
            <li class="list-group-item">Github Username: ${engineer.getGithub()}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  };

  const makeInternHtml = (intern) => {
    return `
      <div class="col-4">
        <div class="card employee-card m-2">
          <div class="card-header bg-secondary text-light">
            <h2 class="card-title">${intern.getName()}<h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">${intern.getId()}</li>
              <li class="list-group-item'>Email:
                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
              </li>
              <li class="list-group-item">School Name: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
  };

  const html = [];

  console.log(html);

  html.push(
    team
      .filer((employee) => employee.getRole() === "Manager")
      .map((manager) => makeManagerHtml(manager))
  );
  console.log(html);
  html.push(
    team
      .filer((employee) => employee.getRole() === "Engineer")
      .map((engineer) => makeEngineerHtml(engineer))
      .join("")
  );
  console.log(html);
  html.push(
    team
      .filer((employee) => employee.getRole() === "Intern")
      .map((intern) => makeInternHtml(intern))
      .join("")
  );
  console.log(html);

  return html.join("");
};

module.exports = (Team) => {
  return `
  <!doctype html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta name="veiwport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel-"stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>My DEV Team</title>
  </head>
  
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-primary text-light">
          <h1 class="text-center">My DEV TEam</h1>
          <hr class="my-4">
          <p class="text-center'> This HTML file has beeen dynamically generated using this very Node.js command line app</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class=row d-flex justify-content-center">
      ${makeTeamHtml(Team)}
      </div>
    </div>
    
    
    </body>
    
    </html>`;
};
