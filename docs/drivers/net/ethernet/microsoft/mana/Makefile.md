---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/microsoft/mana/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause
#
# Makefile for the Microsoft Azure Network Adapter driver

obj-$(CONFIG_MICROSOFT_MANA) += mana.o
mana-objs := gdma_main.o shm_channel.o hw_channel.o mana_en.o mana_ethtool.o mana_bpf.o

```
