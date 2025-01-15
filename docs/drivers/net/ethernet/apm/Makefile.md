---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/apm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for APM X-GENE Ethernet driver.
#

obj-$(CONFIG_NET_XGENE) += xgene/
obj-$(CONFIG_NET_XGENE_V2) += xgene-v2/

```
