//#region Переменные
const cng_prof_img = document.getElementById(`photo_profile`);
const changer_profile_img = document.getElementById(`changer_profile`); 

const audio = document.getElementById(`audio`);
const audioSelector = document.getElementById(`audioSelector`)
//#endregion Переменные
//#region Функции
function change_profile_photo(){
let imgPatch = changer_profile_img.value;
cng_prof_img.src = `./img/` + imgPatch;
}
function change_audio(){
let mscPatch = audioSelector.value;
audio.src = `./musick/` + mscPatch;
if(mscPatch === ``){
    audio.pause();
}
else{
    audio.play();
}
audio.currentTime = 0;
}
//#endregion Функции

//#region Эвенты
changer_profile_img.addEventListener(`change`, change_profile_photo);
audioSelector.addEventListener(`change`, change_audio);
//#region