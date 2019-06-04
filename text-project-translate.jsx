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
// var output = $.getenv("USERPROFILE") + "/Documents/";
// var output = Folder.Desktop

/* *************************************************** */

//Get the currently opened Photoshop document
var doc = app.activeDocument;

// Use absolute path for the JSON file.
var lang_file_path = input + "/translation-en.json";

// Get file object
var file_to_read = File(lang_file_path);
if (file_to_read === false) {
    // if something went wrong
    alert("Bah!");
}
file_to_read.open('r');

// Read and get the content
var content = file_to_read.read();
file_to_read.close();

/// Extend script doesn't support JSON. Are you fucking kidding?
// obj = JSON.parse(file_to_read .read());

// Worry not. We got potentially harmful, yet useful, `eval` function.
stuff = eval("(" + content + ")")

alert(stuff.name);
/*
for(fieldname in stuff) {

}
*/
//Show each layer each time and save a snapshot
for (var i = 0; i < doc.layers.length; i++) {

    /*
        //Hide all the layers
        for (var j = 0; j < doc.layers.length; j++) {
            doc.layers[j].visible = false;
        }
    
        // show layer
        var layerIndex = i;
        doc.layers[layerIndex].visible = true;
    
        var layerName = doc.layers[layerIndex].name;
        var filename = doc.name;
        filename = filename.slice(0, filename.lastIndexOf(".")); //just add this line to the construction.  
    
        // save
        var file = new File(output + filename + "_" + layerName + ".png");
        var saveOptions = new PNGSaveOptions();
        doc.saveAs(file, saveOptions, true, Extension.LOWERCASE);
        */
}