import{ADD_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,CLEAR_CONTACTS,SET_CURRENT,CLEAR_CURRENT,CLEAR_FILTER,FILTER_CONTACTS,GET_CONTACTS,CONTACT_ERROR}from '../Type'

const ContactsReducer = (state,action) => {
    switch (action.type){
        case GET_CONTACTS:
            return {
              ...state,
              contacts: action.payload,
              loading: false
            };
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[action.payload,...state.contacts],
                loading:false
            }
            case UPDATE_CONTACT:
                return {
                    ...state,
                    contacts: state.contacts.map(contact =>
                      contact._id === action.payload._id ? action.payload : contact
                    )
                  };
            case CLEAR_CONTACTS:
                return {
                    ...state,
                    contacts:null,
                    filtered:null,
                    current:null,
                    error:null
                }
            case DELETE_CONTACT:
                return { 
                    ...state,
                contacts: state.contacts.filter(contact=>(contact._id!==action.payload)) 
            }
            case SET_CURRENT:
                return{
                    ...state,
                    current:action.payload
                }
            case CLEAR_CURRENT:
                return{
                    ...state,
                    current:null
                }
            case FILTER_CONTACTS:
                return{
                    ...state,
                    filtered:state.contacts.filter(contact => {
                        return contact.name.toLowerCase().includes(action.payload) || contact.email.toLowerCase().includes(action.payload)
                    })
                }
            case CLEAR_FILTER:
                return{
                    ...state,
                    filtered:null
                }
        default:
            return state
    }    
}

export default ContactsReducer
