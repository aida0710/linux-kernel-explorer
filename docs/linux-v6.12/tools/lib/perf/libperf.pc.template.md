---
sidebar_position: 10
---
# libperf.pc.template

### ファイル情報

- パス: `linux-v6.12/tools/lib/perf/libperf.pc.template`

### コンテンツ

```template
# SPDX-License-Identifier: (LGPL-2.1 OR BSD-2-Clause)

prefix=@PREFIX@
libdir=@LIBDIR@
includedir=${prefix}/include

Name: libperf
Description: perf library
Version: @VERSION@
Libs: -L${libdir} -lperf
Cflags: -I${includedir}

```
