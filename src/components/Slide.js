export default function Slider() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/281862752_2499013616896519_5398220433967550014_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XZaiy5sXlScAX91QEja&_nc_ht=scontent.fhan2-3.fna&oh=03_AVKMtlhH_r9Iy3JxZzT2gWLWlG3usu1vOFoejWZZUIE-OA&oe=62BB93E3" class="d-block w-100" alt="./img/slide3.png" />
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/279660542_529871068674567_3960264827922594577_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=18-Pzf0U5m8AX_v5lu1&tn=8oLhJxt1frGhHw3r&_nc_ht=scontent.fhan2-3.fna&oh=03_AVLTJ5lF-I_chr-zZvgavul8pSkk-x_kVQLCVtlnXVMEww&oe=62BA5EF0" class="d-block w-100" alt="./img/slide2.png" />
                </div>
                <div class="carousel-item">
                    <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/280540091_1197305781021367_4939695867790923143_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Z_ofMORV04UAX9uMe8m&_nc_ht=scontent.fhan2-2.fna&oh=03_AVJToI_hVDEhAf32hP0DSrkTw1VW19350uRRCG99mW2CmQ&oe=62BD0539" class="d-block w-100" alt="./img/slide1.png" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}