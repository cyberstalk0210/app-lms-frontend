import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const DialogModal = ({ochil, yopilFunc, submitModal}) => {
    return (
        <>
            <Modal isOpen={ochil} toggle={() => yopilFunc(false)}>
                <ModalHeader toggle={() => yopilFunc(false)}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitModal}>
                        Yes
                    </Button>{' '}
                    <Button color="secondary" onClick={() => yopilFunc(false)}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DialogModal;