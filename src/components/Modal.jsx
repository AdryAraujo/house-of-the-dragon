import './Modal.css';

export function Modal({greenOpen, blackOpen}){
    if(greenOpen){
        return(
            <div className='container-modal'>
                <div className='content-modal'>
                    <p>Reveja seus conceitos e escolha o time certo</p>
                    <button className='buttons'>Fechar</button>
                </div>
            </div>
        )
    }
    if(blackOpen){
        return(
            <div className='container-modal'>
                <div className='content-modal'>
                    <p>Fogo nos verdes, Rhaenyra rainha resto nadinha</p>
                    <button className='buttons' onClick={() => blackOpen(false)}>Fechar</button>

                </div>
            </div>
        )
    } return null
}