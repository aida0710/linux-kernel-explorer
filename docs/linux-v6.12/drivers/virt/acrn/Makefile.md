---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/virt/acrn/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_ACRN_HSM)	:= acrn.o
acrn-y := hsm.o vm.o mm.o ioreq.o ioeventfd.o irqfd.o

```
