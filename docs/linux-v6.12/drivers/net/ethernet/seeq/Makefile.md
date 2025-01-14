---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/seeq/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the SEEQ network device drivers
#

obj-$(CONFIG_ARM_ETHER3) += ether3.o
obj-$(CONFIG_SGISEEQ) += sgiseeq.o

```
