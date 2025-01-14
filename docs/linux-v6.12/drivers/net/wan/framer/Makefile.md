---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wan/framer/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the framer drivers.
#

obj-$(CONFIG_GENERIC_FRAMER)			+= framer-core.o
obj-$(CONFIG_FRAMER_PEF2256)			+= pef2256/

```
