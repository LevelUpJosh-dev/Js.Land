import { Serve } from "../../lobot.js";

async function Home () {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Home</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <style>
                #home-body {
                  font-family: 'Roboto', sans-serif;
                  color: #FF4A1C;
                  background: #090809;
                  a {
                    color: #376996;
                  }
              }
            </style>
        </head>
        <body id="home-body">
            <div id="home-javascript">
                <script>${await Serve(`Sherlock`)}</script>
            </div>
            <div id="home" class="container-fluid text-center p-5">
                <h2>Welcome to Js.Land</h2> 
                <h3>Coming Soon!</h3>
            </div>
        </body>
    `
}

export { Home };