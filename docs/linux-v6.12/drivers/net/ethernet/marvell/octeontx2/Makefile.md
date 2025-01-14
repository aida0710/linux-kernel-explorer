---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/marvell/octeontx2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Marvell OcteonTX2 device drivers.
#

obj-$(CONFIG_OCTEONTX2_MBOX) += af/
obj-$(CONFIG_OCTEONTX2_AF) += af/
obj-$(CONFIG_OCTEONTX2_PF) += nic/

```
