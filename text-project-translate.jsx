/**
 * Photoshop script to translate text layers based on lang 
 * JSON file, then export project to PNG images for each 
 * language.
 * 
 * Usage: generate screenshots files for your app (ex: 
 * Googleplay, etc).
 * 
 * @param (input) Current Photoshop project
 * @param ouput Target folder path to generated files
 */

// get the path of currently opened photoshop document
var output = app.activeDocument.path;
var input = app.activeDocument.path;
var langs = ["en", "fr"];

/* UTILS *************************************************** */

// Because Photoshop doesn't
function JSON_parse(fileContent) {
    /// Extend script doesn't support JSON. Are you fucking kidding?
    // obj = JSON.parse(file_to_read .read());
    // Worry not. We got potentially harmful, yet useful, `eval` function.
    var jsonFile = eval("(" + fileContent + ")");
    return jsonFile;
}

function FILE_toString(fileToRead) {
    if (fileToRead === false) {
        alert("File read error:" + jsonFilePath);
    }
    fileToRead.open('r');
    var fileContent = fileToRead.read();
    fileToRead.close();
    return fileContent;
}

/* EXECUTION *************************************************** */

//Get the currently opened Photoshop document
var doc = app.activeDocument;

// get filename without extension
var filename = doc.name;
filename = filename.slice(0, filename.lastIndexOf(".")); //just add this line to the construction.      

// execute for eqch languages
for (var t = 0; t < langs.length; t++) {
    var tt = langs[t];

    // Use absolute path for the JSON file.
    var langFilePath = input + "/" + filename + "-" + tt + ".json";
    var fileToRead = File(langFilePath);
    var fileContent = FILE_toString(fileToRead);
    var messages = JSON_parse(fileContent);

    // Translate each text layers and sub layers
    for (var i = 0; i < doc.layers.length; i++) {
        var currLayer = doc.layers[i];

        // check layer is visible
        if (currLayer.visible === false) {
            break;
        }

        // check layer is text
        if (currLayer.kind != LayerKind.TEXT) {
            break;
        }

        // get translation
        var translation = messages[currLayer.name];

        // check translation founded
        if (!translation) {
            break;
        }

        // set new text
        currLayer.textItem.contents = translation;
    }

    // save
    var file = new File(output + "/" + filename + "-" + tt + ".png");
    var saveOptions = new PNGSaveOptions();
    alert(file);
    doc.saveAs(file, saveOptions, true, Extension.LOWERCASE);
}