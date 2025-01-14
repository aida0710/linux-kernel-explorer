---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/iucv/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for IUCV
#

obj-$(CONFIG_IUCV)	+= iucv.o
obj-$(CONFIG_AFIUCV)	+= af_iucv.o

```
