---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/802/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux 802.x protocol layers.
#

# Check the p8022 selections against net/core/Makefile.
obj-$(CONFIG_LLC)	+= p8022.o psnap.o
obj-$(CONFIG_NET_FC)	+=                 fc.o
obj-$(CONFIG_FDDI)	+=                 fddi.o
obj-$(CONFIG_HIPPI)	+=                 hippi.o
obj-$(CONFIG_ATALK)	+= p8022.o psnap.o
obj-$(CONFIG_STP)	+= stp.o
obj-$(CONFIG_GARP)	+= garp.o
obj-$(CONFIG_MRP)	+= mrp.o

```
