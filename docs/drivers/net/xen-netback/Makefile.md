---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/xen-netback/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_XEN_NETDEV_BACKEND) := xen-netback.o

xen-netback-y := netback.o xenbus.o interface.o hash.o rx.o

```
