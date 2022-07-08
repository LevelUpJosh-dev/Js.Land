import { Serve } from "../lobot.js";

async function Footer() {
    return `
    <footer class="footer bg-black small text-center">
        <div class="container px-4 px-lg-5">
            <div class="row justify-content-center">
                <div class="col align-items-center">
                    <div class="text-center text-lg-left">
                        <a class="image-link" href="#page-top" alt="Js.Land home link"><img width="485px" height="485px" src="assets/img/home/webp/logo-solid.webp" alt="Js.Land solid logo" class="img-fluid pb-3 logo-solid"/></a>
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
    ${await Serve('bootstrap:js')}
  `;
}

export { Footer };
