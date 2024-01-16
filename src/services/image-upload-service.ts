import multer from 'multer';
import { google } from 'googleapis';

const upload = multer({ dest: 'uploads/' });

// load credentials json file
const credentials = require('../google-credentials/gallery-api-411416-4dd89186f520.json');

// create a JWT client from the credentials file
const auth = new google.auth.JWT({
	email: credentials.client_email,
	key: credentials.private_key,
	scopes: ['https://www.googleapis.com/auth/drive.file'],
});

// inititlize google drive api
const drive = google.drive({ version: 'v3', auth });

export { upload, auth, drive };
