---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/phonet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_PHONET) += phonet.o pn_pep.o

phonet-y := \
	pn_dev.o \
	pn_netlink.o \
	socket.o \
	datagram.o \
	sysctl.o \
	af_phonet.o

pn_pep-y := pep.o pep-gprs.o

```
