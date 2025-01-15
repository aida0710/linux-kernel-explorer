---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `drivers/net/wan/framer/pef2256/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the pef2256 driver.
#

obj-$(CONFIG_FRAMER_PEF2256)		+= framer-pef2256.o

framer-pef2256-objs	:= pef2256.o

```
