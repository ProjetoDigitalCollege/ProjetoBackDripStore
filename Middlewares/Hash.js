import bcrypt from "bcrypt";

export const doHash = (password) => {
  const saltRounds = 12;
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(`\n Senha hasheada com sucesso!!\n`)
    return hash;
  } catch (error) {
    console.error(`\nErro ao dar hash \n`), error;
  }
};  

export const doCompare = (password, hash) => {
  try {
    const result = bcrypt.compareSync(password, hash);
    console.log(`\n Senha verificada com sucesso!!\n`);
    return result;
  } catch (error) {
    console.error(`\nErro ao comparar senhas\n`, error);
    return false;
  }
}
