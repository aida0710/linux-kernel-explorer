---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/marvell/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Marvell device drivers.
#

obj-$(CONFIG_MVMDIO) += mvmdio.o
obj-$(CONFIG_MV643XX_ETH) += mv643xx_eth.o
obj-$(CONFIG_MVNETA_BM) += mvneta_bm.o
obj-$(CONFIG_MVNETA) += mvneta.o
obj-$(CONFIG_MVPP2) += mvpp2/
obj-$(CONFIG_PXA168_ETH) += pxa168_eth.o
obj-$(CONFIG_SKGE) += skge.o
obj-$(CONFIG_SKY2) += sky2.o
obj-y		+= octeon_ep/
obj-y		+= octeon_ep_vf/
obj-y		+= octeontx2/
obj-y		+= prestera/

```
