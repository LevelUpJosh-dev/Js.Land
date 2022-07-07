import { Serve } from "../../lobot.js";

async function JavaScript() {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Js.Lands mission is to educate and inspire developers everywhere." />
                <meta name="author" content="JsLandJosh aka RedVanJosh" />
                <link rel="preload" href="fonts/MonoLisa-Regular.woff2" as="font" type="font/woff2" crossorigin>
                <title>Js.Land</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                ${await Serve(`Bootstrap:css`)}
                ${await Serve("TeamGrid:css")}
                ${await Serve("JavaScript:css")}
                <div id="home-javascript">
                    ${await Serve(`Sherlock:js`)}
                </div>
            </head>
            <body id="page-top">
                <!-- Navigation-->
                <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
                    <div class="container px-4 px-lg-5">
                        <a class="navbar-brand" href="#page-top" aria-label="Js.Land main navigation">
                            <img width="485px" height="485px" src="assets/img/home/webp/logo-solid.webp" alt="Js.Land logo image link" class="img-fluid logo-solid pb-3" />
                        </a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a class="nav-link" href="#mission">Just talking code</a></li>
                                <li class="nav-item"><a class="nav-link" href="#projects">Videos</a></li>
                                <li class="nav-item"><a class="nav-link" href="#signup">Images</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- About-->
                <section class="content-grid text-center" id="content-grid">
                    <div class="team-grid">
                        <div class="container">
                            <div class="intro">
                                <h2 class="text-center">Team</h2>
                                <p class="text-center">Each of these content drops a meant to be a 10-20 minutes thought excersise or overview.</p>
                            </div>
                            <div class="row content-drop">
                                <div class="col-md-4 col-lg-3 item">
                                    <div class="box">
                                        <img width="485px" height="485px" src="assets/img/js-logo-yellow-drop.png" alt="Js.Land logo image link" class="img-fluid pb-3 droplet-logo" />
                                        <div class="cover">
                                            <h3 class="name">Whats the event loop?</h3>
                                            <p class="title">A master class in understanding the browser event loop.</p>
                                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Footer-->
                <footer class="footer bg-black small text-center">
                    <div class="container px-4 px-lg-5">
                        <div class="row justify-content-center">
                            <div class="col align-items-center">
                                <div class="text-center text-lg-left">
                                    <a class="image-link" href="#page-top" alt="Js.Land home link"><img width="485px" height="485px" src="assets/img/home/webp/logo-solid.webp" alt="Js.Land solid logo" class="img-fluid pb-3 logo-solid footer"/></a>
                                </div>
                                is powered by:
                                <div class="text-center text-lg-left">
                                    <a class="image-link" target="_blank" href="https://getbootstrap.com/" alt="bootstrap homepage link"><img width="500px" height="500px" src="assets/img/home/webp/bootstrap-logo.webp" alt="bootstrap logo" class="img-fluid bootstrap-logo"/></a>
                                </div>
                                    <a class="image-link" target="_blank" href="https://deno.land/" alt="deno homepage link"><img width="512px" height="512px" src="assets/img/home/webp/deno-logo-inverted.webp" alt="deno logo" class="img-fluid deno-inverted-logo"/></a>
                                <div class="text-center text-lg-left py-3">
                                    <a class="image-link" target="_blank" href="https://www.monolisa.dev/" alt="monoLisa homepage link"><img width="1346" height="474" src="assets/img/home/webp/monolisa-logo.webp" alt="monoLisa font logo" class="img-fluid monolisa-logo"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container px-4 px-lg-5">Copyright &copy; Js.Land 2022</div>
                </footer>
                ${await Serve('Bootstrap:js')}
            </body>
        </html>
    `;
}

export { JavaScript };
