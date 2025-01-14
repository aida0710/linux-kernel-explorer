---
sidebar_position: 17
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/cisco/enic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ENIC) := enic.o

enic-y := enic_main.o vnic_cq.o vnic_intr.o vnic_wq.o \
	enic_res.o enic_dev.o enic_pp.o vnic_dev.o vnic_rq.o vnic_vic.o \
	enic_ethtool.o enic_api.o enic_clsf.o


```
