---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/cirrus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Cirrus network device drivers.
#

obj-$(CONFIG_CS89x0) += cs89x0.o
obj-$(CONFIG_EP93XX_ETH) += ep93xx_eth.o
obj-$(CONFIG_MAC89x0) += mac89x0.o

```
