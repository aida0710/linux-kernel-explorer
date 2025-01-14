---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/vxlan/Makefile`

### コンテンツ

```txt
#
# Makefile for the vxlan driver
#

obj-$(CONFIG_VXLAN) += vxlan.o

vxlan-objs := vxlan_core.o vxlan_multicast.o vxlan_vnifilter.o vxlan_mdb.o

```
