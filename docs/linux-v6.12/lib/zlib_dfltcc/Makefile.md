---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/lib/zlib_dfltcc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# This is a modified version of zlib, which does all memory
# allocation ahead of time.
#
# This is the code for s390 zlib hardware support.
#

obj-$(CONFIG_ZLIB_DFLTCC) += zlib_dfltcc.o

zlib_dfltcc-objs := dfltcc.o dfltcc_deflate.o dfltcc_inflate.o

```
