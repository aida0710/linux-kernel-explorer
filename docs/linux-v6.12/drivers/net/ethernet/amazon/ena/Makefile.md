---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/amazon/ena/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Elastic Network Adapter (ENA) device drivers.
#

obj-$(CONFIG_ENA_ETHERNET) += ena.o

ena-y := ena_netdev.o ena_com.o ena_eth_com.o ena_ethtool.o ena_xdp.o

```
