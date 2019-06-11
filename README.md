WORK IN PROGRESS

PHOTOSHOP-SCRIPT-TEXT-TRANSLATOR
================================

Photoshop script to translate text layers based on lang JSON file, then export project to PNG images for each language.

Usage: generate screenshots files for your app (ex: Googleplay, etc).

## Getting started (one screenshot by project)

* Clone this reposity
* Open test photoshop file `./test/project-to-screenshot.psd`
* Execute `text-project-translate.bat`
* Get your results from your `Documents` folder

NOTE: Edit `output` value in `text-project-translate.jsx` with you want to change the target folder

NOTE: Edit `project-to-screenshot-fr.json` or `project-to-screenshot-en.json` content to change translation text.

NOTE: Edit same keys in Photoshop projet AND `*.json` files.

NOTE: Use 'Unicode' type for universql support (asian and russian fonts). 

## Getting started (multiple screenshot layers by project)

* Clone this reposity
* Open test photoshop file `./test/layers-to-screenshots.psd`
* Execute `text-layers-translate.bat`
* Get your results from your `Documents` folder

## Example - Test with 1 Screenshot (project)

## Example - Test with 2 Screenshot (group)

## Example - External Project

translate-screenshots.bat
```javascript
"C:\Program Files (x86)\Photoshop\Photoshop.exe" c:\Users\damien\git\photoshop-script-text-translator\text-groups-translate.jsx
```

![picture](docs/ScreenShot000.png)

## References

- [Photoshop read json file](https://github.com/fabianmoronzirfas/extendscript/wiki/Read-In-JSON-From-File-And-DONT-Eval)
- [Photoshop get layer type](http://creativetuts.com/photoshop-script-determine-layer-kind/)