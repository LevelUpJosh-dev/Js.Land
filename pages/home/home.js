import { Serve } from "../../lobot.js";

async function Home () {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Js.Land</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <style>
                    ${await Serve(`Bootstrap`)}
                 </style>
                <script>
                    ${await Serve('BootstrapCustomJs')}
                </script>
                <div id="home-javascript">
                    <script>
                        ${await Serve(`Sherlock`)}
                    </script>
                </div>
            </head>
            <body id="page-top">
                <!-- Navigation-->
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div class="container px-4 px-lg-5">
                        <a class="navbar-brand" href="#page-top">Js.Land</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                                <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- Masthead-->
                <header class="masthead">
                    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                        <div class="d-flex justify-content-center">
                            <div class="text-center">
                                <h1 class="mx-auto">Js.Land</h1>
                                <h2 class="text-white-50 mx-auto mt-2 mb-5">Your source for everything code</h2>
                                <a class="btn btn-primary" href="#about">Learn more..</a>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- About-->
                <section class="about-section text-center" id="about">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-lg-6 mb-5">
                                <img class="img-fluid" src="assets/img/coffee-code.png" alt="..." />
                            </div>
                            <div class="col-lg-6 mt-5">
                                <h3 class="text-white mb-4">Hi my name is Josh, I'm a Full-Stack developer and general Js enthusiast.</h3>
                                <p class="text-white-50">
                                    My aim with Js.Land is to be an informative space for development news and info for both professional and aspiring web developers. 
                                    I believe the current landscape of technology and development specifically the ability of anyone to self-teach is unprecedented.
                                    Being a self-taught developer myself, I felt I could contribute to the general development community in positive way.
                                 </p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Projects-->
                <section class="projects-section bg-light" id="projects">
                    <div class="container px-4 px-lg-5">
                        <!-- Featured Project Row-->
                        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                            <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0 border-0" src="assets/img//home/cloud-code.png" alt="..." /></div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="featured-text text-center text-lg-left">
                                    <h4>Knowledge</h4>
                                    <p class="text-black-50 mb-0">
                                        Weather it be YouTube, Twitter, Free Code Academy or some other resource
                                        There is truely a wealth of knowledge and information available to you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Project One Row-->
                        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                            <div class="col-lg-6"><img class="img-fluid" src="assets/img/home/scrabble-dev.jpg" alt="..." /></div>
                            <div class="col-lg-6">
                                <div class="bg-black text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                            <hr class="d-none d-lg-block mb-0 ms-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Project Two Row-->
                        <div class="row gx-0 justify-content-center">
                            <div class="col-lg-6"><img class="img-fluid" src="assets/img//home/scrabble-js.jpg" alt="..." /></div>
                            <div class="col-lg-6 order-lg-first">
                                <div class="bg-black text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-right">
                                            <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                            <hr class="d-none d-lg-block mb-0 me-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Signup-->
                <section class="signup-section" id="signup">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                            <div class="col-md-10 col-lg-8 mx-auto text-center">
                                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                                <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
                                <!-- * * * * * * * * * * * * * * *-->
                                <!-- * * SB Forms Contact Form * *-->
                                <!-- * * * * * * * * * * * * * * *-->
                                <!-- This form is pre-integrated with SB Forms.-->
                                <!-- To make this form functional, sign up at-->
                                <!-- https://startbootstrap.com/solution/contact-forms-->
                                <!-- to get an API token!-->
                                <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <!-- Email address input-->
                                    <div class="row input-group-newsletter">
                                        <div class="col"><input class="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                        <div class="col-auto"><button class="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                                    </div>
                                    <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                                    <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                                    <!-- Submit success message-->
                                    <!---->
                                    <!-- This is what your users will see when the form-->
                                    <!-- has successfully submitted-->
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3 mt-2 text-white">
                                            <div class="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <!-- Submit error message-->
                                    <!---->
                                    <!-- This is what your users will see when there is-->
                                    <!-- an error submitting the form-->
                                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Contact-->
                <section class="contact-section bg-black">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">Youtube</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50">4923 Market Street, Orlando FL</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-envelope text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">Email</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50"><a href="#!">josh@js.land.com</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">Twitter</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Footer-->
                <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Js.Land 2022</div></footer>
                <!-- Bootstrap core JS-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    `
}

export { Home };