---
sidebar_position: 4
---
# cleanup.sh

### ファイル情報

- パス: `linux-v6.12/tools/usb/usbip/cleanup.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

if [ -r Makefile ]; then
	make distclean
fi

FILES="aclocal.m4 autom4te.cache compile config.guess config.h.in config.log \
       config.status config.sub configure cscope.out depcomp install-sh      \
       libsrc/Makefile libsrc/Makefile.in libtool ltmain.sh Makefile         \
       Makefile.in missing src/Makefile src/Makefile.in"

rm -vRf $FILES

```
