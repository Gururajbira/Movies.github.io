

export const incCount = () => {

    return {


        type : 'increment'
    }
}
export const decCount = () => {

    return{

        type : 'decrement'
    }
}

export const reset = () =>{

    return{

        type : 'reset'
    }
} 