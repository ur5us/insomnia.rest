---
title: Installation
subTitle: Install Insomnia on any platform
slug: installation
menu:
    docs:
        parent: "starting"
        weight: -1
---

You can install Insomnia on a wide variety of platforms. If you have not downloaded a copy of
Insomnia, do so first by clicking the button below.

<p style="text-align:center">
<a class="button __download-link" href="/download">Download Insomnia</a>
</p>


## Mac OS

The Mac application is a disk image `.dmg` installer and can be installed by
double clicking the file. This will install Insomnia to your `/Applications` folder.


## Windows

The Windows application is a generic installer `.exe`. Double click the installer file to install
Insomnia.


## Linux

**Ubuntu**<br>
Double click the `.deb` file to install the package.


**Arch Linux**<br>
There is an `insomnia` [AUR Package](https://aur.archlinux.org/packages/insomnia) that can be
used which will provide auto updating.


**Other Distributions**<br>
Other Linux distributions are supported via an [AppImage](http://appimage.org/) package. This 
package is a complete self-contained executable and does not require installation. Double click
the package or run it from the command line.

_Note: you may need to set the package as executable from your command line._

```bash
chmod +x insomnia.AppImage
```

### Troubleshooting Notes

Here are some issues that have caused problems for Linux users in the past

- `/tmp` folder must allow execution
- missing `libcurl` dependency

## Previous Versions

To roll-back, you can download any version by replacing the desired version number 
with the ones in these URLs. Keep in mind that this process is only intended for debugging
and emergencies, as the app will try to update itself after it launches. 

- Mac: https://downloads.insomnia.rest/mac/Insomnia-4.2.0.dmg
- Windows: https://downloads.insomnia.rest/win/Insomnia+Setup+4.2.0.exe
- Ubuntu: https://downloads.insomnia.rest/linux/insomnia_4.2.0_amd64.deb
