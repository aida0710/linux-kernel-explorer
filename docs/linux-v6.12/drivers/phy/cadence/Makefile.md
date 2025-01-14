---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/phy/cadence/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_PHY_CADENCE_TORRENT)	+= phy-cadence-torrent.o
obj-$(CONFIG_PHY_CADENCE_DPHY)	+= cdns-dphy.o
obj-$(CONFIG_PHY_CADENCE_DPHY_RX)	+= cdns-dphy-rx.o
obj-$(CONFIG_PHY_CADENCE_SIERRA)	+= phy-cadence-sierra.o
obj-$(CONFIG_PHY_CADENCE_SALVO)	+= phy-cadence-salvo.o

```
