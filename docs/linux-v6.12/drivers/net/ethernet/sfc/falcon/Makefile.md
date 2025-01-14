---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/sfc/falcon/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
sfc-falcon-y		+= efx.o nic.o farch.o falcon.o tx.o rx.o selftest.o \
			   ethtool.o qt202x_phy.o mdio_10g.o tenxpress.o \
			   txc43128_phy.o falcon_boards.o

sfc-falcon-$(CONFIG_SFC_FALCON_MTD)	+= mtd.o
obj-$(CONFIG_SFC_FALCON)		+= sfc-falcon.o

```
