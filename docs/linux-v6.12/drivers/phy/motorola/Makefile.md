---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/phy/motorola/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the phy drivers.
#

obj-$(CONFIG_PHY_CPCAP_USB)		+= phy-cpcap-usb.o
obj-$(CONFIG_PHY_MAPPHONE_MDM6600)	+= phy-mapphone-mdm6600.o

```
