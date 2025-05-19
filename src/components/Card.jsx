function Card(img){
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="container text-end card m-2 ">
                <img src={img.src} alt="" />
                <h4> نص </h4>
                <ul>
                    <li>قائمة1</li>
                    <li>قائمة2</li>
                    <li>قائمة3</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;