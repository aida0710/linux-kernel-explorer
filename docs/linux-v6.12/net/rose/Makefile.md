---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/net/rose/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Rose (X.25 PLP) layer.
#

obj-$(CONFIG_ROSE) += rose.o

rose-y	  := af_rose.o rose_dev.o rose_in.o rose_link.o rose_loopback.o \
	     rose_out.o rose_route.o rose_subr.o rose_timer.o
rose-$(CONFIG_SYSCTL) += sysctl_net_rose.o

```
