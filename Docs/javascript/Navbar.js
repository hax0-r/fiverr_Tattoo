const navbar = document.getElementById("navbar")

navbar.innerHTML = `
    <div style="width: 0;" id="resNav"
        class="fixed transition-all duration-500 overflow-hidden h-screen top-0 left-0 bg-white z-50">
        <div class="">
            <div class="flex p-5 items-center justify-between">
                <a href="./index.html">
                    <h2 class="uppercase noodle text-2xl text-nowrap">Stilbruch Tattoo</h2>
                </a>
                <i id="closeNav" class="fa-solid fa-x text-xl"></i>
            </div>

            <div class="mt-8 text-nowrap px-5 w-full flex flex-col gap-10 justify-between h-[80vh] overflow-auto">
                <ul class="  flex-col gap-8 flex ">

                    <li> <a href="./index.html#artist" class="hover:text-[#0a3a22] transition-all duration-500">
                            Künstler</a>
                    </li>
                    <li> <a href="" class="hover:text-[#0a3a22] transition-all duration-500">
                            Studio</a>
                    </li>
                    <li> <a href="./Tattoopflege.html" class="hover:text-[#0a3a22] transition-all duration-500">Tattoopflege</a></li>
                    <li> <a href="./Contact.html" class="hover:text-[#0a3a22] transition-all duration-500">
                            Kontakt</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class="w-full">
        <div class="bg-white w-full h-20">
            <div class="flex items-center justify-between max-w-7xl w-full mx-auto p-5">
                <a href="./index.html">
                    <h2 class="uppercase noodle text-2xl">Stilbruch Tattoo</h2>
                </a>
                <div class="flex items-center gap-3">
                    <ul class="hidden items-center justify-center gap-8 lg:flex ">
                        <li> <a href="./index.html#artist"
                                class=" font-light cursor-pointer transition-all duration-500">
                                Künstler</a>
                        </li>
                        <li> <a href="" class=" font-light cursor-pointer transition-all duration-500">
                                Studio</a></li>
                        <li> <a href="./Tattoopflege.html"
                                class=" font-light cursor-pointer transition-all duration-500">
                                Tattoopflege</a></li>
                        <li> <a href="./Contact.html" class=" font-light cursor-pointer transition-all duration-500">
                                Kontakt</a></li>
                    </ul>
                    <div class="lg:hidden">
                        <i class="fa-solid fa-bars text-2xl cursor-pointer" id="openNav"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%"
})