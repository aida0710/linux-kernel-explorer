---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/qualcomm/emac/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Qualcomm Technologies, Inc. EMAC Gigabit Ethernet driver
#

obj-$(CONFIG_QCOM_EMAC) += qcom-emac.o

qcom-emac-objs := emac.o emac-mac.o emac-phy.o emac-sgmii.o emac-ethtool.o \
		  emac-sgmii-fsm9900.o emac-sgmii-qdf2432.o \
		  emac-sgmii-qdf2400.o

```
