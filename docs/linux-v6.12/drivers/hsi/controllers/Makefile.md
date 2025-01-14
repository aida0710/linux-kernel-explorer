---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hsi/controllers/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for HSI controllers drivers
#

omap_ssi-objs		+= omap_ssi_core.o omap_ssi_port.o
obj-$(CONFIG_OMAP_SSI)	+= omap_ssi.o

```
