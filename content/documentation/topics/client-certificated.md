---
title: Client Certificates
slug: client-certificates
menu:
    docs:
        parent: "topics"
---

[Client certificates](https://en.wikipedia.org/wiki/Client_certificate) are used by some
APIs to as a way for the client to authenticate itself.

## Importing Certificates

Insomnia supports `PFX` (Mac), and `PEM` (Windows and Linux) certificates. To import a new certificate,
open the Workspace Settings dialog – accessible from the top-left menu – and click on the
Client Certificates tab. From here, you can add new certificates and view existing ones.

Now lets walk through how to import one.

![Client certificates import form](/images/docs/client-certs-2.png)

If you're familiar with client certificates, the only field needing explanation should be
the `Host` field.

- `Host`: certificate will be sent when the host (and port if specified) matches 
- `PFX`: certificate in `PFX` or `PKCS12` format (Only supported on Mac)
- `CRT File` + `Key File`: certificate and key pair (only supported on Windows and Linux)
- `Passphrase`: An optional passphrase for the certificate if required

After importing a certificate, it will show up in the main certificates list. From here, it
can be enabled/disabled or deleted.
