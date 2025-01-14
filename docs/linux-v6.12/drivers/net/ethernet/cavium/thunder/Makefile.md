---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/cavium/thunder/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Cavium's Thunder ethernet device
#

obj-$(CONFIG_THUNDER_NIC_RGX) += thunder_xcv.o
obj-$(CONFIG_THUNDER_NIC_BGX) += thunder_bgx.o
obj-$(CONFIG_THUNDER_NIC_PF) += nicpf.o
obj-$(CONFIG_THUNDER_NIC_VF) += nicvf.o

nicpf-y := nic_main.o
nicvf-y := nicvf_main.o nicvf_queues.o
nicvf-y += nicvf_ethtool.o

```
