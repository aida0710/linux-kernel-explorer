---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/apm/xgene-v2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for APM X-Gene Ethernet v2 driver
#

xgene-enet-v2-objs := main.o mac.o enet.o ring.o mdio.o ethtool.o
obj-$(CONFIG_NET_XGENE_V2) += xgene-enet-v2.o

```
