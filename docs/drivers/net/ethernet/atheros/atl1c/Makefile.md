---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/atheros/atl1c/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ATL1C) += atl1c.o
atl1c-objs := atl1c_main.o atl1c_hw.o atl1c_ethtool.o

```
