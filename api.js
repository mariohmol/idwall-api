const superagent = require('superagent');

/**
 * 
 * @param {*} data 
 * {
//       	"matriz": "consultaPessoaDefault",
//         "parametros": {
//           "cpf_data_de_nascimento": "20/08/1881",
//           "cpf_nome": "Alvo Percival Wulfric Brian Dumbledore",
//           "cpf_numero": "71393401881"
//       	}
//       }
 */
const token = 'seutoken';

const criarRelatorio = async function(data){
    const reqWS = await superagent.post({
        url: 'https://api-v2.idwall.co/relatorios',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data
    });
    return reqWS;
}

// Obtendo status de um relatório
const statusRelatorio = async function(numero_relatorio){
    const reqWS = await superagent.get({
        url: `https://api-v2.idwall.co/relatorios/${numero_relatorio}`,
        headers : {
            'Authorization': token
        }
    });
    return reqWS;
}

const dadosRelatorio = async function(numero_relatorio){
    const reqWS = await superagent.get({
        url: `https://api-v2.idwall.co/relatorios/${numero_relatorio}/dados`,
        headers : {
            'Authorization': token
        }
    });
    return reqWS;
}

module.exports = { criarRelatorio, statusRelatorio, dadosRelatorio};
