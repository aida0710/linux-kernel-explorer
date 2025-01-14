---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/sun/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Sun network device drivers.
#

obj-$(CONFIG_HAPPYMEAL) += sunhme.o
obj-$(CONFIG_SUNQE) += sunqe.o
obj-$(CONFIG_SUNBMAC) += sunbmac.o
obj-$(CONFIG_SUNGEM) += sungem.o
obj-$(CONFIG_CASSINI) += cassini.o
obj-$(CONFIG_SUNVNET_COMMON) += sunvnet_common.o
obj-$(CONFIG_SUNVNET) += sunvnet.o
obj-$(CONFIG_LDMVSW) += ldmvsw.o
obj-$(CONFIG_NIU) += niu.o

```
