---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/i825xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Intel 82586/82593/82596 chipset device drivers.
#

obj-$(CONFIG_ARM_ETHER1) += ether1.o
obj-$(CONFIG_SUN3_82586) += sun3_82586.o
obj-$(CONFIG_LASI_82596) += lasi_82596.o
obj-$(CONFIG_SNI_82596) += sni_82596.o
obj-$(CONFIG_MVME16x_NET) += 82596.o
obj-$(CONFIG_BVME6000_NET) += 82596.o

```
