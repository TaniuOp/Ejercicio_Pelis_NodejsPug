const dataFilms = require('../utils/films')
//funcion para encontrar peli y sacar datos
const findFilms = async (req, res) => {
    const data = await dataFilms.getfilms(req.body.title) //parametro recogido por el formulario
    res.render('films', {films:data})
}
//funcion para pintar el formulario(Tae el Home.pug con el formulario)
const getHome = (req,res)=>{
    res.render('home')
}
const home = {
    findFilms,
    getHome
}
module.exports = home