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




function htmlBuild(payload){
    const inputText = input.value
    switch(payload.action){
        case 'create div': return htmlCreator(inputText, payload.openTag, payload.openToken, payload.closeTag, payload.closeToken)
        break
        case 'create section': return htmlCreator(inputText, payload.openTag, payload.openToken, payload.closeTag, payload.closeToken) 
        break
        case 'create paragraph': return htmlCreator(inputText, payload.openTag, payload.openToken, payload.closeTag, payload.closeToken) 
    }
}

function htmlCreator(input, openTag, openToken, closeTag, closeToken){
    const output =  input.replaceAll(/\n\n/g, '   ')
                              .split(' ')
                              .map(item => {
                return item.includes(openTag)
                ? item
                : item.includes(openToken)
                ? `\n  ${item.replaceAll(openToken, openTag)}">`
                : item.includes(closeTag)
                ? item
                : item.includes(closeToken)
                ? `\n ${item.replaceAll(closeToken, closeTag)}\n`
                : item 
            }).join(' ')
            return output 
}

function div(){
    return input.value = htmlBuild({action: 'create div', 
                                    openTag: DIV_OPEN_TAG, 
                                    openToken: DIV_OPEN_TOKEN, 
                                    closeTag: DIV_CLOSE_TAG, 
                                    closeToken: DIV_CLOSE_TOKEN})
    
}
function section(){
    return input.value = htmlBuild({action: 'create section',
                                    openTag: SECTION_OPEN_TAG, 
                                    openToken: SECTION_OPEN_TOKEN, 
                                    closeTag: SECTION_CLOSE_TAG, 
                                    closeToken: SECTION_CLOSE_TOKEN})
}
function paragraph(){
    return input.value = htmlBuild({action: 'create paragraph',
                                    openTag: PARAG_OPEN_TAG, 
                                    openToken: PARAG_OPEN_TOKEN, 
                                    closeTag: PARAG_CLOSE_TAG, 
                                    closeToken: PARAG_CLOSE_TOKEN})
}

 function modifyAll(){
    div()
    section()
    paragraph()
 }




