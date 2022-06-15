const express = require('express');
const cors = require('cors')
const server = express();

server.use(express.json());
server.use(cors());

const peopleImc = []
let id = 0;
server.post('/imc', (req, res) => {
    const imcData = req.body
    const calc = (imcData.peso) / (imcData.altura * imcData.altura)

    const obj = {
        sexo: imcData.sexo,
        imc: calc,
        peso: imcData.peso,
        altura: imcData.altura,
        id: id
    }
    id++;
    peopleImc.push(obj)
    return res.status(200).json( peopleImc )
})

// Retornar 
server.get('/imc', (req, res) => {
    return res.status(200).json( peopleImc)
});

// Deletar 
server.delete('/imc', (req, res) => {
    peopleImc.length = 0;
    id = 0;
    return res.json({ message: "Array esvaziado" });
});

server.delete('/imc/:id', (req, res) => {
    const idNum=Number(req.params.id)

    const index=peopleImc.findIndex(item=>item.id === idNum)

    peopleImc.splice(index, 1)
    return res.json({message:'delete'});
});

server.put('/imc/:id_put', (req,res) => {
const num=Number(req.params.id_put)

const index=peopleImc.findIndex(item=>item.id === num)

const altura = req.body.altura
const peso = req.body.peso
console.log(index)
const imc = (peso) / (altura * altura)

peopleImc[index].altura = altura
peopleImc[index].peso = peso
peopleImc[index].imc = imc

return res.json(peopleImc[index])
});

server.listen(3002);