---
sidebar_position: 6
---
# Makefile-os-Linux

### ファイル情報

- パス: `linux-v6.12/arch/um/Makefile-os-Linux`

### コンテンツ

```txt
# 
# Copyright (C) 2000 Jeff Dike (jdike@karaya.com)
# Licensed under the GPL
#

# To get a definition of F_SETSIG
USER_CFLAGS += -D_GNU_SOURCE -D_LARGEFILE64_SOURCE
KBUILD_CFLAGS += -D_LARGEFILE64_SOURCE
DEV_NULL_PATH = \"/dev/null\"

```
