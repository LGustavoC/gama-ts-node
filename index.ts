// Importacao bibliotecas
import * as http from 'http';
import * as url from 'url';
import * as queryString from 'query-string';
import * as fs from 'fs';

// Definicao de porta
const port = 5000;

// Criacao do servidor
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

    // Implementar cod aqui
    const urlparse = url.parse(request.url ? request.url : '', true);

    let resposta;

    // Receber informacoes do usuario
    const params = queryString.parse(urlparse.search ? urlparse.search : '');

    // Criar usuario - Atualizar usuario
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // Salvar informacoes
        fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Saved!');

            resposta = 'Usuario criado/atualizado com sucesso'

            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }

});

// Execucao
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
