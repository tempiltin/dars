const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Tempiltin / contact'
    })
})

module.exports = router