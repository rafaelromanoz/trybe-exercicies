const userActionLogin = (user, email) => ({
  type: 'USER_LOGIN',
  payload: {
    user,
    email,
  },
});
export const cadastroAction =( user,email,idade ) => ({
  type:'CADASTRO_USUARIOS',
  payload:{
    user,
    email,
    idade,
  }
})
export default userActionLogin;
