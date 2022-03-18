const carousels = document.getElementById("carousels")

const json = [{"name":"PERUMAHAN TAMAN PARAHYANGAN","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_parahyangan.jpg"},{"name":"PERUMAHAN TAMAN DIPONEGORO","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_diponegoro.jpg"},{"name":"PERUMAHAN TAMAN UBUD ASRI","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_ubud_asri.jpg"},{"name":"PERUMAHAN TAMAN UBUD KENCANA","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_ubud_kencana.jpg"},{"name":"PERUMAHAN TAMAN UBUD CEMPAKA TIMUR","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_ubud_cempaka_timur.jpg"},{"name":"PERUMAHAN TAMAN BRAWIJAYA TANGERANG","year":"LIPPO KARAWACI TANGERANG TAHUN 2001 – 2002","image":"assets/img/portofolio/taman_brawijaya.jpg"},{"name":"GIANT HYPERPOINT PASTEUR","year":"BANDUNG TAHUN 2003","image":"assets/img/portofolio/giant_hyperpoint_pasteur.jpg"},{"name":"GIANT HYPERMARKET","year":"SEMANGGI JAKARTA TAHUN 2003","image":"assets/img/portofolio/giant_hypermarket.jpg"},{"name":"GIANT SUPERSTORE CILEDUG","year":"CILEDUG – TANGERANG TAHUN 2004","image":"assets/img/portofolio/giant_superstore_ciledug.jpg"},{"name":"GIANT PONDOK TJANDRA","year":"SURABAYA TAHUN 2004","image":"assets/img/portofolio/giant_pondok_tjandra.jpg"},{"name":"GIANT PONDOK INDAH SQUARE - LEBAK BULUS","year":"LEBAK BULUS – TAHUN 2005","image":"assets/img/portofolio/giant_pondok_indah_square.jpg"},{"name":"GIANT SERPONG TOWS SQUARE - TANGERANG","year":"TANGERANG TAHUN 2005","image":"assets/img/portofolio/giant_serpong_tows_square.jpg"},{"name":"GIANT SUN CITY - SURABAYA TAHUN 2005","year":"SURABAYA TAHUN 2005","image":"assets/img/portofolio/giant_sun_city.jpg"},{"name":"GIANT MARGO CITY - DEPOK  TAHUN 2006","year":"DEPOK TAHUN 2006","image":"assets/img/portofolio/giant_margo_city.jpg"},{"name":"GIANT LINDETEVES KOTA- JAKARTA PUSAT","year":"JAKARTA PUSAT TAHUN 2006","image":"assets/img/portofolio/giant_lindeteves_kota.jpg"},{"name":"GIANT BOGOR CITY CENTRE - JAWA BARAT TAHUN 2007","year":"JAWA BARAT TAHUN 2007","image":"assets/img/portofolio/giant_bogor_city_centre.jpg"},{"name":"GIANT KALIBATA - JAKARTA TAHUN 2007","year":"JAKARTA TAHUN 2007","image":"assets/img/portofolio/giant_kalibata.jpg"},{"name":"RUMAH TINGGAL DAN KLINIK","year":"TAHUN 2003","image":"assets/img/portofolio/rumah_tinggal_dan_klinik.jpg"},{"name":"RUMAH TINGGAL SUNTER","year":"JAKARTA TAHUN 2009","image":"assets/img/portofolio/rumah_tinggal_sunter.jpg"},{"name":"RUMAH WISATA DAN PEMANDIAN UMUM","year":"TAHUN 2009","image":"assets/img/portofolio/rumah_wisata_dan_pemandian_umum.jpg"},{"name":"PEMBANGUNAN PASAR CIKAMPEK 1 TAHUN 2010","year":"CIKAMPEK TAHUN 2010","image":"assets/img/portofolio/pembuatan_pasar_cikampek_1_tahun_2010.jpg"},{"name":"PEMBANGUNAN TERMINAL","year":"CIKAMPEK TAHUN 2012","image":"assets/img/portofolio/pembuatan_terminal_cikampek_1_tahun_2012.jpg"}]

let isfirst = true
json.forEach(element => {
    let styles = "carousel-item"
    if(isfirst === true) {
        isfirst = false
        styles += " active"
    }
    carousels.innerHTML += `
    <div class="${styles}">
        <img src="${element.image}" class="d-block w-100" alt="${element.name}">
        <div class="carousel-caption d-md-block">
            <h5>${element.name}</h5>
            <p>${element.year}</p>
        </div>
    </div>
    `
});

document.querySelector("#next").addEventListener("click",()=>{
    let active = document.querySelector(".carousel-item.active")
    let next = active.nextElementSibling
    if(next) {
        active.classList.remove("active")
        next.classList.add("active")
    }
})

document.querySelector("#prev").addEventListener("click",()=>{
    let active = document.querySelector(".carousel-item.active")
    let prev = active.previousElementSibling
    if(prev) {
        active.classList.remove("active")
        prev.classList.add("active")
    }
})

