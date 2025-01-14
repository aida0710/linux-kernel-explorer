---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/c2port/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_C2PORT)		+= core.o

obj-$(CONFIG_C2PORT_DURAMAR_2150)	+= c2port-duramar2150.o

```
