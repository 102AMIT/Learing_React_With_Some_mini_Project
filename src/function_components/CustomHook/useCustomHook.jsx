import { useEffect } from "react";


const useCustomHook = (count) => {
    useEffect(() => {
        console.log("Hello UseEffects");
        if(count >=1){
          document.title=`Chats (${count})` 
        }else{
          document.title=`Chats` 
        }
        
      },[count]);
}

export default useCustomHook