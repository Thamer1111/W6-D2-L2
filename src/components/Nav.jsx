function Nav(){
    return (
        <nav class= "d-flex justify-content-between p-3 bg-dark w-100">
            <h4 class="w-25 text-white">عنوان</h4>
            <div class="w-50 d-flex justify-content-evenly">
                <a href="">الصفحة الرئسية </a>
                <a href="">الصفحة الثانية</a>
                <a href="">الصفحة الثالثة</a>
            </div>

            <div class= "d-flex justify-content-evenly">
                <button class="btn btn-primary">تسجيل الدخول</button>
                <button class="btn btn-info">تسجيل جديد</button>
            </div>
        </nav>
    );
}

export default Nav;