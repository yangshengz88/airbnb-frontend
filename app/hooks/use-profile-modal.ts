import {create} from "zustand";

interface ProfileModalStore {
    isOpen: boolean;
    open: ()=> void;
    close: ()=> void;
}

const useProfileModal = create<ProfileModalStore>((set)=> ({
    isOpen: false,
    open: ()=> set({isOpen: true}),
    close: ()=> set({isOpen: false})

}));

export default useProfileModal;