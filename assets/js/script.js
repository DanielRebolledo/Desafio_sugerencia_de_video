class Multimedia{
    #url
    constructor(url){
        this.#url = url;
    }
    get url(){
        return this.#url;
    }
    set url(nuevaUrl){
        this.#url = nuevaUrl
    }

    setInicio(){}

}

class Reproductor extends Multimedia{
    constructor(id){
        super(`https://www.youtube.com/embed/${id}`)
        this.id = id
    }
 
    playMultimedia(id) {
        $(`#${id}`).attr('src', this.url)
    }

    setInicio(inicio){}
}

$(document).ready(() => {
    let $collapseMusica    = $('#collapseOneButton');
    let $collapsePelicula  = $('#collapseTwoButton')
    let $collapseSerie     = $('#collapseThreeButton')

    let $iframeMusica   = $('#musica')
    let $iframePelicula = $('#pelicula')
    let $iframeSerie    = $('#serie')

    
    $collapseMusica.click(() => {
        let reproductor = new Reproductor('o6EFg5eWWlM');
        reproductor.playMultimedia('musica')
        reproductor.setInicio()
    })
    
    $collapsePelicula.click(() =>{
        let reproductor = new Reproductor('lKLqrpYNfnA');
        reproductor.playMultimedia('pelicula')
    })
    
    $collapseSerie.click(() =>{
        let reproductor = new Reproductor('ZHZG6UArE3I');
        reproductor.playMultimedia('serie')
    })


})

