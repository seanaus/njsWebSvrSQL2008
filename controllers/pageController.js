"use strict"
// const renderHome = (req, res) => {
//     res.render('pages/home', { title: "njsWebSvrSQL2008" })
// }
const getData = (req, res) => {
    res.json({ title: "njsWebSvrSQL2008", other: "AAAA" })
}
// const renderAbout = (req, res) => {
//     res.render('pages/about', {title: "njsWebSvrSQL2008"})
// }

module.exports = {
    // renderHome,
    getData
}