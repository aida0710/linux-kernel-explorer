---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/cavium/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Cavium ethernet device drivers.
#
obj-$(CONFIG_NET_VENDOR_CAVIUM) += common/
obj-$(CONFIG_NET_VENDOR_CAVIUM) += thunder/
obj-$(CONFIG_NET_VENDOR_CAVIUM) += liquidio/
obj-$(CONFIG_NET_VENDOR_CAVIUM) += octeon/

```
