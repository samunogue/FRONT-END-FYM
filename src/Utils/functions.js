export function verificarForms(objeto, atributosIgnorados) {
    for (const atributo in objeto) {
      if (!objeto[atributo] && !atributosIgnorados.includes(atributo)) {
        return false;
      }
    }
    return true;
  }