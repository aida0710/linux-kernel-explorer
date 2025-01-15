---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/marvell/octeon_ep_vf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Network driver for Marvell's Octeon PCI Endpoint NIC VF
#

obj-$(CONFIG_OCTEON_EP_VF) += octeon_ep_vf.o

octeon_ep_vf-y := octep_vf_main.o octep_vf_cn9k.o octep_vf_cnxk.o \
		  octep_vf_tx.o octep_vf_rx.o octep_vf_mbox.o \
		  octep_vf_ethtool.o

```
