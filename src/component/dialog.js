import React, { useState } from 'react'
import Modal from './modal.js'
import './dialog.scss'

const Dialog = ({ children, visible, cancel, confirm }) => {
    return <Modal visible={visible}>
        <div styleName="dialog">
            <div styleName="body">{children}</div>
            <div styleName="foot">
                <a href="javascript:;" onClick={cancel}>cancel</a>
                <a href="javascript:;" onClick={confirm}>yes</a>
            </div>
        </div>
    </Modal>
}

export default Dialog