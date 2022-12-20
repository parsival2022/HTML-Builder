const input = document.getElementById('inputText')

const SECTION_OPEN_TOKEN = '/sect='
const SECTION_CLOSE_TOKEN = '/sect'
const DIV_OPEN_TOKEN = '/div='
const DIV_CLOSE_TOKEN = '/div'
const PARAG_OPEN_TOKEN = '/p='
const PARAG_CLOSE_TOKEN = '/p'
const SECTION_OPEN_TAG = '<section class="'
const SECTION_CLOSE_TAG = '</section>'
const DIV_OPEN_TAG = '<div class="'
const DIV_CLOSE_TAG = '</div>'
const PARAG_OPEN_TAG = '<p class="'
const PARAG_CLOSE_TAG = '</p>'



function htmlBuild(openToken, openTag, closeToken, closeTag){
    const inputText = input.value
    console.log(inputText.split(' '))
    const output =  inputText.replaceAll(/\n\n/g, '   ').split(' ').map(item => {
        console.log(item)
        return item.includes(openToken)
        ? ` ${item.replaceAll(openToken, openTag)}">\n`
        : item.includes(closeToken)
        ? `\n ${item.replaceAll(closeToken, closeTag)}\n`
        : item 
    }).join(' ')
    return output
}

function div(){
    return input.value = htmlBuild(DIV_OPEN_TOKEN, DIV_OPEN_TAG, DIV_CLOSE_TOKEN, DIV_CLOSE_TAG)
    
}
function section(){
    return input.value = htmlBuild(SECTION_OPEN_TOKEN, SECTION_OPEN_TAG, SECTION_CLOSE_TOKEN, SECTION_CLOSE_TAG)
}
function paragraph(){
    return input.value = htmlBuild(PARAG_OPEN_TOKEN, PARAG_OPEN_TAG, PARAG_CLOSE_TOKEN, PARAG_CLOSE_TAG)
}
 function modifyAll(){
    div()
    section()
    paragraph()
 }



