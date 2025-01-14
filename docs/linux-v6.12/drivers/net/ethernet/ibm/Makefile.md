---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/ibm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for th IBM network device drivers.
#

obj-$(CONFIG_IBMVETH) += ibmveth.o
obj-$(CONFIG_IBMVNIC) += ibmvnic.o
obj-$(CONFIG_IBM_EMAC) += emac/
obj-$(CONFIG_EHEA) += ehea/

```
