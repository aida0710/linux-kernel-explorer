---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/rocker/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Rocker network device drivers.
#

obj-$(CONFIG_ROCKER) += rocker.o
rocker-y := rocker_main.o rocker_tlv.o rocker_ofdpa.o

```
