---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/oki-semi/pch_gbe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_PCH_GBE) += pch_gbe.o

pch_gbe-y := pch_gbe_phy.o pch_gbe_ethtool.o pch_gbe_param.o
pch_gbe-y += pch_gbe_main.o

```
