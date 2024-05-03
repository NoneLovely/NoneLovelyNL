url = "https://script.google.com/macros/s/AKfycbwD8GdCWZ28aWOdC7H0Dw0Y2bkc6crhvi7NpZ0YJnV4BN2hw2DHGPVJema-bafNQmnV/exec"

$.get(url + "?method=getApps", function(data, status){
    result = data["NLS"]
    for(let i = 0; i<result.length; i++){
        if(result[i][0] != ""){
            app = document.createElement('div');
            
            app.innerHTML = `
            <div class="my-10 bg-black bg-opacity-40 rounded-3xl shadow-2xl xl:mx-10">
                <div class="border-2 p-5 rounded-t-3xl">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwyElbC4QpUdvK69SeWhYbecR_fUCx0tRtHA7JmwYtb7UzLg/viewform?usp=sf_link" class="hover:text-white hover:underline text-neutral-400">`+ result[i][0] +`</a>
                </div>
                <div class="border-2 border-t-0 rounded-b-3xl">
                    <details>
                        <summary class="p-5">подробнее</summary>
                        <p class="p-5">`+ result[i][1] +`</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwyElbC4QpUdvK69SeWhYbecR_fUCx0tRtHA7JmwYtb7UzLg/viewform?usp=sf_link" class="border-0 border-t-2 border-dashed py-5 w-full flex justify-center hover:text-white hover:underline text-neutral-400">заказать</a>
                    </details>
                </div>
            </div>
            `
                    
            document.getElementById("apps").appendChild(app)
        }
    }
})
