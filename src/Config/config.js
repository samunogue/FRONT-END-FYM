const URL_BASE = 'http://localhost:3030/v1'

export const endpoints = {
    buscarContratante:`${URL_BASE}/contratante`,
    listarMusicos:`${URL_BASE}/musico`,
    loginContratante:`${URL_BASE}/conta/loginContratante`,
    loginMusico:`${URL_BASE}/conta/loginMusico`,
    cadastrarContratante:`${URL_BASE}/contratante`,
    editarContratante:`${URL_BASE}/contratante`,
    excluirContratante:`${URL_BASE}/contratante`,
    cadastrarMusico:`${URL_BASE}/musico`,
    editarMusico:`${URL_BASE}/musico`,
    excluirMusico:`${URL_BASE}/musico`,
    redefinirSenhaMusico:`${URL_BASE}/conta/redefinirSenhaMusico`,
    redefinirSenhaContratante:`${URL_BASE}/conta/redefinirSenhaContratante`,
    cadastrarContrato:`${URL_BASE}/contratante/cadastrarContrato`,
    responderContrato:`${URL_BASE}/musico/responderContrato`,
    avaliarMusico:`${URL_BASE}/conta/avaliarMusico`,
    buscarConversas:`${URL_BASE}/conta/buscarConversa`
}