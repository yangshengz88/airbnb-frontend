import {create} from "zustand";

interface AddProperetyModalStore {
    isOpen: boolean;
    open: ()=> void;
    close: ()=> void;
}

const useAddPropertyModal = create<AddProperetyModalStore>((set)=> ({
    isOpen: false,
    open: ()=> set({isOpen: true}),
    close: ()=> set({isOpen: false})

}));

export default useAddPropertyModal;