"use strict"

const renderHome = (req, res) => {
    res.render('pages/home', {title: "njsWebSvrSQL2008"})
}
const renderAbout = (req, res) => {
    res.render('pages/about', {title: "njsWebSvrSQL2008"})
}

module.exports = {
    renderHome,
    renderAbout
}