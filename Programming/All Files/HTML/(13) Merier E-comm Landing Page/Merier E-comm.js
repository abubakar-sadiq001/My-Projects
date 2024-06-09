const show = document.querySelector('.open-menu');
let sideBar = document.querySelector('.side-bar');

            show.addEventListener("click", () => {
                console.log('opened');                            
                sideBar.style.display = 'block';
                // show.style.transform = 'rotate(180deg)';
                // show.style.transition = 'all .50s';
                

            })


            const close = document.querySelector('.close-menu');
            let side = document.querySelector('.side-bar');

            close.addEventListener('click', () => {
                console.log('closed')
                side.style.display = 'none'
                // side.style.animation = 'slideout'
            })