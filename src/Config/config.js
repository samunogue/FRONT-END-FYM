const URL_BASE = 'http://localhost:3030/v1'

export const endpoints = {
    listarMusicos:`${URL_BASE}/musico`,
    loginContratante:`${URL_BASE}/conta/loginContratante`,
    loginMusico:`${URL_BASE}/conta/loginMusico`,
    cadastrarContratante:`${URL_BASE}/contratante`,
    editarContratante:`${URL_BASE}/contratante`,
    excluirContratante:`${URL_BASE}/contratante`,
    cadastrarMusico:`${URL_BASE}/musico`,
    editarMusico:`${URL_BASE}/musico`,
    excluirMusico:`${URL_BASE}/musico`
}