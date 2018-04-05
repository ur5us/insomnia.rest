---
date: 2017-11-28
title: Official Ubuntu PPA
slug: ubuntu-ppa
tags: ["announcement"]
---

Starting with version 5.12.3, Insomnia can now be installed through an 
official PPA on Ubuntu-based operating systems. Follow these 
[simple instructions](https://support.insomnia.rest/article/23-installation#ubuntu) to add
the repository and install the app. 

<!--more-->

```bash
# Add to sources
echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Add public key used to verify code signature
wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc \
    | sudo apt-key add -

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
```
