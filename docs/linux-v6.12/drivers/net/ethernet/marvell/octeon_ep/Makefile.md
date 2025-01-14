---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/marvell/octeon_ep/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Network driver for Marvell's Octeon PCI Endpoint NIC
#

obj-$(CONFIG_OCTEON_EP) += octeon_ep.o

octeon_ep-y := octep_main.o octep_cn9k_pf.o octep_tx.o octep_rx.o \
	       octep_ethtool.o octep_ctrl_mbox.o octep_ctrl_net.o \
	       octep_pfvf_mbox.o octep_cnxk_pf.o

```
