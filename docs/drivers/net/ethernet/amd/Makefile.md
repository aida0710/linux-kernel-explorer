---
sidebar_position: 17
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/amd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the AMD network device drivers.
#

obj-$(CONFIG_A2065) += a2065.o
obj-$(CONFIG_AMD8111_ETH) += amd8111e.o
obj-$(CONFIG_ARIADNE) += ariadne.o
obj-$(CONFIG_ATARILANCE) += atarilance.o
obj-$(CONFIG_DECLANCE) += declance.o
obj-$(CONFIG_HPLANCE) += hplance.o 7990.o
obj-$(CONFIG_LANCE) += lance.o
obj-$(CONFIG_MIPS_AU1X00_ENET) += au1000_eth.o
obj-$(CONFIG_MVME147_NET) += mvme147.o 7990.o
obj-$(CONFIG_PCMCIA_NMCLAN) += nmclan_cs.o
obj-$(CONFIG_PCNET32) += pcnet32.o
obj-$(CONFIG_SUN3LANCE) += sun3lance.o
obj-$(CONFIG_SUNLANCE) += sunlance.o
obj-$(CONFIG_AMD_XGBE) += xgbe/
obj-$(CONFIG_PDS_CORE) += pds_core/

```
