import {useEffect} from 'react'

export const useClickOutside = (refDropDown,dropCallback,outsideButton)=> {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        // ==== ↓↓↓↓ если кнопка за пределами нашего дропдауна передаем реф на эту кнопку что бы ее ловил документ.
          	if(outsideButton && outsideButton.current.contains(event.target)){
            return
          }
        // ==== ↑↑↑↑ если кнопка за пределами нашего дропдауна передаем реф на эту кнопку что бы ее ловил документ.

        if (refDropDown.current && !refDropDown.current.contains(event.target)) {
            dropCallback(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [refDropDown]);
}