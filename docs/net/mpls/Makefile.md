---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `net/mpls/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for MPLS.
#
obj-$(CONFIG_NET_MPLS_GSO) += mpls_gso.o
obj-$(CONFIG_MPLS_ROUTING) += mpls_router.o
obj-$(CONFIG_MPLS_IPTUNNEL) += mpls_iptunnel.o

mpls_router-y := af_mpls.o

```
