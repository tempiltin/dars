const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('portfolio', {
        title: 'Tempiltin / portfolio'
    })
})

module.exports = router