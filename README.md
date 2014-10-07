<img src=https://github.com/danigrant/check-ssl/blob/master/icon.png>

#Check SSL Chrome Extension
Checks if websites have weak SHA-1 SSL certificates. Built at HackMIT as an extension to [this open source project](https://github.com/konklone/shaaaaaaaaaaaaa). [Available on Chrome Web Store](https://chrome.google.com/webstore/detail/check-ssl/adlogjmkkcancjpododcnjndnmkooghi) for download.

A [recent blog post from Google](http://googleonlinesecurity.blogspot.com/2014/09/gradually-sunsetting-sha-1.html) exposes most of the web (including Google itself) using proven-to-be-spoofable SHA-1 hashes for SSL. The blog post warns that Google will start indicating to its Chrome users when they're on a site with an unreliable SSL cert in 2016 - that's in two years. Web users have the right to information transparency about the sites they're on now.

The extension checks the current site's SSL certificate and lets the user know if the hashing is "good" (like SHA-2), "almost" (if the cert is old but the [intermediate certificates](http://www.whichssl.com/intermediate-certificates.html) are good) or "bad" (like SHA-1).

Future versions will include a simple UI for users to learn more about the app and SSL. This no explanation approach is a bit cryptic.

