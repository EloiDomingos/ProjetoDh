const beerList = [{
    id: 1,
    name: 'Heineken',
    price: 15.00,
    img: "/imagens/beer01.jpg"
},
{
    id: 2,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
},
{
    id: 3,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 4,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
},
{
    id: 5,
    name: 'Heineken',
    price: 15,
    img: "/imagens/beer01.jpg"
},
{
    id: 6,
    name: 'Colorado',
    price: 20,
    img: "/imagens/cerveja-colorado-appia-600ml_77132.jpg"
}]
const { Produto } = require('../database/models');


const indexController ={
    home: async (req,res)=>{
        const produtos = await Produto.findAll({
            raw:true
        })
        res.render('home',{ cerva: produtos })
    },
    sobreNos: (req,res)=>{
        res.render('sobreNos')
    }
}


module.exports = indexController