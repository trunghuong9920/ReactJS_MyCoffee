import { useState } from "react";

function UseAddModal(){
    const [showAddModal, setShowAddModal] = useState(false)

    const handleShowAddModal = () =>{
        setShowAddModal(!showAddModal)
    }

    return {showAddModal, handleShowAddModal}

}
export default UseAddModal