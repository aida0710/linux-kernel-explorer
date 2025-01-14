---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/sh/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# DMA Engine Helpers
#

obj-$(CONFIG_SH_DMAE_BASE) += shdma-base.o

#
# DMA Controllers
#

shdma-y := shdmac.o
shdma-objs := $(shdma-y)
obj-$(CONFIG_SH_DMAE) += shdma.o

obj-$(CONFIG_RCAR_DMAC) += rcar-dmac.o
obj-$(CONFIG_RENESAS_USB_DMAC) += usb-dmac.o
obj-$(CONFIG_RZ_DMAC) += rz-dmac.o

```
