const INITIAL_STATE = {
  user:'',
  email:'',
  logado: false,
  usuariosCadastradosSistema:[]
}


const usuarioLogin = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload.user,
        email: action.payload.email,
        logado: true,
      }
      case'CADASTRO_USUARIOS':
      return {
        ...state,
        usuariosCadastradosSistema: [...state.usuariosCadastradosSistema,action.payload]
      }
      default:
        return state;
  }
} 

export default usuarioLogin;