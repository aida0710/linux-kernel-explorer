---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/virt/vboxguest/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
vboxguest-y := vboxguest_linux.o vboxguest_core.o vboxguest_utils.o

obj-$(CONFIG_VBOXGUEST) += vboxguest.o

```
