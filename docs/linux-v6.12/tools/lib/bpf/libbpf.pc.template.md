---
sidebar_position: 24
---
# libbpf.pc.template

### ファイル情報

- パス: `linux-v6.12/tools/lib/bpf/libbpf.pc.template`

### コンテンツ

```template
# SPDX-License-Identifier: (LGPL-2.1 OR BSD-2-Clause)

prefix=@PREFIX@
libdir=@LIBDIR@
includedir=${prefix}/include

Name: libbpf
Description: BPF library
Version: @VERSION@
Libs: -L${libdir} -lbpf
Requires.private: libelf zlib
Cflags: -I${includedir}

```
