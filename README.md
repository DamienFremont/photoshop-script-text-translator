PHOTOSHOP-SCRIPT-TEXT-TRANSLATOR
================================

Photoshop script to translate text layers based on language JSON files, then export project to PNG images for each language. Save a lot of time!

Usage: generate screenshots files for your app (ex: Googleplay, etc).

One project is converted to X languages screenshots. With the seconde script, you can also convert each group layer as a separate files (for multi-screenshots project)
![picture](docs/example-ScreenShot007.png)

## Getting started (one screenshot by project)

* Clone this reposity
* Open test photoshop file `./test/project-to-screenshot.psd`
* Execute `text-project-translate.bat`
* Get your results from your `Documents` folder

NOTE: Edit `output` value in `text-project-translate.jsx` with you want to change the target folder

NOTE: Edit `project-to-screenshot-fr.json` or `project-to-screenshot-en.json` content to change translation text.

NOTE: Edit same keys in Photoshop projet AND `*.json` files.

NOTE: Use 'Unicode' type for universal support (asian and russian fonts). 

## Getting started (multiple screenshot layers by project)

* Clone this reposity
* Open test photoshop file `./test/layers-to-screenshots.psd`
* Execute `text-layers-translate.bat`
* Get your results from your `Documents` folder

## Example - Test with 1 Screenshot (project)

text-project-translate.bat
```javascript
"C:\Program Files (x86)\Photoshop\Photoshop.exe" c:\Users\damien\git\photoshop-script-text-translator\text-project-translate.jsx
```
![picture](docs/project-ScreenShot000.png)

![picture](docs/project-ScreenShot001.png)

![picture](docs/project-ScreenShot002.png)

![picture](docs/project-ScreenShot003.png)

![picture](docs/project-ScreenShot004.png)

![picture](docs/project-ScreenShot005.png)

![picture](docs/project-ScreenShot006.png)

## Example - Test with 2 Screenshot (group)

text-group-translate.bat
```javascript
"C:\Program Files (x86)\Photoshop\Photoshop.exe" c:\Users\damien\git\photoshop-script-text-translator\text-groups-translate.jsx
```

![picture](docs/group-ScreenShot000.png)

![picture](docs/group-ScreenShot001.png)

![picture](docs/group-ScreenShot002.png)

![picture](docs/group-ScreenShot003.png)

![picture](docs/group-ScreenShot004.png)

![picture](docs/group-ScreenShot005.png)

![picture](docs/group-ScreenShot006.png)

![picture](docs/group-ScreenShot007.png)


## Example - External Project

text-group-translate.bat
```javascript
"C:\Program Files (x86)\Photoshop\Photoshop.exe" c:\Users\damien\git\photoshop-script-text-translator\text-groups-translate.jsx
```

![picture](docs/example-ScreenShot002.png)

![picture](docs/example-ScreenShot004.png)

![picture](docs/example-ScreenShot005.png)

![picture](docs/example-ScreenShot006.png)

![picture](docs/example-ScreenShot007.png)


## References

- [Photoshop read json file](https://github.com/fabianmoronzirfas/extendscript/wiki/Read-In-JSON-From-File-And-DONT-Eval)
- [Photoshop get layer type](http://creativetuts.com/photoshop-script-determine-layer-kind/)