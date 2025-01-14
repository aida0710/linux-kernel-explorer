---
sidebar_position: 3
---
# autogen.sh

### ファイル情報

- パス: `linux-v6.12/tools/usb/usbip/autogen.sh`

### コンテンツ

```sh
#!/bin/sh -x

#aclocal
#autoheader
#libtoolize --copy --force
#automake-1.9 -acf
#autoconf

autoreconf -i -f -v

```
