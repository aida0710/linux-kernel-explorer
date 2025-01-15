---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/phy/mediatek/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_MTK_NET_PHYLIB)		+= mtk-phy-lib.o
obj-$(CONFIG_MEDIATEK_GE_PHY)		+= mtk-ge.o
obj-$(CONFIG_MEDIATEK_GE_SOC_PHY)	+= mtk-ge-soc.o

```
