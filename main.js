let shareBtn = document.getElementById('share_btn')
let hiddenModal = document.getElementById('hidden')

shareBtn.addEventListener('click',() => {
    console.log('clicked')
    hiddenModal.classList.toggle('active')
    shareBtn.classList.toggle('active')
})