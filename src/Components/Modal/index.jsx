import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Button from '../Button'

import api from '../../api/api'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

ReactModal.setAppElement("#root")

const Modal = ( {hasChanged, hasClosed,} ) => {
    const [formValues, setFormValues] = useState({ name: "",email: "", mensagem: "" })
    const [fieldsError, setFieldsError] = useState({ fieldName: false, fieldMensagem: false, fieldEmail: false })
    const [hasSubmited, setHasSubmited] = useState(false)
    const sendMensage = () => {
        const formValid = verifyValues()
        console.log(formValid)
        if(formValid){
            api.post("messages",{...formValues}).then(
                ( response ) => {
                    setFormValues({ name: "",email: "", mensagem: "" })
                    setHasSubmited(true)
                }
            )
        }
    }

    const verifyValues = () => {
        const isBlankValues = () => formValues.email.trim() === "" && formValues.email.trim() === "" && formValues.email.trim() === ""
        if(isBlankValues() ) {
            setFieldsError({fieldName: true, fieldMensagem: true, fieldEmail: true})
            return false
        } else {
            if(formValues?.name.trim() === "") {
                setFieldsError({...formValues,fieldName: true})
                return false
            }
            if(formValues?.email.trim() === "") {
                setFieldsError({...formValues,fieldEmail: true})
                return false
            }
            if(formValues?.mensagem.trim() === "") {
                setFieldsError({...formValues,fieldMensagem: true})
                return false
            }
        }
        return true
    }

    const handleChange = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        setFormValues(
            {...formValues, [target.name]: value}
        )     
        if(formValues[target.name]!== "") {
            setFieldsError({
            ...fieldsError,
            ["field"+target.name[0].toUpperCase()+target.name.substring(1,target.name.length)]: false
        })
        }
    }


    return (
        <div className="modal-wrapper">
            <ReactModal isOpen={hasChanged} onRequestClose={hasClosed}
           >
               <div className="modal">
                    <div className="header-modal">
                    <h2 className="title-modal">Formulário de Contato</h2>
                      <span className="btn-close" onClick={hasClosed}>
                           X
                    </span>
                </div>
                <div>
                    <form>
                        <div className="input-group">
                            <label htmlFor="name">Nome:{ fieldsError.fieldName && <span>Obrigatório</span>}</label>
                            <input type="text" onChange={handleChange} required name="name" value={formValues.name}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail:{ fieldsError.fieldEmail && <span>Obrigatório</span>}</label>
                            <input type="email" required onChange={handleChange} name="email" value={formValues.email}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="mensagem">Mensagem:{ fieldsError.fieldMensagem && <span>Obrigatório</span>}</label>
                            <textarea required onChange={handleChange} name="mensagem" value={formValues.mensagem}></textarea>
                        </div>
                        <div className="btn-send-wrapper">
                            <Button wrapper={sendMensage} isMethod={true}  containerClassName="container-button container-btn-send"
                            className={hasSubmited? "btn btn-send btn-submited": "btn btn-send"}>
                                { hasSubmited ? "Mensagem enviada": "Enviar"}
                            </Button>
                        </div>
                    </form>
                </div>
               </div>
            </ReactModal>
        </div>
    )
}

export default Modal