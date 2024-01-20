const Contacts = require("../Models/Contacts")

exports.AddContact = async(req,res)=>{
    try {
        const found = await Contacts.findOne({email : req.body.email})
        if (found){
           return res.status(400).send('Email already used')
        }
        const newContact = new Contacts(req.body)
        await newContact.save()
        res.status(200).send({Msg: "New conatct added",newContact})
    } catch (error) {
        res.status(500).send('Could not add Contact')
    }


}

exports.GetContacts = async(req,res)=>{

    try {
      const ContactList = await Contacts.find()
        res.status(200).send({Msg: "Contact List",ContactList})
    } catch (error) {
        res.status(500).send('Could not add Contact')
    }

}

exports.deleteContact = async(req,res)=>{

    try {
  const {id} = req.params
 await Contacts.findByIdAndDelete(id)
  res.status(200).send('Contact Delete')
    } catch (error) {
        res.status(500).send('Could not delete Contact')
    }
}

exports.UpadateContacts = async(req,res)=>{

    try {  
        const {id} = req.params
        await Contacts.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('Contact updated')
    } 
    catch (error) {
        res.status(500).send('Could not update Contacts')
        
    }
}

exports.getOneContact = async(req,res)=>{

    try {
        const {id} = req.params
        const contactF = await Contacts.findById(id)
        res.status(200).send({Msg : "Contact found", contactF})
    } catch (error) {
        res.status(500).send('Could not find contact')
    
    }
}
