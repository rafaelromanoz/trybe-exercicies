const INITIAL_STATE = {
  user:'',
  email:'',
  logado: false,
  usuarioCadastro:'',
  emailCadastro:'',
  idadeCadastro:0,
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
        usuarioCadastro: action.payload.user,
        emailCadastro:action.payload.email,
        idadeCadastro:action.payload.idade,
      }
      default:
        return state;
  }
} 

export default usuarioLogin;