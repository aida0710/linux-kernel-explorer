---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/ibm/emac/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the PowerPC 4xx on-chip ethernet driver
#

obj-$(CONFIG_IBM_EMAC) += ibm_emac.o

ibm_emac-y := mal.o core.o phy.o
ibm_emac-$(CONFIG_IBM_EMAC_ZMII) += zmii.o
ibm_emac-$(CONFIG_IBM_EMAC_RGMII) += rgmii.o
ibm_emac-$(CONFIG_IBM_EMAC_TAH) += tah.o

```
