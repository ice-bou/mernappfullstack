const express = require ('express')
const { AddContact, GetContacts, UpadateContacts, deleteContact, getOneContact } = require('../Controllers/Contact')
const contactRouter = express.Router()


contactRouter.post('/addContact',AddContact)

contactRouter.get('/getContacts',GetContacts)


contactRouter.delete('/deleteContact/:id',deleteContact)

contactRouter.put('/updateContact/:id',UpadateContacts)

contactRouter.get('/getOneContact/:id',getOneContact)





module.exports = contactRouter