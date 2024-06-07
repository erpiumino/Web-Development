<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://use.typekit.net/jtq8ydg.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Riccardo Mordente</title>
</head>
<body>
    <header>
        <div class="navbar">
            <div class="navbar-left">
                <svg height="24" width="24" id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: var(--orange);
                          stroke-width: 0px;
                        }
                        .cls-1:hover{
                            fill: var(--orange-hover);
                        }
                      </style>
                    </defs>
                    <a xlink:href="index.html">
                    <path class="cls-1" d="m485.83,533.85l214.84,360.47h-134.02l-202.67-351.62h-45.95l-48.13,391.95,579.82.91-13.31,105.07H130.04L253.25,39.36h167.77c54.63,0,98.01,4.99,130.12,14.96,31.73,9.24,59.44,26.22,83.05,50.94,44.66,45.78,67.01,104.84,67.01,177.19,0,132.52-71.79,216.33-215.4,251.41h.03Zm-120.71-376.54l-33.23,274.66h58.15c42.82,0,74.75-4.07,95.81-12.2,22.52-8.12,41.35-21.96,56.48-41.53,20.67-27.3,31-59.44,31-96.36,0-43.2-12.45-74.75-37.38-94.69-24.93-19.94-64.15-29.91-117.67-29.91h-53.17v.03Z"/>
                    <path class="cls-1" d="m911.24,436l-65.03,528.09h-123.89l65.03-528.09h123.89Zm38.69-251.15c0,17.94-6.55,33.45-19.61,46.54-13.06,13.08-28.77,19.61-47.09,19.61s-34.19-6.73-47.65-20.19c-13.08-14.2-19.61-30.47-19.61-48.76s6.35-33.81,19.05-46.54c13.08-13.08,28.59-19.61,46.54-19.61s34.19,6.91,47.65,20.75c13.82,13.46,20.75,29.53,20.75,48.21h-.03Z"/>
                    </a>  
                </svg>
                  <div>Riccardo's Portfolio</div>
            </div>
            <div class="navbar-right">
                <a class="clickable" href="index.html">Home</a>
                <a class="clickable" href="aboutme.html">About me</a>
                <a class="clickable" href="projects.html">Projects</a>
                <a> <u>Contacts</u> </a>
            </div>
            <div class="dropdown" tabindex="0">
              <svg id="drop-down-menu" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 170.497 85">
                <rect id="Rettangolo_80" data-name="Rettangolo 80" width="170.497" height="85" opacity="0"/>
                <path id="Tracciato_37" data-name="Tracciato 37" d="M6.207,21.125H161.144a6.306,6.306,0,0,0,6.29-6.373,6.218,6.218,0,0,0-6.29-6.207H6.207A6.147,6.147,0,0,0,0,14.752,6.237,6.237,0,0,0,6.207,21.125Z" transform="translate(0 63.875)" fill="var(--text)"/>
                <path id="Tracciato_38" data-name="Tracciato 38" d="M6.207,16.858H161.144a6.218,6.218,0,0,0,6.29-6.207,6.306,6.306,0,0,0-6.29-6.373H6.207A6.237,6.237,0,0,0,0,10.65,6.147,6.147,0,0,0,6.207,16.858Z" transform="translate(0 31.974)" fill="var(--text)"/>
                <path id="Tracciato_39" data-name="Tracciato 39" d="M6.207,12.527H161.144a6.218,6.218,0,0,0,6.29-6.207,6.288,6.288,0,0,0-6.29-6.29H6.207A6.217,6.217,0,0,0,0,6.319,6.147,6.147,0,0,0,6.207,12.527Z" transform="translate(0 0.219)" fill="var(--text)"/>
              </svg>  
                <ul class="dropdown-content" role="menu">
                    <li style="--delay: 1;"><a id="drop4" href="index.html">Home</a></li>
                    <li style="--delay: 2;"><a id="drop2" href="aboutme.html">About me</a></li>
                    <li style="--delay: 3;"><a id="drop3" href="projects.html">Projects</a></li>
                </ul>
            </div>

    </header>
      <?php
        // define variables and set to empty values
        $nameErr = $emailErr = $genderErr = $websiteErr = "";
        $name = $email = $gender = $comment = $website = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          if (empty($_POST["name"])) {
            $nameErr = "Name is required";
          } else {
            $name = test_input($_POST["name"]);
          }

          if (empty($_POST["email"])) {
            $emailErr = "Email is required";
          } else {
            $email = test_input($_POST["email"]);
          }

          if (empty($_POST["website"])) {
            $website = "";
          } else {
            $website = test_input($_POST["website"]);
          }

          if (empty($_POST["comment"])) {
            $comment = "";
          } else {
            $comment = test_input($_POST["comment"]);
          }

          if (empty($_POST["gender"])) {
            $genderErr = "Gender is required";
          } else {
            $gender = test_input($_POST["gender"]);
          }
        }
        ?>
<script src="./script.js"></script>
</body>
</html>
