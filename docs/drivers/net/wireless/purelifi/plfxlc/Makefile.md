---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/purelifi/plfxlc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_PLFXLC)	:= plfxlc.o
plfxlc-objs 		+= chip.o firmware.o usb.o mac.o

```
