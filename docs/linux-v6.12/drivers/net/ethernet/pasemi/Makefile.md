---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/pasemi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the A Semi network device drivers.
#

obj-$(CONFIG_PASEMI_MAC) += pasemi_mac_driver.o
pasemi_mac_driver-objs := pasemi_mac.o pasemi_mac_ethtool.o

```
