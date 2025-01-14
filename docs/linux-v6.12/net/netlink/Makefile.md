---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/netlink/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the netlink driver.
#

obj-y  				:= af_netlink.o genetlink.o policy.o

obj-$(CONFIG_NETLINK_DIAG)	+= netlink_diag.o
netlink_diag-y			:= diag.o

```
