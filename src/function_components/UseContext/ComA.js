import React, { createContext } from 'react'
import ComB from './ComB'
// 1st we need to create context and import from react
const BioData = createContext();
// now bio data have two property provider and consumer

const ComA = () => {
    return (
        <div>

            <BioData.Provider value={"Amit"} >
                <ComB />
            </BioData.Provider>

        </div>
    )
}

export default ComA
export {BioData}