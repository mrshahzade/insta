var arr = [
    { dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" },
    
    { dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" },

    { dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" },

    { dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" },

]
var storis = document.querySelector("#storis")
var clutter = ""

arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">

</div>`



});
storis.innerHTML = clutter

storis.addEventListener("click", function (dets) {

    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    // var value = arr[dets.target.id].story

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"

    },3000)
});
