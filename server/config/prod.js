module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,


    //googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY.replace(new RegExp("\\\\n", "\g"), "\n")
    mongoURI:process.env.MONGO_URI,
}

try {
    googlePrivateKey: JSON.parse(process.env.GOOGLE_PRIVATE_KEY);
} catch (err) {
    console.log('Error: ', err.message);
}