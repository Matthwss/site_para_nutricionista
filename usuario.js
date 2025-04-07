import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEPopularTabelaUsuario(noem, soberenome, email, senha) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    })

    db.run(`CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMERY KEY,nome TEXT, email TEXT, senha TEXT)` );
}
criarEPopularTabelaUsuario()