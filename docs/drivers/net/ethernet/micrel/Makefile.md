---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/micrel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Micrel network device drivers.
#

obj-$(CONFIG_KS8842) += ks8842.o
obj-$(CONFIG_KS8851) += ks8851_common.o ks8851_spi.o
obj-$(CONFIG_KS8851_MLL) += ks8851_common.o ks8851_par.o
obj-$(CONFIG_KSZ884X_PCI) += ksz884x.o

```
