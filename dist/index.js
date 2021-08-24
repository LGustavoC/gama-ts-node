"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importacao bibliotecas
var http = __importStar(require("http"));
var url = __importStar(require("url"));
var queryString = __importStar(require("query-string"));
var fs = __importStar(require("fs"));
// Definicao de porta
var port = 5000;
// Criacao do servidor
var server = http.createServer(function (request, response) {
    // Implementar cod aqui
    var urlparse = url.parse(request.url ? request.url : '', true);
    var resposta;
    // Receber informacoes do usuario
    var params = queryString.parse(urlparse.search ? urlparse.search : '');
    // Criar usuario - Atualizar usuario
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // Salvar informacoes
        fs.writeFile("users/" + params.id + ".txt", JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            resposta = 'Usuario criado/atualizado com sucesso';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});
// Execucao
server.listen(port, function () {
    console.log("Server running on port " + port);
});
