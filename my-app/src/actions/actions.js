export const INCREMENT = "INCREMENT";
export const DECREMET = "DECREMENT";
export const RESET = "RESET"

//actionc creaters
export const  decrement =  () => {
    return {type: DECREMET};
}
export const increment = () => ({type: INCREMENT});
export const reset = () => ({type: RESET});