const $logo = document.querySelector('.logo')
const $playBtn = document.querySelector('#play-btn')
const $galleryBtn = document.querySelector('#gallery-btn')
const $settingsBtn = document.querySelector('#settings-btn')
const $exitBtn = document.querySelector('#exit-btn')

// CONTAINER //
const $galleryContainer = document.querySelector('.gallery-container')
const $settingsContainer = document.querySelector('.settings-container')

// PLAY BUTTON //
$playBtn.addEventListener('click', () => {
    document.querySelector('#play-btn').style.animation = 'displayOff 750ms ease-in-out'
    document.querySelector('#gallery-btn').style.animation = 'displayOff 750ms ease-in-out'
    document.querySelector('#settings-btn').style.animation = 'displayOff 750ms ease-in-out'
    document.querySelector('#exit-btn').style.animation = 'displayOff 750ms ease-in-out'

    setTimeout(() => {
        $playBtn.classList.add('hidden')
        $galleryBtn.classList.add('hidden')
        $settingsBtn.classList.add('hidden')
        $exitBtn.classList.add('hidden')
    }, 750)

    $logo.style.animation = 'logoXY 1s ease-in-out forwards'
    setTimeout(() => {
        $logo.style.animation = 'logoScale 7.5s ease-in-out forwards'
    }, 1000)

    setTimeout(() => {
        window.close()
    }, 7500);

})

// GALLERY BUTTON //
$galleryBtn.addEventListener('click', () => {

})

// SETTINGS BUTTON //
$settingsBtn.addEventListener('click', () => {
    $settingsContainer.classList.toggle('hidden')
})

// EXIT BUTTON //
$exitBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to leave ?')) {
        window.close()
    }
})