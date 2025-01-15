---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/atheros/atl1e/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ATL1E)	+= atl1e.o
atl1e-objs		+= atl1e_main.o atl1e_hw.o atl1e_ethtool.o atl1e_param.o

```
