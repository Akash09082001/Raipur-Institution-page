// header.js
document.addEventListener("DOMContentLoaded", function () {

    const header = `
    <header class="flex fixed top-0 z-30 bg-white w-full shadow-md">
            <div class="flex w-full flex-col">
                <div class="hidden lg:flex text-sm w-full bg-brand-red text-white">
                    <ul class="flex w-full max-w-7xl items-center justify-end divide-x mx-auto px-3">
                        <li class="flex w-fit">
                            <a href="mailto:itmuradmission@itmuniversity.org" class="flex w-fit py-1 px-4 ">
                                itmuradmission@itmuniversity.org
                            </a>
                        </li>
                        <li class="flex w-fit">
                            <a href="tel:+91 9826598201" class="flex w-fit py-1 px-4 ">+91 9826598201</a>
                        </li>
                        <li class="flex w-fit">
                            <a href="https://www.itmuniversity.org/about-edc.html"
                                class="flex w-fit py-1 px-4 ">Entrepreneurship Development Cell</a>
                        </li>
                        <li class="flex w-fit">
                            <a href="https://rajbhavancg.gov.in/" class="flex w-fit py-1 px-4 ">Raj Bhavan</a>
                        </li>
                        <li class="flex w-fit">
                            <a href="https://www.itmuniversity.org/enquireform.html" class="flex w-fit py-1 px-4 ">Get
                                Brochure</a>
                        </li>
                        <li class="flex w-fit">
                            <a href="https://www.google.co.in/maps/@21.112183,81.7545441,3a,75y,20h,110t/data=!3m8!1e1!3m6!1sAF1QipN-wUTd-Pfpnsq-lAcjRNQZ89cTPkpiVdHh64oR!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN-wUTd-Pfpnsq-lAcjRNQZ89cTPkpiVdHh64oR%3Dw203-h100-k-no-pi-20-ya47-ro-0-fo100!7i10000!8i5000?shorturl=1"
                                class="flex w-fit py-1 px-4 ">Virtual Tour</a>
                        </li>
                        <li class="flex w-fit">
                            <a href="https://itmuniversity.org/blog.html" class="flex w-fit py-1 px-4 ">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div class="flex w-full">
                    <div class="grid grid-cols-2 lg:grid-cols-5 h-full w-full px-3 max-w-7xl mx-auto">
                        <div class="flex h-16 w-full items-center justify-start">
                            <a href="https://www.itmuniversity.org/" class="flex h-full w-fit">
                                <img src="https://www.itmuniversity.org/assets/logo/logo.webp" alt="" class="flex w-fit h-full object-contain">
                            </a>
                        </div>
                        <div class="flex lg:hidden w-full items-center gap-2 justify-end ">
                            <a href="https://itmraipur.nopaperforms.com/"
                                class="flex bg-brand-red text-white outline-none rounded-md h-fit text-center items-center justify-center w-fit px-5 py-2 text-base">Apply
                                Now</a>
                            <button id="open"
                                class="flex w-fit h-fit p-2 rounded-md bg-white hover:bg-brand-red hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" class="w-7 h-7 font-extrabold">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="hidden lg:flex flex-grow items-center justify-end w-full h-full col-span-4">
                            <ul class="text-sm flex h-fit gap-1 items-center justify-center text-gray-900">
                                <li id="About" class="program relative flex w-fit flex-col h-fit">
                                    <a href="#"
                                        class="flex px-3 py-2 h-fit gap-2 rounded-md items-center group hover:text-brand-red">
                                        <span>ITM University</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4 duration-300 group-hover:text-brand-red">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list absolute top-full hidden w-52 flex-col divide-y rounded-md bg-white shadow-md">
                                        <!-- <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">
                                                Disclosures
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/universityact.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        University Act
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/ugcinformation.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        UGC Information
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/approvalletter.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Approval Letters
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/bci-approval.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        BCI Approval Letters
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/admissioncriteria.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Admission Process
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/governingbody.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Governing Body
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/boardofmanagement.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Board Of Management
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/financecommittee.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Finance Committee
                                                    </a>
                                                </li>
    
                                            </ul>
                                        </li> -->
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/aboutITMuniversity.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                About ITM University
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/cm.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Chancellor's Message
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/vc.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Vice Chancellor's Message
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/rm.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Registrar's Message
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/mv.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Mission & Vision
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/ar.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Approval & Recognition
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/umt.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                University Management Team
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/committeemember.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Committee Members
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/committees.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Committee
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Accreditation
                                            </a>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">
                                                More
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://itmuniversity.org/iqac/"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        IQAC
                                                    </a>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <button onclick="openModal()"
                                                        class="relative flex px-3 py-3 group text-left hover:text-white hover:bg-brand-red rounded-md w-full">
                                                        Student Complaint Management System
                                                    </button>
                                                </li>
                                            </ul>
                                        </li> 
                                    </ul>
                                </li>
                                <li id="Programs" class="program relative flex w-fit flex-col h-fit">
                                    <a href="#"
                                        class="flex px-3 py-2 h-fit gap-2 rounded-md items-center group hover:text-brand-red">
                                        <span>School</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4 duration-300 group-hover:text-brand-red">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list absolute top-full hidden w-72 flex-col divide-y rounded-md bg-white shadow-md">
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Commerce Management <br> and Research
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-bba.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">BBA</a>
                                                        </li>
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-bcom(hons).html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">B.Com.(Hons)</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/postgraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Postgraduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/postgraduate-mbadualspecialization.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">MBA</a>
                                                        </li>
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/postgraduate-mcom.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">M.Com.</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Life and Allied Sciences
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-bscinmicrobiology.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">B.Sc. (Hons) Microbiology</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/postgraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Postgraduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/postgraduate-mscmicrobiology.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">M.Sc. Microbiology</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Law
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-bba-llb.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">BBA LL.B</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/postgraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Postgraduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/postgraduate-llm.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">LL.M</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Hospitality and Tourism Management
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-ihm.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">B.A. (Hons) International Hospitality and Tourism Management</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Architecture, Planning and Design
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-barchitecture.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">B. Arch.</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md items-center">
                                                School of Engineering and Research
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-3 w-4 h-4 duration-300 rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/undergraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Graduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-btech-cse.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">B. Tech. (Computer Science and Engineering)</a>
                                                        </li>
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/undergraduate-bca.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">BCA</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="relative flex  hover:shadow-sm w-full">
                                                    <a href="https://www.itmuniversity.org/postgraduate.html"
                                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full items-center">
                                                        Postgraduate Program
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="absolute right-3 w-4 h-4 duration-300 -rotate-90 group-hover:text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </a>
                                                    <ul
                                                        class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                        <li
                                                            class="flex w-full rounded-md">
                                                            <a href="https://www.itmuniversity.org/postgraduate-mca.html"
                                                                class="w-full py-3 px-2 hover:text-white hover:bg-brand-red rounded-md">MCA</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/phd.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Ph.D.
                                            </a>
                                        </li>
                                        <!-- <li class="relative flex w-full flex-col hover:shadow-md">
                                            <a href="https://www.itmuniversity.org/academicsandexamination.html"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">
                                                Academics and Examination
                                            </a>
                                        </li> -->
                                    </ul>
                                </li>
                                <li id="Faculty" class="program relative flex w-fit flex-col h-fit">
                                    <a href="https://www.itmuniversity.org/faculty.html"
                                        class="flex h-fit px-3 py-2 rounded-md items-center group hover:text-brand-red">
                                        <span>Faculty</span>
                                    </a>
                                </li>
                                <li id="Placements" class="program relative flex w-fit flex-col h-fit">
                                    <a href="https://www.itmuniversity.org/training-placements.html"
                                        class="flex h-fit px-3 py-2 rounded-md items-center group hover:text-brand-red">
                                        <span>Placements</span>
                                    </a>
                                </li>
                                <li id="Facilities" class="program relative flex w-fit flex-col h-fit">
                                    <a href="#"
                                        class="flex px-3 py-2 h-fit rounded-md gap-2 items-center group hover:text-brand-red">
                                        <span>Facilities</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4 duration-300 group-hover:text-brand-red">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list absolute top-full hidden w-60 flex-col divide-y bg-white shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/itmubs.html" class="flex px-3 py-3">ITM
                                                University Bus Service</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/hostelservice.html"
                                                class="flex px-3 py-3">Hostel Service</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/sportsfacility.html"
                                                class="flex px-3 py-3">Sports Facility</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="Event Gallery" class="program relative flex w-fit flex-col h-fit">
                                    <a href="#"
                                        class="flex px-3 py-2 h-fit gap-2 rounded-md items-center group hover:text-brand-red">
                                        <span>Event Gallery</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4 duration-300 group-hover:text-brand-red">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list absolute top-full hidden w-60 flex-col divide-y bg-white shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/gallery.html"
                                                class="flex px-3 py-3">Photo Gallery</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/videogallery.html"
                                                class="flex px-3 py-3">Video Gallery</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/competitionwinner.html"
                                                class="flex px-3 py-3">Azadi Ka Amrit Mahotsav Gallery</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/flyers.html"
                                                class="flex px-3 py-3">Flyers</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="Media Coverage" class="program relative flex w-fit flex-col h-fit">
                                    <a href="https://www.itmuniversity.org/mediacoverage.html"
                                        class="flex h-fit px-3 py-2 rounded-md items-center group hover:text-brand-red">
                                        <span>Media Coverage</span>
                                    </a>
                                </li>
                                <li class="flex w-fit">
                                    <a href="https://itmraipur.nopaperforms.com/"
                                        class="flex w-fit text-sm bg-brand-red text-white px-4 py-2 rounded-md">
                                        Apply Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <nav id="mobile-nav"
                            class="hidden lg:hidden flex-col absolute w-full py-1 z-20 gap-2 max-w-sm  right-0 top-0 h-screen bg-white shadow-md">
                            <div class="flex w-full px-2 items-center justify-between">
                                <div class="h-14 w-auto ">
                                    <img loading="lazy" class="flex w-full h-full object-contain"
                                        src="https://www.itmuniversity.org/assets/logo/logo.webp" alt="logo">
                                </div>
                                <div class="flex w-auto h-full items-center justify-end">
    
                                    <button id="close"
                                        class="flex  rounded-md     py-2 px-2 items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <hr>
                            <div class="flex w-full h-full overflow-y-scroll card-scroll pb-20">
                                <ul class="navbar flex flex-col divide-y w-full h-fit">
                                    <li class="flex w-full transition-all border ">
                                        <details class="mobile-program-details flex flex-col w-full rounded-md">
                                            <summary class="flex relative w-full px-5 py-3">
                                                <span class="flex w-full">ITM University</span>
                                                <span class="flex absolute right-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
                                                        <path fill-rule="evenodd"
                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div class="flex w-full">
                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                    <!-- <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">Disclosures</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/universityact.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            University Act
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/ugcinformation.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            UGC Information
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/approvalletter.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            Approval Letters
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/bci-approval.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            BCI Approval Letters
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/admissioncriteria.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            Admission Process
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/governingbody.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            Governing Body
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/boardofmanagement.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            Board Of Management
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href ='https://www.itmuniversity.org/financecommittee.html'"
                                                                            class="flex w-full px-5 py-3">
                                                                            Finance Committee
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li> -->
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/aboutITMuniversity.html'"
                                                            class="flex w-full px-5 py-3">
                                                            About ITM University
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/cm.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Chancellor's Message
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/vc.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Vice Chancellor's Message
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/rm.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Registrar's Message
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/mv.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Mission & Vision
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/ar.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Approval & Recognition
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/umt.html'"
                                                            class="flex w-full px-5 py-3">
                                                            University Management Team
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/committeemember.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Committee Members
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/committees.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Committee
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href =''"
                                                            class="flex w-full px-5 py-3">
                                                            Accreditation
                                                        </span>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">More</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <span
                                                                            onclick="window.location.href =''"
                                                                            class="flex w-full px-5 py-3">
                                                                            IQAC
                                                                        </span>
                                                                    </li>
                                                                    <li
                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                        <button onclick="openModal()"
                                                                            class="flex w-full px-5 py-3">
                                                                            Student Complaint Management System
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
                                    </li>
    
                                    <li class="flex w-full transition-all border ">
                                        <details class="mobile-program-details flex flex-col w-full rounded-md">
                                            <summary class="flex relative w-full px-5 py-3">
                                                <span class="flex w-full">School</span>
                                                <span class="flex absolute right-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
                                                        <path fill-rule="evenodd"
                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div class="flex w-full">
                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Commerce Management and Research</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-bba.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            BBA
                                                                                        </span>
                                                                                    </li>
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-bcom(hons).html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            B.Com (Hons)
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Postgraduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/postgraduate-mbadualspecialization.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            MBA
                                                                                        </span>
                                                                                    </li>
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/postgraduate-mcom.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            M.Com.
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Life and Allied Sciences</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-bscinmicrobiology.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            B.Sc. (Hons) Microbiology
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Postgraduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/postgraduate-mscmicrobiology.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            M.Sc. Microbiology
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Law</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-bba-llb.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            BBA LL.B
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Postgraduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/postgraduate-llm.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            LL.M
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Hospitality and Tourism Management</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-ihm.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            B.A. (Hons) International Hospitality and Tourism Management
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Architecture, Planning and <br> Design</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-barchitecture.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            B. Arch.
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    <li class="flex w-full transition-all ">
                                                        <details
                                                            class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                            <summary class="flex relative w-full px-5 py-3">
                                                                <span class="flex w-full">School of Engineering and Research</span>
                                                                <span class="flex absolute right-5">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24" fill="currentColor"
                                                                        class="w-6 h-6">
                                                                        <path fill-rule="evenodd"
                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                            clip-rule="evenodd" />
                                                                    </svg>
                                                                </span>
                                                            </summary>
                                                            <div class="flex w-full">
                                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Graduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-btech-cse.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            B. Tech. (Computer Science and Engineering)
                                                                                        </span>
                                                                                    </li>
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/undergraduate-bca.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            BCA
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                    <li class="flex w-full transition-all ">
                                                                        <details
                                                                            class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                            <summary class="flex relative w-full px-5 py-3">
                                                                                <span class="flex w-full">Postgraduate Program</span>
                                                                                <span class="flex absolute right-5">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="currentColor" class="w-6 h-6">
                                                                                        <path fill-rule="evenodd"
                                                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                            clip-rule="evenodd" />
                                                                                    </svg>
                                                                                </span>
                                                                            </summary>
                                                                            <div class="flex w-full">
                                                                                <ul
                                                                                    class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                                    <li
                                                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                        <span
                                                                                            onclick="window.location.href ='https://www.itmuniversity.org/postgraduate-mca.html'"
                                                                                            class="flex w-full px-5 py-3">
                                                                                            MCA
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
    
                                                                        </details>
                                                                    </li>
                                                                </ul>
                                                            </div>
    
                                                        </details>
                                                    </li>
                                                    
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/phd.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Ph.D.
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/academicsandexamination.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Academics & Examination
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3"
                                            href="https://www.itmuniversity.org/faculty.html">Faculty</a>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3"
                                            href="https://www.itmuniversity.org/training-placements.html">Placements</a>
                                    </li>
                                    <li class="flex w-full transition-all border ">
                                        <details class="mobile-program-details flex flex-col w-full rounded-md">
                                            <summary class="flex relative w-full px-5 py-3">
                                                <span class="flex w-full">Facilities</span>
                                                <span class="flex absolute right-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
                                                        <path fill-rule="evenodd"
                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div class="flex w-full">
                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/itmubs.html'"
                                                            class="flex w-full px-5 py-3">
                                                            ITM University Bus Service
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/hostelservice.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Hostel Service
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/sportsfacility.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Sports Facility
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
                                    </li>
                                    <li class="flex w-full transition-all border ">
                                        <details class="mobile-program-details flex flex-col w-full rounded-md">
                                            <summary class="flex relative w-full px-5 py-3">
                                                <span class="flex w-full">Event Gallery</span>
                                                <span class="flex absolute right-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-6 h-6">
                                                        <path fill-rule="evenodd"
                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div class="flex w-full">
                                                <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/gallery.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Photo Gallery
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/videogallery.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Video Gallery
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/competitionwinner.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Azadi Ka Amrit Mahotsav Gallery
                                                        </span>
                                                    </li>
                                                    <li
                                                        class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                        <span
                                                            onclick="window.location.href ='https://www.itmuniversity.org/flyers.html'"
                                                            class="flex w-full px-5 py-3">
                                                            Flyers
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </details>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3"
                                            href="https://www.itmuniversity.org/mediacoverage.html">Media Coverage<a>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3" href="https://itmuniversity.org/blog.html">Blogs<a>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3"
                                            href="https://www.itmuniversity.org/enquireform.html">Get Brochure<a>
                                    </li>
                                    <li
                                        class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                        <a class="flex w-full px-5 py-3" href="https://www.itm.edu/contactus">Contact us<a>
                                    </li>
                                </ul>
                            </div>
    
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `;

    const headerContainer = document.getElementById("header-container");
    headerContainer.innerHTML = header;

    const mobileMenu = document.getElementById("mobile-nav");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("close");


    // open menu
    openButton.addEventListener('click', () => {
        mobileMenu.style.display = "flex";
        openButton.style.display = "none";
        closeButton.style.display = "block";
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.style.display = "none";
        openButton.style.display = "block";
        closeButton.style.display = "none";
    });
    // open menu



});