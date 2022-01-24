import React,{useRef} from 'react'
import {useSpring,animated} from 'react-spring'
import Calendar from "../calendar/Calendar";
import Dropdown from "../dropdown/Dropdown";
import { ButtonAdd, Minus, Plus} from "../button-add-transactions/style/buttonAddTransactions";
import { ModalWrap, ModalContent, Background, CloseModal, Flex, Input, ModalButton} from './style/modalAddTransaction'

export const ModalAddTransaction=({showModal,setShowModal}) => {
    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    });
    const closeModal = e => {
        if(modalRef.current===e.target){
            setShowModal(false)
        }
    }
    return(
        <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrap showModal={showModal}>
                        <ModalContent>
                            <h1>Add transaction</h1>
                            <ButtonAdd className='buttonExpenses'><Minus/></ButtonAdd>
                            <Flex>
                                <Input placeholder='0.00'></Input>
                                <Calendar></Calendar>
                            </Flex>
                            <Flex>
                                <Input big placeholder='Comments'></Input>
                            </Flex>
                            <Dropdown></Dropdown>
                            <ModalButton>ADD</ModalButton>
                            <ModalButton cancel>CANCEL</ModalButton>
                        </ModalContent>
                        <CloseModal aria-label='Close modal' onClick={()=>setShowModal(prev => !prev)}/>
                    </ModalWrap>
                </animated.div>
            </Background>):null}
        </>

    )
}