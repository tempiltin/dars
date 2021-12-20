const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Temurbek shukurov'
    })
})

module.exports = router