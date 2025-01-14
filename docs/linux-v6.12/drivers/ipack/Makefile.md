---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/ipack/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the IPACK bridge device drivers.
#
obj-$(CONFIG_IPACK_BUS)		+= ipack.o
obj-y				+= devices/
obj-y				+= carriers/

```
