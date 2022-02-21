const Politician = require('../models/politician-model')

createPolitician = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a politician',
        })
    }

    const politician = new Politician(body)

    if (!politician) {
        return res.status(400).json({ success: false, error: err })
    }

    politician
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: politician._id,
                message: 'Politician created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Politician not created!',
            })
        })
}

updatePolitician = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Politician.findOne({ _id: req.params.id }, (err, politician) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Politician not found!',
            })
        }
        politician.nombre = body.nombre
        politician.apellidos = body.apellidos
        politician.salarioAnual = body.salarioAnual
        politician.partido = body.partido
        politician
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: politician._id,
                    message: 'Politician updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Politician not updated!',
                })
            })
    })
}

deletePolitician = async (req, res) => {
    await Politician.findOneAndDelete({ _id: req.params.id }, (err, politician) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!politician) {
            return res
                .status(404)
                .json({ success: false, error: `Politician not found` })
        }

        return res.status(200).json({ success: true, data: politician })
    }).catch(err => console.log(err))
}

getPoliticianById = async (req, res) => {
    await Politician.findOne({ _id: req.params.id }, (err, politician) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!politician) {
            return res
                .status(404)
                .json({ success: false, error: `Politician not found` })
        }
        return res.status(200).json({ success: true, data: politician })
    }).catch(err => console.log(err))
}

getPoliticiansFromJSON = async (req, res) => 

getPoliticians = async (req, res) => {
    await Politician.find({}, (err, politicians) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!politicians.length) {
            return res
                .status(404)
                .json({ success: false, error: `Politician not found` })
        }
        return res.status(200).json({ success: true, data: politicians })
    }).catch(err => console.log(err))
}

module.exports = {
    createPolitician,
    updatePolitician,
    deletePolitician,
    getPoliticians,
    getPoliticianById,
}