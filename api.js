const superagent = require('superagent');
const token = 'seutoken';



/**
 * 
 * ID WALL 
 * 
 * 
 */
/**
* 
* @param {*} data 
* {
*       	"matriz": "consultaPessoaDefault",
*         "parametros": {
*           "cpf_data_de_nascimento": "20/08/1881",
*           "cpf_nome": "Alvo Percival Wulfric Brian Dumbledore",
*           "cpf_numero": "71393401881"
*       	}
*       }
*/
const criarRelatorio = async function (data) {
    const reqWS = await superagent
        .post('https://api-v2.idwall.co/relatorios')
        .send(data)
        .set('Authorization', token)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    return reqWS;
}

// Obtendo status de um relatório
const statusRelatorio = async function (numero_relatorio) {
    const reqWS = await superagent.get(`https://api-v2.idwall.co/relatorios/${numero_relatorio}`)
        .set('Authorization', token);
    return reqWS;
}

const dadosRelatorio = async function (numero_relatorio) {
    const reqWS = await superagent.get(`https://api-v2.idwall.co/relatorios/${numero_relatorio}/dados`)
        .set('Authorization', token);
    return reqWS;
}

export { router, getNewReportRequests, idWallScheduler };

module.exports = { criarRelatorio, statusRelatorio, dadosRelatorio };
