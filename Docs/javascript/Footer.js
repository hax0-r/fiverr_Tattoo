const footer = document.getElementById("footer")

footer.innerHTML = `
    <footer class="bg-[#262626]">

        <div class="max-w-7xl w-full mx-auto p-5 md:pt-16 md:pb-8">

            <div class="flex md:pt-0 pt-8 items-start md:flex-row flex-col md:gap-28 gap-8">
                <div class="flex gap-20 md:gap-28">
                    <ul class="text-sm">
                        <li class="!text-[#7F7F7F] mb-6 uppercase">Künstler</li>
                        <li><a class="!text-white hover:underline mb-4 block" href="./Slava.html"> SLAVA</a></li>
                        <li><a class="!text-white hover:underline mb-4 block" href="./Toni.html"> TONI</a></li>
                        <li><a class="!text-white hover:underline mb-4 block" href="./Socio.html"> SOCIO</a></li>
                        <li><a class="!text-white hover:underline mb-4 block" href="./Jascha.html"> JASCHA</a></li>
                    </ul>
                    <ul class="text-sm">
                        <li class="!text-[#7F7F7F] mb-6 uppercase">Über</li>
                        <li><a class="!text-white hover:underline mb-4 block"
                                href="./Tattoopflege.html">TATTOOPFLEGE</a></li>
                        <li><a class="!text-white hover:underline mb-4 block" href="./Contact.html">KONTAKT</a></li>
                        <li><a class="!text-white hover:underline mb-4 block" href="">INSTAGRAM</a></li>
                    </ul>
                </div>
                <ul class="text-sm">
                    <li class="!text-[#7F7F7F] mb-6 uppercase">Öffnungszeiten</li>
                    <li><a class="!text-white mb-4 block" href="">DI - SA</a></li>
                    <li><a class="!text-white mb-4 block" href="">11:00 - 18:00 UHR</a></li>
                </ul>
            </div>

            <div class="flex sm:flex-row flex-col items-center md:justify-between justify-center gap-4 md:mt-16 mt-10">
                <h2><a class="text-xl noodle !text-white" href="./index.html">Stilbruch Tattoo</a></h2>

                <div class="flex items-center gap-5">
                    <a href="./Datenschutz.html" class="uppercase !text-white hover:underline text-sm">Datenschutz</a>
                    <a href="./Impressum.html" class="uppercase !text-white hover:underline text-sm">Impressum</a>
                </div>
            </div>

        </div>

    </footer>
`