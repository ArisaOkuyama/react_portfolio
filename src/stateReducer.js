export default function (state, action){
    switch (action.type){
        case "setLanguage": {
            return {
                language: action.data
            }
        }
        default: 
            return state
    }
}