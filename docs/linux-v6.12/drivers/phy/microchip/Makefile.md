---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/phy/microchip/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Microchip phy drivers.
#

obj-$(CONFIG_PHY_SPARX5_SERDES) := sparx5_serdes.o
obj-$(CONFIG_PHY_LAN966X_SERDES) := lan966x_serdes.o

```
