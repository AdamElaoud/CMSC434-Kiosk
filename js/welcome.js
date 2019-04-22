let china = $("#china");
let india = $("#india");
let spain = $("#spain");
let usa = $("#usa");
let france = $("#france");
let languageList = [china, india, spain, usa, france]

function languageSelection(id){
    let selection = $(`#${id}`);

    for (let i = 0; i < languageList.length; i++){
        let country = languageList[i];
        if (selection != country){
            country.removeClass('langBorder');
        }
    }
    selection.addClass('langBorder');
}