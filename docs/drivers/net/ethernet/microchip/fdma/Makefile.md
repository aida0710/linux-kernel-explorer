---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/microchip/fdma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Microchip FDMA
#

obj-$(CONFIG_FDMA) += fdma.o
fdma-y += fdma_api.o

```
