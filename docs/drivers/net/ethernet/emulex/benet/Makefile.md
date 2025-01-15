---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/emulex/benet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile to build the network driver for ServerEngine's BladeEngine.
#

obj-$(CONFIG_BE2NET) += be2net.o

be2net-y :=  be_main.o be_cmds.o be_ethtool.o be_roce.o

```
