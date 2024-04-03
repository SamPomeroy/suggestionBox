// - `getAllSuggestions`
//    - `getSingleSuggestion` - get one suggestion based on id using parameters
//    - `createSuggestion` - does not need id or time from the user
//    - `updateSuggestion` - the user can only update title and suggestion
//    - `deleteSuggestion` - suggestion deletes based on id
const Suggestion = require('../model/suggestion')

async function getAllSuggestions(req, res, next){
    try {
        let foundSuggestions = await Suggestion.find({})
        res.json({message: 'success', foundSuggestions})
        
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}

async function getSingleSuggestion(req, res, next){
    try {
        const foundSuggestion = await Suggestion.find({_id: req.params.id})
        res.json({message: 'success', foundSuggestion})
    } catch (error) {
        res.json({message: 'error', error: error})
    }
}

async function createSuggestion(req, res, next){
    try {
        const savedSuggestion = new Suggestion({
                title: req.body.title,
                author: req.body.author,
                suggestion: req.body.suggestion,
                likes: req.body.likes,
                anonymous: req.body.anonymous,
                timeCreated: req.body.timeCreated
        })
        await savedSuggestion.save()
        res.json({message: 'suggestion created', savedSuggestion})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}

async function updateSuggestion(req, res, next){
    try {
        let updatedSuggestion = Suggestion.findByIdAndUpdate({_id:req.params.id}, req.body.title, req.body.suggestion, {new:true})
        res.json({message:"successfully updated", updatedSuggestion})
    } catch (error) {
        res.json({message:"failed", error:error.message})
    }
}


async function deleteSuggestion(req, res, next){
    try {
        let deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id)
        res.json({message: 'suggestion deleted', deletedSuggestion})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}

async function getSuggestionsByAuthor(req, res, next){
    try {
        const{author} = req.query
        let suggestion = await Suggestion.find({author})
        res,json({message: 'found suggestion', suggestion})
    } catch (error) {
        res.json({message: 'error', error:message})
    }
}

module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSuggestionsByAuthor
}