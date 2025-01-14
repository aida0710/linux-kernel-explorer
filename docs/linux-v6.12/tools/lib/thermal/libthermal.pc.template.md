---
sidebar_position: 6
---
# libthermal.pc.template

### ファイル情報

- パス: `linux-v6.12/tools/lib/thermal/libthermal.pc.template`

### コンテンツ

```template
# SPDX-License-Identifier: (LGPL-2.1 OR BSD-2-Clause)

prefix=@PREFIX@
libdir=@LIBDIR@
includedir=${prefix}/include

Name: libthermal
Description: thermal library
Requires: libnl-3.0 libnl-genl-3.0
Version: @VERSION@
Libs: -L${libdir} -lnl-genl-3 -lnl-3
Cflags: -I${includedir} -I${include}/libnl3

```
