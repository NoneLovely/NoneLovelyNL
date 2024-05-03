url = "https://script.google.com/macros/s/AKfycbwD8GdCWZ28aWOdC7H0Dw0Y2bkc6crhvi7NpZ0YJnV4BN2hw2DHGPVJema-bafNQmnV/exec"

$.get(url + "?method=getOrder", function(data, status){
    result = data["NLS"]
    k = 0
    for(let i = 0; i<result.length; i++){
        if(result[i][0] != ""){
            k += 1
        }
    
    $("#order")[0].innerHTML = k + " заказ(а/ов)"
    }
})

$.get(url + "?method=getFeedback", function(data, status){
    result = data["NLS"]
    k = 0
    for(let i = 0; i<result.length; i++){
        if(result[i][0] != ""){
            k += 1
            fb = document.createElement('div')
            
            fb.innerHTML = `
            <div class="rounded-xl shadow-xl bg-black bg-opacity-5 my-5 mx-5 p-2.5">
                <p>
                `+ result[i][2] +` - `+ result[i][0] +`/5
                </p>
                <p>
                `+ result[i][1] +`
                </p>
            </div>
            `
                    
            document.getElementById("i_fb").appendChild(fb)
        }
    
    $("#feedback")[0].innerHTML = k + " отзыв(а/ов)"
    }
})

$.get(url + "?method=getPartners", function(data, status){
    result = data["NLS"]
    for(let i = 0; i<result.length; i++){
        if(result[i][0] != ""){
            p = document.createElement('div')

            p.classList.add("my-5")
            
            p.innerHTML = `
            <p class="font-bold tracking-widest">`+ result[i][0] +`</p>
            <details class="text-left">
                <summary>подробнее</summary>
                <p>`+ result[i][1] +`</p>
            </details>
            `
                    
            document.getElementById("i_p").appendChild(p)
        }
    }
})

$.get(url + "?method=getMe", function(data, status){
    result = data["NLS"]
    $("#status")[0].innerHTML = result[0] 
    $("#cc")[0].innerHTML = result[1] 
    $("#comp")[0].innerHTML = result[2]
    $("#dis")[0].innerHTML = result[3] 
})
