---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `drivers/net/ppp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux PPP network device drivers.
#

obj-$(CONFIG_PPP) += ppp_generic.o
obj-$(CONFIG_PPP_ASYNC) += ppp_async.o
obj-$(CONFIG_PPP_BSDCOMP) += bsd_comp.o
obj-$(CONFIG_PPP_DEFLATE) += ppp_deflate.o
obj-$(CONFIG_PPP_MPPE) += ppp_mppe.o
obj-$(CONFIG_PPP_SYNC_TTY) += ppp_synctty.o
obj-$(CONFIG_PPPOE) += pppox.o pppoe.o
obj-$(CONFIG_PPPOL2TP) += pppox.o
obj-$(CONFIG_PPTP) += pppox.o pptp.o

```
