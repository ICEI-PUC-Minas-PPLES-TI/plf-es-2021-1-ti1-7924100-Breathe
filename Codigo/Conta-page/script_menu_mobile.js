if (window.matchMedia("(max-width: 575px)")) {
    let c=0;
    let menu_area = document.querySelector('#menu_area');
    let btn = document.querySelector('#btn_mobile');
    btn.onclick = () => {
        if (c%2==0) {
            menu_area.style.display='block';
        } else {
            menu_area.style.display='none';
        }
        c++;
    }
}