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

var options = {
    strings: ["Select Lanugage","<span lang='zh-Hans'>选择语言</span>","<span lang='zh-Hans'>ाषा चुनिए</span>","<span lang='zh-Hans'>seleccione el idioma</span>","<span lang='zh-Hans'>Choisir la langue</span>"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  }
  
  var typed = new Typed("#languageOptions", options);