---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/ibm/ehea/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the eHEA ethernet device driver for IBM eServer System p
#
ehea-y = ehea_main.o ehea_phyp.o ehea_qmr.o ehea_ethtool.o
obj-$(CONFIG_EHEA) += ehea.o


```
